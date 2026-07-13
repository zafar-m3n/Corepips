const STORAGE_KEYS = {
  gclid: "lp_gclid",
  keyword: "lp_keyword",
  location: "lp_location",
};

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

export function captureAdTrackingData() {
  const gclid = getQueryParam("gclid");
  const keyword = getQueryParam("keyword");
  const locPhysical = getQueryParam("loc_physical");

  if (gclid) sessionStorage.setItem(STORAGE_KEYS.gclid, gclid);
  if (keyword) sessionStorage.setItem(STORAGE_KEYS.keyword, keyword);
  if (locPhysical) sessionStorage.setItem(STORAGE_KEYS.location, locPhysical);
}

export function getStoredAdTrackingData() {
  return {
    gclid: sessionStorage.getItem(STORAGE_KEYS.gclid) || "",
    keyword: sessionStorage.getItem(STORAGE_KEYS.keyword) || "",
    location: sessionStorage.getItem(STORAGE_KEYS.location) || "",
  };
}

export function clearStoredAdTrackingData() {
  sessionStorage.removeItem(STORAGE_KEYS.gclid);
  sessionStorage.removeItem(STORAGE_KEYS.keyword);
  sessionStorage.removeItem(STORAGE_KEYS.location);
}
