import { Typography } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";
import React from "react";
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

export default function Piechart(props) {
  const {
    counts,
    title,
    tooltip_title,
    tooltip_text,
    title_variant,
    chart_styles,
  } = props;
  const [negative, neutral, positive] = counts;

  let total = positive + neutral + negative;

  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">{tooltip_title}</Typography>
            {/* <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "} */}
            {tooltip_text}
          </React.Fragment>
        }
      >
        <Typography variant={title_variant} gutterBottom>
          {title}
        </Typography>
      </HtmlTooltip>
      <div style={chart_styles}>
        <PieChart
          data={[
            { title: "Positive", value: positive, color: "#adebad" },
            { title: "Neutral", value: neutral, color: "#d9d9d9" },
            { title: "Negative", value: negative, color: "#ff9999" },
          ]}
          label={(data) =>
            `${data.dataEntry.title} ${
              Math.round((data.dataEntry.value / total) * 100) / 100
            }`
          }
          labelPosition={58}
          labelStyle={{
            fontSize: "0.4rem",
            // fontColor: "FFFFFA",
            fontWeight: "500",
          }}
        />
      </div>
    </div>
  );
}
