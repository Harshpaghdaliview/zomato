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

export default function MediaCard() {
  const [Data, setData] = useState([]);
  const apicall = async () => {
    const result = await axios.get("http://localhost:8000/meals");
    // console.log(result.data);
    setData(result.data);
  };

  useEffect(() => {
    apicall();
  }, []);

  console.log(Data);

  return (
    <div className="card">
      {Data.map((item) => (
        <Card sx={{ maxWidth: 345 }}>
          <div className="editclass">
            <Edit />
          </div>
          <CardMedia sx={{ height: 140 }} image={item.image} /> 
          <CardContent>
            <Typography>
              <b>{item.title}</b>
              <BasicRating rating={item.rating} />₹ {item.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
