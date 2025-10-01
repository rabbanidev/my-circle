export interface ILocation {
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
