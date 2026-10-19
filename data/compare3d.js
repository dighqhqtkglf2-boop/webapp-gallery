window.COMPARE3D={
  "pilot": {
    "id": "meiosis",
    "title": "감수분열 3D",
    "question": "염색체의 방향과 분리를 공간에서 추적하면 배우자 조합을 더 잘 설명할 수 있을까?",
    "baselineCommit": "262d927",
    "promptUrl": "comparisons/meiosis/input/common-prompt.txt",
    "sourceUrl": "comparisons/meiosis/input/meiosis-baseline.html",
    "sharedCssUrl": "comparisons/meiosis/input/inquiry.css",
    "models": [
      {
        "id": "gemini",
        "service": "AI Studio (Gemini)",
        "status": "verified",
        "model": "Gemini 3.8 Flash",
        "url": "comparisons/meiosis/gemini.html",
        "sourceUrl": "https://github.com/dighqhqtkglf2-boop/webapp-gallery/blob/main/comparisons/meiosis/gemini.html",
        "projectUrl": "https://aistudio.google.com/apps/6af44726-7132-4393-8f8d-5277054a62d6",
        "generatedDate": "2026-10-20",
        "verifiedAt": "2026-10-20",
        "editProvenance": "원본 코드 수정 없음 · 공개용 파일명만 변경",
        "note": "최초 생성본 · 검토용 초안. 일부 계보 표지 텍스트 잘림, 390px 세포 잘림과 위 시점 겹침을 확인했습니다. 코드 검토상 반복 변경 시 자원 회수·저장 실패 알림 보완이 필요합니다.",
        "previewUrl": "comparisons/meiosis/images/gemini-preview.png",
        "displayStatus": "실행 확인 · 보완 필요",
        "reviewState": "needs-improvement"
      },
      {
        "id": "gpt",
        "service": "ChatGPT (GPT)",
        "status": "verified",
        "model": "GPT-6.1 Sol Light · Work",
        "url": "comparisons/meiosis/chatgpt.html",
        "sourceUrl": "https://github.com/dighqhqtkglf2-boop/webapp-gallery/blob/main/comparisons/meiosis/chatgpt.html",
        "projectUrl": null,
        "generatedDate": "2026-10-20",
        "verifiedAt": "2026-10-20",
        "editProvenance": "원본 코드 수정 없음 · 공개용 파일명만 변경",
        "note": "최초 생성본. 390px에서 가로 넘침 없이 네 배우자 표시를 확인했습니다. 작은 표지는 확대나 연결된 2D 도식과 함께 읽어 주세요. 자체검사 27개는 계산·저장 대상이며 3D 장면 자동검사는 아닙니다.",
        "previewUrl": "comparisons/meiosis/images/gpt-preview.png"
      },
      {
        "id": "claude",
        "service": "Claude",
        "status": "pending",
        "model": null,
        "url": null,
        "sourceUrl": null,
        "projectUrl": null,
        "generatedDate": null,
        "verifiedAt": null,
        "editProvenance": "사용자가 별도 제작 예정",
        "note": "Claude는 사용자가 직접 제작합니다. 탭만 준비했으며 결과·모델 정보는 아직 등록하지 않았습니다.",
        "reservedForUser": true
      }
    ],
    "reviewUrl": "https://github.com/dighqhqtkglf2-boop/webapp-gallery/blob/main/comparisons/meiosis/README.md"
  },
  "planned": [
    {
      "id": "induction",
      "title": "물리: 코일과 자기장",
      "status": "planned"
    },
    {
      "id": "projection",
      "title": "지리: 지구와 지도",
      "status": "planned"
    }
  ],
  "notice": "동일한 소스·요청문으로 제작한 첫 결과를 기록합니다. 모델·실행 환경·생성 시점이 달라 통제된 성능 순위가 아닙니다. 실행 확인은 모든 요구 충족이나 학습 효과 검증을 뜻하지 않습니다."
};
