const GOOGLE_ADS_CONVERSIONS = {
  leadForm: {
    sendTo: "AW-18251762927/dmBNCNeY-MEcEO-Zj_9D",
    value: 1.0,
    currency: "CAD",
  },
};

function canUseGtag() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

export function trackGoogleAdsConversion({ sendTo, value = 1.0, currency = "CAD", transactionId } = {}) {
  if (!sendTo || !canUseGtag()) {
    return false;
  }

  const payload = {
    send_to: sendTo,
    value,
    currency,
  };

  if (transactionId) {
    payload.transaction_id = transactionId;
  }

  window.gtag("event", "conversion", payload);

  return true;
}

export function trackLeadFormConversion() {
  return trackGoogleAdsConversion({
    sendTo: GOOGLE_ADS_CONVERSIONS.leadForm.sendTo,
    value: GOOGLE_ADS_CONVERSIONS.leadForm.value,
    currency: GOOGLE_ADS_CONVERSIONS.leadForm.currency,
  });
}
