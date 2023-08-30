import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CountrySelect from "./CountrySelect";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { FormSchema } from "./validations";
import { CustomInputField, ErrorMessage } from "@/utils/global-styles";

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
                  <CustomInputField
                    error={errors?.fullName?.message}
                    placeholder="Full name *"
                    type="text"
                    {...register("fullName")}
                  />
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
                    <ErrorMessage>{errors.country.message}</ErrorMessage>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" marginBottom="1rem">
                    City
                  </Typography>
                  <CustomInputField
                    error={errors?.city?.message}
                    placeholder="City *"
                    type="text"
                    {...register("city")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" marginBottom="1rem">
                    Enter your address
                  </Typography>
                  <CustomInputField
                    error={errors?.address?.message}
                    placeholder="Address *"
                    type="text"
                    {...register("address")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" marginBottom="1rem">
                    Enter your email
                  </Typography>
                  <CustomInputField
                    error={errors?.email?.message}
                    placeholder="Email *"
                    type="text"
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
                <CustomInputField
                  error={errors?.cardNumber?.message}
                  placeholder="Card number *"
                  type="number"
                  {...register("cardNumber")}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" marginBottom="1rem">
                  Name on the card
                </Typography>
                <CustomInputField
                  error={errors?.cardHolderName?.message}
                  placeholder="Cardholder name *"
                  type="text"
                  {...register("cardHolderName")}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" marginBottom="1rem">
                  Expiration date
                </Typography>
                <CustomInputField
                  error={errors?.expirationDate?.message}
                  placeholder="MM/YYYY *"
                  {...register("expirationDate")}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" marginBottom="1rem">
                  Billing zip code
                </Typography>
                <CustomInputField
                  error={errors?.fullName?.message}
                  placeholder="Zip code *"
                  type="text"
                  {...register("zipCode")}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" marginBottom="1rem">
                  CVV
                </Typography>
                <CustomInputField
                  error={errors?.fullName?.message}
                  placeholder="CVV *"
                  type="number"
                  {...register("cvv")}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckoutForm;
