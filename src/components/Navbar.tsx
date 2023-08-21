import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material";
import styled from "styled-components";
import { colours } from "@/utils/colours";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useUser } from "@/context/UserContext";

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
  const [elevation, setElevation] = useState(0);

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
                  Products
                </Typography>
              </Link>
            </LinkContainer>
            <LinkContainer>
              <Link underline="none" href="/">
                <Typography variant="body1" color={colours.title}>
                  Home
                </Typography>
              </Link>
            </LinkContainer>
            <LinkContainer marginRight={0}>
              <Link underline="none" href="/login/sign-up">
                <Box
                  sx={{
                    backgroundColor: colours.blue,
                    ":hover": {
                      boxShadow:
                        "rgba(140, 152, 164, 0.176) 0px 5px 30px 5px !important",
                    },
                  }}
                  borderRadius="12px"
                  padding="0.5rem"
                >
                  <Typography variant="body1" color={colours.white}>
                    Sign up
                  </Typography>
                </Box>
              </Link>
            </LinkContainer>
            <LinkContainer>
              <Link underline="none" href="/login/sign-in">
                <Typography variant="body1" color={colours.title}>
                  Sign in
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
            {userData.image && (
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
