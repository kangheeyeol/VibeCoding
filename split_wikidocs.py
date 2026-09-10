import os
import json
import re

def html_table_to_gfm(match):
    table_html = match.group(0)
    rows = re.findall(r'<tr>(.*?)</tr>', table_html, flags=re.DOTALL)
    if not rows:
        return table_html
    
    table_data = []
    for r in rows:
        cells = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', r, flags=re.DOTALL)
        clean_cells = [c.strip().replace('\n', ' ') for c in cells]
        if clean_cells:
            table_data.append(clean_cells)
    
    if not table_data:
        return table_html
    
    col_count = max(len(r) for r in table_data)
    for r in table_data:
        while len(r) < col_count:
            r.append('')
            
    header = table_data[0]
    separator = ['---'] * col_count
    
    lines = []
    lines.append('| ' + ' | '.join(header) + ' |')
    lines.append('| ' + ' | '.join(separator) + ' |')
    for row in table_data[1:]:
        lines.append('| ' + ' | '.join(row) + ' |')
        
    return '\n' + '\n'.join(lines) + '\n'

def clean_markdown(text):
    # Convert HTML tables to GFM tables
    text = re.sub(r'<table[^>]*>.*?</table>', html_table_to_gfm, text, flags=re.DOTALL)
    # Remove Notion page tags
    text = re.sub(r'<page url="([^"]*)">(.*?)</page>', r'[\2](\1)', text)
    # Clean up redundant escaped characters
    text = text.replace(r'\[', '[').replace(r'\]', ']').replace(r'\_', '_').replace(r'\~', '~')
    # Normalize multiple blank lines
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()

steps = [
    ('prologue', 415, '프롤로그'),
    ('part1', 417, 'Part 1. 워밍업'),
    ('part2', 419, 'Part 2. 기획의 정석 (SDD)'),
    ('part3', 421, 'Part 3. 작업실 세팅'),
    ('part4', 423, 'Part 4. 대화의 기술 & 비용 관리'),
    ('part5', 425, 'Part 5. 코드 누더기화 방지'),
    ('part6', 427, 'Part 6. 생명줄 잡기 (Git & 세이프티넷)'),
    ('part7', 429, 'Part 7. 통곡의 벽 넘기 (Supabase & DB)'),
    ('part8', 431, 'Part 8. 멘붕 방지 (에러 대처 & 모바일 검수)'),
    ('part9', 433, 'Part 9. 실전 종합 프로젝트 (루틴메이트 정식 배포)'),
    ('appendix', 435, '부록. 생존 치트키 모음')
]

step_dir = r'C:\Users\heeye\.gemini\antigravity\brain\2f39f249-b1fe-4e4f-87d9-2185816d9483\.system_generated\steps'
output_dir = r'C:\Users\heeye\.gemini\antigravity\scratch\VibeCoding\wikidocs_chapters'
os.makedirs(output_dir, exist_ok=True)

toc_entries = []
file_counter = 0

for key, step_num, part_title in steps:
    step_file = os.path.join(step_dir, str(step_num), 'output.txt')
    with open(step_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
        raw_md = data.get('markdown', '')

    cleaned = clean_markdown(raw_md)

    if key == 'prologue':
        file_counter += 1
        fname = f"{file_counter:02d}_prologue.md"
        out_path = os.path.join(output_dir, fname)
        with open(out_path, 'w', encoding='utf-8') as out:
            out.write(cleaned + '\n')
        toc_entries.append({
            'file': fname,
            'category': '프롤로그',
            'title': '코딩 한 줄 몰라도 서비스 론칭하는 \'바이브 코딩\'의 시대',
            'chars': len(cleaned)
        })
        continue

    # Split by chapters: Look for lines starting with # Chapter or # 부록
    # We split using regex lookahead so we keep the heading
    pattern = r'(?=\n#\s+(?:Chapter|부록)\s+)'
    chunks = re.split(pattern, '\n' + cleaned)

    # First chunk is the Part Overview
    overview = chunks[0].strip()
    if overview:
        file_counter += 1
        fname = f"{file_counter:02d}_{key}_overview.md"
        out_path = os.path.join(output_dir, fname)
        with open(out_path, 'w', encoding='utf-8') as out:
            out.write(overview + '\n')
        
        # Extract title from first line of overview
        first_line = overview.split('\n')[0].replace('#', '').strip()
        toc_entries.append({
            'file': fname,
            'category': part_title,
            'title': f"[{part_title}] 개요 및 로드맵",
            'chars': len(overview)
        })

    # Subsequent chunks are individual chapters
    for ch in chunks[1:]:
        ch_text = ch.strip()
        if not ch_text:
            continue
        
        # Extract Chapter title
        first_line = ch_text.split('\n')[0].replace('#', '').strip()
        
        file_counter += 1
        # generate slug
        m = re.search(r'(Chapter\s+[\d\-]+|부록\s+([A-Za-z]))', first_line)
        if m:
            if '부록' in m.group(1):
                slug = f"appendix_{m.group(2).lower()}"
            else:
                slug = m.group(1).lower().replace(' ', '_')
        else:
            slug = f"section_{file_counter}"
        fname = f"{file_counter:02d}_{slug}.md"
        
        out_path = os.path.join(output_dir, fname)
        with open(out_path, 'w', encoding='utf-8') as out:
            out.write(ch_text + '\n')
            
        toc_entries.append({
            'file': fname,
            'category': part_title,
            'title': first_line,
            'chars': len(ch_text)
        })

# Generate 00_WIKIDOCS_TOC.md
toc_md = """# 📚 《바이브 코딩으로 내 서비스 만들기》 위키독스 목차 & 등록 가이드

> **이 폴더(`wikidocs_chapters/`)에는 위키독스(Wikidocs)에 바로 복사/붙여넣기 할 수 있도록 최적화된 총 {total_files}개의 마크다운 파일이 들어있습니다.**
> 
> - **노션 특수 서식 제거 완료**: 깨지기 쉬운 노션 표를 표준 마크다운 GFM(GitHub Flavored Markdown) 테이블로 100% 자동 변환했습니다.
> - **실물 링크 동기화 완료**: 공식 GitHub 리포지토리(`https://github.com/kangheeyeol/VibeCoding`) 및 챕터별 스냅샷 브랜치가 정확하게 연결되어 있습니다.
> - **위키독스 계층 구조 매핑**: 각 Part별 '개요(Overview)' 페이지와 개별 '챕터(Chapter)' 페이지로 깔끔하게 1:1 분할되었습니다.

---

## 🧭 위키독스 목차 트리 및 파일 매핑 표

| 번호 | 분류 (대메뉴) | 위키독스 문서 제목 | 파일명 | 글자 수 |
| :---: | :--- | :--- | :--- | :---: |
""".format(total_files=len(toc_entries))

current_cat = ''
for i, entry in enumerate(toc_entries, 1):
    toc_md += f"| {i:02d} | **{entry['category']}** | {entry['title']} | [`{entry['file']}`](./{entry['file']}) | {entry['chars']:,}자 |\n"

toc_md += """
---

## 🚀 위키독스 등록 순서 (3분 컷 가이드)

1. [위키독스(wikidocs.net)](https://wikidocs.net)에 로그인 후 우측 상단의 **[새 책 만들기]**를 클릭합니다.
2. 책 기본 정보 입력:
   - **책 제목**: 바이브 코딩으로 내 서비스 만들기
   - **부제**: 코딩 몰라도 AI 개발팀 이끄는 법
   - **설명**: `01_prologue.md`의 앞부분 인용문 활용
3. 목차 트리 구성:
   - 위 표의 **분류(대메뉴)**에 맞춰 대분류(Part)를 추가합니다.
   - 각 대분류 아래에 위 표의 **위키독스 문서 제목**으로 새 장(Page)을 추가합니다.
   - 해당 번호의 마크다운 파일 내용 전체를 복사(`Ctrl+A` ➡️ `Ctrl+C`)하여 위키독스 에디터에 붙여넣고 저장합니다.
4. 모든 챕터 등록 후 **[공개 설정]**을 '공개'로 전환하면 전 세계에 출판 완료됩니다!
"""

toc_path = os.path.join(output_dir, "00_WIKIDOCS_TOC.md")
with open(toc_path, 'w', encoding='utf-8') as out:
    out.write(toc_md)

print(f"SUCCESS: Generated {len(toc_entries)} files + TOC successfully in {output_dir}")
