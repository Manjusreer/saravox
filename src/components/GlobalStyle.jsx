import { COLORS } from "../data/theme";

export const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{background:${COLORS.navy};color:${COLORS.white};font-family:'Inter',sans-serif;overflow-x:hidden}
    ::-webkit-scrollbar{width:4px}
    ::-webkit-scrollbar-track{background:${COLORS.navyMid}}
    ::-webkit-scrollbar-thumb{background:${COLORS.gold};border-radius:2px}
    .serif{font-family:'Playfair Display',serif}
    .gold{color:${COLORS.gold}}
    .fade-in{animation:fadeIn 0.6s ease forwards}
    @keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.6}}
    @keyframes countUp{from{opacity:0}to{opacity:1}}
    @keyframes slideIn{from{transform:translateX(-20px);opacity:0}to{transform:translateX(0);opacity:1}}
    @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
    .glass-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);backdrop-filter:blur(12px);border-radius:16px}
    .gold-btn{background:linear-gradient(135deg,${COLORS.gold},${COLORS.goldLight});color:${COLORS.navy};border:none;padding:12px 28px;border-radius:8px;font-weight:600;font-size:14px;cursor:pointer;transition:all 0.3s;letter-spacing:0.5px}
    .gold-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(201,168,76,0.4)}
    .outline-btn{background:transparent;border:1px solid ${COLORS.gold};color:${COLORS.gold};padding:12px 28px;border-radius:8px;font-weight:500;font-size:14px;cursor:pointer;transition:all 0.3s}
    .outline-btn:hover{background:rgba(201,168,76,0.1);transform:translateY(-2px)}
    .section-label{font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:${COLORS.gold};margin-bottom:12px}
    .section-title{font-size:clamp(28px,4vw,44px);font-weight:700;line-height:1.2;color:${COLORS.white}}
    .section-sub{font-size:16px;color:${COLORS.slate};line-height:1.7;margin-top:16px;max-width:600px}
    input,textarea,select{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:${COLORS.white};border-radius:8px;padding:12px 16px;font-size:14px;font-family:'Inter',sans-serif;width:100%;outline:none;transition:border-color 0.3s}
    input:focus,textarea:focus,select:focus{border-color:${COLORS.gold}}
    input::placeholder,textarea::placeholder{color:${COLORS.slate}}
    select option{background:${COLORS.navyMid};color:${COLORS.white}}
    .nav-link{color:${COLORS.slateLight};font-size:14px;font-weight:500;cursor:pointer;transition:color 0.3s;text-decoration:none}
    .nav-link:hover,.nav-link.active{color:${COLORS.gold}}
    .tab-btn{background:transparent;border:none;color:${COLORS.slate};font-size:14px;font-weight:500;cursor:pointer;padding:10px 20px;border-radius:8px;transition:all 0.3s;font-family:'Inter',sans-serif}
    .tab-btn.active{background:rgba(201,168,76,0.15);color:${COLORS.gold}}
    .service-card{padding:28px;border-radius:16px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);transition:all 0.3s;cursor:pointer}
    .service-card:hover{background:rgba(201,168,76,0.06);border-color:rgba(201,168,76,0.3);transform:translateY(-4px)}
    .stat-number{font-size:clamp(32px,5vw,56px);font-weight:700;font-family:'Playfair Display',serif;color:${COLORS.gold}}
    .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent);margin:64px 0}
    .badge{display:inline-block;background:rgba(201,168,76,0.15);color:${COLORS.gold};font-size:11px;font-weight:600;letter-spacing:1px;padding:4px 12px;border-radius:20px;text-transform:uppercase}
    .status-badge{display:inline-block;font-size:11px;font-weight:600;padding:4px 12px;border-radius:20px}
    .lead-row{padding:16px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);transition:background 0.2s}
    .lead-row:hover{background:rgba(255,255,255,0.04)}
    .metric-card{padding:24px;border-radius:16px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)}
    .progress-bar{height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden}
    .progress-fill{height:100%;border-radius:3px;background:linear-gradient(90deg,${COLORS.gold},${COLORS.goldLight});transition:width 1s ease}
    .faq-item{border-bottom:1px solid rgba(255,255,255,0.06);overflow:hidden}
    .calc-input{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:12px 16px;color:white;font-size:16px;font-weight:600;width:100%;font-family:'Inter',sans-serif;outline:none}
    .calc-input:focus{border-color:${COLORS.gold}}
    .timeline-dot{width:14px;height:14px;border-radius:50%;background:${COLORS.gold};border:3px solid ${COLORS.navyMid};position:absolute;left:-7px;top:4px;z-index:1}
    @media(max-width:768px){
      .hide-mobile{display:none!important}
      .grid-2,.grid-3,.grid-4{grid-template-columns:1fr!important}
      .hero-btns{flex-direction:column!important;gap:12px!important}
    }
  `}</style>
);

