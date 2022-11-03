import React from "react";
import { makeStyles } from "tss-react/mui";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      margin: "0 0 20px 0",
    },
    header: {
      // paddingBottom: "0",
    },
    headerAction: {
      alignSelf: "center",
    },
    chip: {
      margin: "10px 5px 0 0",
    },
    generalInfo: {
      margin: "auto",
      marginRight: "10px",
    },
  };
});

export default function AspectCard(props) {
  const { classes } = useStyles();
  const {
    company,
    post_title,
    date,
    rating,
    text,
    position,
    location,
    tab,
    subjectivity,
    sentiment,
    confidence,
    absa,
  } = props.review;

  function getColour(sentiment) {
    switch (sentiment) {
      case "positive":
        return "success";
      case "negative":
        return "error";
      case "neutral":
      default:
        return "default";
    }
  }
  function getDate(unparsedDate) {
    // default treats as mm/dd/yy, our data is dd/mm/yy
    const tmp = unparsedDate.split("/");
    let date = new Date(`${tmp[1]}/${tmp[0]}/${tmp[2]}`);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  }

  function getDisplayAspect(aspect) {
    switch (aspect) {
      case "company":
        return "Company";
      case "work":
        return "Work";
      case "management":
        return "Management";
      case "staff":
        return "Staff";
      case "compensation":
        return "Compensation";
      case "culture":
        return "Culture";
      case "facilities":
        return "Facilities";
      case "worklifebalance":
        return "Work Life Balance";
      case "career":
        return "Career";
      case "learning":
        return "Learning";
      case "interview":
        return "Interview";
      case "benefits":
        return "Benefits";
      default:
        return "Undefined";
    }
  }

  function getSubjColour(subjectivity, sentiment) {
    if (subjectivity === "subjective") {
      if (sentiment === "negative") {
        return "#ff9999";
      } else if (sentiment === "positive") {
        return "#adebad";
      }
    }
    return "#d9d9d9";
  }

  return (
    <Card sx={{ minWidth: 275 }} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar>
            <PersonOutlineRoundedIcon />
          </Avatar>
        }
        action={
          <div className={classes.generalInfo}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              align="right"
            >
              {company}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              align="right"
            >
              {tab}
            </Typography>
          </div>
        }
        title={position ? position : "Anonymous"}
        subheader={location ? `${getDate(date)} | ${location}` : getDate(date)}
        classes={{ root: classes.header, action: classes.headerAction }}
      ></CardHeader>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Rating
              name="review-rating"
              value={Number(rating)}
              readOnly
              precision={0.5}
              size="small"
            />
          </Grid>
          <Grid
            // container
            item
            xs={2}
            style={{
              backgroundColor: getSubjColour(subjectivity, sentiment),
              padding: 0,
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            <Typography
              variant="subtitle1"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              {subjectivity === "subjective"
                ? sentiment.substring(0, 3).toUpperCase()
                : subjectivity.substring(0, 3).toUpperCase()}
            </Typography>
            <Typography
              variant="button"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              {confidence.substring(0, 4)}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h5" component="div" gutterBottom>
          {post_title}
        </Typography>
        <Typography variant="body2">{text}</Typography>
        {absa &&
          absa.map((aspectObj) => (
            <Chip
              key={aspectObj.aspect}
              label={getDisplayAspect(aspectObj.aspect)}
              color={getColour(aspectObj.sentiment)}
              className={classes.chip}
            />
          ))}
      </CardContent>
    </Card>
  );
}
