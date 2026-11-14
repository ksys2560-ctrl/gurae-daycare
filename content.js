/* =====================================================================
   🏡 우리 어린이집 홈페이지 — 내용 파일

   ✏️ 홈페이지의 글자와 사진은 모두 이 파일 하나에서 바꿉니다.
      따옴표("  ") 안의 글자만 고치세요. 따옴표·쉼표·괄호는 지우지 마세요.

   📷 사진 바꾸는 법
      images 폴더에 내 사진을 넣고, 아래 photo: "images/파일이름.jpg" 의
      파일 이름을 내 사진 이름으로 바꾸면 됩니다.
      (같은 이름으로 덮어써도 됩니다. 예: images/hero.jpg 를 내 사진으로 교체)

   🙈 칸 숨기기
      필요 없는 칸은 show: true 를 show: false 로 바꾸면 홈페이지에서 사라집니다.
   ===================================================================== */

const SITE = {
  /* ---------- 기본 정보 ---------- */
  name: "시립구래어린이집",             // 어린이집 이름 (맨 위 왼쪽, 브라우저 탭 제목)
  subName: "국공립",                    // 이름 위 작은 글자 (없으면 "" 로 비워두기)
  logo: "images/character.webp",                           // 로고 그림 (예: "images/logo.png"), 없으면 "" → 🌱 표시
  phone: "031-982-9915",
  address: "경기도 김포시 김포한강4로 564",   // 지도는 이 주소로 찾습니다
  addressDetail: "한가람마을 2단지",          // 주소 뒤에 덧붙여 보이는 글 (없으면 "")
  description: "오늘의 놀이가 내일의 성장이 되는 곳, 시립구래어린이집입니다.", // 카톡·검색에 보이는 소개

  /* ---------- 맨 위 큰 사진 ---------- */
  hero: {
    photo: "images/main.webp",
    title: "오늘의 놀이가\n내일의 성장이 되는 곳",   // \n 은 줄바꿈
    text: "아이의 오늘이 행복하고, 내일이 기대되는 곳.\n아이의 작은 걸음마다 함께하며, 소중한 성장을 응원합니다.",
    button1: "입학 안내",
    button2: "우리 이야기",
  },

  /* ---------- 우리의 하루 (사진 2장) ---------- */
  day: {
    show: true,
    title: "우리의 하루",
    text: "친구와 함께 놀이하며 자라는\n행복한 공간.",
    photos: ["images/day-play.webp", "images/day-leaves.jpg"],
    badges: [
      { icon: "💭", text: "생각하고" },
      { icon: "🙌", text: "스스로 배우며" },
      { icon: "🤝", text: "함께 성장하는" },
      { icon: "💚", text: "행복한 공간" },
    ],
  },

  /* ---------- 어린이집 소개 · 원장 인사말 ---------- */
  about: {
    show: true,
    title: "어린이집 소개",
    photo: "images/character.webp",
    headline: "행복한 아이들이 있는 곳,\n여기는 시립구래어린이집입니다.",
    greeting:
      "꽃처럼 아름답게,\n" +
      "나무처럼 튼튼하게,\n" +
      "하늘처럼 자유롭게,\n" +
      "햇살처럼 따뜻하게.\n\n" +
      "시립구래어린이집은 아이들이 이렇게 자랄 수 있도록 사랑으로 함께하겠습니다.",
    sign: "원장 김희정 드림",
    // 자랑거리 (개원, 평가, 선정 등) — 줄을 더하거나 지워도 됩니다
    highlights: [
      { big: "열린어린이집", small: "선정" },
      { big: "북적북적(book)", small: "특색활동" },
      { big: "우수급식소", small: "선정" },
    ],
  },

  /* ---------- 교육 이야기 (특색 프로그램) ---------- */
  edu: {
    show: true,
    title: "교육 이야기",
    quote: "놀이는 아이의 본능이고, 아이들은 놀이하며 배우고 자랍니다.",
    text: "영유아·놀이중심의 표준보육과정을 바탕으로, 아이의 흥미와 관심에서 출발한 놀이 속에서 자연스럽게 배움이 일어나도록 하루를 꾸립니다.",
    // photo 를 "" 로 비우면 그림 없이 아이콘만 크게 나옵니다
    // more: [...] 에 사진을 더 넣으면, 카드 사진을 눌렀을 때 넘겨 보며 볼 수 있습니다
    programs: [
      { icon: "🖐️", name: "오감놀이", text: "오감 발달과 정서적 안정, 사회성을 키우는 감각놀이", photo: "images/edu-senses.webp",
        more: ["images/edu-senses2.webp"] },
      { icon: "🌲", name: "숲놀이", text: "자연을 관찰하고 자연물로 놀이하며 생태 감수성을 깨워요", photo: "images/edu-forest.webp" },
      { icon: "📖", name: "북적북적(book) 발표회", text: "그림책 속 이야기를 몸으로 표현하고 무대에서 함께 발표해요", photo: "images/edu-book.webp" },
      { icon: "🏫", name: "이음교육", text: "신곡초등학교 선생님과 함께 초등학교로 가는 첫걸음을 준비해요", photo: "images/edu-ieum.webp" },
    ],
  },

  /* ---------- 하루 일과 ---------- */
  routine: {
    show: true,
    title: "우리의 하루 일과",
    items: [
      { time: "07:30", name: "등원 및 맞이하기", text: "선생님과 반갑게 인사하며 하루를 열어요" },
      { time: "09:00", name: "오전 간식", text: "손을 씻고 바르게 앉아 간식을 먹어요" },
      { time: "09:30", name: "자유놀이 · 실외활동", text: "흥미에 따라 마음껏 놀고 바깥에서 뛰놀아요" },
      { time: "11:40", name: "점심식사 · 이닦기", text: "골고루 먹고 스스로 이를 닦아요" },
      { time: "12:30", name: "휴식 · 낮잠", text: "편안하게 몸과 마음을 쉬어요" },
      { time: "15:00", name: "오후 간식 · 자유놀이", text: "간식을 먹고 좋아하는 놀이를 이어가요" },
      { time: "16:00", name: "귀가 · 연장보육", text: "기본보육 귀가, 연장보육반은 저녁까지 함께해요" },
    ],
  },

  /* ---------- 오늘의 풍경 (활동 사진) ---------- */
  story: {
    show: true,
    title: "오늘의 풍경",
    // 사진을 더 넣고 싶으면 { photo: "...", text: "..." }, 한 줄을 복사해 붙이세요
    items: [
      { photo: "images/story-butterfly.webp", text: "애벌레가 나비가 되는 과정을 관찰해요" },
      { photo: "images/story-sportsday.webp", text: "추(秋)억 만들기 한마음 가족운동회" },
      { photo: "images/story-council.webp", text: "김포시의회에 다녀왔어요" },
    ],
    moreText: "더 많은 이야기 보기",
    moreLink: "https://www.instagram.com/yes__gurae/",   // 블로그·인스타 주소 (예: "https://blog.naver.com/..."), 없으면 "" → 단추 숨김
  },

  /* ---------- 입학 안내 ---------- */
  enroll: {
    show: true,
    title: "입학 안내",
    // 신입 원아 모집 안내 (맨 위 큰 카드). 필요 없으면 recruitTitle 을 "" 로
    recruitTitle: "2027학년도 신입 원아 상담 환영!",
    recruit: [
      { name: "모집일정", text: "2026년 11월 2일 (월)" },
      { name: "모집대상", text: "0세부터 취학 전까지의 영유아" },
      { name: "신청방법", text: "유보통합포털 홈페이지 신청 (enter.childinfo.go.kr)" },
    ],
    hours: [
      { name: "어린이집 운영", time: "평일 07:30 ~ 21:30" },
      { name: "기본보육", time: "09:00 ~ 16:00" },
      { name: "연장보육", time: "16:00 ~ 19:30" },
      { name: "야간연장보육", time: "19:30 ~ 21:30" },
    ],
    steps: ["유보통합포털 입소 신청", "입소 상담", "구비서류 준비", "입소"],
    note: "정부지원 보육료가 적용되며, 입소 순위와 자세한 절차는 전화로 친절히 안내해 드립니다.",
  },

  /* ---------- 오시는 길 ---------- */
  location: {
    show: true,
    title: "오시는 길",
    showMap: true,   // 주소로 지도를 자동으로 보여 줍니다 (지도가 이상하면 false)
  },

  /* ---------- 맨 아래 링크 (없으면 "" 로) ---------- */
  links: {
    blog: "",        // 네이버 블로그
    instagram: "https://www.instagram.com/yes__gurae/",   // 인스타그램
    cafe: "",        // 네이버 카페 / 밴드
    waitlist: "https://enter.childinfo.go.kr",   // 유보통합포털 (입소 신청)
    waitlistText: "유보통합포털 신청",            // 위 주소로 가는 단추 글자
  },
};
