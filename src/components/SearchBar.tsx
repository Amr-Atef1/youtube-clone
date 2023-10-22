import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const SearchBar = () => {
  const [value, setValue] = useState("")
  const navigate = useNavigate()
  return (
    <Paper
      onSubmit={(e) => {
        e.preventDefault()
        if(value){
          navigate(`/search/${value}`)
        }
        setValue("")
      }}
      component="form"
      sx={{ borderRadius: "30px", pl: 2, boxShadow: "none" }}
    >
      <input
        onChange={(e) => {setValue(e.target.value)}}
        value={value}
        className="sm:w-[300px]  border-none outline-none rounded-[25px] p-1 "
        placeholder="search"
      />
      <IconButton type="submit" sx={{color:"red"}} >
        <Search />
      </IconButton>
    </Paper>
  );
};
