import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

export const TaskDescriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  // give default value because the props is optional
  const {
    onChange = (e) => {
      console.log(e);
    },
    disabled = false,
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};
