import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { StationSelector } from 'pods/system';
import { StationDetails } from 'pods/station';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  landing: { display: 'flex', flexDirection: 'column' },
  selector: { width: '10rem' },
}));

export const Landing: React.FC = () => {
  const classes = useStyles();
  const [stationIdSelected, setStationIdSelected] = React.useState<string>('');
  const onSelectStation = (stationId: string) => {
    setStationIdSelected(stationId);
  };
  return (
    <div className={classes.landing}>
      <div>
        <Typography variant={'h1'}>Bicidata</Typography>
      </div>
      <div className={classes.selector}>
        <StationSelector
          stationSelected={stationIdSelected}
          onSelectStation={onSelectStation}
        />
      </div>
      <StationDetails stationId={stationIdSelected} />
    </div>
  );
};
