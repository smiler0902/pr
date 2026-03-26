# 개인 브랜딩 모바일 랜딩 페이지

건설 기획·AI 워크플로우를 소개하는 **모바일 우선** 정적 랜딩 페이지입니다. HTML, CSS, JavaScript만 사용합니다.

## 구성

| 파일 | 설명 |
|------|------|
| `index.html` | 마크업, 히어로·주요 강점·커피챗 CTA |
| `styles.css` | 밝은 톤 스타일, 반응형, 스티키 CTA |
| `script.js` | 연도 표시, 강점 카드 스크롤 등장(접근성: `prefers-reduced-motion` 존중) |

## 로컬에서 보기

프로젝트 폴더에서 정적 서버를 띄운 뒤 브라우저로 접속합니다.

```powershell
cd 경로\pr
python -m http.server 8765
```

브라우저에서 `http://127.0.0.1:8765/` 를 엽니다. (포트는 원하는 번호로 바꿔도 됩니다.)

`index.html`을 파일 탐색기에서 직접 열어도 동작하지만, 로컬 서버 사용을 권장합니다.

## 수정할 때

- **이름·직함**: `index.html`의 `data-edit="name-title"`이 붙은 `<p class="hero__eyebrow">` 한 줄을 고칩니다.
- **커피챗(구글 폼) URL**: `forms.gle/JcPe6aa2HXAYPXEQ8` 를 검색해, 히어로·마무리·스티키 바에 있는 **세 링크**를 같은 주소로 유지합니다.

## 배포

GitHub Pages, Netlify, Vercel 등 정적 호스팅에 `index.html`이 있는 폴더를 그대로 올리면 됩니다. 빌드 단계는 없습니다.

## 선택 사항

- 파비콘: 루트에 `favicon.ico`를 두면 브라우저 탭 아이콘이 생깁니다.
- SNS 미리보기: `index.html` `<head>`에 Open Graph 메타 태그를 추가할 수 있습니다.
