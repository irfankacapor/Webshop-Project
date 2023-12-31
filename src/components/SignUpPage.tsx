import { SectionContainer } from "@/features/homepage/styles";
import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import { colours } from "@/utils/colours";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddToCartButton } from "@/features/product-details-page/styles";
import Footer from "./Footer";
import styled from "styled-components";
import { CustomInputField } from "@/utils/global-styles";

export const LoginImageContainer = styled(Box)`
  max-width: 500px;
  width: 100%;
  height: 100%;
`;

export const LoginImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const SignupSchema = yup.object().shape({
  firstName: yup.string().required("First name is required!"),
  lastName: yup.string().required("Last name is required!"),
  username: yup.string().required("A username is required!"),
  password: yup
    .string()
    .required("A password is required!")
    .min(6, "The password has to be at least 6 characters long!"),
});

type SignupSchemaType = yup.InferType<typeof SignupSchema>;

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data: SignupSchemaType) => {
    const signupData = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      password: data.password,
    };

    navigate("/login/sign-in");
  };
  return (
    <>
      <main>
        <SectionContainer marginTop="2rem">
          <Grid
            container
            spacing={6}
            justifyContent="center"
            alignItems="center"
          >
            <Grid container item xs={12} md={6}>
              <Box>
                <Box>
                  <Box marginBottom="2rem">
                    <Typography
                      gutterBottom
                      variant="body1"
                      color={colours.grey}
                    >
                      SIGNUP
                    </Typography>
                    <Typography variant="h4" color={colours.title}>
                      Create an account
                    </Typography>
                    <Typography variant="body1" color={colours.grey}>
                      Fill out the form to get started
                    </Typography>
                  </Box>
                  <form id="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle2" marginBottom="1rem">
                          Enter your first name
                        </Typography>
                        <CustomInputField
                          error={errors?.firstName?.message}
                          type="text"
                          placeholder="First name *"
                          {...register("firstName")}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle2" marginBottom="1rem">
                          Enter your last name
                        </Typography>
                        <CustomInputField
                          error={errors?.lastName?.message}
                          type="text"
                          placeholder="Last name *"
                          {...register("lastName")}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" marginBottom="1rem">
                          Enter your username
                        </Typography>
                        <CustomInputField
                          {...register("username")}
                          error={errors?.username?.message}
                          placeholder="Username *"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" marginBottom="1rem">
                          Enter your password
                        </Typography>
                        <CustomInputField
                          error={errors?.password?.message}
                          placeholder="Password *"
                          type="password"
                          {...register("password")}
                        />
                      </Grid>
                      <Grid container item xs={12} justifyContent="center">
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          maxWidth="600px"
                          width="100%"
                        >
                          <Box>
                            <Typography variant="subtitle2">
                              Already have an account?
                              <Link underline="none" href="/login/sign-in">
                                {" "}
                                Login
                              </Link>
                            </Typography>
                          </Box>
                          <AddToCartButton form="sign-up-form" type="submit">
                            Sign up
                          </AddToCartButton>
                        </Box>
                      </Grid>
                      <Grid container item xs={12} justifyContent="center">
                        <Typography variant="subtitle2" color={colours.grey}>
                          By clicking "Sign up" button you agree with our{" "}
                          <Link
                            color={colours.blue}
                            underline="none"
                            sx={{ cursor: "pointer" }}
                          >
                            company terms and conditions
                          </Link>
                          .
                        </Typography>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Box>
            </Grid>
            <Grid container item xs={12} md={6} justifyContent="center">
              <LoginImageContainer>
                <LoginImage
                  src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration4.svg"
                  alt="Sign up"
                />
              </LoginImageContainer>
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

export default SignUpPage;
