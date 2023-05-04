import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import "../Update/Update.css";
import { useEffect } from "react";
import BasicRating from "../Ratings/BasicRating";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Update(item) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (id) => {
    axios.put(`http://localhost:8000/meals/${id}`, {
      title: title,
      price: price,
      image: image,
      description: description,
      rating: item.item.rating,
    });
  };

  useEffect(() => {
    setTitle(item.item.title);
    setImage(item.item.image);
    setPrice(item.item.price);
    setDescription(item.item.description);
  }, []);

  return (
    <div>
      <Button variant="text" onClick={handleOpen}>
        Update
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            mt={-1}
            variant="h5"
            component="h2"
          >
            <b>Food Description</b>
          </Typography>
          <hr />
          <form onSubmit={() => handleSubmit(item.id)} className="product-form">
            <div className="form-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title} 
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                id="image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <BasicRating  rating={item.item.rating} disabled/>
            <div className="form-field">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>{" "}
            <button type="submit">Save</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
