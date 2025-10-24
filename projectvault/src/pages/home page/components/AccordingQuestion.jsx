import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

function AccordingQuestion({ summary, details }) {
  const [clicked, setClicked] = useState(false);
  const [style, setStyle] = useState({
    backgroundColor: "transparent",
    fontSize: "inherit",
    fontFamily: "inherit",
  });

  const handleAccordionClick = () => {
    if (clicked) {
      setStyle({
        backgroundColor: "transparent",
        fontSize: "inherit",
        fontFamily: "inherit",
      });
    } else {
      setStyle({
        backgroundColor: "#EDEFF1",
        fontSize: "16px", // Change the font size as desired
        fontFamily: "Arial, sans-serif", // Change the font family as desired
      });
    }
    setClicked(!clicked);
  };

  return (
    <div className="qH-question-container">
      <Accordion
        style={{
          backgroundColor: "#FFFFFF",
          color: "#212B36",
          transition:
            "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          borderRadius: "8px",
          boxShadow: "none",
          backgroundImage: "none",
          position: "relative",
          overflowAnchor: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            backgroundColor: style.backgroundColor,
            borderRadius: 0,
            border: 0,
            borderBottom: 1,
            borderStyle: "dashed",
            borderColor: "#E9ECEE",
            height: 60,
            fontSize: style.fontSize,
            fontFamily: style.fontFamily,
          }}
          onClick={handleAccordionClick}
        >
          <Typography sx={{ color: "black", fontWeight: 700 }}>
            {summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ textAlign: "start", boxShadow: 2 }}>
          <Typography>{details}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordingQuestion;
