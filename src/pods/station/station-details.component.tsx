import * as React from 'react';

import {
  Card,
  CardContent,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { StationInformation } from 'pods/system/model';
import { StationStatusDetail } from './model';
import { mapStationStatus } from './mappers';
import { getStationStatus } from './api/station.service';
import { StatusIcon } from 'pods/common';
import mechanicalIcon from 'assets/mechanical.png';
import ebikeIcon from 'assets/mechanical.png';

const useStyles = makeStyles((theme) => ({
  container: { display: 'flex', justifyContent: 'center' },
  stationDetails: {
    width: '50%',
  },
  information: { display: 'flex', flexDirection: 'column' },
  field: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bikeIcon: {
    boxSizing: 'border-box',
    paddingRight: '1rem',
    backgroundPosition: 'center right',
    backgroundSize: '0.5rem 0.5rem',
    backgroundRepeat: 'no-repeat',
  },
  mechanical: {
    backgroundImage: `url(${mechanicalIcon})`,
  },
  ebike: {
    backgroundImage: `url(${ebikeIcon})`,
  },
}));

interface StationDetailsProps {
  station: StationInformation;
}

export const StationDetails: React.FC<StationDetailsProps> = (
  props: StationDetailsProps
) => {
  const classes = useStyles();
  const { station } = props;
  const [stationStatusDetail, setStationStatusDetail] = React.useState<
    StationStatusDetail
  >(null);
  React.useEffect(() => {
    station !== null &&
      getStationStatus().then((response) =>
        setStationStatusDetail(mapStationStatus(response, station.id))
      );
  }, [station]);
  return (
    stationStatusDetail !== null && (
      <Container className={classes.container} maxWidth={'xl'}>
        <Card className={classes.stationDetails}>
          <CardContent className={classes.information}>
            <Typography variant={'h6'}>{station.name}</Typography>
            <div className={classes.field}>
              <div>
                <Typography variant={'subtitle1'}>Bikes</Typography>
              </div>
              <div>
                <div className={`${classes.bikeIcon} ${classes.mechanical}`}>
                  <Typography variant={'subtitle2'}>
                    {stationStatusDetail.bikes_available.mechanical}
                  </Typography>
                </div>
                <div className={`${classes.bikeIcon} ${classes.ebike}`}>
                  <Typography variant={'subtitle2'}>
                    {stationStatusDetail.bikes_available.ebike}
                  </Typography>
                </div>
              </div>
            </div>
            <div className={classes.field}>
              <Typography variant={'subtitle1'}>Docks</Typography>
              <Typography variant={'subtitle2'}>
                {stationStatusDetail.docks_available}
              </Typography>
            </div>
            <StatusIcon
              label={'Renting'}
              status={stationStatusDetail.is_renting}
            />
            <StatusIcon
              label={'Returning'}
              status={stationStatusDetail.is_returning}
            />
            <StatusIcon
              label={'Charging'}
              status={stationStatusDetail.is_charging}
            />
          </CardContent>
        </Card>
      </Container>
    )
  );
};
