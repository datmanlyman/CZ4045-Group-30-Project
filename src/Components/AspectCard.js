import React from "react";
import { makeStyles } from "tss-react/mui";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      margin: "0 0 20px 0",
    },
    header: {
      paddingBottom: "0",
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
    let date = new Date(unparsedDate);
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
      case "faciltiies":
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
        <Rating
          name="review-rating"
          value={rating}
          readOnly
          precision={0.5}
          size="small"
        />
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
