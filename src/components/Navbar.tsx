import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utility/constants";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      p={2}
      sx={{ position: "sticky", justifyContent: "space-between", top: 0,backgroundColor:"#000" }}
    >
      <Link to="/" className="flex items-center">
      <img src={logo} width={45}  alt="logo_image" />
      </Link>
      <SearchBar/>
    </Stack>
  );
};
