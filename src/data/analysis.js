export const candlestickPatterns = [
  {
    name: "Doji",
    icon: "ph:minus",
    description: "Open and close are nearly equal, forming a cross shape. Signals market indecision.",
    signal: "Reversal / Caution",
    type: "neutral",
  },
  {
    name: "Engulfing Candle",
    icon: "ph:arrows-out-cardinal",
    description: "A large candle that fully 'engulfs' the previous smaller candle. Signals a strong directional shift.",
    signal: "Strong Reversal",
    type: "reversal",
  },
  {
    name: "Hammer",
    icon: "ph:hammer",
    description: "Small body at the top with a long lower wick. Forms at the bottom of a downtrend, suggesting buyers stepped in.",
    signal: "Bullish Reversal",
    type: "bullish",
  },
  {
    name: "Shooting Star",
    icon: "ph:star",
    description: "Small body at the bottom with a long upper wick. Forms at the top of an uptrend, suggesting sellers pushed price back down.",
    signal: "Bearish Reversal",
    type: "bearish",
  },
];

export const technicalIndicators = [
  {
    name: "Moving Average",
    icon: "ph:wave-sine",
    description: "Smooths price data over a set period to show the overall trend direction. Common settings: 20, 50, 200.",
    use: "Identify trend direction and dynamic support/resistance.",
  },
  {
    name: "RSI",
    icon: "ph:gauge",
    description: "Relative Strength Index measures how fast and how much price has changed. Ranges from 0–100.",
    use: "Identify overbought (>70) or oversold (<30) market conditions.",
  },
  {
    name: "MACD",
    icon: "ph:chart-bar",
    description: "Moving Average Convergence Divergence — shows the relationship between two moving averages.",
    use: "Spot trend changes and momentum shifts with crossovers.",
  },
  {
    name: "Bollinger Bands",
    icon: "ph:brackets-curly",
    description: "Three bands around price that expand during volatility and contract during consolidation.",
    use: "Identify potential breakouts and measure market volatility.",
  },
];

export const chartPatterns = [
  {
    name: "Double Top",
    signal: "Bearish",
    description: "Price reaches the same resistance level twice, then breaks lower. Signals a potential trend reversal from bullish to bearish.",
  },
  {
    name: "Double Bottom",
    signal: "Bullish",
    description: "Price tests the same support level twice, then breaks higher. Signals a potential reversal from bearish to bullish.",
  },
  {
    name: "Head and Shoulders",
    signal: "Bearish",
    description: "Three peaks with the middle peak (head) higher than the two shoulders. Breaking the neckline signals a downtrend.",
  },
  {
    name: "Triangle Pattern",
    signal: "Continuation",
    description: "Price consolidates between converging trendlines. A breakout in either direction signals a continuation of the prior trend.",
  },
];

export const chartExamples = [
  {
    title: "EUR/USD — Support Bounce Setup",
    scenario: "Price pulled back to a well-established support zone at 1.0800, where buyers had stepped in on previous occasions. A hammer candlestick formed at this level.",
    analysis: "The combination of support confluence and the hammer pattern suggests buyers are defending the level. A stop below 1.0780 with a target at 1.0900 gives a favorable risk-to-reward.",
    lesson: "Wait for confirmation at key levels before entering. Don't rush in before you see a candlestick signal.",
  },
  {
    title: "GBP/USD — Resistance Rejection",
    scenario: "GBP/USD tested the 1.2700 resistance area three times. Each attempt was followed by a shooting star candle and a move back lower.",
    analysis: "Triple resistance rejections are significant. Combined with bearish candlestick signals, the probability of a reversal increases. Sellers appear well-positioned at this level.",
    lesson: "Resistance that holds multiple times is stronger. The more times price tests a level without breaking, the more meaningful that level becomes.",
  },
  {
    title: "USD/JPY — Trendline Breakout",
    scenario: "USD/JPY had been in an ascending channel for several weeks. Price broke above the upper channel boundary on strong momentum.",
    analysis: "A trendline break with a strong bullish close suggests a potential acceleration in the uptrend. A pullback to the broken trendline as new support is a common entry technique.",
    lesson: "Broken resistance often becomes new support. Waiting for a retest after a breakout can provide better entry with a tighter stop loss.",
  },
];
