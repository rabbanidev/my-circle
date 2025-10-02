export interface IError {
  path: string | number;
  message: string;
}

export interface IsErrorResponse {
  statusCode: number;
  success: boolean;
  message: string;
  errorMessages: IError[];
}
