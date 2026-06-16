import { useState } from "react";
import { Icon } from "@iconify/react";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import DisclaimerBanner from "../components/common/DisclaimerBanner";
import CTASection from "../components/common/CTASection";
import BackgroundEffects from "../components/layout/BackgroundEffects";
import { journalEntries } from "../data/about";
import { useStaggerReveal } from "../hooks/useAnimation";

function PipCalculator() {
  const [pair, setPair] = useState("EUR/USD");
  const [lot, setLot] = useState("0.1");
  const [movement, setMovement] = useState("10");
  const [result, setResult] = useState(null);

  const pipValues = { "EUR/USD": 10, "GBP/USD": 10, "USD/JPY": 9.13, "XAU/USD": 1 };

  const calculate = () => {
    const pv = pipValues[pair] || 10;
    const value = parseFloat(lot) * parseFloat(movement) * pv;
    setResult(isNaN(value) ? null : value.toFixed(2));
  };

  return (
    <div className="bg-core-card rounded-2xl border border-core-line p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-core-sky flex items-center justify-center">
          <Icon icon="ph:calculator" className="text-core-blue text-lg" />
        </div>
        <h3 className="text-base font-bold text-core-ink">Pip Calculator</h3>
      </div>
      <div className="space-y-3 mb-5">
        <div>
          <label className="block text-xs font-semibold text-core-muted mb-1.5">Currency Pair</label>
          <select
            value={pair}
            onChange={(e) => setPair(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition"
          >
            {["EUR/USD", "GBP/USD", "USD/JPY", "XAU/USD"].map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-core-muted mb-1.5">Lot Size</label>
          <input type="number" value={lot} onChange={(e) => setLot(e.target.value)} placeholder="0.1"
            className="w-full px-3 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-core-muted mb-1.5">Pip Movement</label>
          <input type="number" value={movement} onChange={(e) => setMovement(e.target.value)} placeholder="10"
            className="w-full px-3 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition" />
        </div>
      </div>
      <button onClick={calculate} className="w-full py-2.5 rounded-xl bg-core-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors mb-4">
        Calculate
      </button>
      {result !== null && (
        <div className="bg-core-sky/50 rounded-xl p-4 text-center">
          <p className="text-xs text-core-muted mb-1">Pip Value (USD)</p>
          <p className="text-2xl font-bold text-core-blue">${result}</p>
        </div>
      )}
    </div>
  );
}

function PositionSizeCalculator() {
  const [balance, setBalance] = useState("10000");
  const [risk, setRisk] = useState("1");
  const [stopLoss, setStopLoss] = useState("20");
  const [pair, setPair] = useState("EUR/USD");
  const [result, setResult] = useState(null);

  const calculate = () => {
  const riskAmount = (parseFloat(balance) * parseFloat(risk)) / 100;
  const pipValue = 10;
  const lots = riskAmount / (parseFloat(stopLoss) * pipValue);
    setResult(isNaN(lots) ? null : lots.toFixed(2));
  };

  return (
    <div className="bg-core-card rounded-2xl border border-core-line p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center">
          <Icon icon="ph:scales" className="text-core-teal text-lg" />
        </div>
        <h3 className="text-base font-bold text-core-ink">Position Size Calculator</h3>
      </div>
      <div className="space-y-3 mb-5">
        <div>
          <label className="block text-xs font-semibold text-core-muted mb-1.5">Account Balance (USD)</label>
          <input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="10000"
            className="w-full px-3 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-core-muted mb-1.5">Risk Percentage (%)</label>
          <input type="number" value={risk} onChange={(e) => setRisk(e.target.value)} placeholder="1"
            className="w-full px-3 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-core-muted mb-1.5">Stop Loss (Pips)</label>
          <input type="number" value={stopLoss} onChange={(e) => setStopLoss(e.target.value)} placeholder="20"
            className="w-full px-3 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-core-muted mb-1.5">Currency Pair</label>
          <select value={pair} onChange={(e) => setPair(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition">
            {["EUR/USD", "GBP/USD", "USD/JPY"].map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
      </div>
      <button onClick={calculate} className="w-full py-2.5 rounded-xl bg-core-teal text-white text-sm font-semibold hover:bg-teal-700 transition-colors mb-4">
        Calculate
      </button>
      {result !== null && (
        <div className="bg-teal-50 rounded-xl p-4 text-center">
          <p className="text-xs text-core-muted mb-1">Suggested Position Size</p>
          <p className="text-2xl font-bold text-core-teal">{result} lots</p>
          <p className="text-xs text-core-muted mt-1">
            Risk: ${((parseFloat(balance) * parseFloat(risk)) / 100).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

function RiskRewardCalculator() {
  const [entry, setEntry] = useState("");
  const [stop, setStop] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const e = parseFloat(entry), s = parseFloat(stop), t = parseFloat(target);
    if (isNaN(e) || isNaN(s) || isNaN(t)) return;
    const risk = Math.abs(e - s);
    const reward = Math.abs(t - e);
    const ratio = reward / risk;
    setResult({ risk: risk.toFixed(5), reward: reward.toFixed(5), ratio: ratio.toFixed(2) });
  };

  return (
    <div className="bg-core-card rounded-2xl border border-core-line p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-core-mint flex items-center justify-center">
          <Icon icon="ph:trend-up" className="text-core-green text-lg" />
        </div>
        <h3 className="text-base font-bold text-core-ink">Risk/Reward Calculator</h3>
      </div>
      <div className="space-y-3 mb-5">
        {[
          { label: "Entry Price", val: entry, set: setEntry, ph: "1.0850" },
          { label: "Stop Loss", val: stop, set: setStop, ph: "1.0820" },
          { label: "Take Profit", val: target, set: setTarget, ph: "1.0920" },
        ].map(({ label, val, set, ph }) => (
          <div key={label}>
            <label className="block text-xs font-semibold text-core-muted mb-1.5">{label}</label>
            <input type="number" value={val} onChange={(e) => set(e.target.value)} placeholder={ph} step="0.0001"
              className="w-full px-3 py-2.5 rounded-xl border border-core-line bg-core-soft text-sm text-core-ink focus:outline-none focus:border-core-blue focus:ring-2 focus:ring-core-blue/15 transition" />
          </div>
        ))}
      </div>
      <button onClick={calculate} className="w-full py-2.5 rounded-xl bg-core-green text-white text-sm font-semibold hover:bg-green-700 transition-colors mb-4">
        Calculate
      </button>
      {result && (
        <div className="space-y-2">
          <div className="flex justify-between items-center bg-red-50 rounded-xl px-4 py-2.5">
            <span className="text-xs font-semibold text-core-muted">Risk</span>
            <span className="text-sm font-bold text-core-red">{result.risk}</span>
          </div>
          <div className="flex justify-between items-center bg-core-mint rounded-xl px-4 py-2.5">
            <span className="text-xs font-semibold text-core-muted">Reward</span>
            <span className="text-sm font-bold text-core-green">{result.reward}</span>
          </div>
          <div className="flex justify-between items-center bg-core-sky rounded-xl px-4 py-2.5">
            <span className="text-xs font-semibold text-core-muted">R:R Ratio</span>
            <span className="text-lg font-bold text-core-blue">1 : {result.ratio}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Tools() {
  const toolsRef = useStaggerReveal(0.1);

  return (
    <div>
      <PageHero
        badge="Trading Tools"
        heading="Practice smarter with"
        headingHighlight="beginner-friendly tools."
        subtext="Use simple calculators and journal templates to understand risk, position sizing, and trade planning — before risking any real capital."
      />

      {/* Tool cards overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={toolsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "ph:calculator", label: "Pip Calculator", color: "text-core-blue", bg: "bg-core-sky" },
              { icon: "ph:scales", label: "Position Size", color: "text-core-teal", bg: "bg-teal-50" },
              { icon: "ph:trend-up", label: "Risk/Reward", color: "text-core-green", bg: "bg-core-mint" },
              { icon: "ph:notebook", label: "Trading Journal", color: "text-core-gold", bg: "bg-core-amber" },
            ].map(({ icon, label, color, bg }) => (
              <div key={label} className="flex flex-col items-center gap-2 p-4 bg-core-soft rounded-2xl border border-core-line hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon icon={icon} className={`${color} text-xl`} />
                </div>
                <p className="text-xs font-bold text-core-ink text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16 md:py-20 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="soft" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Calculators"
            title="Trading Calculators"
            subtitle="Understand the numbers behind every trade before placing it."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PipCalculator />
            <PositionSizeCalculator />
            <RiskRewardCalculator />
          </div>
        </div>
      </section>

      {/* Trading Journal */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trading Journal"
            title="Track Your Practice Trades"
            subtitle="A trading journal helps you learn from each trade and improve your decision-making."
          />
          <div className="bg-core-card rounded-2xl border border-core-line shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-core-line flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-core-amber flex items-center justify-center">
                  <Icon icon="ph:notebook" className="text-core-gold text-base" />
                </div>
                <span className="text-sm font-bold text-core-ink">Trade Log</span>
              </div>
              <span className="text-xs text-core-muted">{journalEntries.length} entries</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-core-line bg-core-soft">
                    {["Date", "Pair", "Direction", "Entry", "Exit", "Pips", "Result", "Notes"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-core-muted whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {journalEntries.map((entry, i) => (
                    <tr key={i} className="border-b border-core-line hover:bg-core-soft/50 transition-colors">
                      <td className="px-4 py-3 text-xs text-core-muted">{entry.date}</td>
                      <td className="px-4 py-3 text-xs font-bold text-core-ink">{entry.pair}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${entry.direction === "Buy" ? "bg-core-mint text-core-green" : "bg-red-50 text-core-red"}`}>
                          {entry.direction}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-core-muted">{entry.entry}</td>
                      <td className="px-4 py-3 text-xs text-core-muted">{entry.exit}</td>
                      <td className={`px-4 py-3 text-xs font-bold ${entry.pips.startsWith("+") ? "text-core-green" : entry.pips === "0" ? "text-core-muted" : "text-core-red"}`}>
                        {entry.pips}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          entry.result === "Win" ? "bg-core-mint text-core-green" :
                          entry.result === "Loss" ? "bg-red-50 text-core-red" :
                          "bg-core-soft text-core-muted"
                        }`}>
                          {entry.result}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-core-muted max-w-[200px]">{entry.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-4 border-t border-core-line bg-core-soft/50">
              <p className="text-xs text-core-muted">
                <Icon icon="ph:info" className="inline mr-1 text-core-blue" />
                This is a sample journal. Future updates will allow you to add and save your own practice trade entries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerBanner />
      <CTASection
        heading="Tools work best alongside education."
        subtext="Learn how position sizing and risk management work before practising with the calculators."
        primaryLabel="Go to Academy"
        primaryTo="/academy"
      />
    </div>
  );
}
