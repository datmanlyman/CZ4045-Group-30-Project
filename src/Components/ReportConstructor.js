import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { ModelAccuracy } from "../Components/ModelData";

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        ></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Introduction
          </Typography>
          <Typography>
            <p>
              Glassdoor is an all-in-one portal for jobs around the world to
              offer insights to the employees experience. However, there comes
              multiple throttling factors when it comes to using Glassdoor:
              <ul>
                <li>Different priorities when reviewing the workplace </li>
                <li>Different standards for each rating</li>
                <li>Different cultures</li>
              </ul>
              Thus, we performed Sentiment Analysis (SA) to help overcome these
              issues.
            </p>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        ></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="warning"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Crawling
          </Typography>
          <Typography>
            <p>
              As Glassdoor's API is only available to their API partners, and a
              public API is not provided to access their review data, we instead
              used Python, BeautifulSoup and Selenium to crawl and parse data
              from their webpages. For each company, we decided to scrape
              reviews from three subpages. <br />
              Example links:
            </p>
            <a
              class="btn btn-warning"
              href="https://www.glassdoor.sg/Reviews/Dyson-Reviews-E214340.htm"
              role="button"
              style={{ margin: "10px" }}
              target="_blank"
              rel="noreferrer"
            >
              Overall Reviews
            </a>
            <a
              class="btn btn-warning"
              href="https://www.glassdoor.sg/Interview/Dyson-Interview-Questions-E214340.htm"
              role="button"
              style={{ margin: "10px" }}
              target="_blank"
              rel="noreferrer"
            >
              Interviews
            </a>
            <a
              class="btn btn-warning"
              href="https://www.glassdoor.sg/Benefits/Dyson-Singapore-Benefits-EI_IE214340.0,5_IL.6,15_IN217.htm"
              role="button"
              style={{ margin: "10px" }}
              target="_blank"
              rel="noreferrer"
            >
              Benefits
            </a>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="info"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Classification
          </Typography>
          <ModelAccuracy />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Innovations
          </Typography>
          <Typography>
            <p>
              After preprocessing, we identified twelve aspect categories in our
              corpus by grouping related words together. <br /> We thus explored
              aspect-based sentiment analysis (ABSA) to identify the aspects
              mentioned in each review and their corresponding sentiment.
              <br /> The usefulness of our ABSA results can be seen in action
              using the aspect filters in our Dashboard.
            </p>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
