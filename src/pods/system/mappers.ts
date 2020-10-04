import { SystemStatus as APISystemStatus } from './api/model';
import { SystemStatus as VMSystemStatus } from './model';

export const mapSystemStatus = (input: APISystemStatus): VMSystemStatus => ({
  stations: input.data.stations.map((station) => ({
    id: station.station_id,
    name: station.name,
    physical_configuration: station.physical_configuration,
    location: {
      lat: station.lat,
      lon: station.lon,
      altitude: station.altitude,
      address: station.address,
      post_code: station.post_code,
      nearby_distance: station.nearby_distance,
    },
    capacity: station.capacity,
    rental_methods: station.rental_methods,
  })),
});
