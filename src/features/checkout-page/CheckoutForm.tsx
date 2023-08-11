import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CountrySelect from "./CountrySelect";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { colours } from "@/utils/colours";
import { useNavigate } from "react-router-dom";
import { FormSchema } from "./validations";


type FormSchemaType = yup.InferType<typeof FormSchema>;

const CheckoutForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      country: "Bosnia and Herzegovina",
    },
  });

  const onSubmit = (data: FormSchemaType) => {
    const shippingData = {
      fullName: data.fullName,
      country: data.country,
      city: data.city,
      address: data.address,
      email: data.email,
      useAdressForBilling: data.useAddressForBilling,
      saveInfo: data.saveInfo,
    };

    const paymentData = {
      cardNumber: data.cardNumber,
      cardHolderName: data.cardHolderName,
      expirationDate: data.expirationDate,
      zipCode: data.zipCode,
      cvv: data.cvv,
    };

    const formData = {
      shipping: shippingData,
      payment: paymentData,
    };

    navigate("/checkout/success");
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h6" marginBottom="2rem">
            Shipping information
          </Typography>
          <Box>
            <form
              id="shipping-information-form"
              onSubmit={handleSubmit(onSubmit)}
            >
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
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <Typography
                      variant="subtitle1"
                      fontSize="0.8rem"
                      align="center"
                      color={colours.red}
                    >
                      {errors.fullName.message}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" marginBottom="1rem">
                    Country
                  </Typography>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => <CountrySelect {...field} />}
                  />
                  {errors.country && (
                    <Typography
                      variant="subtitle1"
                      fontSize="0.8rem"
                      align="center"
                      color={colours.red}
                    >
                      {errors.country.message}
                    </Typography>
                  )}
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
                    {...register("city")}
                  />
                  {errors.city && (
                    <Typography
                      variant="subtitle1"
                      fontSize="0.8rem"
                      align="center"
                      color={colours.red}
                    >
                      {errors.city.message}
                    </Typography>
                  )}
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
                    {...register("address")}
                  />
                  {errors.address && (
                    <Typography
                      variant="subtitle1"
                      fontSize="0.8rem"
                      align="center"
                      color={colours.red}
                    >
                      {errors.address.message}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" marginBottom="1rem">
                    Enter your email
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Email *"
                    type="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <Typography
                      variant="subtitle1"
                      fontSize="0.8rem"
                      align="center"
                      color={colours.red}
                    >
                      {errors.email.message}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox />}
                      defaultChecked={true}
                      label="Billing address is the same as shipping address"
                      {...register("useAddressForBilling")}
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox />}
                      defaultChecked={false}
                      label="Save this information for the next time"
                      {...register("saveInfo")}
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
          <form id="payment-information-form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" marginBottom="1rem">
                  Enter your card number
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Card number *"
                  {...register("cardNumber")}
                />
                {errors.cardNumber && (
                  <Typography
                    variant="subtitle1"
                    fontSize="0.8rem"
                    align="center"
                    color={colours.red}
                  >
                    {errors.cardNumber.message}
                  </Typography>
                )}
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
                  {...register("cardHolderName")}
                />
                {errors.cardHolderName && (
                  <Typography
                    variant="subtitle1"
                    fontSize="0.8rem"
                    align="center"
                    color={colours.red}
                  >
                    {errors.cardHolderName.message}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" marginBottom="1rem">
                  Expiration date
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="MM/YYYY *"
                  {...register("expirationDate")}
                />
                {errors.expirationDate && (
                  <Typography
                    variant="subtitle1"
                    fontSize="0.8rem"
                    align="center"
                    color={colours.red}
                  >
                    {errors.expirationDate.message}
                  </Typography>
                )}
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
                  {...register("zipCode")}
                />
                {errors.zipCode && (
                  <Typography
                    variant="subtitle1"
                    fontSize="0.8rem"
                    align="center"
                    color={colours.red}
                  >
                    {errors.zipCode.message}
                  </Typography>
                )}
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
                  {...register("cvv")}
                />
                {errors.cvv && (
                  <Typography
                    variant="subtitle1"
                    fontSize="0.8rem"
                    align="center"
                    color={colours.red}
                  >
                    {errors.cvv.message}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckoutForm;
