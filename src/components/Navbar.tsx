import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material";
import styled from "styled-components";
import { colours } from "@/utils/colours";

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

const Navbar = () => {
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
          </LinksContainer>
        </NavbarContainer>
      </StyledAppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
