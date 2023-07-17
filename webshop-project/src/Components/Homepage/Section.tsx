import { Typography, Box, Button } from "@mui/material";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import { colours } from "../../constants/colours";

interface SectionProps {
  sectionName?: string;
  sectionTitle: string;
  sectionTitleColor?: string;
  sectionDescriptionColor?: string;
  sectionDescription: string[];
  sectionButton: string;
  alignText?: "left" | "right" | "center";
  buttonHeight?: string;
  sectionAosAnimation?: string;
  sectionTitleAosAnimation?: string;
  sectionDescriptionAosAnimation?: string;
}

export const HomepageButton = styled(Button)`
  text-transform: none !important;
  minwidth: 64 !important;
  padding: 10px 22px !important;
  font-weight: 300 !important;
  border-radius: 5px !important;
`;

const Section = (props: SectionProps) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      marginBottom={"2rem"}
      data-aos={props.sectionAosAnimation ? props.sectionAosAnimation : ""}
    >
      <>
        {props.sectionName && (
          <Typography
            gutterBottom
            variant="body1"
            align={props.alignText ? props.alignText : "center"}
            sx={{ color: colours.yellow, textTransform: "uppercase" }}
          >
            {props.sectionName}
          </Typography>
        )}
      </>

      <Typography
        variant="h4"
        align={props.alignText ? props.alignText : "center"}
        gutterBottom
        color={
          props.sectionTitleColor ? props.sectionTitleColor : colours.title
        }
        fontSize={isSmallScreen ? "1.5625rem" : "2.125rem"}
        data-aos={
          props.sectionTitleAosAnimation ? props.sectionTitleAosAnimation : ""
        }
      >
        {props.sectionTitle}
      </Typography>
      <div
        data-aos={
          props.sectionDescriptionAosAnimation
            ? props.sectionDescriptionAosAnimation
            : ""
        }
      >
        {props.sectionDescription.map((item) => {
          return (
            <Typography
              variant="h6"
              align={props.alignText ? props.alignText : "center"}
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
        justifyContent={props.alignText ? props.alignText : "center"}
        alignItems={props.alignText ? props.alignText : "center"}
        marginTop={"1rem"}
      >
        <HomepageButton
          variant="contained"
          sx={{ height: props.buttonHeight ? props.buttonHeight : "auto" }}
          size="large"
        >
          {props.sectionButton}
        </HomepageButton>
      </Box>
    </Box>
  );
};

export default Section;
