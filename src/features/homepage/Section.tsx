import { Typography, Box, Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { colours } from "@/utils/colours";
import { SectionProps } from "@/features/homepage/types";

export const HomepageButton = styled(({ ...props }) => (
  <Button variant="contained" size="large" {...props} />
))`
  text-transform: none !important;
  minwidth: 64 !important;
  padding: 10px 22px !important;
  font-weight: 300 !important;
  border-radius: 5px !important;
`;

const Section = (props: SectionProps) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box marginBottom="2rem" data-aos={props.sectionAosAnimation || ""}>
      <>
        {props.sectionName && (
          <Typography
            gutterBottom
            variant="body1"
            align={props.alignText || "center"}
            sx={{ color: colours.yellow, textTransform: "uppercase" }}
          >
            {props.sectionName}
          </Typography>
        )}
      </>

      <Typography
        variant="h4"
        align={props.alignText || "center"}
        gutterBottom
        color={props.sectionTitleColor || colours.title}
        fontSize={isSmallScreen ? "1.5625rem" : "2.125rem"}
        data-aos={props.sectionTitleAosAnimation || ""}
      >
        {props.sectionTitle}
      </Typography>
      <div data-aos={props.sectionDescriptionAosAnimation || ""}>
        {props.sectionDescription.map((item, index) => {
          return (
            <Typography
              key={index * 13}
              variant="h6"
              align={props.alignText || "center"}
              sx={{
                color: props.sectionDescriptionColor
                  ? props.sectionDescriptionColor
                  : colours.grey,
                fontWeight: 300,
              }}
            >
              {item}
              <br />
            </Typography>
          );
        })}
      </div>

      <Box
        display="flex"
        justifyContent={props.alignText || "center"}
        alignItems={props.alignText || "center"}
        marginTop="1rem"
      >
        <HomepageButton sx={{ height: props.buttonHeight || "auto" }}>
          {props.sectionButton}
        </HomepageButton>
      </Box>
    </Box>
  );
};

export default Section;
