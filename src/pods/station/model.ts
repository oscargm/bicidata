export interface StationStatusDetail {
  id: string;
  bikes_available: BikeTypes;
  bikes_disabled: number;
  docks_available: number;
  docks_disabled: number;
  is_installed: boolean;
  is_renting: boolean;
  is_returning: boolean;
  is_charging: boolean;
  last_reported: number;
}

export interface BikeTypes {
  mechanical: number;
  ebike: number;
}
