import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  field: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusIconOk: { color: 'green' },
  statusIconko: { color: 'red' },
}));

export const StatusIcon: React.FC<{ label: string; status: boolean }> = ({
  label = '',
  status = false,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.field}>
      <Typography variant={'subtitle1'}>{label}: </Typography>
      {status ? (
        <CheckIcon classes={{ root: classes.statusIconOk }} />
      ) : (
        <CloseIcon classes={{ root: classes.statusIconko }} />
      )}
    </div>
  );
};
