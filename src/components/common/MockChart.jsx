export default function MockChart({ compact = false }) {
  const candles = [
    { o: 65, c: 72, h: 75, l: 62, bull: true },
    { o: 72, c: 68, h: 76, l: 65, bull: false },
    { o: 68, c: 78, h: 80, l: 66, bull: true },
    { o: 78, c: 74, h: 82, l: 71, bull: false },
    { o: 74, c: 85, h: 88, l: 72, bull: true },
    { o: 85, c: 80, h: 88, l: 77, bull: false },
    { o: 80, c: 88, h: 91, l: 79, bull: true },
    { o: 88, c: 82, h: 90, l: 80, bull: false },
    { o: 82, c: 90, h: 93, l: 80, bull: true },
    { o: 90, c: 87, h: 94, l: 84, bull: false },
    { o: 87, c: 95, h: 97, l: 85, bull: true },
    { o: 95, c: 91, h: 98, l: 88, bull: false },
  ];

  const chartH = compact ? 80 : 120;
  const scale = (v) => ((100 - v) / 100) * chartH;

  return (
    <div className={`w-full ${compact ? "h-24" : "h-36"} relative overflow-hidden`}>
      {/* MA line */}
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${candles.length * 20} ${chartH}`} preserveAspectRatio="none">
        <polyline
          points={candles.map((c, i) => `${i * 20 + 10},${scale((c.o + c.c) / 2)}`).join(" ")}
          fill="none"
          stroke="rgba(37,99,235,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points={candles.map((c, i) => `${i * 20 + 10},${scale((c.h + c.l) / 2 + 5)}`).join(" ")}
          fill="none"
          stroke="rgba(15,118,110,0.3)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3,3"
        />
      </svg>
      {/* Candles */}
      <div className="absolute inset-0 flex items-end gap-1 px-1 pb-1">
        {candles.map((c, i) => {
          const bullH = chartH - scale(Math.max(c.o, c.c));
          const bodyH = Math.abs(scale(c.o) - scale(c.c));
          const wickH = chartH - scale(c.h);
          return (
            <div key={i} className="flex-1 flex flex-col items-center justify-end relative" style={{ height: chartH }}>
              <div
                className={`w-px absolute ${c.bull ? "bg-core-green/50" : "bg-core-red/50"}`}
                style={{ height: chartH - scale(c.h) - scale(c.l) + (chartH - chartH), bottom: chartH - scale(c.l), top: scale(c.h) }}
              />
              <div
                className={`w-full rounded-sm ${c.bull ? "bg-core-green/70" : "bg-core-red/60"}`}
                style={{
                  height: Math.max(2, bodyH),
                  marginBottom: chartH - scale(Math.min(c.o, c.c)) - Math.max(2, bodyH),
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
