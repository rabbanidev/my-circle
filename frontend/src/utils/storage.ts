import Cookies from "js-cookie";

const parseExpires = (envValue: string): number => {
  const match = envValue.match(/^(\d+)([smhd])$/);
  if (!match) return 1;

  const value = parseInt(match[1], 10);
  const unit = match[2];

  switch (unit) {
    case "s":
      return value / 86400;
    case "m":
      return value / 1440;
    case "h":
      return value / 24;
    case "d":
      return value;
    default:
      return 1;
  }
};

// TODO: All cookie functions
export const setCookie = (
  key: string,
  value: string,
  options: Cookies.CookieAttributes & { expires?: string | number }
) => {
  if (typeof window === "undefined") return;

  let expires: number | Date | undefined = undefined;

  if (options.expires) {
    if (typeof options.expires === "string") {
      expires = parseExpires(options.expires);
    } else {
      expires = options.expires;
    }
  }

  Cookies.set(key, value, { ...options, expires });
};

export const getCookie = (key: string) => {
  if (typeof window === "undefined") return;
  return Cookies.get(key);
};

export const removeCookie = (key: string) => {
  if (typeof window === "undefined") return;
  Cookies.remove(key);
};

// TODO: All localStorage functions
export const setLocalStorage = <T>(key: string, value: T) => {
  if (typeof window === "undefined") return null;
  console.log(value);
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem(key);
  if (!value) return null;

  return JSON.parse(value);
};

export const removeLocalStorage = (key: string) => {
  if (typeof window === "undefined") return null;
  localStorage.removeItem(key);
};

export const removeAllLocalStorage = () => {
  if (typeof window === "undefined") return null;
  localStorage.clear();
};
