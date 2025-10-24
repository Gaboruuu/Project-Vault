import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ props }) {
  const titleWithoutSpaces = props.Title.replace(/\s/g, "").toLowerCase();

  return (
    <Card sx={{ width: 350, margin: 1, objectFit: "cover" }}>
      <CardActionArea component={Link} to={`/projects/${titleWithoutSpaces}`}>
        <CardMedia
          component="img"
          height="140"
          image={props.CoverLogo}
          alt="back"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
