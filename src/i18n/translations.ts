export type Language = 'ko' | 'en';

export const translations = {
  ko: {
    // Header
    nav_dashboard: "대시보드",
    nav_tech: "기술",
    nav_clinical: "임상 근거",
    nav_faq: "FAQ",
    btn_contact: "도입 문의",

    // Hero Main Typography
    hero_category: "노안 AI 진단 & 처방 엔진",
    hero_title_blur: "흐려진 글자 앞에서",
    hero_title_sharp: "멈추지 않도록.",
    hero_desc: "게이즈인투의 AI는 노안의 진행 단계를 정량 판독하고, 당신의 눈이 실제로 머무는 거리에 맞춰 처방을 설계합니다.",

    // Card 0: Live Prescribed Optic
    card0_title: "LIVE PRESCRIBED OPTIC",
    card0_badge: "AUTO CALIBRATE",
    card0_dist_label: "거리별 처방 가입도",
    card0_dist_tag: "실시간 AI 거리 보정",
    card0_rec_title: "RECOMMENDED ADD",
    card0_rec_desc: "근거리 실제 작업 환경 맞춤 처방값",
    card0_bio_amd: "AMD <span class=\"text-[#00A396]\">&lt;1%</span>",
    card0_bio_glaucoma: "녹내장 <span class=\"text-[#00A396]\">0.32</span>",
    card0_bio_dr: "DR <span class=\"text-slate-900\">Clear</span>",
    card0_status: "ACTIVE COCKPIT",

    // Card 1: XR Workflow
    card1_title: "XR WORKFLOW",
    card1_badge: "3-STEP PROCESS",
    card1_step1_title: "자가 착용 (Wear)",
    card1_step1_desc: "병원 방문 없이 가정·일상에서 가볍게 착용 후 즉시 시작",
    card1_step2_title: "시선 유도 자동 촬영",
    card1_step2_desc: "지능형 동공 정렬 인터랙션으로 고해상도 안저 이미지 캡처",
    card1_step3_title: "3대 질환 온디바이스 판독",
    card1_step3_desc: "황반변성(AMD), 녹내장, 당뇨망막 징후를 30초 내 정량 분석",
    card1_action: "VIEW TECH",

    // Card 2: Clinical Matrix
    card2_title: "CLINICAL MATRIX",
    card2_badge: "CLINICAL VALIDATED",
    card2_amd_label: "황반변성(AMD)",
    card2_amd_val: "정상 <1%",
    card2_glaucoma_label: "녹내장",
    card2_glaucoma_val: "0.32",
    card2_dr_label: "당뇨망막(DR)",
    card2_dr_val: "Clear",
    card2_stat_acc: "판독 일치율",
    card2_stat_hosp: "협력 안과",
    card2_stat_data: "학습 데이터",
    card2_irb_badge: "✓ 대학병원 임상 실증 및 IRB 승인 완료",
    card2_action: "VIEW CLINICAL",

    // Card 3: FAQ & Support
    card3_title: "FAQ & SUPPORT",
    card3_badge: "FAQ & SUPPORT",
    card3_q1_title: "Q1. 혼자서 촬영 가능한가요?",
    card3_q1_desc: "지능형 시선 유도(Gaze Guidance)가 동공을 가이드하여 비숙련자도 30초 내 촬영",
    card3_q2_title: "Q2. 안경원·의원 EMR 연동",
    card3_q2_desc: "처방 데이터 및 고해상도 안저 리포트를 기존 전자의무기록(EMR)과 즉시 연동",
    card3_q3_title: "Q3. 도입 상담 및 방문 데모",
    card3_q3_desc: "공식 이메일(gazeinto1nc@gmail.com)로 접수 시 전담팀 1:1 시연",
    card3_action: "VIEW FAQ",

    // Footer
    footer_tagline: "Retinal Screening, Wherever You Are",
    footer_desc: "GazeInto Inc.는 자가 조작 가능한 XR 안저 카메라와 온디바이스 AI를 통해 3대 실명 안질환 및 노안을 조기 선별하는 혁신 디지털 헬스케어 기업입니다.",
    footer_col1_title: "기술 & 솔루션",
    footer_link1: "홈 (Overview)",
    footer_link2: "From Headset to Insight",
    footer_link3: "장벽 없는 조기 발견 (Matrix)",
    footer_link4: "자주 묻는 질문 (FAQ)",
    footer_company_title: "주식회사 게이즈인투 (GazeInto Inc.)",
    footer_terms: "이용약관",
    footer_privacy: "개인정보처리방침",

    // Contact Modal
    modal_title_b2b: "안경원 · 의원 도입 문의",
    modal_subtitle_b2b: "정보를 남겨주시면 담당 전문 컨설턴트가 24시간 내 연락드립니다.",
    modal_tab_b2b: "안경원 · 의원 도입",
    modal_tab_trial: "체험 · 기술 백서",
    modal_name_label: "성함 / 직책",
    modal_org_label: "기관명 / 상호 (안경원·의원명)",
    modal_phone_label: "연락처",
    modal_email_label: "이메일",
    modal_msg_label: "문의 내용",
    modal_submit_btn: "도입 문의 접수하기"
  },
  en: {
    // Header
    nav_dashboard: "Dashboard",
    nav_tech: "Technology",
    nav_clinical: "Clinical",
    nav_faq: "FAQ",
    btn_contact: "Contact Us",

    // Hero Main Typography
    hero_category: "PRESBYOPIA AI SCREENING & RX ENGINE",
    hero_title_blur: "Never Let Blurred Words",
    hero_title_sharp: "Stop Your Vision.",
    hero_desc: "GazeInto's AI quantitatively grades presbyopia progression and designs customized prescriptions tailored to where your eyes truly focus.",

    // Card 0: Live Prescribed Optic
    card0_title: "LIVE PRESCRIBED OPTIC",
    card0_badge: "AUTO CALIBRATE",
    card0_dist_label: "Prescription ADD by Distance",
    card0_dist_tag: "Live AI Calibration",
    card0_rec_title: "RECOMMENDED ADD",
    card0_rec_desc: "Tailored ADD for real near-vision tasks",
    card0_bio_amd: "AMD <span class=\"text-[#00A396]\">&lt;1%</span>",
    card0_bio_glaucoma: "Glaucoma <span class=\"text-[#00A396]\">0.32</span>",
    card0_bio_dr: "DR <span class=\"text-slate-900\">Clear</span>",
    card0_status: "ACTIVE COCKPIT",

    // Card 1: XR Workflow
    card1_title: "XR WORKFLOW",
    card1_badge: "3-STEP PROCESS",
    card1_step1_title: "Self-Wear",
    card1_step1_desc: "Effortlessly put on at home or work without clinic visits",
    card1_step2_title: "Gaze-Guided Capture",
    card1_step2_desc: "Automatic pupil alignment and high-resolution fundus imaging",
    card1_step3_title: "On-Device AI Analysis",
    card1_step3_desc: "Quantitative screening of AMD, Glaucoma & DR in 30 seconds",
    card1_action: "VIEW TECH",

    // Card 2: Clinical Matrix
    card2_title: "CLINICAL MATRIX",
    card2_badge: "CLINICAL VALIDATED",
    card2_amd_label: "AMD (Macula)",
    card2_amd_val: "<1% Normal",
    card2_glaucoma_label: "Glaucoma",
    card2_glaucoma_val: "0.32 C/D",
    card2_dr_label: "DR (Retina)",
    card2_dr_val: "Clear",
    card2_stat_acc: "Concordance",
    card2_stat_hosp: "Clinical Centers",
    card2_stat_data: "Training Data",
    card2_irb_badge: "✓ Clinically Validated & IRB Approved",
    card2_action: "VIEW CLINICAL",

    // Card 3: FAQ & Support
    card3_title: "FAQ & SUPPORT",
    card3_badge: "FAQ & SUPPORT",
    card3_q1_title: "Q1. Can I capture by myself?",
    card3_q1_desc: "Intelligent gaze guidance aligns pupils automatically for 30s self-capture.",
    card3_q2_title: "Q2. EMR & System Integration",
    card3_q2_desc: "Seamlessly integrates prescription data and retinal reports with clinical EMRs.",
    card3_q3_title: "Q3. Demo & B2B Inquiry",
    card3_q3_desc: "Contact gazeinto1nc@gmail.com for on-site live demonstrations.",
    card3_action: "VIEW FAQ",

    // Footer
    footer_tagline: "Retinal Screening, Wherever You Are",
    footer_desc: "GazeInto Inc. is an innovative digital healthcare pioneer detecting presbyopia and the top 3 blinding eye diseases via self-operable XR fundus camera and on-device AI.",
    footer_col1_title: "Technology & Solutions",
    footer_link1: "Home (Overview)",
    footer_link2: "From Headset to Insight",
    footer_link3: "Early Detection Matrix",
    footer_link4: "Frequently Asked Questions",
    footer_company_title: "GazeInto Inc.",
    footer_terms: "Terms of Service",
    footer_privacy: "Privacy Policy",

    // Contact Modal
    modal_title_b2b: "Partnership & B2B Inquiry",
    modal_subtitle_b2b: "Leave your information and our dedicated consultant will reach out within 24 hours.",
    modal_tab_b2b: "B2B Partnership",
    modal_tab_trial: "Demo & Whitepaper",
    modal_name_label: "Name / Title",
    modal_org_label: "Organization / Clinic Name",
    modal_phone_label: "Phone Number",
    modal_email_label: "Email Address",
    modal_msg_label: "Inquiry Details",
    modal_submit_btn: "Submit Inquiry"
  }
};
