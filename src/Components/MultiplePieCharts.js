import React from "react";
import Grid from "@mui/material/Grid";
import Piechart from "../Components/Piechart";
import { Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import all_files from "../data/jsonIndex";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

export default function MultiplePieCharts(props) {
  let { company } = props;

  function getCounts(obj) {
    let counts = [0, 0, 0];
    counts[0] = obj["Negative Sentiment Count"];
    counts[1] = obj["Objective Count"];
    counts[2] = obj["Positive Sentiment Count"];
    return counts;
  }

  if (company === "all") {
    company = "overall";
  }

  let files = all_files.filter((obj) => obj.company === company)[0].files;
  const [entry, mid, mgmt, exec] = files;

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      style={{ margin: "5px", width: "100%" }}
    >
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">
              {`Sentiment distribution in ${company} by reviewer role`}
            </Typography>
            {"Based on sentiments predicted with our BERT model."}
          </React.Fragment>
        }
      >
        <Typography variant="h5">Sentiment Distribution by Role</Typography>
      </HtmlTooltip>
      <Grid container spacing={2}>
        <Grid item style={{ width: "50%" }} align="center">
          <Typography variant="body2" gutterBottom>
            {`Avg Rating: ${Math.round(entry["Average Rating"] * 100) / 100}`}
          </Typography>
          <Piechart
            counts={getCounts(entry)}
            title="Entry Level"
            title_variant="body2"
            tooltip_title="Sentiment distribution of reviews by entry-level employees"
            tooltip_text="Based on sentiments predicted with our BERT model."
            chart_styles={{ margin: "15px auto" }}
          />
        </Grid>
        <Grid item style={{ width: "50%" }} align="center">
          <Typography variant="body2" gutterBottom>
            {`Avg Rating: ${Math.round(mid["Average Rating"] * 100) / 100}`}
          </Typography>
          <Piechart
            counts={getCounts(mid)}
            title="Mid Level"
            title_variant="body2"
            tooltip_title="Sentiment distribution of reviews by mid-level employees"
            tooltip_text="Based on sentiments predicted with our BERT model."
            chart_styles={{ margin: "15px auto" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item style={{ width: "50%" }} align="center">
          <Typography variant="body2" gutterBottom>
            {`Avg Rating: ${Math.round(mgmt["Average Rating"] * 100) / 100}`}
          </Typography>
          <Piechart
            counts={getCounts(mgmt)}
            title="Management Level"
            title_variant="body2"
            tooltip_title="Sentiment distribution of reviews by management-level employees"
            tooltip_text="Based on sentiments predicted with our BERT model."
            chart_styles={{ margin: "15px auto" }}
          />
        </Grid>
        <Grid item style={{ width: "50%" }} align="center">
          <Typography variant="body2" gutterBottom>
            {`Avg Rating: ${Math.round(exec["Average Rating"] * 100) / 100}`}
          </Typography>
          <Piechart
            counts={getCounts(exec)}
            title="Executive Level"
            title_variant="body2"
            tooltip_title="Sentiment distribution of reviews by exec-level employees"
            tooltip_text="Based on sentiments predicted with our BERT model."
            chart_styles={{ margin: "15px auto" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
