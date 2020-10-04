export interface StationStatus {
  station_id: string;
  num_bikes_available: number;
  num_bikes_available_types: BikeTypes;
  num_bikes_disabled: number;
  num_docks_available: number;
  num_docks_disabled: number;
  is_installed: number;
  is_renting: number;
  is_returning: number;
  last_reported: number;
  is_charging_station: boolean;
}

export interface BikeTypes {
  mechanical: number;
  ebike: number;
}

export interface StationStatusResponse {
  data: {
    stations: StationStatus[];
  };
}
