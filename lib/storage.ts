import { supabase, isSupabaseConfigured } from './supabase';
import { Habit, HabitLog, HabitWithStatus } from './types';

const LOCAL_HABITS_KEY = 'routinemate_habits';
const LOCAL_LOGS_KEY = 'routinemate_logs';

const INITIAL_HABITS: Habit[] = [
  { id: '1', title: '아침 기상 후 물 한 컵 마시기', emoji: '💧', created_at: new Date().toISOString() },
  { id: '2', title: '가벼운 스트레칭 10분', emoji: '🧘', created_at: new Date().toISOString() },
  { id: '3', title: '자기 전 독서 15분', emoji: '📖', created_at: new Date().toISOString() },
];

function getTodayString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export async function fetchHabitsWithStatus(): Promise<{ habits: HabitWithStatus[]; isCloud: boolean }> {
  const today = getTodayString();

  if (isSupabaseConfigured && supabase) {
    try {
      const { data: habitsData, error: habitsError } = await supabase
        .from('habits')
        .select('*')
        .order('created_at', { ascending: true });

      if (habitsError) throw habitsError;

      const { data: logsData, error: logsError } = await supabase
        .from('habit_logs')
        .select('*');

      if (logsError) throw logsError;

      const habits = (habitsData || []) as Habit[];
      const logs = (logsData || []) as HabitLog[];

      const combined: HabitWithStatus[] = habits.map(h => {
        const isCompletedToday = logs.some(l => l.habit_id === h.id && l.completed_at === today);
        const streak = logs.filter(l => l.habit_id === h.id).length;
        return { ...h, isCompletedToday, streak: Math.max(streak, isCompletedToday ? 1 : 0) };
      });

      return { habits: combined, isCloud: true };
    } catch (err) {
      console.warn('Supabase fetch failed, falling back to local storage:', err);
    }
  }

  // LocalStorage Fallback
  if (typeof window === 'undefined') {
    return {
      habits: INITIAL_HABITS.map(h => ({ ...h, isCompletedToday: false, streak: 3 })),
      isCloud: false,
    };
  }

  let localHabits: Habit[] = [];
  const storedHabits = localStorage.getItem(LOCAL_HABITS_KEY);
  if (!storedHabits) {
    localHabits = INITIAL_HABITS;
    localStorage.setItem(LOCAL_HABITS_KEY, JSON.stringify(localHabits));
  } else {
    localHabits = JSON.parse(storedHabits);
  }

  const storedLogs: HabitLog[] = JSON.parse(localStorage.getItem(LOCAL_LOGS_KEY) || '[]');

  const combined: HabitWithStatus[] = localHabits.map(h => {
    const isCompletedToday = storedLogs.some(l => l.habit_id === h.id && l.completed_at === today);
    const streak = storedLogs.filter(l => l.habit_id === h.id).length;
    return { ...h, isCompletedToday, streak: Math.max(streak, isCompletedToday ? 1 : 0) };
  });

  return { habits: combined, isCloud: false };
}

export async function createHabit(title: string, emoji: string): Promise<Habit> {
  const newHabit: Habit = {
    id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title: title.trim(),
    emoji: emoji || '✨',
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('habits')
        .insert([{ title: newHabit.title, emoji: newHabit.emoji }])
        .select()
        .single();

      if (error) throw error;
      if (data) return data as Habit;
    } catch (err) {
      console.warn('Supabase insert failed, saving locally:', err);
    }
  }

  // LocalStorage Fallback
  const storedHabits: Habit[] = JSON.parse(localStorage.getItem(LOCAL_HABITS_KEY) || '[]');
  storedHabits.push(newHabit);
  localStorage.setItem(LOCAL_HABITS_KEY, JSON.stringify(storedHabits));

  return newHabit;
}

export async function toggleHabitCompletion(habitId: string, willComplete: boolean): Promise<void> {
  const today = getTodayString();

  if (isSupabaseConfigured && supabase) {
    try {
      if (willComplete) {
        await supabase.from('habit_logs').insert([{ habit_id: habitId, completed_at: today }]);
      } else {
        await supabase.from('habit_logs').delete().match({ habit_id: habitId, completed_at: today });
      }
      return;
    } catch (err) {
      console.warn('Supabase toggle failed, applying locally:', err);
    }
  }

  // LocalStorage Fallback
  let storedLogs: HabitLog[] = JSON.parse(localStorage.getItem(LOCAL_LOGS_KEY) || '[]');
  if (willComplete) {
    storedLogs.push({
      id: String(Date.now()),
      habit_id: habitId,
      completed_at: today,
    });
  } else {
    storedLogs = storedLogs.filter(l => !(l.habit_id === habitId && l.completed_at === today));
  }
  localStorage.setItem(LOCAL_LOGS_KEY, JSON.stringify(storedLogs));
}

export async function deleteHabit(habitId: string): Promise<void> {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('habits').delete().eq('id', habitId);
      return;
    } catch (err) {
      console.warn('Supabase delete failed, deleting locally:', err);
    }
  }

  // LocalStorage Fallback
  const storedHabits: Habit[] = JSON.parse(localStorage.getItem(LOCAL_HABITS_KEY) || '[]');
  const updatedHabits = storedHabits.filter(h => h.id !== habitId);
  localStorage.setItem(LOCAL_HABITS_KEY, JSON.stringify(updatedHabits));

  const storedLogs: HabitLog[] = JSON.parse(localStorage.getItem(LOCAL_LOGS_KEY) || '[]');
  const updatedLogs = storedLogs.filter(l => l.habit_id !== habitId);
  localStorage.setItem(LOCAL_LOGS_KEY, JSON.stringify(updatedLogs));
}
