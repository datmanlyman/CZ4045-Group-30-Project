import React, { useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";
import SentimentNeutralRoundedIcon from "@mui/icons-material/SentimentNeutralRounded";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";

export default function ToggleButtonsMultiple(props) {
  const { aspectSentiment, parentCallback, counts } = props;
  const { name, sentiments } = aspectSentiment;
  const [curSentiments, setCurSentiments] = React.useState(sentiments);

  useEffect(() => {
    setCurSentiments(sentiments);
  }, [sentiments]);

  const handleChange = (event, newSentiments) => {
    setCurSentiments(newSentiments);
    parentCallback([name, newSentiments]);
  };

  return (
    <ToggleButtonGroup
      value={curSentiments}
      onChange={handleChange}
      aria-label={`${name}-select-sentiments`}
      fullWidth
    >
      <ToggleButton
        color="primary"
        variant="contained"
        value="negative"
        aria-label={`${name}-negative`}
        style={{ flexDirection: "column", padding: "5px" }}
      >
        <SentimentDissatisfiedRoundedIcon />
        <Typography variant="subtitle1">{counts[0]}</Typography>
      </ToggleButton>
      <ToggleButton
        color="primary"
        value="neutral"
        aria-label={`${name}-neutral`}
        style={{ flexDirection: "column", padding: "5px" }}
      >
        <SentimentNeutralRoundedIcon />
        <Typography variant="subtitle1">{counts[1]}</Typography>
      </ToggleButton>
      <ToggleButton
        color="primary"
        value="positive"
        aria-label={`${name}-positive`}
        style={{ flexDirection: "column", padding: "5px" }}
      >
        <SentimentSatisfiedRoundedIcon />
        <Typography variant="subtitle1">{counts[2]}</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
