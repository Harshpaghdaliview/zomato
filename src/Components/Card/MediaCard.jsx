import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import "./MediaCard.css";
import BasicRating from "../Ratings/BasicRating";
import Edit from "../EditButton/Edit";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Addpro from "../Addpro/Addpro";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function MediaCard() {
  const [Data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [foodIndex, setFoodIndex] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const apicall = async () => {
    const result = await axios.get("http://localhost:8000/meals"); 
    setData(result.data);
  };

  useEffect(() => {
    apicall();
  }, []);

  return (
    <>
      {" "}
      <hr />{" "}
      <div className="addpro">
        <Addpro apicall={apicall}/>{" "}
      </div>
      <div className="card">
        {Data.map((item, id) => (
          <Card sx={{ maxWidth: 345 }}>
            <div className="editclass">
              <Edit item={item} id={item.id} apicall={apicall} />
            </div>
            <CardMedia sx={{ height: 140 }} image={item.image} />
            <CardContent>
              <Typography>
                <b
                  className="boldtext"
                  onClick={() => {
                    handleOpen();
                    setFoodIndex(id);
                  }}
                >
                  {item.title}
                </b>
                <BasicRating rating={item.rating} />₹ {item.price}
              </Typography>
            </CardContent>
          </Card>
        ))}

        {/* VIEW PRODUCT MODAL */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              ml={50}
              mt={-1}
              variant="h5"
              component="h2" 
            >
              <b>Food Description</b>
            </Typography>
            <hr />
            <div className="description">
              <div className="imagediv">
                <img className="D-image" src={Data[foodIndex]?.image} alt="" />
              </div>
              <br />
              <div className="Finfo">
                <div className="title">{Data[foodIndex]?.title}</div>
                <br />
                <div className="rating">
                  <BasicRating rating={Data[foodIndex]?.rating} />
                </div>
                <div className="price">₹{Data[foodIndex]?.price}</div>
                <div className="descriptionn">
                  {Data[foodIndex]?.description}
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
