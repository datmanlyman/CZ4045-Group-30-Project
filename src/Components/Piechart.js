import { Typography } from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";

export default function Piechart(props) {
  const { counts } = props;
  const [positive, neutral, negative] = counts;

  let total = positive + neutral + negative;

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Sentiment Distribution
      </Typography>
      <div style={{ margin: "15px auto", width: "80%" }}>
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
