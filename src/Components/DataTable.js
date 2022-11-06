import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  //   { field: "", headerName: "ID", width: 70 },
  { field: "company", headerName: "Company", width: 90 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "rating", headerName: "Rating", type: "number", width: 60 },
  { field: "position", headerName: "Position", width: 150 },

  { field: "tab", headerName: "Source", width: 90 },
  { field: "subjectivity", headerName: "Subjectivity", width: 90 },
  { field: "sentiment", headerName: "Sentiment", width: 90 },
  { field: "confidence", headerName: "Confidence", width: 100 },
  { field: "text", headerName: "Review", width: 300 },
  {
    field: "absa",
    headerName: "Aspects",
    width: 200,
    valueGetter: ({ value }) => value && JSON.stringify(value),
  },
];

export default function DataTable(props) {
  const { reviews } = props;

  return (
    <div>
      <div
        style={{
          height: 680,
          width: "100%",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "5px",
          background: "white",
          borderRadius: "5px",
        }}
      >
        <DataGrid
          rows={reviews}
          columns={columns}
          getRowId={(review) =>
            `${review.company}-${review.post_title}-${review.location}-${review.text}`
          }
          rowsPerPageOptions={[10]}
          pageSize={10}
          getRowHeight={() => "auto"}
          sx={{
            "& .MuiDataGrid-cell": {
              whiteSpace: "normal !important",
              wordWrap: "break-word !important",
            },
          }}
        />
      </div>
    </div>
  );
}
