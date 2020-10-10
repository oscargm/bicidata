import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { StationSelector } from 'pods/system';
import { StationDetails } from 'pods/station';
import { makeStyles } from '@material-ui/core';
import { StationInformation } from 'pods/system/model';

const useStyles = makeStyles((theme) => ({
  landing: { display: 'flex', flexDirection: 'column' },
  selector: { width: '10rem' },
}));

export const Landing: React.FC = () => {
  const classes = useStyles();
  const [stationSelected, setStationSelected] = React.useState<
    StationInformation
  >(null);
  const onSelectStation = (station: StationInformation) => {
    console.log('stationSelected', station);
    setStationSelected(station);
  };
  return (
    <div className={classes.landing}>
      <div>
        <Typography variant={'h1'}>Bicidata</Typography>
      </div>
      <div className={classes.selector}>
        <StationSelector
          stationSelected={stationSelected}
          onSelectStation={onSelectStation}
        />
      </div>
      <StationDetails station={stationSelected} />
    </div>
  );
};
