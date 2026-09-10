export interface Habit {
  id: string;
  title: string;
  emoji: string;
  created_at: string;
}

export interface HabitLog {
  id: string;
  habit_id: string;
  completed_at: string; // YYYY-MM-DD
}

export interface HabitWithStatus extends Habit {
  isCompletedToday: boolean;
  streak: number;
}
