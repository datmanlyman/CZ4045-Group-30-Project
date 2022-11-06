import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  tableCellClasses,
  styled,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createAccuracyData(sentiment, precision, recall, f1) {
  return { sentiment, precision, recall, f1 };
}

const rowsAccuracy = [
  [
    createAccuracyData("Negative", "0.74", "0.53", "0.62"),
    createAccuracyData("Neutral", "0.60", "0.88", "0.72"),
    createAccuracyData("Positive", "0.77", "0.17", "0.27"),
  ],
  [
    createAccuracyData("Negative", "0.74", "0.55", "0.63"),
    createAccuracyData("Neutral", "0.62", "0.87", "0.72"),
    createAccuracyData("Positive", "0.68", "0.22", "0.33"),
  ],
  [
    createAccuracyData("Negative", "0.76", "0.51", "0.61"),
    createAccuracyData("Neutral", "0.60", "0.91", "0.72"),
    createAccuracyData("Positive", "0.33", "0.03", "0.06"),
  ],
  [
    createAccuracyData("Negative", "0.81", "0.70", "0.75"),
    createAccuracyData("Neutral", "0.68", "0.87", "0.76"),
    createAccuracyData("Positive", "0.84", "0.33", "0.48"),
  ],
];

const useStyles = makeStyles()((theme) => {
  return {
    table: {
      "& .MuiTableCell-root": { padding: "10px 15px" },
      marginTop: "5px",
      marginBottom: "15px",
    },
  };
});

export function ModelAccuracy() {
  const { classes } = useStyles();
  return (
    <>
      <div style={{ margin: "5px 0" }}>
        <Typography variant="p" gutterBottom>
          Our classification when we started:
        </Typography>
        <TableContainer component={Paper} className={classes.table}>
          <Table sx={{ minWidth: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Model</StyledTableCell>
                <StyledTableCell align="right">Accuracy (%)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Vader
                </StyledTableCell>
                <StyledTableCell align="right">40</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Text Blob
                </StyledTableCell>
                <StyledTableCell align="right">49</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ margin: "5px 0" }}>
        <Typography variant="p">
          However, we found the accuracy low. To improve the accuracy, we first
          explored:
        </Typography>
        <TableContainer component={Paper} className={classes.table}>
          <Table sx={{ minWidth: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Model</StyledTableCell>
                <StyledTableCell align="right">Accuracy (%)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Logistic Regression
                </StyledTableCell>
                <StyledTableCell align="right">67</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  XGBoost
                </StyledTableCell>
                <StyledTableCell align="right">69</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Random Forest
                </StyledTableCell>
                <StyledTableCell align="right">66</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ margin: "5px 0" }}>
        <Typography variant="p">
          We then explored using Stacked Ensemble and BERT Model:
        </Typography>
        <TableContainer component={Paper} className={classes.table}>
          <Table sx={{ minWidth: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Model</StyledTableCell>
                <StyledTableCell align="right">Accuracy (%)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Stacked Ensemble
                </StyledTableCell>
                <StyledTableCell align="right">70</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  <b>BERT</b>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <b>72</b>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="p">
          We thus used the highest accuracy model, BERT, to label the rest of
          the unlabelled data. More information on our model can be found below:
        </Typography>
      </div>
      <div style={{ marginTop: "15px" }}>
        <h3 key="modelAccuracy">BERT Accuracy: 72%</h3>
        <TableContainer component={Paper} className={classes.table}>
          <Table sx={{ minWidth: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sentiment</StyledTableCell>
                <StyledTableCell align="right">Precision</StyledTableCell>
                <StyledTableCell align="right">Recall</StyledTableCell>
                <StyledTableCell align="right">F1-Score</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsAccuracy[3].map((row) => (
                <StyledTableRow
                  key={row.sentiment + row.f1 + row.precision + row.precision}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.sentiment}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.precision}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.recall}</StyledTableCell>
                  <StyledTableCell align="right">{row.f1}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export function ModelPrecision() {
  return (
    <>
      <h3>Overall Accuracy</h3>
    </>
  );
}
