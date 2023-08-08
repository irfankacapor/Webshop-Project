import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import CountrySelect from "./CountrySelect";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { colours } from "@/utils/colours";

const schema = yup.object().shape({
  fullName: yup.string().required(),
  country: yup.string().required(),
  city: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().email().required(),
  useAddressForBilling: yup.boolean(),
  saveInfo: yup.boolean(),
  cardNumber: yup
    .string()
    .matches(/^\d+$/, "Card number must only contain digits")
    .length(16, "Card number must be exactly 16 digits")
    .required(),
  cardHolderName: yup.string().required(),
  expirationDate: yup
    .string()
    .test("valid-date", "Invalid expiration date", (value) => {
      if (!value) return false;

      const [month, year] = value.split("/");
      const expirationDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      const currentDate = new Date();
      const maxDate = new Date();
      maxDate.setFullYear(maxDate.getFullYear() + 5);

      return expirationDate >= currentDate && expirationDate <= maxDate;
    })
    .required("Expiration date is required"),
  zipCode: yup.string().required(),
  cvv: yup
    .string()
    .matches(/^\d+$/, "CVV must only contain digits")
    .test(
      "len",
      "CVV must be either 3 or 4 digits",
      (val) => (val && val.length >= 3 && val.length <= 4) as boolean
    )
    .required(),
});

type FormSchema = yup.InferType<typeof schema>;

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountryChange = (selectedCountry: string) => {
    setSelectedCountry(selectedCountry);
  };

  const onSubmit = (data: FormSchema) => {
    console.log("submit");
    const shippingData = {
      fullName: data.fullName,
      country: selectedCountry,
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

    console.log(formData); // You can replace this with your desired action (e.g., sending the data to the server)
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" marginBottom="1rem">
                    Country
                  </Typography>
                  <CountrySelect onCountryChange={handleCountryChange} />
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
