import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
import styled from "styled-components";
import { colours } from "@/utils/colours";
import i18next from "i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useUser } from "@/context/UserContext";
import { supported_languages } from "@/services/i18n";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Logo = styled.img`
  height: 5rem;
`;

const NavbarContainer = styled(Box)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  padding: 0.5rem 1rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100% !important;
  @media (min-width: 600px) {
    max-width: 720px !important;
  }

  @media (min-width: 900px) {
    max-width: 1236px !important;
  }
`;

const LanguagePickerContainer = styled(Box)`
  display: flex;
  border-radius: 100%;
  padding: 0.7rem;
  overflow: hidden;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(34, 31, 32, 0.1) !important;
  }
`;

const StyledAppBar = styled(({ ...props }) => <AppBar {...props} />)`
  position: sticky;
  right: 0px;
  top: 0px;
`;

const LinksContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LinkContainer = styled(Box)`
  margin: 0.5rem 1rem;
`;

const ProfilePicture = styled.img`
  object-fit: contain !important;
  width: 100%;
  height: 100%;
`;

const Navbar = () => {
  const { userData } = useUser();
  const { t } = useTranslation();
  const [elevation, setElevation] = useState(0);
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const currentLocation = useLocation();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleMenuClose = (code: string) => {
    setAnchorElement(null);
    i18next.changeLanguage(code);
  };

  useEffect(() => {
    const handleScroll = () => {
      const newElevation = window.scrollY > 0 ? 1 : 0;
      setElevation(newElevation);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <StyledAppBar
        elevation={elevation}
        style={{
          backgroundColor:
            elevation === 1 ? colours.white : colours.transparent,
        }}
      >
        <NavbarContainer>
          <Link underline="none" href="/">
            <Logo
              className="logo"
              src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png"
              alt="logo"
            />
          </Link>
          <LinksContainer>
            <LinkContainer>
              <Link underline="none" href="/products">
                <Typography variant="body1" color={colours.title}>
                  {currentLocation.pathname === "/"
                    ? t("navbar.products")
                    : "Products"}
                </Typography>
              </Link>
            </LinkContainer>
            <LinkContainer>
              <Link underline="none" href="/">
                <Typography variant="body1" color={colours.title}>
                  {currentLocation.pathname === "/" ? t("navbar.home") : "Home"}
                </Typography>
              </Link>
            </LinkContainer>
            <LinkContainer alignItems="center" height="24px">
              <Link href="/cart">
                <ShoppingCartOutlinedIcon
                  sx={{
                    color: colours.title,
                  }}
                />
              </Link>
            </LinkContainer>
            {currentLocation.pathname === "/" && (
              <LinkContainer>
                <LanguagePickerContainer onClick={handleMenuOpen}>
                  {
                    <div>
                      <span
                        className={`fi fi-${supported_languages.find(
                          (lang) => lang.code === i18next.language
                        )?.country_code}`}
                      />
                    </div>
                  }
                </LanguagePickerContainer>
                <Menu
                  anchorEl={anchorElement}
                  open={Boolean(anchorElement)}
                  onClose={handleMenuClose}
                >
                  {supported_languages.map(({ code, name, country_code }) => (
                    <MenuItem key={code} onClick={() => handleMenuClose(code)}>
                      <Box marginRight={"0.5rem"}>
                        <span className={`fi fi-${country_code}`} />
                      </Box>
                      {name}
                    </MenuItem>
                  ))}
                </Menu>
              </LinkContainer>
            )}

            {userData?.image && (
              <LinkContainer>
                <Link underline="none" href="/login/sign-in">
                  <Box borderRadius="100%" maxWidth="3rem">
                    <ProfilePicture src={userData.image} alt="Profile" />
                  </Box>
                </Link>
              </LinkContainer>
            )}
          </LinksContainer>
        </NavbarContainer>
      </StyledAppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
