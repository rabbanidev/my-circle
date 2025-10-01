export interface IErrorMessage {
  path: string | number;
  message: string;
}

export interface IErrorResponse {
  statusCode: number;
  message: string;
  errorMessages: IErrorMessage[];
}

export interface INotFound {
  success: false;
  message: string;
  errorMessages: IErrorMessage[];
}
