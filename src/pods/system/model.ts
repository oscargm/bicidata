import { PHYSICAL_CONFIGURATIONS, RENTAL_METHODS } from 'pods/core';

export interface StationLocation {
  lat: number;
  lon: number;
  altitude: number;
  address: string;
  post_code: string;
  nearby_distance: number;
}

export interface StationInformation {
  id: string;
  name: string;
  physical_configuration: PHYSICAL_CONFIGURATIONS;
  location: StationLocation;
  capacity: number;
  rental_methods: RENTAL_METHODS;
}

export interface SystemStatus {
  stations: StationInformation[];
}
