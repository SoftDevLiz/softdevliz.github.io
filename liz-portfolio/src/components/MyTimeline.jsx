import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from "@mui/material";



function MyTimeline() {
    return (
      <div>
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>          
          <Typography variant="h6">Learn HTML</Typography>
          <Typography color="silver" variant="body2">Codecademy | 2021</Typography>
          <Typography>Started exploring my interest in code</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
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
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>          
          <Typography variant="h6">Harvard CS50</Typography>
          <Typography color="silver" variant="body2">Harvard Online | 2023</Typography>
          <Typography>Started Harvard's CS50 in preparation for my upcoming course</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>          
        <Typography variant="h6">Software Development with Distinction</Typography>
          <Typography color="silver" variant="body2">CodeSpace Academy | 2023 - 2024</Typography>
          <Typography>Went all in and completed a 1 year course in software development!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    )
}

export default MyTimeline;

