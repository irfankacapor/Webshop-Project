import { colours } from "@/utils/colours";
import { Button, Link } from "@mui/material";
import styled from "styled-components";

export const AddToCartButton = styled(({ ...props }) => (
  <Button variant="contained" size="large" disableElevation {...props} />
))`
  box-sizing: border-box;
  text-transform: none !important;
  background-color: ${colours.blue} !important;
  padding: 10px 22px !important;
  border-radius: 5px !important;
  font-weight: 300 !important;
  :hover {
    box-shadow: rgba(140, 152, 164, 0.176) 0px 10px 40px 10px !important;
  }
`;

export const QuickCartButton = styled(({ ...props }) => (
  <Button variant="text" fullWidth size="large" component={Link} {...props} />
))`
  text-transform: none !important;
  display: flex;
  font-weight: 300 !important;
  text-align: center;
  border-radius: 5px !important;
  padding: 10px 11px !important;
  color: ${colours.title} !important;
  width: 100%;
  margin-top: 0.5rem !important;
  & span {
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;
