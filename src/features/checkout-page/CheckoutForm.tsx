import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import CountrySelect from "./CountrySelect";

type Inputs = {
  fullName: string;
  city: string;
  address: string;
  email: string;
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  zipCode: string;
  cvv: string;
};

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h6" marginBottom="2rem">
            Shipping information
          </Typography>
          <Box>
            <form id="place-order-form" onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" marginBottom="1rem">
                    Enter your full name
                  </Typography>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    placeholder="Full name *"
                    {...register("fullName", { required: true })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" marginBottom="1rem">
                    Country
                  </Typography>
                  <CountrySelect />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" marginBottom="1rem">
                    City
                  </Typography>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    placeholder="City *"
                    {...register("city", { required: true })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" marginBottom="1rem">
                    Enter your adress
                  </Typography>
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    placeholder="Address *"
                    {...register("address", { required: true })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" marginBottom="1rem">
                    Enter your email
                  </Typography>
                  <TextField
                    inputRef={register}
                    variant="outlined"
                    fullWidth
                    placeholder="Email *"
                    type="email"
                    {...register("email", { required: true })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Billing address is the same as shipping address"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Save this information for the next time"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" marginBottom="2rem">
            Payment information
          </Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" marginBottom="1rem">
                Enter your card number
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Card number *"
                {...register("cardNumber", {
                  required: true,
                  pattern: {
                    value: /^\d{16}$/,
                    message: "Card number must be 16 digits long",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" marginBottom="1rem">
                Name on the card
              </Typography>
              <TextField
                type="text"
                variant="outlined"
                fullWidth
                placeholder="Name *"
                {...register("cardHolderName", { required: true })}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle2" marginBottom="1rem">
                Expiration date
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Expiration date *"
                type="text"
                {...register("expirationDate", { required: true })}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle2" marginBottom="1rem">
                Billing zip code
              </Typography>
              <TextField
                type="text"
                variant="outlined"
                fullWidth
                placeholder="Zip code *"
                {...register("zipCode", { required: true })}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle2" marginBottom="1rem">
                CVV
              </Typography>
              <TextField
                type="text"
                variant="outlined"
                fullWidth
                placeholder="Card CVV *"
                {...register("cvv", {
                  required: true,
                  pattern: {
                    value: /^\d{3,4}$/,
                    message: "CVV must be 3 or 4 digits long",
                  },
                })}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckoutForm;
