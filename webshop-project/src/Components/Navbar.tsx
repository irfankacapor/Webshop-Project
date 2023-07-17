import { AppBar, Paper } from "@mui/material";
import styled from "styled-components";

const Logo = styled.img`
  height: 5rem;
`;

function Navbar() {
  return (
    <Paper sx={{ marginX: "auto", padding: "1rem 2rem" }}>
      <Logo
        className="logo"
        src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png"
        alt="logo"
      />
      <AppBar position="sticky"></AppBar>
    </Paper>
  );
}

export default Navbar;
