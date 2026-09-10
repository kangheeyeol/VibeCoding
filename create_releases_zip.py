import os
import zipfile

base_dir = r"C:\Users\heeye\.gemini\antigravity\scratch\VibeCoding"
releases_dir = os.path.join(base_dir, "releases")
os.makedirs(releases_dir, exist_ok=True)

# Files/folders to exclude from ZIP
EXCLUDE_DIRS = {'.git', 'node_modules', '.next', '.vercel', 'wikidocs_chapters', 'releases'}
EXCLUDE_FILES = {'.env.local', 'split_wikidocs.py', 'create_releases_zip.py'}

packages = [
    ("routinemate-part-03-starter.zip", "Part 3 완성본 스타터 템플릿"),
    ("routinemate-part-05-components.zip", "Part 5 300줄 법칙 모듈형 컴포넌트"),
    ("routinemate-part-07-supabase.zip", "Part 7 Supabase DB 연동 버전"),
    ("routinemate-part-09-final.zip", "Part 9 PWA 및 프로덕션 최종 완성본"),
]

for filename, desc in packages:
    zip_path = os.path.join(releases_dir, filename)
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(base_dir):
            # filter out unwanted dirs
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            for file in files:
                if file in EXCLUDE_FILES or file.endswith('.zip'):
                    continue
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, base_dir)
                zf.write(full_path, arcname=rel_path)

    size_kb = os.path.getsize(zip_path) / 1024
    print(f"Created: {filename} ({desc}) - {size_kb:.1f} KB")

print("\nAll release zip packages created successfully in:", releases_dir)
