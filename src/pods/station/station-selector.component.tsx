import * as React from 'react';
import { Typography, Select, MenuItem } from '@material-ui/core';

export const StationSelector: React.FC = () => (
  <>
    <Typography variant={'caption'}>Select a station</Typography>
    <Select>
      <MenuItem value="" selected>
        <em>None</em>
      </MenuItem>
    </Select>
  </>
);
