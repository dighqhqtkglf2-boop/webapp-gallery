/*
 * 전시관 앱 목록
 * ─────────────────────────────────────────────
 * 앱을 추가하려면 아래 배열에 { ... } 한 덩어리를 복사해 붙이고 값만 바꾸세요.
 *
 *   id       영문 소문자-하이픈. 썸네일 파일 이름과 맞추면 편합니다.
 *   title    영문 제목 (카드의 큰 제목)
 *   subtitle 한글 부제 한 줄
 *   area     physics(물리·공학) | earth(지구·우주) | math(수학) | sci(과학 탐구)
 *            life(생명·환경) | arts(예술·문화) | lang(언어·사회) | etc(기타)
 *   subject  교과 이름 (예: "물리", "지구과학")
 *   desc     설명 2~3문장
 *   tags     특징 태그 3개 정도
 *   url      앱 주소. 저장소 안이면 "apps/파일.html", 밖이면 https://... 전체 주소
 *   thumb    썸네일 이미지. "images/파일.png" (없으면 비워 두세요. 기본 썸네일이 나옵니다)
 *   source   (선택) 원본 링크. 예: AI Studio 공유 링크
 *   author   (선택) 만든 사람
 *   featured (선택) true면 카드가 2칸 크기로 나옵니다
 */
window.APPS = [
  {
    id: "science-lab",
    title: "Science Lab Explorer",
    subtitle: "과학실 실험 도구 사용법 배우기",
    area: "sci",
    subject: "과학",
    desc: "비커, 시험관, 삼각플라스크, 알코올램프, 현미경, 스포이트 같은 실험 도구를 3D로 돌려 보며 부위별 이름과 안전한 사용법을 익히고 퀴즈로 확인합니다.",
    tags: ["3D 실험 도구", "안전 수칙", "퀴즈"],
    url: "apps/science-lab.html",
    thumb: "images/science-lab.png",
    author: "AIEDAP 연구모임",
    featured: true
  },
  {
    id: "dna-web",
    title: "DNA Web",
    subtitle: "DNA 구조 탐구",
    area: "life",
    subject: "생명과학",
    desc: "AI Studio에서 만든 DNA 탐구 웹앱입니다.",
    tags: ["생명과학", "AI Studio"],
    url: "https://ai.studio/apps/666d9a52-2215-4820-977f-20c53161b352",
    thumb: "images/dna-web.png"
  },
  {
    id: "calculus-web",
    title: "Calculus Web",
    subtitle: "미적분 탐구",
    area: "math",
    subject: "수학",
    desc: "AI Studio에서 만든 미적분 탐구 웹앱입니다.",
    tags: ["미적분", "AI Studio"],
    url: "https://ai.studio/apps/3967dfec-0f2e-4901-b5e1-8ed1ff8929b2",
    thumb: "images/calculus-web.png"
  }

  /* 예시 — 주석을 풀고 값을 바꿔 쓰세요.
  ,{
    id: "orbital-clock",
    title: "Orbital Clock",
    subtitle: "밤하늘의 시간 공방",
    area: "earth",
    subject: "지구과학",
    desc: "지구의 자전·공전과 달의 공전을 직접 돌리며 별의 일주 운동과 달의 위상 변화를 함께 관찰하는 3D 천체 시뮬레이터입니다.",
    tags: ["우주 시점 ↔ 관측자 시점", "위도·시각 조절", "달 위상"],
    url: "apps/orbital-clock.html",
    thumb: "images/orbital-clock.png",
    source: "https://aistudio.google.com/..."
  }
  */
];
