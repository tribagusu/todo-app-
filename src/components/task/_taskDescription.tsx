import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { ITaskDescription } from './interfaces/ITaskDescription';
import PropTypes from 'prop-types';

export const TaskDescription: FC<ITaskDescription> = (
  props,
): ReactElement => {
  // destructure
  const {
    description = 'Lorem ipsum, dolor sit amet consectetur enim!',
  } = props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};
