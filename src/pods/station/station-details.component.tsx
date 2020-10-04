import * as React from 'react';
import { StationStatusDetail } from './model';
import { mapStationStatus } from './mappers';
import { getStationStatus } from './api/station.service';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  information: { display: 'flex', flexDirection: 'column' },
  field: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));

interface StationDetailsProps {
  stationId: string;
}

export const StationDetails: React.FC<StationDetailsProps> = (
  props: StationDetailsProps
) => {
  const classes = useStyles();
  const { stationId } = props;
  const [stationStatusDetail, setStationStatusDetail] = React.useState<
    StationStatusDetail
  >(null);
  React.useEffect(() => {
    stationId !== '' &&
      getStationStatus().then((response) =>
        setStationStatusDetail(mapStationStatus(response, stationId))
      );
  }, [stationId]);
  return stationStatusDetail ? (
    <div className={classes.information}>
      {Object.keys(stationStatusDetail).map((k, i) =>
        typeof stationStatusDetail[k] === 'object' ? (
          Object.keys(stationStatusDetail[k]).map((ok, j) => (
            <div key={`field-${k}-${j}`} className={classes.field}>
              <span>{`${k}:${ok}`}</span>
              <span>{stationStatusDetail[k][ok]}</span>
            </div>
          ))
        ) : (
          <div key={`field-${k}`} className={classes.field}>
            <span>{k}</span>
            <span>{stationStatusDetail[k]}</span>
          </div>
        )
      )}
    </div>
  ) : (
    <span>loading...</span>
  );
};
