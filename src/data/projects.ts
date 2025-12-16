export type TechStack =
  | "React"
  | "Next.js"
  | "Next14"
  | "TypeScript"
  | "Vue 2"
  | "Vue 3"
  | "Nuxt"
  | "SCSS"
  | "Tailwind"
  | "Emotion"
  | "Recoil"
  | "Redux"
  | "Saga"
  | "React Query"
  | "RealGrid"
  | "Chart.js"
  | "i18n"
  | "l10n"
  | "GSAP"
  | "GA4"
  | "@mui/makeStyles"
  | "Flutter"
  | "Node.js"
  | "LangChain"
  | "OpenAI"
  | "Heygen"
  | "bootstrapVue"
  | "Vuetify";

export type ContributionBreakdown = {
  planning?: number;
  design?: number;
  backend?: number;
  frontend?: number;
};

export type ProjectPhaseContribution = {
  phase: "build" | "maintenance" | "overall";
  breakdown: ContributionBreakdown;
  contributionPercent: number;
};

export type ProjectHighlight = {
  title: string;
  body: string[];
};

export type Project = {
  slug: string;
  title: string;
  company: string;
  client?: string;
  period: string;
  duration?: string;
  links?: {
    web?: string;
    android?: string;
    ios?: string;
  };
  description: string; // ✅ 작은 한 줄 요약용으로 전부 수정
  techs: TechStack[];
  thumbnail?: string;
  contributions: ProjectPhaseContribution[];
  highlights?: ProjectHighlight[];
};

export const projects: Project[] = [
  // === (주)엑스티 ===
  {
    slug: "xt-home",
    title: "XT 공식 홈페이지 WEB·ADMIN",
    company: "(주)엑스티",
    client: "자사 공식 홈페이지",
    period: "1차 2023.05 ~ 2023.07, 2차 2024.07 ~ 2024.08",
    duration: "총 4개월 (1차 3개월, 2차 1개월)",
    links: {
      web: "https://www.ex-it.co.kr/",
    },
    description:
      "React·Next14 기반 공식 홈페이지/관리자 구축. Copilot 활용 모듈화 시도와 고도화된 UI 인터랙션 구현.",
    techs: ["React", "Next14", "TypeScript", "Tailwind"],
    thumbnail: "/images/projects/xt_web_main.png",
    contributions: [
      {
        phase: "overall",
        breakdown: { planning: 3, design: 3, backend: 1, frontend: 4 },
        contributionPercent: 20,
      },
    ],
    highlights: [
      {
        title: "Copilot 기반 코드 템플릿화 및 생산성 개선 시도",
        body: [
          "GitHub Copilot을 활용해 사전에 정의한 템플릿 기반으로 반복적인 코드 생성을 시도했습니다.",
          "완전한 자동화에는 이르지 못했지만, 관리자 페이지 개발 과정에서 생산성과 작업 편의성을 높일 수 있음을 확인했습니다.",
        ],
      },
      {
        title: "고도화된 UI 인터랙션 및 애니메이션 구현",
        body: [
          "기존 대비 더 정교한 수준의 UI 인터랙션을 직접 설계·구현했습니다.",
          "사용자 행동에 따라 자연스럽게 반응하는 애니메이션과 화면 흐름을 제어하여 UX 완성도를 높였습니다.",
        ],
      },
    ],
  },
  {
    slug: "xt-ai-kiosk",
    title: "XT Ai 키오스크 WEB",
    company: "(주)엑스티",
    client: "박람회/컨벤션 키오스크",
    period: "2024.05 ~ 2024.08",
    duration: "3개월",
    description:
      "컨벤션 안내 키오스크 WEB 개발. Heygen 아바타와 OpenAI 응답을 연동한 음성 기반 대화형 UI 구현.",
    techs: ["Node.js", "LangChain", "OpenAI", "Heygen"],
    thumbnail: "/images/projects/xtkiosk_main.png",
    contributions: [
      {
        phase: "overall",
        breakdown: { planning: 1, frontend: 3 },
        contributionPercent: 35,
      },
    ],
    highlights: [
      {
        title: "키오스크 메인 화면 프로세스 설계 및 구현",
        body: [
          "컨벤션 현장에서 사용자가 정보를 입력하면 동선 및 안내 정보를 제공하는 키오스크 흐름을 설계했습니다.",
          "버튼 입력과 음성 안내를 병행하는 사용자 친화적인 인터페이스를 구현했습니다.",
        ],
      },
      {
        title: "Heygen 아바타 · OpenAI 응답 연동",
        body: [
          "Heygen 아바타 스크립트를 화면에 출력하고, OpenAI API 응답을 메소드로 전달해 음성 출력이 가능하도록 구현했습니다.",
          "텍스트 응답과 아바타 음성이 자연스럽게 동기화되도록 처리하여 실제 대화와 유사한 사용자 경험을 제공했습니다.",
        ],
      },
    ],
  },

  // === 한화시스템 ===
  {
    slug: "rsu-stock",
    title: "RSU 주식 관리 시스템 WEB·ADMIN",
    company: "한화시스템",
    client: "사내 임직원 RSU 관리 시스템",
    period: "1차 2023.05 ~ 2023.07, 2차 2023.12 ~ 2024.02",
    duration: "총 5개월",
    description:
      "RSU 주식/권한/통계 관리 웹 구축. RealGrid Pro 대용량 그리드 커스터마이징 및 JWT 인증·토큰 갱신 로직 구현.",
    techs: ["Vue 3", "Nuxt", "Chart.js", "RealGrid", "Vuetify"],
    thumbnail: "/images/projects/rsu_web_main.png",
    contributions: [
      {
        phase: "overall",
        breakdown: { planning: 2, design: 2, backend: 2, frontend: 3 },
        contributionPercent: 35,
      },
    ],
    highlights: [
      {
        title: "RealGrid Pro 기반 대용량 데이터 그리드 구축",
        body: [
          "임직원 주식 데이터를 효율적으로 처리하기 위해 RealGrid Pro를 적용했습니다.",
          "요구사항에 맞춰 그리드 기능을 커스터마이징하여 관리 효율을 높였습니다.",
        ],
      },
      {
        title: "커스텀 차트 및 인터랙션 요소 개발",
        body: [
          "차트 툴팁, 스크롤 애니메이션 등 다양한 인터랙션 요소를 직접 구현했습니다.",
          "transition을 활용해 자연스러운 화면 전환 효과를 적용했습니다.",
        ],
      },
      {
        title: "JWT 기반 로그인 인증 및 토큰 갱신 로직 구현",
        body: [
          "로그인 시 발급된 JWT 토큰을 쿠키에 저장하고, 이후 요청에서 만료 여부를 판단해 에러 처리 또는 토큰 갱신이 가능하도록 인증 로직을 구성했습니다.",
        ],
      },
    ],
  },
  {
    slug: "mealcare-mams",
    title: "밀케어 통합관리시스템 (MAMS) ADMIN",
    company: "아워홈",
    client: "밀케어 앱 관리자 시스템",
    period: "2024.02 ~ 2024.05",
    duration: "4개월",
    description:
      "밀케어 운영 관리자 웹 구축. 넥사크로 구조를 참고한 탭 전환 UI와 관리자 권한별 조회 범위·필터 제어 로직 구현.",
    techs: ["React", "TypeScript", "Emotion", "Recoil", "React Query"],
    thumbnail: "/images/projects/mealcare_admin_main.png",
    contributions: [
      {
        phase: "overall",
        breakdown: { planning: 2, backend: 1, frontend: 2 },
        contributionPercent: 50,
      },
    ],
    highlights: [
      {
        title: "독립 컴포넌트 기반 탭 전환 UI 설계",
        body: [
          "기존 넥사크로 기반 구조를 참고해, 화면별로 독립적인 컴포넌트를 구성하고 탭 구조 전환이 가능하도록 구현했습니다.",
          "각 화면이 독립적으로 동작하도록 설계하여 확장성과 유지보수성을 높였습니다.",
        ],
      },
      {
        title: "관리자 권한에 따른 조회 범위·필터 동적 제어",
        body: [
          "관리자 등급(최고관리자, 일반관리자 등)에 따라 접근 가능한 데이터 범위를 세분화했습니다.",
          "API 호출 시 권한 기반 동적 파라미터 처리 및 화면 내 필터 조건이 자동 조정되도록 설계해 관리 효율성을 높였습니다.",
        ],
      },
    ],
  },
  {
    slug: "mealcare-flutter-app",
    title: "밀케어 Flutter APP",
    company: "아워홈",
    client:
      "원격 주문 및 포인트 충전, 아워홈 전 지점 구내식당 메뉴 조회 및 생활습관 기록이 가능한 아워홈 밀케어 어플리케이션",
    period: "2023.07 ~ 2023.12",
    duration: "6개월",
    links: {
      android:
        "https://play.google.com/store/apps/details?id=com.ourhome.fsmobileticket&hl=ko",
      ios: "https://apps.apple.com/kr/app/meal-care/id1182175084",
    },
    description:
      "원격 주문·포인트·메뉴 조회·생활기록 앱 구축. 공공 API·l10n 다국어·애니메이션 커스터마이징 및 성능 최적화 수행.",
    techs: ["Flutter", "TypeScript", "l10n"],
    thumbnail: "/images/projects/mealcare_app_main.png",
    contributions: [
      {
        phase: "overall",
        breakdown: { planning: 2, design: 2, backend: 3, frontend: 5 },
        contributionPercent: 20,
      },
    ],
    highlights: [
      {
        title: "앱 메인 화면 구조 설계 및 기획 커뮤니케이션",
        body: [
          "메인 화면의 전반적인 구조를 설계하고, 기획자와 협업하여 화면 구성 및 기능 흐름을 조율했습니다.",
          "일정상 구현이 어려운 부분은 가능한 범위를 제안하며 현실적인 방향으로 조율했습니다.",
        ],
      },
      {
        title: "사용자 식사 기록 및 칼로리 계산 기능 개발",
        body: [
          "사용자가 입력한 식단에 대한 칼로리 및 영양 정보를 시각화하는 기능을 개발했습니다.",
          "아워홈 구내식당 메뉴 데이터와 공공 API를 활용해 데이터를 수집하고, 이를 그래프 형태로 제공했습니다.",
        ],
      },
      {
        title: "외부 공공 API 연동",
        body: [
          "메인 화면의 날씨 정보와 식사 기록 기능에 필요한 영양 정보를 공공 API와 연동하여 실시간 데이터를 제공했습니다.",
        ],
      },
      {
        title: "기존 라이브러리 커스터마이징",
        body: [
          "메인 메뉴바 하단에 표시되는 도넛형 메뉴 애니메이션을 기획 의도에 맞게 구현하기 위해, 가장 유사한 라이브러리를 선정한 뒤 내부 코드를 분석하고 재구성하여 원하는 효과를 구현했습니다.",
        ],
      },
      {
        title: "다국어 리소스 적용 (l10n)",
        body: [
          "l10n을 활용해 다국어 리소스를 JSON 파일로 관리하고, 앱 최초 기동 시 사용자의 접속 위치(국내/해외)를 기준으로 언어 리소스를 분기 처리하여 자연스러운 노출을 구현했습니다.",
        ],
      },
      {
        title: "앱 성능 최적화 경험",
        body: [
          "화면 전환 시 새 페이지가 계속 쌓이며 속도가 저하되는 이슈를 발견하고, 네비게이션 방식을 replace 개념으로 변경하여 전환 속도를 개선했습니다.",
          "또한 다수의 이미지가 한 번에 로딩될 때 발생하는 성능 저하 문제를 해결하기 위해 스켈레톤 UI를 적용하고, 썸네일을 우선 로딩하는 방식으로 변경하여 전체적인 속도와 사용자 경험을 향상시켰습니다.",
        ],
      },
    ],
  },

  // === SK텔링크 ===
  {
    slug: "sk-00700",
    title: "국제전화 00700 하이브리드 APP · WEB · ADMIN",
    company: "SK텔링크",
    client: "국제전화 00700 서비스",
    period: "2022.06 ~ 2023.04",
    duration: "11개월",
    links: {
      web: "https://00700.com/",
    },
    description:
      "하이브리드 앱·웹·관리자 구축/운영. GSAP 인터랙션, 웹앱 브릿지 연동, 참여형 이벤트 및 i18n/GA4 적용·QA 수행.",
    techs: ["Vue 2", "Nuxt", "SCSS", "i18n", "GSAP", "GA4"],
    thumbnail: "/images/projects/sktelink_web.png",
    contributions: [
      {
        phase: "build",
        breakdown: { planning: 1, design: 2, backend: 2, frontend: 3 },
        contributionPercent: 30,
      },
      {
        phase: "maintenance",
        breakdown: { planning: 1, design: 1, backend: 1, frontend: 1 },
        contributionPercent: 100,
      },
    ],
    highlights: [
      {
        title: "GSAP 기반 메인/더보기 페이지 인터랙션 구현",
        body: [
          "GSAP을 활용해 웹 메인 및 더보기 페이지에 인터랙션 애니메이션을 적용하여 사용자 경험을 강화했습니다.",
          "앱 메인 화면에서도 스와이퍼를 활용해 사용자의 데이터 사용량 통계를 시각적으로 표현했습니다.",
        ],
      },
      {
        title: "하이브리드 웹앱 브릿지 구조 연동",
        body: [
          "네이티브 앱과 웹 간 메소드 호출 규칙을 정의하고, 웹에서도 네이티브 기능을 사용할 수 있도록 연동 구조를 구현했습니다.",
        ],
      },
      {
        title: "직군 간 커뮤니케이션을 통한 구현 범위 조율",
        body: [
          "디자이너와 구현 가능한 인터랙션 범위를 공유하고, 기획 의도에 맞도록 상호 조율하며 작업했습니다.",
          "백엔드와는 API 데이터 구조를 선제안하며 효율적으로 협업할 수 있도록 사전에 조율했습니다.",
        ],
      },
      {
        title: "참여형 이벤트 기능 개발 및 운영 안정성 확보",
        body: [
          "출석 체크 및 룰렛 이벤트 등의 참여형 기능을 구현하고, API 결과 데이터 기반으로 동작하도록 처리했습니다.",
          "QA 과정에서 주요 버그를 사전에 대부분 해결하여 안정적인 서비스 운영에 기여했습니다.",
        ],
      },
      {
        title: "i18n 다국어 리소스 적용",
        body: [
          "i18n 기반 JSON 리소스 파일을 적용하고, 사용자 언어 설정에 따라 한국어/영어 UI가 자동 노출되도록 구현했습니다.",
        ],
      },
    ],
  },

  // === 한화시스템 – VOC 설문 ===
  {
    slug: "voc-survey",
    title: "사내 설문 사이트 VOC WEB",
    company: "한화시스템",
    client: "사내 설문/VOC 시스템",
    period: "구축 2021.08 ~ 2021.10, 운영 2021.10 ~ 2021.12",
    duration: "구축 3개월 + 운영 3개월",
    description:
      "사내 설문 등록/응답 통계 웹 구축·운영. JS·CSS 기반 커스텀 차트 제작 및 Chart.js 연동 반응형 화면 구현.",
    techs: ["Vue 2", "Nuxt", "SCSS", "Chart.js"],
    thumbnail: "/images/projects/voc_web_main.png",
    contributions: [
      {
        phase: "build",
        breakdown: { planning: 1, design: 2, backend: 1, frontend: 2 },
        contributionPercent: 40,
      },
      {
        phase: "maintenance",
        breakdown: { planning: 1, design: 1, backend: 1, frontend: 1 },
        contributionPercent: 100,
      },
    ],
    highlights: [
      {
        title: "커스텀 차트 컴포넌트 직접 구현",
        body: [
          "JavaScript와 CSS를 활용해 데이터 값을 퍼센트로 변환하는 계산 로직을 구현했습니다.",
          "데이터 기반의 반응형 구조로 구성하여 직관적인 정보 전달이 가능하도록 설계했습니다.",
        ],
      },
    ],
  },

  // === 농심 – 메가마트 ===
  {
    slug: "megamart-membership",
    title: "메가마트 하이브리드 APP · ADMIN",
    company: "농심",
    client: "메가마트 멤버십 서비스",
    period: "2022.01 ~ 2022.05",
    duration: "5개월 (구축 + 운영)",
    links: {
      web: "https://mcaapp.megamart.com/",
      android:
        "https://play.google.com/store/apps/details?id=com.megamart.mall&hl=ko",
      ios: "https://apps.apple.com/kr/app/%EB%A9%94%EA%B0%80%EB%A7%88%ED%8A%B8/id430549569",
    },
    description:
      "포인트/이벤트/쿠폰/간편결제 멤버십 앱 구축·운영. 스탬프 이벤트, 바코드 연동, 스켈레톤 UI로 체감 속도 개선.",
    techs: [
      "React",
      "@mui/makeStyles",
      "GSAP",
      "GA4",
      "Recoil",
      "Redux",
      "Saga",
    ],
    thumbnail: "/images/projects/megamart_app.png",
    contributions: [
      {
        phase: "build",
        breakdown: { planning: 2, design: 2, backend: 2, frontend: 3 },
        contributionPercent: 30,
      },
      {
        phase: "maintenance",
        breakdown: { planning: 1, design: 1, backend: 1, frontend: 1 },
        contributionPercent: 100,
      },
    ],
    highlights: [
      {
        title: "사용자 참여형 기능 구조 설계 및 개발",
        body: [
          "스탬프 획득 이벤트 기능을 구현하고, 사용자 행동 조건에 따라 UI 상태가 동적으로 변화하도록 분기 로직을 설계했습니다.",
        ],
      },
      {
        title: "사용자 피드백 중심 UI 인터랙션 설계",
        body: [
          "모달, 스낵바, 상태 메시지 등 사용자 행동에 즉각 반응하는 다양한 피드백 요소를 설계·구현하여 UX를 향상시켰습니다.",
        ],
      },
      {
        title: "멤버십 바코드 실시간 연동 기능 개발",
        body: [
          "외부 시스템과의 실시간 통신을 통해 사용자의 바코드 정보를 안정적으로 표시하고 활용할 수 있도록 구현했습니다.",
        ],
      },
      {
        title: "스켈레톤 UI 적용으로 체감 로딩 속도 개선",
        body: [
          "초기 로딩 시 사용자 이탈을 방지하기 위해 주요 화면에 스켈레톤 UI를 적용했습니다.",
          "실제 데이터 로딩 전까지의 빈 영역을 자연스럽게 채워 사용자 경험을 유지하도록 구성했습니다.",
        ],
      },
    ],
  },

  // === 미디어윌 – 케어 ===
  {
    slug: "mediawill-care",
    title: "미디어윌케어 APP · WEB · ADMIN",
    company: "미디어윌",
    client: "간병인 매칭 프로그램",
    period: "구축 2021.04 ~ 2021.08, 운영 2021.10 ~ 2021.12",
    duration: "구축 5개월 + 운영 3개월",
    description:
      "간병인 매칭 서비스 웹·앱·관리자 구축·운영. Vue/Nuxt/bootstrapVue 기반 화면 구현 및 GSAP 인터랙션 적용.",
    techs: ["Vue 2", "Nuxt", "SCSS", "bootstrapVue", "GSAP"],
    thumbnail: "/images/projects/mediawillcare_web.png",
    contributions: [
      {
        phase: "build",
        breakdown: { planning: 4, design: 4, backend: 4, frontend: 8 },
        contributionPercent: 18,
      },
      {
        phase: "maintenance",
        breakdown: { planning: 1, design: 1, backend: 1, frontend: 3 },
        contributionPercent: 30,
      },
    ],
    highlights: [
      {
        title: "GSAP 기반 공식 사이트 인터랙션 구현",
        body: [
          "공식 사이트 내 주요 요소에 애니메이션 및 인터랙션을 구현하여 사용자 몰입도를 높이는 데 기여했습니다.",
        ],
      },
    ],
  },
];
