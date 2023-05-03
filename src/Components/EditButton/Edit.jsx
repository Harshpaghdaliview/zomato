import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Edit() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [result, setresult] = useState()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/meals/${id}`);
  };

  const apicall =async()=>{
     const food = await axios.get("http://localhost:8000/meals");
     setresult(food.data)
  }
useEffect(() => {
apicall();
}, [])

  const handleUpdate = () => {};

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: "white" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleUpdate}>Update</MenuItem>
        <MenuItem onClick={()=> handleDelete()}>delete</MenuItem>
      </Menu>
    </div>
  );
}
