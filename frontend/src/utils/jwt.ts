import { jwtDecode } from "jwt-decode";

export function decodeToken<T>(token: string): T | null {
  try {
    const decoded = jwtDecode<T>(token);
    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}
