import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, tableCellClasses, styled } from '@mui/material';


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
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createAccuracyData(sentiment, precision, recall, f1) {
    return { sentiment, precision, recall, f1 }
}



const rowsAccuracy = [
    [
        createAccuracyData('Negative', "0.74", "0.53", "0.62"),
        createAccuracyData('Neutral', "0.60", "0.88", "0.72"),
        createAccuracyData('Positive', "0.77", "0.17", "0.27")
    ],
    [
        createAccuracyData('Negative', "0.74", "0.55", "0.63"),
        createAccuracyData('Neutral', "0.62", "0.87", "0.72"),
        createAccuracyData('Positive', "0.68", "0.22", "0.33")
    ],
    [
        createAccuracyData('Negative', "0.76", "0.51", "0.61"),
        createAccuracyData('Neutral', "0.60", "0.91", "0.72"),
        createAccuracyData('Positive', "0.33", "0.03", "0.06")
    ],
    [
        createAccuracyData('Negative', "0.81", "0.70", "0.75"),
        createAccuracyData('Neutral', "0.68", "0.87", "0.76"),
        createAccuracyData('Positive', "0.84", "0.33", "0.48")
    ]
];

const models = ["Logistic Regression", "XGBoost", "Random Forest", "BERT"];
const accuracy = ["64%", "66%", "64%", "73%"];

export function ModelAccuracy() {
    return (
        <>
            <h3 key="modelAccuracy">BERT Accuracy: 73%</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
                        <StyledTableRow key={row.sentiment + row.f1 + row.precision + row.precision}>
                            <StyledTableCell component="th" scope="row">
                                {row.sentiment}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.precision}</StyledTableCell>
                            <StyledTableCell align="right">{row.recall}</StyledTableCell>
                            <StyledTableCell align="right">{row.f1}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
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