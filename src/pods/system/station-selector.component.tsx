import * as React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  makeStyles,
  FormHelperText,
} from '@material-ui/core';
import { SystemStatus } from './model';
import { getSystemStatus } from './api/system.service';
import { mapSystemStatus } from './mappers';
import { Typography } from '@material-ui/core';

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
  stationSelected: string;
  onSelectStation: (stationId: string) => void;
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
          <Select
            value={stationSelected}
            onChange={(
              event: React.ChangeEvent<{
                name?: string;
                value: unknown;
              }>
            ) => onSelectStation(String(event.target.value))}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Select a station' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {availableStations.stations.map((station) => (
              <MenuItem key={`station-${station.id}`} value={station.id}>
                {station.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Select a station</FormHelperText>
        </FormControl>
      ) : (
        <Typography variant={'subtitle1'}>Loading...</Typography>
      )}
    </>
  );
};
