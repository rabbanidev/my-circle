import { imagesPreview, imagePreview } from "./image-preview";
import {
  setCookie,
  getCookie,
  removeCookie,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  removeAllLocalStorage,
} from "./storage";
import { constants } from "./constants";
import { decodeToken } from "./jwt";
import { generateAvatar } from "./generateAvatar";

export {
  constants,
  imagePreview,
  imagesPreview,
  setCookie,
  getCookie,
  removeCookie,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  removeAllLocalStorage,
  decodeToken,
  generateAvatar,
};
