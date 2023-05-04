import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Confirm from "../Delete Confirmation/Delete";
import BasicModal from "../Update/Update";

export default function Edit({ item, id, apicall }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [result, setresult] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  useEffect(() => {
    apicall();
  }, []);

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
        <MenuItem onClick={handleUpdate}>
          <BasicModal item={item} id={id}/>
        </MenuItem>
        <MenuItem>
          <Confirm id={id} apicall={apicall} />{" "}
        </MenuItem>
      </Menu>
    </div>
  );
}
