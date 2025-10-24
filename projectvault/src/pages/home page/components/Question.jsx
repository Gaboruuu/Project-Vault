import React, { useState, useEffect, useRef } from "react";
import "../css/Question.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordingQuestion from "./AccordingQuestion.jsx";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#0a0905"),
  backgroundColor: "#0a0905",
  "&:hover": {
    backgroundColor: "#3b3a37",
  },
  fontSize: 14,
  fontWeight: "bold",
  textTransform: "none",
  height: 45,
  borderRadius: 10,
}));

function Question() {
  return (
    <div className="qH-container">
      <div className="qH-main-container">
        <div className="qH-item-container">
          <div className="qH-titleQ-container">
            <p>Frequently Asked Questions</p>
          </div>
          <div className="qH-qAa-container">
            <div className="qH-questions">
              <AccordingQuestion
                summary="What inspired you to create this portfolio?"
                details="The inspiration to create this portfolio stemmed from the valuable advice of a close friend. Recognizing the importance of showcasing my work professionally, they suggested the idea of having a portfolio ready for future job interviews. Understanding the significance of presenting a comprehensive overview of my skills and accomplishments, I embarked on developing this portfolio to effectively highlight my expertise and experience to potential employers."
              />
              <AccordingQuestion
                summary="What technologies/languages did you use to develop these projects?"
                details="The projects were developed using a combination of modern technologies and languages. The frontend was built using React, a powerful JavaScript library that combines HTML, CSS, and JavaScript to create dynamic user interfaces. For the backend, we utilized Node.js, a runtime environment for executing JavaScript code outside of a web browser, allowing for efficient server-side development. Additionally, we implemented an SQL database to manage and store data securely. This technology stack enabled us to create robust and scalable applications that deliver seamless user experiences."
              />
              <AccordingQuestion
                summary="Do you have any favorite projects in your portfolio? If so, why?"
                details="Yes, indeed. Among the projects in my portfolio, the Gym Simulator holds a special place as my favorite. This project holds significance as it marks my initial foray into the world of development. It stands as a testament to my dedication and learning journey, representing the culmination of my efforts and the skills I've acquired along the way. Moreover, the Gym Simulator project allowed me to explore various concepts and techniques, serving as a foundation for subsequent endeavors. Overall, it holds sentimental value and symbolizes the beginning of my rewarding journey in software development."
              />
              <AccordingQuestion
                summary="What have you learned from working on these projects?"
                details="Working on these projects has taught me the importance of perseverance and dedication in achieving goals. I've enhanced my technical skills significantly, mastering languages like HTML, CSS, JavaScript, and SQL, while also exploring frameworks like React and Node.js. These experiences have reinforced the significance of passion and commitment in career pursuits, aligning with my lifelong passion for technology. Overall, they've been invaluable learning experiences, equipping me with the skills and determination to excel in software development."
              />
              <AccordingQuestion
                summary="What challenges did you face while working on these projects?"
                details="As a beginner when I started these projects, one of the main challenges I encountered was learning React along the way. However, despite the initial learning curve, the experience proved to be incredibly valuable and rewarding."
              />
            </div>
          </div>
        </div>
        <div className="qH-contact-container">
          <div className="qH-titleC-container">
            <p>Still have questions?</p>
          </div>
          <div className="qH-text-container">
            <p>
              Please describe your case to receive the most accurate advice.
            </p>
          </div>
          <div className="qH-button-container">
            <ColorButton variant="contained" disableElevation>
              Contact Us
            </ColorButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
