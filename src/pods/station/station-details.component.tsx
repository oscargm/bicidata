import * as React from 'react';
import { StationStatusDetail } from './model';
import { mapStationStatus } from './mappers';
import { getStationStatus } from './api/station.service';
import { makeStyles } from '@material-ui/core';
import { StationInformation } from 'pods/system/model';

const useStyles = makeStyles((theme) => ({
  information: { display: 'flex', flexDirection: 'column' },
  field: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  return stationStatusDetail !== null ? (
    <>
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
      <iframe
        width="300"
        height="170"
        frameBorder="0"
        scrolling="no"
        src={`https://maps.google.com/maps?q=${station.location.lat},${station.location.lon}&hl=es&z=14&amp;output=embed`}
      ></iframe>
      <br />
      <small>
        <a
          href={`https://maps.google.com/maps?q=${station.location.lat},${station.location.lon}&hl=es;z=14&amp;output=embed`}
          style={{ color: '#0000FF', textAlign: 'left' }}
          target="_blank"
          rel="noreferrer"
        >
          See map bigger
        </a>
      </small>
    </>
  ) : (
    <span>loading...</span>
  );
};
