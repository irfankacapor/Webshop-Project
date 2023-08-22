import { SectionContainer } from "@/features/homepage/styles";
import Footer from "./Footer";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { colours } from "@/utils/colours";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AddToCartButton } from "@/features/product-details-page/styles";
import styled from "styled-components";
import { ErrorMessage } from "./SignInPage";

const ForgotPasswordUsername = yup.object().shape({
  username: yup.string().required("Your username is required!"),
});

const BackToLoginButton = styled(({ ...props }) => (
  <Button variant="outlined" size="large" {...props} />
))`
  text-transform: none !important;
  border-radius: 5px !important;
  padding: 11px 22px !important;
  border-color: ${colours.lightblue} !important;
  color: ${colours.blue} !important;
  font-weight: 300 !important;
`;

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ForgotPasswordUsername),
  });

  const onSubmit = (data: yup.InferType<typeof ForgotPasswordUsername>) => {
    navigate("/login/sign-in");
  };
  return (
    <>
      <main>
        <SectionContainer marginTop="2rem">
          <Grid container spacing={6} alignItems="center">
            <Grid container item xs={12} md={6}>
              <Box>
                <Box marginBottom="2rem">
                  <Typography gutterBottom variant="body1" color={colours.grey}>
                    RECOVER ACCOUNT
                  </Typography>
                  <Typography variant="h4" color={colours.title}>
                    Forgot your password?
                  </Typography>
                  <Typography variant="body1" color={colours.grey}>
                    Enter your email address below and we'll get you back on
                    track.
                  </Typography>
                </Box>
                <form
                  id="forgot-password-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Grid container spacing={4}>
                    <Grid container item xs={12}>
                      <Typography variant="subtitle2" marginBottom="1rem">
                        Enter your username
                      </Typography>
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="Username *"
                        type="username"
                        {...register("username")}
                      />
                      {errors.username && (
                        <ErrorMessage>{errors.username.message}</ErrorMessage>
                      )}
                    </Grid>
                    <Grid container item xs={12}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                      >
                        <Link underline="none" href="/login/sign-in">
                          <BackToLoginButton>Back to login</BackToLoginButton>
                        </Link>
                        <Link underline="none" href="/login/sign-in">
                          <AddToCartButton>Send reset link</AddToCartButton>
                        </Link>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
            <Grid container item xs={12} md={6}>
              <Box width="100%" height="100%" maxWidth="500px">
                <img
                  src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration3.svg"
                  alt="forgot password"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </SectionContainer>
      </main>
      <Divider />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ForgotPasswordPage;
