# 수업이 되는 웹앱 전시관

AI Studio 바이브 코딩 교사 연수에서 쓰는 교과 웹앱 전시 사이트입니다. 빌드 도구 없이 GitHub Pages에 그대로 올리면 됩니다.

## 구성

| 탭 | 내용 |
|---|---|
| 01 전시관 | 영역 필터·검색, 바로 체험(전체화면 창), 새 창, QR 코드 |
| 02 교과별 프롬프트 | 교과·난이도 필터, 복사 버튼, 검증 포인트, 참고 앱 연결 |
| 03 연수 가이드 | 진행 흐름, 사전 준비 체크리스트, 프롬프트 공식 빌더, 단계별 프롬프트, 유의점 |

키보드: `1` `2` `3` 탭 이동 · `F` 발표 모드(글씨 크게, ←/→로 카드 이동, Enter로 열기)

## 파일

```
index.html          전시 사이트
data/apps.js        전시 앱 목록
data/prompts.js     교과별·단계별 프롬프트
apps/               앱 HTML 파일
images/             썸네일 (영문 파일명)
```

## 앱 추가하기

1. 앱 HTML 파일을 `apps/`에 올립니다. 예: `apps/orbital-clock.html`
2. 스크린샷을 `images/`에 올립니다. 예: `images/orbital-clock.png` (대소문자·확장자까지 정확히)
3. `data/apps.js`의 주석 예시를 복사해 값만 바꿉니다.

썸네일이 없거나 경로가 틀리면 교과 색으로 만든 기본 썸네일이 나옵니다.

## GitHub Pages로 공개하기

저장소 Settings → Pages → Branch에서 `main`과 `/ (root)`를 고르고 저장합니다.
주소: https://dighqhqtkglf2-boop.github.io/webapp-gallery/
