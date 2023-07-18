import { Box, Button, Grid, Link, Typography } from "@mui/material";
import styled from "styled-components";
import { colours } from "../constants/colours";

const FooterContainer = styled(Box)`
  box-sizing: border-box;
  padding: 2rem 1rem !important;
  width: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  @media (min-width: 600px) {
    max-width: 720px !important;
    width: 100% !important;
  }
  @media (min-width: 900px) {
    max-width: 1236px !important;
    width: 100% !important;
  }
`;

const LogoContainer = styled(({ ...props }) => (
  <Box component="a" href="/" title="Logo" {...props} />
))`
  display: flex;
  width: 5rem;
  cursor: auto;
  box-sizing: border-box;
`;

const PurchaseNowButton = styled(({ ...props }) => (
  <Button variant="outlined" size="small" {...props} />
))`
  text-transform: none !important;
  border-radius: 5px !important;
  padding: 10px 9px !important;
  border-color: ${colours.lightblue} !important;
  color: ${colours.blue} !important;
`;

const LinkAndLogoContainer = styled(Box)`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const LinkContainer = styled(Box)`
  margin: 0.5rem 1rem 0 0;
`;

export const Footer = () => (
  <FooterContainer>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <LinkAndLogoContainer>
          <LogoContainer>
            <img
              src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png"
              alt="logo"
              style={{ height: "100%", width: "100%" }}
            />
          </LogoContainer>
          <Box display="flex" flexDirection="row" alignItems={"center"}>
            <LinkContainer>
              <Link underline="none" href="/">
                <Typography variant="subtitle2" color={colours.title}>
                  Home
                </Typography>
              </Link>
            </LinkContainer>
            <LinkContainer>
              <Link underline="none" href="/docs/introduction">
                <Typography variant="subtitle2" color={colours.title}>
                  Documentation
                </Typography>
              </Link>
            </LinkContainer>
            <LinkContainer>
              <PurchaseNowButton>Purchase now</PurchaseNowButton>
            </LinkContainer>
          </Box>
        </LinkAndLogoContainer>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="subtitle2"
          align="center"
          gutterBottom
          color={colours.grey}
        >
          &copy; randomCompany. 2023, Company. All rights reserved
        </Typography>
        <Typography variant="caption" color={colours.grey} align="center">
          When you visit or interact with our sites, services or tools, we or
          out authorised service providers may use cookies for storing
          information to help provide you with a better, faster, and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  </FooterContainer>
);
