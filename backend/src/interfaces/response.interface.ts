export interface IResponse<T> {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
}

export interface ISendResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?:
    | {
        page: number;
        limit: number;
        total: number;
      }
    | undefined
    | null;
  data?: T | null;
}
