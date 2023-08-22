import { TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { colours } from "./colours";
import React from "react";

interface Props {
  error?: string;
  [x: string]: any;
}

export const ErrorMessage = styled(({ ...props }) => (
  <Typography
    variant="subtitle1"
    fontSize="0.8rem"
    align="center"
    color={colours.red}
    {...props}
  />
))``;

export const CustomInputField = React.forwardRef<HTMLInputElement, Props>(
  ({ error, ...props }, ref) => {
    return (
      <>
        <TextField variant="outlined" fullWidth ref={ref} {...props} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  }
);
