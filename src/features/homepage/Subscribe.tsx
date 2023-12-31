import {
  Box,
  FormControl,
  TextField,
  Typography,
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import styled from "styled-components";
import { MoreProductsContainer } from "@/features/homepage/MoreProducts";
import { useTranslation } from "react-i18next";

const StyledTypography = styled(({ ...props }) => (
  <Typography color="white" align="center" data-aos="fade-up" {...props} />
))``;

const TextContainer = styled(Box)`
  margin-bottom: 2rem;
  display: block;
  box-sizing: border-box;
`;

const SubscribeContainer = styled(MoreProductsContainer)`
  padding: 2rem 1rem;
  margin-x: auto;
  justify-content: center;
  @media (min-width: 600px) {
    padding: 3rem 1rem;
    max-width: 720px;
  }

  @media (min-width: 900px) {
    padding: 4rem 1rem;
    max-width: 1236px;
  }
`;

const StyledTextField = styled(({ ...props }) => (
  <TextField
    variant="outlined"
    placeholder={props.placeholder}
    fullWidth
    InputProps={{
      endAdornment: (
        <InputAdornment
          sx={{ color: "white", cursor: "pointer" }}
          position="end"
        >
          <NotificationsNoneIcon />
        </InputAdornment>
      ),
    }}
    {...props}
  />
))`
  & .MuiInputBase-input {
    color: white !important;
    border-color: white !important;
  }
  & fieldset {
    border-color: white;
  }
  &:focus fieldset {
    border-color: white !important;
    outline-color: white !important;
  }
  &:hover fieldset {
    border-color: white !important;
    outline-color: white !important;
  }
  &:focus-within fieldset {
    border-color: white !important;
    outline-color: white !important;
  }
`;

const Subscribe = () => {
  const { t } = useTranslation();

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <SubscribeContainer>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        boxSizing="border-box"
        justifyContent="center"
      >
        <TextContainer>
          <StyledTypography
            variant="h4"
            gutterBottom
            fontWeight="700"
            fontSize={isSmallScreen ? "1.5625rem" : "2.125rem"}
          >
            {t("homepage.subscribe.title")}
          </StyledTypography>
          <StyledTypography variant="h6">
            {t("homepage.subscribe.description")}
          </StyledTypography>
        </TextContainer>
        <Box
          display="flex"
          boxSizing="border-box"
          width="100%"
          justifyContent={"center"}
        >
          <FormControl
            data-aos="fade-up"
            sx={{ maxWidth: "400px", width: "100%" }}
          >
            <StyledTextField placeholder={t("homepage.subscribe.mail")} />
          </FormControl>
        </Box>
      </Box>
    </SubscribeContainer>
  );
};

export default Subscribe;
