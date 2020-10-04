import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { StationSelector } from 'pods/station';

export const Landing: React.FC = () => (
  <>
    <Typography variant={'h1'}>Bicidata</Typography>
    <StationSelector />
  </>
);
