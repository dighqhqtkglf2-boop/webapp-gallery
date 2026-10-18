# 수업이 되는 웹앱 전시관

기획·구성: **금평초 김상흠**

- Gemini Canvas 10종과 같은 A/B 원본 프롬프트로 만든 AI Studio 10종을 도구별 탭에 전시합니다.
- 기존 DNA·미적분 AI Studio 작품 2종은 보존하되 동일 프롬프트 비교에서 제외합니다. 총 22개 버전, 비교 주제 10개입니다.
- 기존 1번 `science-lab`은 공개 카드에서 제외했습니다. 원본 프로젝트는 삭제하지 않았으며, 이전 정보는 `data/comparison/notes.json`에 보존했습니다.
- 각 카드의 **GitHub 체험**은 배포된 실행본, **AI Studio 리믹스**는 A/B 비교 프로젝트로 연결됩니다. Canvas 탭에서도 리믹스는 AI Studio 짝 버전입니다.
- AI Studio는 원본 프롬프트 A/B당 5교과를 담은 프로젝트 2개입니다. 같은 묶음의 리믹스 버튼들은 같은 프로젝트로 연결됩니다.

## 비교 조건

Canvas는 Pro 모드, AI Studio는 Gemini 3.8 Flash를 사용했습니다. 모델·실행 환경·생성 시점과 사람의 보정이 달라 통제된 성능 순위가 아닙니다. 원본 프롬프트와 수정 범위는 `data/comparison/`을 확인하세요. 표기 외 교과·실행 보정은 GitHub 배포본에 적용되어 리믹스 원본과 차이가 있습니다.

## 파일과 실행

`index.html` 전시관, `data/apps.js` 카드 목록, `data/prompts.js` 연수 프롬프트, `apps/` 실행 파일, `images/` 실제 화면 썸네일. 빌드 없이 GitHub Pages의 main 브랜치 루트에서 공개합니다. 일부 앱은 외부 CDN 라이브러리를 사용하므로 인터넷 연결이 필요합니다. AI API 키나 서버는 필요하지 않습니다.

AI 생성 교육용 예시입니다. 실제 수업에 쓰기 전에 교사가 교과 내용·접근성·브라우저 동작을 검토하세요. 효과나 성능을 실측했다고 주장하지 않습니다.

[전시관](https://dighqhqtkglf2-boop.github.io/webapp-gallery/)
