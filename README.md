# 게이즈인투 홈페이지

노안 AI 진단 제품 소개 사이트다. 한국어와 영어를 제공한다. 주소는 https://gazeinto.kr 이다.

## 기술

Astro, Tailwind CSS, Three.js.

## 시작

```bash
npm ci
npm run dev
npm run build   # 결과는 dist/
```

## 구조

| 위치 | 내용 |
|---|---|
| `src/pages` | 페이지. `en/`은 영어 |
| `src/i18n/translations.ts` | 화면 문구 |
| `src/components` | 화면 구성 요소 |
| `public` | 이미지, 영상 등 정적 파일 |

문의 폼은 `src/components/ContactModal.astro`에서 Formspree로 보낸다.

## 배포

`main`에 올리면 GitHub Actions가 빌드해 GitHub Pages에 배포한다.
