import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";
import { Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

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

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function BarChart(props) {
  const { data } = props;
  var { companyName, averageInterview, averageBenefit, averageReview } = data;

  if (companyName === "all") {
    companyName = "Overall";
  }

  const options = {
    title: {
      text: companyName,
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
          { label: "Reviews", y: averageReview },
          { label: "Benefits", y: averageBenefit },
          { label: "Interviews", y: averageInterview },
        ],
      },
    ],
  };

  return (
    <div style={{ margin: "15px auto" }}>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">
              {`Average tab (review source) sentiments for ${companyName}`}
            </Typography>
            {
              "Calculated by taking +1 for each positive review, 0 for each neutral review, -1 for negative review. Based on sentiments predicted with our BERT model."
            }
          </React.Fragment>
        }
      >
        <Typography variant="h5">Average Tab Sentiment</Typography>
      </HtmlTooltip>

      <CanvasJSChart options={options} />
    </div>
  );
}
