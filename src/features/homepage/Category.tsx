import { Box, Grid, Paper, Typography, Link } from "@mui/material";
import styled from "styled-components";
import { colours } from "@/utils/colours";
import { CategoryProps } from "./types";
import { useTranslation } from "react-i18next";
import SmartphoneRoundedIcon from "@mui/icons-material/SmartphoneRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const StyledPaper = styled(Paper)`
  height: 100% !important;
  width: 100% !important;
  transition-property: box-shadow !important;
  box-shadow: ${colours.shadow} 0px 3px 6px 0px !important;
  background-color: ${colours.lightgrey} !important;

  padding: 2rem;
  border-radius: 0.5rem !important;
  box-sizing: border-box;
  object-fit: contain;
  transition: transform 0.3s !important;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryContainer = styled(Box)`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 1rem;
`;

const ShapeContainer = styled(Box)`
  border-radius: 100%;
  background-color: ${colours.orange};
  width: 50px;
  height: 50px;
  transform: translate(1rem, -1rem);
`;

const iconProps = {
  width: "48px",
  height: "48px",
  position: "absolute",
  color: colours.blue,
};

const Category = () => {
  const { t } = useTranslation();

  const categoryList: CategoryProps[] = [
    {
      category: t("homepage.categories.category1"),
      icon: <SmartphoneRoundedIcon sx={iconProps} />,
      href: "/products?category=smartphones",
    },
    {
      category: t("homepage.categories.category2"),
      icon: <LaptopRoundedIcon sx={iconProps} />,
      href: "/products?category=laptops",
    },
    {
      category: t("homepage.categories.category3"),
      icon: <BlurOnRoundedIcon sx={iconProps} />,
      href: "/products?category=fragrances",
    },
    {
      category: t("homepage.categories.category4"),
      icon: <AutoAwesomeIcon sx={iconProps} />,
      href: "/products?category=skincare",
    },
    {
      category: t("homepage.categories.category5"),
      icon: <LocalGroceryStoreRoundedIcon sx={iconProps} />,
      href: "/products?category=groceries",
    },
    {
      category: t("homepage.categories.category6"),
      icon: <HomeRoundedIcon sx={iconProps} />,
      href: "/products?category=home-decoration",
    },
  ];

  return (
    <>
      {categoryList.map((item: CategoryProps, index: number) => (
        <Grid
          item
          xs={6}
          md={2}
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-offset="100"
          data-aos-duration="600"
        >
          <Link underline="none" href={item.href}>
            <Box width="100%" height="100%" display="block">
              <StyledPaper elevation={3}>
                <CategoryContainer>
                  <ShapeContainer />
                  {item.icon}
                </CategoryContainer>
                <Typography variant="subtitle1" align="center" marginTop="1rem">
                  {item.category}
                </Typography>
              </StyledPaper>
            </Box>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default Category;
