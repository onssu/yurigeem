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
  title: string; // 한 줄 제목 (● 뒤에 오는 굵은 문장)
  body: string[]; // 설명 문장들(한 줄 이상이면 배열로)
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
  description: string;
  techs: TechStack[];
  thumbnail?: string;
  contributions: ProjectPhaseContribution[];
  highlights?: ProjectHighlight[]; // ✅ 새로 추가
};

// 실제 프로젝트 데이터
export const projects: Project[] = [
  // === 개인 사이드 프로젝트 ===
  // {
  //   slug: "wedding-invitation",
  //   title: "모바일 청첩장 서비스",
  //   company: "개인 프로젝트",
  //   period: "2024.01 ~ 진행중",
  //   role: "Front-end Lead",
  //   description:
  //     "Next.js 기반 모바일 청첩장 서비스로, 초대장 생성·편집, 이미지 업로드, 방명록, 지도/주소 검색 등을 제공하는 개인 사이드 프로젝트.",
  //   techs: ["React", "Next.js", "TypeScript", "Tailwind", "React Query"],
  //   thumbnail: "/images/projects/wedding-invitation.png",
  //   contributions: [
  //     {
  //       phase: "overall",
  //       breakdown: { planning: 1, design: 1, backend: 1, frontend: 1 },
  //       contributionPercent: 100,
  //     },
  //   ],
  // },

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
      "React·Next14 기반 XT 공식 홈페이지 및 관리자 화면 구축. 고도화된 인터랙션과 애니메이션을 직접 설계·구현하고, Copilot을 활용해 코드 템플릿·반복작업 자동화를 시도하여 생산성 향상에 기여.",
    techs: ["React", "Next14", "TypeScript", "Tailwind"],
    thumbnail: "/images/projects/xt_web_main.png",
    contributions: [
      {
        phase: "overall",
        breakdown: { planning: 3, design: 3, backend: 1, frontend: 4 },
        contributionPercent: 20, // 기여도 (20%)
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
      "컨벤션 현장에서 안내 정보를 제공하는 AI 키오스크. 사용자의 입력을 바탕으로 동선/안내 정보를 보여주고, Heygen 아바타와 OpenAI 응답을 연동해 음성으로 안내하는 대화형 인터페이스를 구현.",
    techs: ["Node.js", "LangChain", "OpenAI", "Heygen"],
    thumbnail: "/images/projects/xtkiosk_main.png",
    contributions: [
      {
        phase: "overall",
        breakdown: { planning: 1, frontend: 3 },
        contributionPercent: 35,
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
      "한화 사내 임직원 RSU 주식 관리 및 개인정보 권한/통계 조회 시스템. RealGrid Pro를 활용한 대용량 데이터 그리드, 커스텀 차트 및 스크롤 애니메이션, JWT 기반 로그인 인증·토큰 갱신 로직을 구현.",
    techs: ["Vue 3", "Nuxt", "Chart.js", "RealGrid", "Vuetify"],
    thumbnail: "/images/projects/rsu_web_main.png",
    contributions: [
      {
        phase: "overall",
        breakdown: { planning: 2, design: 2, backend: 2, frontend: 3 },
        contributionPercent: 35,
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
      "밀케어 앱 운영을 위한 관리자 웹 시스템. 넥사크로 구조를 참고해 화면별 독립 컴포넌트를 탭 전환 구조로 설계하고, 관리자 권한(등급)에 따라 조회 범위·필터가 동적으로 변하는 권한별 데이터 제어 로직을 구현.",
    techs: ["React", "TypeScript", "Emotion", "Recoil", "React Query"],
    thumbnail: "/images/projects/mealcare_admin_main.png",
    contributions: [
      {
        phase: "overall",
        breakdown: { planning: 2, backend: 1, frontend: 2 },
        contributionPercent: 50,
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
      "원격 주문, 포인트 충전, 구내식당 메뉴 조회, 생활습관 기록 등 기능을 제공하는 밀케어 모바일 앱. 식사 기록·칼로리 시각화, 공공 API 연동, 도넛형 메뉴 애니메이션 커스터마이징, l10n 기반 다국어 처리, 스켈레톤 UI와 화면 전환 최적화 등 성능 개선을 주도.",
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
      "국제전화 00700 공식 홈페이지와 하이브리드 앱·관리자 시스템 구축 및 운영. GSAP 기반 인터랙션, 하이브리드 웹앱 브릿지 구조, 출석체크·룰렛 등 참여형 이벤트, GA4 연동, i18n 기반 다국어, QA·운영까지 전체 라이프사이클 경험.",
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
      "사내 설문 등록 및 응답 통계 조회 웹 서비스. JavaScript·CSS 기반 커스텀 차트를 직접 제작해 응답 데이터를 퍼센트로 변환·시각화하고, chart.js와 함께 반응형 구조로 설계하여 직관적인 통계 화면을 구현.",
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
      "포인트·이벤트·쿠폰·간편결제 기능을 제공하는 메가마트 멤버십 앱/웹. 스탬프 이벤트와 같은 참여형 기능 구조 설계, 모달·스낵바 등 피드백 중심 인터랙션, 멤버십 바코드 실시간 연동, 메인 스켈레톤 UI로 로딩 체감 속도 개선.",
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
      "간병인 매칭 서비스의 웹·앱·관리자 화면 구축 및 운영. Vue·Nuxt·bootstrapVue 기반으로 화면을 구현하고, GSAP로 공식 사이트 주요 요소에 인터랙션을 추가해 사용자 몰입도를 높임.",
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
  },
];
