import * as yup from "yup";

export const FormSchema = yup.object().shape({
  fullName: yup.string().required("Name is required!"),
  country: yup.string().required("Country is required!"),
  city: yup.string().required("City is required!"),
  address: yup.string().required("Address is required!"),
  email: yup
    .string()
    .email("Please use a valid email address!")
    .required("Email is required!"),
  useAddressForBilling: yup.boolean(),
  saveInfo: yup.boolean(),
  cardNumber: yup
    .string()
    .required("Card number is required!")
    .matches(/^\d+$/, "Card number must only contain digits!")
    .min(16, "Card number must be exactly 16 digits!")
    .max(16, "Card number must be exactly 16 digits!"),
  cardHolderName: yup.string().required("Name of the card holder is required!"),
  expirationDate: yup
    .string()
    .required("Expiration date is required!")
    .test("valid-date", "Invalid expiration date!", (value) => {
      if (!value) return false;

      const [month, year] = value.split("/");
      const monthValue = parseInt(month);
      if (monthValue < 1 || monthValue > 12) return false;

      const expirationDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      const currentDate = new Date();
      const maxDate = new Date();
      maxDate.setFullYear(maxDate.getFullYear() + 5);

      return expirationDate >= currentDate && expirationDate <= maxDate;
    }),
  zipCode: yup.string().required("Zip code is required!"),
  cvv: yup
    .string()
    .required("CVV is required!")
    .matches(/^\d+$/, "CVV must only contain digits!")
    .test(
      "len",
      "CVV must be either 3 or 4 digits!",
      (val) => (val && val.length >= 3 && val.length <= 4) as boolean,
    ),
});
