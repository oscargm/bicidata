import { StationStatusResponse } from './api/model';
import { StationStatusDetail } from './model';

export const mapStationStatus = (
  input: StationStatusResponse,
  stationId: string
): StationStatusDetail => {
  console.log('input data stations', input.data.stations);
  const stationFound = input.data.stations.find(
    (station) => station.station_id == stationId
  );
  console.log('stationFound', stationFound);
  console.log('stationId', stationId);
  if (stationFound) {
    return {
      id: stationFound.station_id,
      bikes_available: {
        mechanical: stationFound.num_bikes_available_types.mechanical,
        ebike: stationFound.num_bikes_available_types.ebike,
      },
      bikes_disabled: stationFound.num_bikes_disabled,
      docks_available: stationFound.num_docks_available,
      docks_disabled: stationFound.num_docks_disabled,
      is_installed: Boolean(stationFound.is_installed),
      is_renting: Boolean(stationFound.is_renting),
      is_returning: Boolean(stationFound.is_returning),
      last_reported: stationFound.last_reported,
      is_charging: stationFound.is_charging_station,
    };
  } else {
    return null;
  }
};
