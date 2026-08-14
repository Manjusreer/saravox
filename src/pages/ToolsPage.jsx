import { useState } from "react";
import { COLORS } from "../data/theme";

const SliderInput = ({ label, value, min, max, step, onChange, format }) => (
  <div style={{ marginBottom: 20 }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
      <span style={{ fontSize: 13, color: COLORS.slate }}>{label}</span>
      <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.gold }}>{format ? format(value) : value}</span>
    </div>
    <input type="range" min={min} max={max} step={step || 1} value={value}
      onChange={e => onChange(Number(e.target.value))}
      style={{ width: "100%", accentColor: COLORS.gold }} />
  </div>
);

const ResultBox = ({ label, value, highlight }) => (
  <div style={{ padding: 20, background: highlight ? "rgba(201,168,76,0.1)" : "rgba(255,255,255,0.04)", borderRadius: 12, border: `1px solid ${highlight ? COLORS.border : "rgba(255,255,255,0.06)"}`, textAlign: "center" }}>
    <div style={{ fontSize: 12, color: COLORS.slate, marginBottom: 6 }}>{label}</div>
    <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display',serif", color: highlight ? COLORS.gold : COLORS.white }}>{value}</div>
  </div>
);

// ─── calculation helpers ───
const formatINR = (n) => "₹" + Math.round(Math.max(0, n)).toLocaleString("en-IN");

function sipAccumulate(monthly, annualRatePct, years) {
  const rm = annualRatePct / 12 / 100;
  let balance = 0;
  const months = Math.round(years * 12);
  for (let i = 0; i < months; i++) balance = balance * (1 + rm) + monthly;
  return balance;
}

function lumpsumFV(principal, annualRatePct, years) {
  return principal * Math.pow(1 + annualRatePct / 100, years);
}

function stepUpSipAccumulate(initialMonthly, stepUpPct, annualRatePct, years) {
  const rm = annualRatePct / 12 / 100;
  let balance = 0, monthlyAmt = initialMonthly, totalInvested = 0;
  for (let y = 0; y < years; y++) {
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + rm) + monthlyAmt;
      totalInvested += monthlyAmt;
    }
    monthlyAmt = monthlyAmt * (1 + stepUpPct / 100);
  }
  return { balance, totalInvested };
}

function swpSimulate(corpus, monthlyWithdrawal, annualRatePct, years) {
  const rm = annualRatePct / 12 / 100;
  let balance = corpus, totalWithdrawn = 0, monthsLasted = 0;
  const months = Math.round(years * 12);
  for (let i = 0; i < months; i++) {
    if (balance <= 0) break;
    balance = balance * (1 + rm) - monthlyWithdrawal;
    totalWithdrawn += monthlyWithdrawal;
    monthsLasted++;
    if (balance < 0) balance = 0;
  }
  return { balance, totalWithdrawn, monthsLasted };
}

function stpSimulate(sourceCorpus, monthlyTransfer, sourceRatePct, destRatePct, years) {
  const srm = sourceRatePct / 12 / 100, drm = destRatePct / 12 / 100;
  let source = sourceCorpus, dest = 0, totalTransferred = 0, monthsRun = 0;
  const months = Math.round(years * 12);
  for (let i = 0; i < months; i++) {
    if (source <= 0) break;
    source = source * (1 + srm) - monthlyTransfer;
    dest = dest * (1 + drm) + monthlyTransfer;
    totalTransferred += monthlyTransfer;
    monthsRun++;
    if (source < 0) source = 0;
  }
  return { source, dest, totalTransferred, monthsRun };
}

export default function ToolsPage() {
  const [activeTool, setActiveTool] = useState("SIP");

  // SIP Growth Calculator
  const [sipAmt, setSipAmt] = useState(10000);
  const [sipYrs, setSipYrs] = useState(10);
  const [sipRate, setSipRate] = useState(12);

  // Step-Up SIP Calculator
  const [stepAmt, setStepAmt] = useState(10000);
  const [stepUpPct, setStepUpPct] = useState(10);
  const [stepYrs, setStepYrs] = useState(10);
  const [stepRate, setStepRate] = useState(12);

  // Lumpsum Calculator
  const [lumpAmt, setLumpAmt] = useState(500000);
  const [lumpYrs, setLumpYrs] = useState(10);
  const [lumpRate, setLumpRate] = useState(12);

  // SWP Calculator
  const [swpCorpus, setSwpCorpus] = useState(2000000);
  const [swpWithdrawal, setSwpWithdrawal] = useState(15000);
  const [swpRate, setSwpRate] = useState(8);
  const [swpYrs, setSwpYrs] = useState(15);

  // STP Calculator
  const [stpCorpus, setStpCorpus] = useState(1000000);
  const [stpTransfer, setStpTransfer] = useState(20000);
  const [stpSourceRate, setStpSourceRate] = useState(6);
  const [stpDestRate, setStpDestRate] = useState(12);
  const [stpYrs, setStpYrs] = useState(5);

  // SIP cum SWP Calculator
  const [scsMonthly, setScsMonthly] = useState(15000);
  const [scsSipYrs, setScsSipYrs] = useState(15);
  const [scsSipRate, setScsSipRate] = useState(12);
  const [scsWithdrawal, setScsWithdrawal] = useState(30000);
  const [scsSwpYrs, setScsSwpYrs] = useState(15);
  const [scsSwpRate, setScsSwpRate] = useState(8);

  // EMI Calculator
  const [loanAmt, setLoanAmt] = useState(2500000);
  const [loanRate, setLoanRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  // Retirement Planner Calculator
  const [retAge, setRetAge] = useState(30);
  const [retMonthly, setRetMonthly] = useState(50000);
  const [retReturn, setRetReturn] = useState(10);

  // Compare Calculator
  const [cmpMonthly, setCmpMonthly] = useState(10000);
  const [cmpStepUp, setCmpStepUp] = useState(10);
  const [cmpRate, setCmpRate] = useState(12);
  const [cmpYrs, setCmpYrs] = useState(15);

  // SIP Growth
  const sipInvested = sipAmt * sipYrs * 12;
  const sipWealth = sipAccumulate(sipAmt, sipRate, sipYrs);
  const sipGains = sipWealth - sipInvested;

  // Step-Up SIP
  const stepResult = stepUpSipAccumulate(stepAmt, stepUpPct, stepRate, stepYrs);

  // Lumpsum
  const lumpWealth = lumpsumFV(lumpAmt, lumpRate, lumpYrs);

  // SWP
  const swpResult = swpSimulate(swpCorpus, swpWithdrawal, swpRate, swpYrs);

  // STP
  const stpResult = stpSimulate(stpCorpus, stpTransfer, stpSourceRate, stpDestRate, stpYrs);

  // SIP cum SWP
  const scsCorpusAtRetirement = sipAccumulate(scsMonthly, scsSipRate, scsSipYrs);
  const scsWithdrawalResult = swpSimulate(scsCorpusAtRetirement, scsWithdrawal, scsSwpRate, scsSwpYrs);

  // EMI
  const emiCalc = () => {
    const r = loanRate / 12 / 100, n = loanTenure * 12;
    return loanAmt * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  };
  const emi = emiCalc();
  const totalPay = emi * loanTenure * 12;
  const totalInt = totalPay - loanAmt;

  // Retirement
  const yearsToRetire = Math.max(0, 60 - retAge);
  const monthlyAfterInflation = retMonthly * Math.pow(1.06, yearsToRetire);
  const corpusNeeded = monthlyAfterInflation * 12 * 25;
  const monthlySIPNeeded = () => {
    const r = retReturn / 12 / 100, n = yearsToRetire * 12;
    if (n === 0) return 0;
    return corpusNeeded * r / ((Math.pow(1 + r, n) - 1) * (1 + r));
  };

  // Compare
  const cmpSipFV = sipAccumulate(cmpMonthly, cmpRate, cmpYrs);
  const cmpStepFV = stepUpSipAccumulate(cmpMonthly, cmpStepUp, cmpRate, cmpYrs).balance;
  const cmpLumpsumEquivalent = cmpMonthly * 12 * cmpYrs;
  const cmpLumpFV = lumpsumFV(cmpLumpsumEquivalent, cmpRate, cmpYrs);
  const cmpMax = Math.max(cmpSipFV, cmpStepFV, cmpLumpFV);

  const tools = [
    { id: "SIP", label: "📈 SIP Growth" },
    { id: "StepUp", label: "📶 Step-Up SIP" },
    { id: "Lumpsum", label: "🪙 Lumpsum" },
    { id: "SWP", label: "💵 SWP" },
    { id: "STP", label: "🔄 STP" },
    { id: "SIPcumSWP", label: "🔁 SIP cum SWP" },
    { id: "EMI", label: "🏠 EMI" },
    { id: "Retirement", label: "🌅 Retirement" },
    { id: "Compare", label: "⚖️ Compare" },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 5% 80px" }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="section-label">Financial Tools</div>
        <h1 className="section-title serif">Smart Calculators for Smarter Decisions</h1>
        <p className="section-sub" style={{ margin: "16px auto 0", textAlign: "center" }}>
          Interactive tools to model your financial future — in real time.
        </p>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 40, justifyContent: "center", flexWrap: "wrap" }}>
        {tools.map(t => (
          <button key={t.id} className={`tab-btn ${activeTool === t.id ? "active" : ""}`} onClick={() => setActiveTool(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      {activeTool === "SIP" && (
        <div className="glass-card" style={{ padding: 40 }}>
          <h2 className="serif" style={{ fontSize: 26, color: COLORS.white, marginBottom: 8 }}>SIP Growth Calculator</h2>
          <p style={{ color: COLORS.slate, fontSize: 14, marginBottom: 32 }}>Estimate the wealth you can build through systematic monthly investments.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
            <div>
              <SliderInput label="Monthly Investment" value={sipAmt} min={1000} max={100000} step={500}
                onChange={setSipAmt} format={v => "₹" + v.toLocaleString("en-IN")} />
              <SliderInput label="Expected Return (p.a.)" value={sipRate} min={6} max={30} step={0.5}
                onChange={setSipRate} format={v => v + "%"} />
              <SliderInput label="Investment Duration" value={sipYrs} min={1} max={40}
                onChange={setSipYrs} format={v => v + " years"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <ResultBox label="Total Invested" value={formatINR(sipInvested)} />
              <ResultBox label="Wealth Gained" value={formatINR(sipGains)} />
              <ResultBox label="Maturity Value" value={formatINR(sipWealth)} highlight />
              <div style={{ padding: "16px", background: "rgba(76,175,140,0.08)", borderRadius: 10, border: "1px solid rgba(76,175,140,0.2)" }}>
                <div style={{ fontSize: 12, color: COLORS.slate }}>You multiply your money by</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#4CAF8C" }}>{(sipWealth / sipInvested).toFixed(1)}x</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTool === "StepUp" && (
        <div className="glass-card" style={{ padding: 40 }}>
          <h2 className="serif" style={{ fontSize: 26, color: COLORS.white, marginBottom: 8 }}>Step-Up SIP Calculator</h2>
          <p style={{ color: COLORS.slate, fontSize: 14, marginBottom: 32 }}>See how increasing your SIP every year as your income grows accelerates wealth creation.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
            <div>
              <SliderInput label="Starting Monthly SIP" value={stepAmt} min={1000} max={100000} step={500}
                onChange={setStepAmt} format={v => "₹" + v.toLocaleString("en-IN")} />
              <SliderInput label="Annual Step-Up" value={stepUpPct} min={0} max={30} step={1}
                onChange={setStepUpPct} format={v => v + "%"} />
              <SliderInput label="Expected Return (p.a.)" value={stepRate} min={6} max={30} step={0.5}
                onChange={setStepRate} format={v => v + "%"} />
              <SliderInput label="Investment Duration" value={stepYrs} min={1} max={40}
                onChange={setStepYrs} format={v => v + " years"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <ResultBox label="Total Invested" value={formatINR(stepResult.totalInvested)} />
              <ResultBox label="Wealth Gained" value={formatINR(stepResult.balance - stepResult.totalInvested)} />
              <ResultBox label="Maturity Value" value={formatINR(stepResult.balance)} highlight />
            </div>
          </div>
        </div>
      )}

      {activeTool === "Lumpsum" && (
        <div className="glass-card" style={{ padding: 40 }}>
          <h2 className="serif" style={{ fontSize: 26, color: COLORS.white, marginBottom: 8 }}>Lumpsum Calculator</h2>
          <p style={{ color: COLORS.slate, fontSize: 14, marginBottom: 32 }}>Project the future value of a one-time investment.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
            <div>
              <SliderInput label="Investment Amount" value={lumpAmt} min={10000} max={10000000} step={10000}
                onChange={setLumpAmt} format={v => "₹" + (v / 100000).toFixed(1) + "L"} />
              <SliderInput label="Expected Return (p.a.)" value={lumpRate} min={6} max={30} step={0.5}
                onChange={setLumpRate} format={v => v + "%"} />
              <SliderInput label="Investment Duration" value={lumpYrs} min={1} max={40}
                onChange={setLumpYrs} format={v => v + " years"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <ResultBox label="Invested Amount" value={formatINR(lumpAmt)} />
              <ResultBox label="Wealth Gained" value={formatINR(lumpWealth - lumpAmt)} />
              <ResultBox label="Maturity Value" value={formatINR(lumpWealth)} highlight />
            </div>
          </div>
        </div>
      )}

      {activeTool === "SWP" && (
        <div className="glass-card" style={{ padding: 40 }}>
          <h2 className="serif" style={{ fontSize: 26, color: COLORS.white, marginBottom: 8 }}>SWP Calculator</h2>
          <p style={{ color: COLORS.slate, fontSize: 14, marginBottom: 32 }}>See how long your corpus lasts when you withdraw a fixed amount every month.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
            <div>
              <SliderInput label="Initial Corpus" value={swpCorpus} min={100000} max={20000000} step={50000}
                onChange={setSwpCorpus} format={v => "₹" + (v / 100000).toFixed(1) + "L"} />
              <SliderInput label="Monthly Withdrawal" value={swpWithdrawal} min={1000} max={200000} step={1000}
                onChange={setSwpWithdrawal} format={v => "₹" + v.toLocaleString("en-IN")} />
              <SliderInput label="Expected Return (p.a.)" value={swpRate} min={4} max={20} step={0.5}
                onChange={setSwpRate} format={v => v + "%"} />
              <SliderInput label="Withdrawal Period" value={swpYrs} min={1} max={40}
                onChange={setSwpYrs} format={v => v + " years"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <ResultBox label="Total Withdrawn" value={formatINR(swpResult.totalWithdrawn)} />
              <ResultBox label="Remaining Balance" value={formatINR(swpResult.balance)} highlight />
              <div style={{ padding: "16px", background: swpResult.monthsLasted >= swpYrs * 12 ? "rgba(76,175,140,0.08)" : "rgba(224,107,84,0.08)", borderRadius: 10, border: `1px solid ${swpResult.monthsLasted >= swpYrs * 12 ? "rgba(76,175,140,0.2)" : "rgba(224,107,84,0.2)"}` }}>
                <div style={{ fontSize: 12, color: COLORS.slate }}>Corpus lasted</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: swpResult.monthsLasted >= swpYrs * 12 ? "#4CAF8C" : "#E06B54" }}>
                  {swpResult.monthsLasted >= swpYrs * 12 ? `Full ${swpYrs} years` : `${(swpResult.monthsLasted / 12).toFixed(1)} of ${swpYrs} years`}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTool === "STP" && (
        <div className="glass-card" style={{ padding: 40 }}>
          <h2 className="serif" style={{ fontSize: 26, color: COLORS.white, marginBottom: 8 }}>STP Calculator</h2>
          <p style={{ color: COLORS.slate, fontSize: 14, marginBottom: 32 }}>Model moving a lumpsum gradually from a low-risk fund into a growth fund.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
            <div>
              <SliderInput label="Amount in Source Fund" value={stpCorpus} min={100000} max={10000000} step={50000}
                onChange={setStpCorpus} format={v => "₹" + (v / 100000).toFixed(1) + "L"} />
              <SliderInput label="Monthly Transfer" value={stpTransfer} min={1000} max={200000} step={1000}
                onChange={setStpTransfer} format={v => "₹" + v.toLocaleString("en-IN")} />
              <SliderInput label="Source Fund Return (p.a.)" value={stpSourceRate} min={3} max={12} step={0.5}
                onChange={setStpSourceRate} format={v => v + "%"} />
              <SliderInput label="Destination Fund Return (p.a.)" value={stpDestRate} min={6} max={30} step={0.5}
                onChange={setStpDestRate} format={v => v + "%"} />
              <SliderInput label="Transfer Duration" value={stpYrs} min={1} max={20}
                onChange={setStpYrs} format={v => v + " years"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <ResultBox label="Total Transferred" value={formatINR(stpResult.totalTransferred)} />
              <ResultBox label="Destination Fund Value" value={formatINR(stpResult.dest)} highlight />
              <ResultBox label="Remaining in Source" value={formatINR(stpResult.source)} />
            </div>
          </div>
        </div>
      )}

      {activeTool === "SIPcumSWP" && (
        <div className="glass-card" style={{ padding: 40 }}>
          <h2 className="serif" style={{ fontSize: 26, color: COLORS.white, marginBottom: 8 }}>SIP cum SWP Calculator</h2>
          <p style={{ color: COLORS.slate, fontSize: 14, marginBottom: 32 }}>Build a corpus through SIP, then draw a regular income from it through SWP.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
            <div>
              <h3 style={{ fontSize: 14, color: COLORS.gold, marginBottom: 12 }}>Accumulation Phase (SIP)</h3>
              <SliderInput label="Monthly SIP" value={scsMonthly} min={1000} max={100000} step={500}
                onChange={setScsMonthly} format={v => "₹" + v.toLocaleString("en-IN")} />
              <SliderInput label="SIP Duration" value={scsSipYrs} min={1} max={35}
                onChange={setScsSipYrs} format={v => v + " years"} />
              <SliderInput label="Expected Return (p.a.)" value={scsSipRate} min={6} max={30} step={0.5}
                onChange={setScsSipRate} format={v => v + "%"} />
              <h3 style={{ fontSize: 14, color: COLORS.gold, margin: "24px 0 12px" }}>Withdrawal Phase (SWP)</h3>
              <SliderInput label="Monthly Withdrawal" value={scsWithdrawal} min={1000} max={300000} step={1000}
                onChange={setScsWithdrawal} format={v => "₹" + v.toLocaleString("en-IN")} />
              <SliderInput label="Withdrawal Duration" value={scsSwpYrs} min={1} max={35}
                onChange={setScsSwpYrs} format={v => v + " years"} />
              <SliderInput label="Expected Return (p.a.)" value={scsSwpRate} min={4} max={20} step={0.5}
                onChange={setScsSwpRate} format={v => v + "%"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <ResultBox label="Corpus at End of SIP Phase" value={formatINR(scsCorpusAtRetirement)} highlight />
              <ResultBox label="Total Withdrawn" value={formatINR(scsWithdrawalResult.totalWithdrawn)} />
              <ResultBox label="Balance After Withdrawal Phase" value={formatINR(scsWithdrawalResult.balance)} />
            </div>
          </div>
        </div>
      )}

      {activeTool === "EMI" && (
        <div className="glass-card" style={{ padding: 40 }}>
          <h2 className="serif" style={{ fontSize: 26, color: COLORS.white, marginBottom: 8 }}>EMI Calculator</h2>
          <p style={{ color: COLORS.slate, fontSize: 14, marginBottom: 32 }}>Know your monthly installment before you take a loan.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
            <div>
              <SliderInput label="Loan Amount" value={loanAmt} min={100000} max={10000000} step={50000}
                onChange={setLoanAmt} format={v => "₹" + (v / 100000).toFixed(1) + "L"} />
              <SliderInput label="Interest Rate (p.a.)" value={loanRate} min={5} max={24} step={0.1}
                onChange={setLoanRate} format={v => v + "%"} />
              <SliderInput label="Loan Tenure" value={loanTenure} min={1} max={30}
                onChange={setLoanTenure} format={v => v + " years"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <ResultBox label="Monthly EMI" value={formatINR(emi)} highlight />
              <ResultBox label="Principal Amount" value={formatINR(loanAmt)} />
              <ResultBox label="Total Interest" value={formatINR(totalInt)} />
              <ResultBox label="Total Payment" value={formatINR(totalPay)} />
            </div>
          </div>
        </div>
      )}

      {activeTool === "Retirement" && (
        <div className="glass-card" style={{ padding: 40 }}>
          <h2 className="serif" style={{ fontSize: 26, color: COLORS.white, marginBottom: 8 }}>Retirement Planner Calculator</h2>
          <p style={{ color: COLORS.slate, fontSize: 14, marginBottom: 32 }}>Find out how much you need to save today for a comfortable retirement.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
            <div>
              <SliderInput label="Current Age" value={retAge} min={20} max={55}
                onChange={setRetAge} format={v => v + " years"} />
              <SliderInput label="Monthly Expenses Today" value={retMonthly} min={20000} max={500000} step={5000}
                onChange={setRetMonthly} format={v => "₹" + (v / 1000).toFixed(0) + "K"} />
              <SliderInput label="Expected Investment Return" value={retReturn} min={6} max={18} step={0.5}
                onChange={setRetReturn} format={v => v + "%"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <div style={{ padding: 16, background: "rgba(91,138,240,0.08)", borderRadius: 12, border: "1px solid rgba(91,138,240,0.2)" }}>
                <div style={{ fontSize: 12, color: COLORS.slate }}>Years to retirement</div>
                <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'Playfair Display',serif", color: "#5B8AF0" }}>{yearsToRetire}</div>
              </div>
              <ResultBox label="Corpus Required" value={formatINR(corpusNeeded)} highlight />
              <ResultBox label="Monthly SIP Needed" value={formatINR(monthlySIPNeeded())} />
            </div>
          </div>
        </div>
      )}

      {activeTool === "Compare" && (
        <div className="glass-card" style={{ padding: 40 }}>
          <h2 className="serif" style={{ fontSize: 26, color: COLORS.white, marginBottom: 8 }}>Compare Calculator Outcomes</h2>
          <p style={{ color: COLORS.slate, fontSize: 14, marginBottom: 32 }}>Monthly SIP vs. Annual Step-Up SIP vs. One-Time (Lumpsum) — for the same total money committed, over the same period.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 32 }} className="grid-2">
            <div>
              <SliderInput label="Monthly Amount (SIP base)" value={cmpMonthly} min={1000} max={100000} step={500}
                onChange={setCmpMonthly} format={v => "₹" + v.toLocaleString("en-IN")} />
              <SliderInput label="Annual Step-Up (for Step-Up SIP)" value={cmpStepUp} min={0} max={30} step={1}
                onChange={setCmpStepUp} format={v => v + "%"} />
              <SliderInput label="Expected Return (p.a.)" value={cmpRate} min={6} max={30} step={0.5}
                onChange={setCmpRate} format={v => v + "%"} />
              <SliderInput label="Duration" value={cmpYrs} min={1} max={40}
                onChange={setCmpYrs} format={v => v + " years"} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
              <ResultBox label="Monthly SIP — Maturity Value" value={formatINR(cmpSipFV)} />
              <ResultBox label="Step-Up SIP — Maturity Value" value={formatINR(cmpStepFV)} />
              <ResultBox label="Lumpsum — Maturity Value" value={formatINR(cmpLumpFV)} highlight />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { label: "Monthly SIP", value: cmpSipFV, color: "#5B8AF0" },
              { label: "Annual Step-Up SIP", value: cmpStepFV, color: "#4CAF8C" },
              { label: "One-Time (Lumpsum)", value: cmpLumpFV, color: COLORS.gold },
            ].map(({ label, value, color }) => (
              <div key={label}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: COLORS.slateLight, marginBottom: 6 }}>
                  <span>{label}</span><span style={{ fontWeight: 600, color: COLORS.white }}>{formatINR(value)}</span>
                </div>
                <div style={{ height: 10, borderRadius: 6, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${Math.max(2, (value / cmpMax) * 100)}%`, background: color, borderRadius: 6, transition: "width 0.3s" }} />
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: COLORS.slate, marginTop: 20, lineHeight: 1.6 }}>
            Note: the lumpsum figure assumes the same total amount you would have invested via SIP over {cmpYrs} years, invested as a single sum on day one — real-world lumpsum availability varies. All figures are illustrative and not a guarantee of returns.
          </p>
        </div>
      )}
    </div>
  );
}
