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

import Fab from "@mui/material/Fab";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

import { Divider, Slider, Checkbox } from "@mui/material";

import { companies } from "../Components/Companies";
import dataJSON from "../data/data.json";

import WordClouds from "../Components/WordClouds";
import DataTable from "../Components/DataTable";
import Piechart from "../Components/Piechart";
import BarChart from "../Components/BarChart";
import Switch from "@mui/material/Switch";
import MultiplePieCharts from "../Components/MultiplePieCharts";

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
  let reviews = dataJSON;
  let reviewIndexIncrement = 6;

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
  const [company, setCompany] = useState("all");
  const [aspectSentiments, setAspectSentiments] = useState(initialSentiments);
  const [reviewSources, setReviewSources] = useState({
    reviews: true,
    interviews: true,
    benefits: true,
  });
  const [subjectivityFilter, setSubjectivityFilter] = useState({
    subjective: true,
    objective: true,
  });
  const [sentimentFilter, setSentimentFilter] = useState({
    negative: true,
    neutral: true,
    positive: true,
  });
  const [ratingFilter, setRatingFilter] = useState([1, 5]);
  const [currentReviews, setCurrentReviews] = useState([]);
  const [generalFilteredReviews, setGeneralFilteredReviews] = useState([]);
  const [dynamicLoading, setDynamicLoading] = useState({
    lastIndex: 0,
    isComplete: false,
  });
  const [isTableView, setIsTableView] = useState(false);

  useEffect(() => {
    updateCurrentReviews();
  }, [
    company,
    aspectSentiments,
    reviewSources,
    sentimentFilter,
    ratingFilter,
    subjectivityFilter,
  ]);

  // can also consider filter by sentiment/date range

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? panel : false);
  };

  function updateCurrentReviews() {
    let passedGeneralFilters = reviews.filter((review) =>
      checkPassGeneralFilters(review)
    );
    setGeneralFilteredReviews(passedGeneralFilters);
    let tmp = passedGeneralFilters.filter((review) =>
      checkPassAspectFilters(review)
    );
    setCurrentReviews(tmp);
    if (tmp.length > reviewIndexIncrement) {
      setDynamicLoading({ lastIndex: reviewIndexIncrement, isComplete: false });
    } else {
      setDynamicLoading({ lastIndex: tmp.length - 1, isComplete: true });
    }
  }

  function updateLastIndex() {
    let newIndex = dynamicLoading.lastIndex + reviewIndexIncrement;
    if (newIndex > currentReviews.length) {
      setDynamicLoading({
        lastIndex: currentReviews.length - 1,
        isComplete: true,
      });
    } else {
      setDynamicLoading({ ...dynamicLoading, lastIndex: newIndex });
    }
  }

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
    // for (var i = 0; i < currentReviews.length; i++) {
    // let curReview = currentReviews[i];
    for (var i = 0; i < generalFilteredReviews.length; i++) {
      let curReview = generalFilteredReviews[i];

      let matchingAspect = curReview.absa.filter(
        (aspectObj) => aspectObj.aspect === aspectName
      );

      if (matchingAspect.length === 0) {
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

  function getSentimentCounts() {
    let count = [0, 0, 0];
    for (var i = 0; i < currentReviews.length; i++) {
      let review = currentReviews[i];
      // if (review.subjectivity === "objective") {
      //   continue;
      // }
      switch (review.sentiment) {
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

  function checkPassGeneralFilters(review) {
    if (
      (company !== "all" && review.company !== company) ||
      (!reviewSources.reviews && review.tab === "reviews") ||
      (!reviewSources.interviews && review.tab === "interviews") ||
      (!reviewSources.benefits && review.tab === "benefits") ||
      (!sentimentFilter.negative && review.sentiment === "negative") ||
      (!sentimentFilter.neutral && review.sentiment === "neutral") ||
      (!sentimentFilter.positive && review.sentiment === "positive") ||
      (!subjectivityFilter.objective && review.subjectivity === "objective") ||
      (!subjectivityFilter.subjective &&
        review.subjectivity === "subjective") ||
      review.rating < ratingFilter[0] ||
      review.rating > ratingFilter[1]
    ) {
      return false;
    }
    return true;
  }

  // check if review should be shown with current filters
  // absa: [{ aspect: "work", sentiment: "positive" }]
  function checkPassAspectFilters(review) {
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

  const handleSentimentFilterChange = (event) => {
    setSentimentFilter({
      ...sentimentFilter,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubjectivityFilterChange = (event) => {
    setSubjectivityFilter({
      ...subjectivityFilter,
      [event.target.name]: event.target.checked,
    });
  };

  const averageRatings = {};

  const setBarChartData = (company) => {
    const companyData = {};
    var countR = 0;
    var countI = 0;
    var countB = 0;
    var reviewCount = 0;
    var interview = 0;
    var benefit = 0;

    reviews.map((review) => {
      if (review.company === company) {
        if (review.tab === "interviews") {
          countI += 1;
          if (review.sentiment === "positive") {
            interview += 1;
          } else if (review.sentiment === "negative") {
            interview -= 1;
          }
        } else if (review.tab === "benefits") {
          countB += 1;
          if (review.sentiment === "positive") {
            benefit += 1;
          } else if (review.sentiment === "negative") {
            benefit -= 1;
          }
        } else if (review.tab === "reviews") {
          countR += 1;
          if (review.sentiment === "positive") {
            reviewCount += 1;
          } else if (review.sentiment === "negative") {
            reviewCount -= 1;
          }
        }
      }
    });
    companyData["companyName"] = company;
    companyData["averageInterview"] =
      parseFloat(interview) / parseFloat(countI);
    companyData["averageBenefit"] = parseFloat(benefit) / parseFloat(countB);
    companyData["averageReview"] = parseFloat(reviewCount) / parseFloat(countR);
    averageRatings[company] = companyData;
  };

  const setAllBarChartData = () => {
    if (!("all" in averageRatings)) {
      const allData = {};
      var countR = 0;
      var countI = 0;
      var countB = 0;
      var reviewCount = 0;
      var interview = 0;
      var benefit = 0;

      reviews.map((review) => {
        if (review.tab === "interviews") {
          countI += 1;
          if (review.sentiment === "positive") {
            interview += 1;
          } else if (review.sentiment === "negative") {
            interview -= 1;
          }
        } else if (review.tab === "benefits") {
          countB += 1;
          if (review.sentiment === "positive") {
            benefit += 1;
          } else if (review.sentiment === "negative") {
            benefit -= 1;
          }
        } else if (review.tab === "reviews") {
          countR += 1;
          if (review.sentiment === "positive") {
            reviewCount += 1;
          } else if (review.sentiment === "negative") {
            reviewCount -= 1;
          }
        }
      });

      allData["companyName"] = "all";
      allData["averageInterview"] = countI
        ? parseFloat(interview) / parseFloat(countI)
        : 0;
      allData["averageBenefit"] = countB
        ? parseFloat(benefit) / parseFloat(countB)
        : 0;
      allData["averageReview"] = countR
        ? parseFloat(reviewCount) / parseFloat(countR)
        : 0;
      averageRatings["all"] = allData;
    }
  };
  const getBarChartData = (company) => {
    if (company === "all") {
      setAllBarChartData();
    }
    if (!(company in averageRatings)) {
      setBarChartData(company);
    }
    return averageRatings[company];
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              padding: "10px 0",
            }}
          >
            Filters
          </Typography>
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
                  <MenuItem key="all" value="all">
                    All Companies
                  </MenuItem>
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
              <FormControl
                sx={{ m: 3 }}
                component="fieldset"
                variant="standard"
                align="left"
                fullWidth
                style={{ margin: 0 }}
              >
                <FormLabel component="legend">Subjectivity Detection</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={subjectivityFilter.subjective}
                        onChange={handleSubjectivityFilterChange}
                        name="subjective"
                      />
                    }
                    label="Subjective"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={subjectivityFilter.objective}
                        onChange={handleSubjectivityFilterChange}
                        name="objective"
                      />
                    }
                    label="Objective"
                  />
                </FormGroup>
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
                <FormLabel component="legend">Sentiment Analysis</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sentimentFilter.negative}
                        onChange={handleSentimentFilterChange}
                        name="negative"
                      />
                    }
                    label="Negative"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sentimentFilter.neutral}
                        onChange={handleSentimentFilterChange}
                        name="neutral"
                      />
                    }
                    label="Neutral"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={sentimentFilter.positive}
                        onChange={handleSentimentFilterChange}
                        name="positive"
                      />
                    }
                    label="Positive"
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
                        // counts={2}
                        counts={getCounts(aspectSentiment.name)}
                      />
                    </div>
                  ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              padding: "10px 0",
            }}
          >
            Reviews
          </Typography>
          <Grid container item>
            <Grid item xs={6} style={{ paddingLeft: "10px", margin: "auto" }}>
              {`${currentReviews.length} Reviews`}
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={isTableView}
                    onChange={(event) => setIsTableView(event.target.checked)}
                    name="istableview"
                  />
                }
                label="Table View"
              />
            </Grid>
          </Grid>

          {isTableView ? (
            <DataTable company={company} reviews={currentReviews} />
          ) : (
            <div>
              {currentReviews &&
                currentReviews
                  .slice(0, dynamicLoading.lastIndex)
                  .map((review) => (
                    <AspectCard
                      key={`${review.company}-${review.post_title}-${review.location}-${review.text}`}
                      review={review}
                    />
                  ))}

              {dynamicLoading.isComplete ? (
                ""
              ) : (
                <Button variant="contained" fullWidth onClick={updateLastIndex}>
                  Load More
                </Button>
              )}
            </div>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              padding: "10px 0",
            }}
          >
            Search Overview
          </Typography>
          <Piechart
            counts={getSentimentCounts()}
            title="Sentiment Distribution"
            title_variant="h5"
            tooltip_title="Sentiment distribution of current search"
            tooltip_text="Based on sentiments predicted with our BERT model."
            chart_styles={{ margin: "15px auto", width: "80%" }}
          />
          <WordClouds company={company} />
          <BarChart data={getBarChartData(company)} />
          <MultiplePieCharts company={company} />
        </Grid>
      </Grid>
      <Fab
        color="primary"
        aria-label="scroll-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{ position: "fixed", right: "2rem", bottom: "2rem" }}
      >
        <KeyboardArrowUpRoundedIcon />
      </Fab>
    </div>
  );
}
