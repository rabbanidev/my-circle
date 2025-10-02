import type { IsErrorResponse, IError } from "./error.type";
import type { IMeta } from "./meta.type";
import type { IResponse } from "./response.type";

import type {
  ILoginFormData,
  IAuthResponse,
  IAuthState,
  IAuthUser,
} from "./auth.type";

interface ILocation {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  address?: {
    city?: string;
    town?: string;
    state?: string;
    country?: string;
    postcode?: string;
  };
}

export type {
  IError,
  IsErrorResponse,
  ILocation,
  IMeta,
  IResponse,
  ILoginFormData,
  IAuthResponse,
  IAuthState,
  IAuthUser,
};
