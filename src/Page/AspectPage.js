import { makeStyles } from "tss-react/mui";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import AspectCard from "../Components/AspectCard";

import ToggleButtonsMultiple from "../Components/ToggleButtonsMultiple";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Divider, Slider, Checkbox } from "@mui/material";

import { companies } from "../Components/Companies";
import AspectData from "../Components/AspectData";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      // width: '90%',
      margin: "auto",
      // maxWidth: '1500px',
      position: "relative",
    },
    filters: {
      textAlign: "center",
    },
    aspectFilter: {
      paddingBottom: theme.spacing(2),
    },
  };
});

export default function AspectPage() {
  const { classes } = useStyles();

  // replace this with full review data
  const reviews = [ //AspectData;
    {
      company: "AETOS",
      post_title: "title here",
      date: "12-11-2012",
      rating: 2,
      text: "hello text here",
      position: "position here",
      location: "location here",
      tab: "interviews",
      absa: [
        { aspect: "work", sentiment: "positive" },
        { aspect: "compensation", sentiment: "negative" },
      ],
    },
    {
      company: "Dyson",
      post_title: "title here 2",
      date: "12-11-2012",
      rating: 2.5,
      text: "hello text here",
      position: "",
      location: "",
      tab: "reviews",
      absa: [{ aspect: "work", sentiment: "positive" }],
    },
  ];

  const initialSentiments = [
    {
      displayName: "Company",
      name: "company",
      sentiments: ["negative", "neutral", "positive"],
    },
    {
      displayName: "Work",
      name: "work",
      sentiments: ["negative", "neutral", "positive"],
    },
    {
      displayName: "Management",
      name: "management",
      sentiments: ["negative", "neutral", "positive"],
    },
    {
      displayName: "Staff",
      name: "staff",
      sentiments: ["negative", "neutral", "positive"],
    },
    {
      displayName: "Compensation",
      name: "compensation",
      sentiments: ["negative", "neutral", "positive"],
    },
    {
      displayName: "Culture",
      name: "culture",
      sentiments: ["negative", "neutral", "positive"],
    },
    {
      displayName: "Facilities",
      name: "facilities",
      sentiments: ["negative", "neutral", "positive"],
    },
    {
      displayName: "Work Life Balance",
      name: "worklifebalance",
      sentiments: ["negative", "neutral", "positive"],
    },
    {
      displayName: "Career",
      name: "career",
      sentiments: ["negative", "neutral", "positive"],
    },
    {
      displayName: "Learning",
      name: "learning",
      sentiments: ["negative", "neutral", "positive"],
    },
    {
      displayName: "Interview",
      name: "interview",
      sentiments: ["negative", "neutral", "positive"],
    },
    {
      displayName: "Benefits",
      name: "benefits",
      sentiments: ["negative", "neutral", "positive"],
    },
  ];

  const ratingMarks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
  ];

  const [accordionExpanded, setAccordionExpanded] = useState("aspectFilters");
  const [company, setCompany] = useState(companies[0].name);
  const [aspectSentiments, setAspectSentiments] = useState(initialSentiments);
  const [reviewSources, setReviewSources] = useState({
    reviews: true,
    interviews: true,
    benefits: true,
  });
  const [ratingFilter, setRatingFilter] = React.useState([1, 5]);

  // can also consider filter by sentiment/date range

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? panel : false);
  };

  function setAspectFilters(nameSentiments) {
    setAspectSentiments((cur) =>
      cur.map((obj) => {
        if (obj.name === nameSentiments[0]) {
          return { ...obj, sentiments: nameSentiments[1] };
        }
        return obj;
      })
    );
  }

  // check number of reviews for each aspect sentiment, given the current filters
  function getCounts(aspectName) {
    let count = [0, 0, 0];
    for (var i = 0; i < reviews.length; i++) {
      let curReview = reviews[i];
      let matchingAspect = curReview.absa.filter(
        (aspectObj) => aspectObj.aspect === aspectName
      );

      if (matchingAspect.length === 0 || !checkPassFilters(curReview)) {
        continue;
      }

      switch (matchingAspect[0].sentiment) {
        case "negative":
          count[0] += 1;
          break;
        case "neutral":
          count[1] += 1;
          break;
        case "positive":
          count[2] += 1;
          break;
        default:
          break;
      }
    }
    return count;
  }

  // check if review should be shown with current filters
  // absa: [{ aspect: "work", sentiment: "positive" }]
  function checkPassFilters(review) {
    if (
      review.company !== company ||
      (!reviewSources.reviews && review.tab === "reviews") ||
      (!reviewSources.interviews && review.tab === "interviews") ||
      (!reviewSources.benefits && review.tab === "benefits") ||
      review.rating < ratingFilter[0] ||
      review.rating > ratingFilter[1]
    ) {
      return false;
    }

    for (var i = 0; i < review.absa.length; i++) {
      let reviewAspect = review.absa[i];
      // check filters
      let filters = aspectSentiments.filter(
        (e) => e.name === reviewAspect.aspect
      )[0].sentiments;
      if (!filters.includes(reviewAspect.sentiment)) {
        return false;
      }
    }
    return true;
  }

  const handleResetAspectFilters = () => {
    setAspectSentiments(initialSentiments);
  };

  const handleReviewSourcesChange = (event) => {
    setReviewSources({
      ...reviewSources,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Accordion
            expanded={accordionExpanded === "generalFilters"}
            onChange={handleAccordionChange("generalFilters")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="generalFilters-content"
              id="generalFilters-header"
            >
              <Typography>General Filters</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl fullWidth>
                <FormLabel component="legend">Company</FormLabel>
                <Select
                  labelId="select-company"
                  id="select-company"
                  value={company}
                  // label="Company"
                  onChange={(event) => {
                    setCompany(event.target.value);
                  }}
                  fullWidth
                >
                  {companies &&
                    companies.map((company) => (
                      <MenuItem key={company.name} value={company.name}>
                        {company.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <Divider color="primary" style={{ margin: "20px 0" }} />
              <FormControl
                sx={{ m: 3 }}
                component="fieldset"
                variant="standard"
                align="left"
                fullWidth
                style={{ margin: 0 }}
              >
                <FormLabel component="legend">
                  Review Sources (Glassdoor)
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={reviewSources.reviews}
                        onChange={handleReviewSourcesChange}
                        name="reviews"
                      />
                    }
                    label="Reviews"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={reviewSources.interviews}
                        onChange={handleReviewSourcesChange}
                        name="interviews"
                      />
                    }
                    label="Interviews"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={reviewSources.benefits}
                        onChange={handleReviewSourcesChange}
                        name="benefits"
                      />
                    }
                    label="Benefits"
                  />
                </FormGroup>
              </FormControl>
              <Divider color="primary" style={{ margin: "20px 0" }} />
              <FormControl fullWidth align="left">
                <FormLabel component="legend">Rating Range</FormLabel>
                <Slider
                  // aria-label="Rating Slider"
                  value={ratingFilter}
                  onChange={(event, newValue) => {
                    setRatingFilter(newValue);
                  }}
                  step={0.5}
                  min={1}
                  max={5}
                  valueLabelDisplay="auto"
                  marks={ratingMarks}
                  style={{ width: "90%", alignSelf: "center" }}
                />
              </FormControl>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={accordionExpanded === "aspectFilters"}
            onChange={handleAccordionChange("aspectFilters")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="aspectFilters-content"
              id="aspectFilters-header"
            >
              <Typography>Aspect Filters</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.filters}>
                <Button
                  variant="outlined"
                  style={{ margin: "0 0 20px 0" }}
                  onClick={handleResetAspectFilters}
                >
                  Reset Aspect Filters
                </Button>
                {aspectSentiments &&
                  aspectSentiments.map((aspectSentiment) => (
                    <div
                      key={aspectSentiment.name}
                      className={classes.aspectFilter}
                    >
                      <Typography variant="p" component="p" gutterBottom>
                        {aspectSentiment.displayName}
                      </Typography>
                      <ToggleButtonsMultiple
                        key={aspectSentiment.name}
                        aspectSentiment={aspectSentiment}
                        parentCallback={setAspectFilters}
                        counts={getCounts(aspectSentiment.name)}
                      />
                    </div>
                  ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} md={8}>
          <div>
            {reviews &&
              reviews.map((review) =>
                checkPassFilters(review) ? (
                  <AspectCard key={review.post_title} review={review} />
                ) : (
                  ""
                )
              )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
