import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import countries from "./countries";
interface CountrySelectProps {
  onChange: (value: string) => void;
  onBlur: () => void;
  value: string;
}
const CountrySelect = React.forwardRef((props: CountrySelectProps, ref) => {
  const { onChange, value } = props;
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{
        width: "100%",
      }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      onChange={(event, newValue) => {
        onChange(newValue ? newValue.label : "");
      }}
      value={countries.find((country) => country.label === value)}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => {
        const { InputLabelProps, ...props } = params;
        return (
          <TextField
            {...props}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        );
      }}
    />
  );
});

export default CountrySelect;
