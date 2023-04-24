import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { styled, alpha } from "@mui/material/styles";
import "../Home/Home.css";
import img4 from "../../Images/zomato.avif";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import img1 from "../../Images/1.avif";
import img2 from "../../Images/2.avif";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.75),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="submain">
          <div className="container-fluid d-flex justify-content-center flex-column align-items-center">
            <div className="tra-image">
              <img className="imageclass" src={img4} />{" "}
            </div>
            <br />
            <div className="heading-text">
              <h1>
                Discover the best food &amp; drinks in &nbsp;
                <span className="next-line">Ahmedabad</span>
              </h1>
            </div>
            <br />
            <div className="searchbar">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search for resturant, cuisine or a dish"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="container">
        <div className="card-section">
          <div className="card-1">
            <img className="cardd-1" src={img1} alt="" ></img>
            <div className="subheading">
              <p>Order Online</p>
              <p>Stay Home and Order to Your Doorstep</p>
            </div>
          </div>
          <div className="card-2">
            <img className="cardd-2" src={img2} alt="" />
            <div className="subheading">
              <p> Dining</p>
              <p>View The City's Favourite dining venues</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
