import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { Typography } from "@mui/material";
import CodecademyLogo from "../assets/codecademy.png";
import IxdfLogo from "../assets/Ixdf.png";
import Cs50Logo from "../assets/CS50.png";
import CodespaceLogo from "../assets/codespace.jpeg";

function MyTimeline() {
    return (
      <div className="timeline">
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <img 
                src={CodecademyLogo} 
                alt="Codecademy Logo" 
                style={{ width: '40px', height: '40px' }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>          
          <Typography variant="h6">Learn HTML</Typography>
          <Typography color="silver" variant="body2">Codecademy | 2021</Typography>
          <Typography>Exploring my interest in code</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <img 
                src={IxdfLogo} 
                alt="Interaction Design Foundation Logo" 
                style={{ width: '40px', height: '40px' }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>          
          <Typography variant="h6">UX Design for Beginners</Typography>
          <Typography color="silver" variant="body2">IxDF | 2022</Typography>
          <Typography>Drawn to UX design</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <img 
                src={Cs50Logo} 
                alt="Harvard CS50 Logo" 
                style={{ width: '40px', height: '40px' }}
        />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>          
          <Typography variant="h6">Harvard CS50</Typography>
          <Typography color="silver" variant="body2">Harvard Online | 2023</Typography>
          <Typography>Harvard's CS50 in preparation for my upcoming course</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <img 
                src={CodespaceLogo} 
                alt="Codespace Academy Logo" 
                style={{ width: '40px', height: '40px', borderRadius: '50%'}}
          />
        </TimelineSeparator>
        <TimelineContent>          
        <Typography variant="h6">Software Development with Distinction</Typography>
          <Typography color="silver" variant="body2">CodeSpace Academy | 2023 - 2024</Typography>
          <Typography>Completed a 1 year course in software development!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    )
}

export default MyTimeline;

