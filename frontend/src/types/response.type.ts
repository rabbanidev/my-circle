import type { IMeta } from "./meta.type";

export interface IResponse<T> {
  data: T;
  meta?: IMeta;
}
