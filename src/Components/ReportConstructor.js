import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Button } from "react-bootstrap";
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
              Thus, we created a Sentimental Analysis (SA) to overcome these
              possible issues.
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
              reviews from three subpages:
            </p>
            <Button variant="danger" style={{ margin: "10px" }}>
              Overall Reviews
            </Button>
            <Button variant="danger" style={{ margin: "10px" }}>
              Interviews
            </Button>
            <Button variant="danger" style={{ margin: "10px" }}>
              Benefits
            </Button>
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
          <Typography>
            <p>
              Our classification accuracy when we started was:
              <ul>
                <li>Vader: 40% Accuracy</li>
                <li>TextBlob: 49% Accuracy</li>
              </ul>
              However, we found the accuracy low, so to improve the accuracy we tried:
              <ul>
                <li>Logistic Regression: 67% Accuracy</li>
                <li>XGBoost: 69% Accuracy</li>
                <li>Random Forest: 66% Accuracy</li>
              </ul>
              We then tried a Stacked Ensemble and BERT model:
              <ul>
                <li>Stacked Ensemble: 70%</li>
                <li>BERT Model: 72%</li>
              </ul>
              Considering that review sentiment labels can be very subjective, as evidenced by our manually labelled data already only having an 81% inter-annotator agreement, 
              an accuracy of 72% is already a decently high score. We thus used the trained BERT model to label the rest of the unlabelled data.
            </p>
          </Typography>
          { /*<ModelAccuracy /> */ }
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
              After preprocessing, we identified 12 equivalence classes in our corpus by grouping related words together.
              We thus tried Aspect Based Sentimental Analysis to identify each reviews aspect and their sentiment.
              It can be shown in action through the filters in the "Report" page.
            </p>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
