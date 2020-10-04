import { PHYSICAL_CONFIGURATIONS, RENTAL_METHODS } from 'pods/core';

export interface Groups {
  0: string;
}

export interface StationInformation {
  station_id: string;
  name: string;
  physical_configuration: PHYSICAL_CONFIGURATIONS;
  lat: number;
  lon: number;
  altitude: number;
  address: string;
  post_code: string;
  capacity: number;
  rental_methods: RENTAL_METHODS;
  groups: Groups;
  obcn: string;
  nearby_distance: number;
}

export interface SystemData {
  stations: StationInformation[];
}

export interface SystemStatus {
  data: SystemData;
}
