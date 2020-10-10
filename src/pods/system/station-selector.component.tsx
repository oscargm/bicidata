import * as React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  makeStyles,
  FormHelperText,
  Typography,
  InputLabel,
  NativeSelect,
} from '@material-ui/core';
import { StationInformation, SystemStatus } from './model';
import { getSystemStatus } from './api/system.service';
import { mapSystemStatus } from './mappers';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

interface StationSelectorProps {
  stationSelected: StationInformation;
  onSelectStation: (station: StationInformation) => void;
}

export const StationSelector: React.FC<StationSelectorProps> = (
  props: StationSelectorProps
) => {
  const classes = useStyles();
  const { stationSelected, onSelectStation } = props;
  const [availableStations, setAvailableStations] = React.useState<
    SystemStatus
  >(null);
  React.useEffect(() => {
    getSystemStatus().then((response) =>
      setAvailableStations(mapSystemStatus(response))
    );
  }, []);
  return (
    <>
      {availableStations?.stations?.length > 0 ? (
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="stationSelector">Select a station</InputLabel>
          <NativeSelect
            id="stationSelector"
            onChange={(event: any) =>
              onSelectStation(
                availableStations.stations.find(
                  (station) => station.id === event.target.value
                )
              )
            }
          >
            <option value=""></option>
            {availableStations.stations.map((station) => (
              <option key={`station-${station.id}`} value={station.id}>
                {station.name}
              </option>
            ))}
          </NativeSelect>
          <FormHelperText>Select a station</FormHelperText>
        </FormControl>
      ) : (
        <Typography variant={'subtitle1'}>Loading...</Typography>
      )}
    </>
  );
};
