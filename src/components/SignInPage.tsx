import { SectionContainer } from "@/features/homepage/styles";
import Footer from "./Footer";
import { Box, Divider, Grid, Link, TextField, Typography } from "@mui/material";
import { LoginImage, LoginImageContainer } from "./SignUpPage";
import { colours } from "@/utils/colours";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AddToCartButton } from "@/features/product-details-page/styles";
import { useUser } from "@/context/UserContext";
import { useState } from "react";
import axios from "axios";

const SignInSchema = yup.object().shape({
  username: yup.string().required("Your username is required!"),
  password: yup
    .string()
    .required("Your password is required!")
    .min(8, "Your password must be at least 8 characters long!s"),
});

type SignInSchemaType = yup.InferType<typeof SignInSchema>;

const SignInPage = () => {
  const [userExists, setUserExists] = useState(true);
  const { loginUser } = useUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit = async (data: SignInSchemaType) => {
    try {
      await axios.post("https://dummyjson.com/auth/login", {
        username: data.username,
        password: data.password,
      });
      loginUser(data.username, data.password);
      navigate("/");
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setUserExists(false);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <>
      <main>
        <SectionContainer marginTop="2rem">
          <Grid container spacing={6} alignItems="center">
            <Grid container item xs={12} md={6}>
              <LoginImageContainer>
                <LoginImage
                  src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration2.svg"
                  alt="sign-in"
                />
              </LoginImageContainer>
            </Grid>
            <Grid container item xs={12} md={6}>
              <Box>
                <Box marginBottom="2rem">
                  <Typography gutterBottom variant="body1" color={colours.grey}>
                    LOGIN
                  </Typography>
                  <Typography variant="h4" color={colours.title}>
                    Welcome back
                  </Typography>
                  <Typography variant="body1" color={colours.grey}>
                    Login to manage your account.
                  </Typography>
                </Box>
                <form id="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" marginBottom="1rem">
                        Enter your username
                      </Typography>
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="Username *"
                        type="username"
                        {...register("username")}
                        onFocus={() => setUserExists(true)}
                      />
                      {errors.username && (
                        <Typography
                          variant="subtitle1"
                          fontSize="0.8rem"
                          align="center"
                          color={colours.red}
                        >
                          {errors.username.message}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        width="100%"
                      >
                        <Typography variant="subtitle2" marginBottom="1rem">
                          Enter your password
                        </Typography>
                        <Link underline="none" href="/login/forgot-password">
                          <Typography variant="subtitle2" color={colours.blue}>
                            Forgot your password?
                          </Typography>
                        </Link>
                      </Box>
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="Password *"
                        type="password"
                        {...register("password")}
                        onFocus={() => setUserExists(true)}
                      />
                      {(errors.password && (
                        <Typography
                          variant="subtitle1"
                          fontSize="0.8rem"
                          align="center"
                          color={colours.red}
                        >
                          {errors.password.message}
                        </Typography>
                      )) ||
                        (!userExists && (
                          <Typography
                            variant="subtitle1"
                            fontSize="0.8rem"
                            align="center"
                            color={colours.red}
                          >
                            Invalid username or password!
                          </Typography>
                        ))}
                    </Grid>
                    <Grid item container xs={12}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                      >
                        <Box>
                          <Typography variant="subtitle2">
                            Don't have an account yet?{" "}
                            <Link underline="none" href="/login/sign-up">
                              {" "}
                              Sign up here.
                            </Link>
                          </Typography>
                        </Box>
                        <AddToCartButton type="submit" form="sign-in-form">
                          Login
                        </AddToCartButton>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
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

export default SignInPage;
