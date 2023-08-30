import { Box, Grid, Link, Typography } from "@mui/material";
import styled from "styled-components";
import { colours } from "@/utils/colours";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

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

const Footer = () => {
  const { t } = useTranslation();
  const currentLocation = useLocation().pathname;
  return (
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
            <Box display="flex" flexDirection="row" alignItems="center">
              <LinkContainer>
                <Link underline="none" href="/">
                  <Typography variant="subtitle2" color={colours.title}>
                    {currentLocation === "/" ? t("footer.home") : "Home"}
                  </Typography>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link underline="none" href="/docs/introduction">
                  <Typography variant="subtitle2" color={colours.title}>
                    {currentLocation === "/"
                      ? t("footer.documentation")
                      : "Documentation"}
                  </Typography>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link underline="none" href="/login/sign-up">
                  <Box
                    sx={{
                      backgroundColor: colours.blue,
                      ":hover": {
                        boxShadow:
                          "rgba(140, 152, 164, 0.176) 0px 5px 30px 5px !important",
                      },
                    }}
                    borderRadius="12px"
                    padding="0.5rem"
                  >
                    <Typography variant="subtitle2" color={colours.white}>
                      {currentLocation === "/"
                        ? t("footer.sign_up")
                        : "Sign up"}
                    </Typography>
                  </Box>
                </Link>
              </LinkContainer>
              <LinkContainer>
                <Link underline="none" href="/login/sign-in">
                  <Typography variant="subtitle2" color={colours.title}>
                    {currentLocation === "/" ? t("footer.sign_in") : "Sign in"}
                  </Typography>
                </Link>
              </LinkContainer>
            </Box>
          </LinkAndLogoContainer>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="subtitle2"
            align="center"
            gutterBottom
            color={colours.grey}
          >
            {currentLocation === "/"
              ? t("footer.copyright")
              : "© randomCompany. 2023, Company. All rights reserved"}
          </Typography>
          <Typography variant="caption" color={colours.grey} align="right">
            {currentLocation === "/"
              ? t("footer.disclaimer")
              : "When you visit or interact with our sites, services or tools, we or out authorised service providers may use cookies for storing information to help provide you with a better, faster, and safer experience and for marketing purposes."}
          </Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
