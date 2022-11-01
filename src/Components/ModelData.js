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

function createPredictionData(
  name,
  calories,
  fat,
  carbs
) {
  return { name, calories, fat, carbs };
}

function createAccuracyData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
}

const rowsPrediction = [
    createPredictionData('Frozen yoghurt', 159, 6.0, 24),
    createPredictionData('Ice cream sandwich', 237, 9.0, 37),
    createPredictionData('Eclair', 262, 16.0, 24),
    createPredictionData('Cupcake', 305, 3.7, 67),
    createPredictionData('Gingerbread', 356, 16.0, 49),
];

const rowsAccuracy = [
    createAccuracyData('Frozen yoghurt', 159, 6.0, 24, 0),
    createAccuracyData('Ice cream sandwich', 237, 9.0, 37, 0),
    createAccuracyData('Eclair', 262, 16.0, 24, 0),
    createAccuracyData('Cupcake', 305, 3.7, 67, 0),
    createAccuracyData('Gingerbread', 356, 16.0, 49, 0),
];

export function ModelPredictions() {
    return (
        <>
            <h3>Model Prediction</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Models</StyledTableCell>
                            <StyledTableCell align="right">Positive</StyledTableCell>
                            <StyledTableCell align="right">Negative</StyledTableCell>
                            <StyledTableCell align="right">Objective</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rowsPrediction.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export const ModelAccuracy = () => {
    return (
        <>
            <h3>Model Accuracy</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Models</StyledTableCell>
                            <StyledTableCell align="right">Accuracy</StyledTableCell>
                            <StyledTableCell align="right">Precision</StyledTableCell>
                            <StyledTableCell align="right">Recall</StyledTableCell>
                            <StyledTableCell align="right">F1-Score</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rowsAccuracy.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}