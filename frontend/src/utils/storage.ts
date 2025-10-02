import Cookies from "js-cookie";

// TODO: All cookie functions
export const setCookie = (
  key: string,
  value: string,
  options: Cookies.CookieAttributes
) => {
  if (typeof window === "undefined") return;
  Cookies.set(key, value, { ...options });
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
