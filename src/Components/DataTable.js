import * as React from "react";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

import {
  overall_extremes_objective,
  overall_extremes_subjective,
  AETOS_extremes_objective,
  AETOS_extremes_subjective,
  CandK_extremes_objective,
  CandK_extremes_subjective,
  CW_extremes_objective,
  CW_extremes_subjective,
  CL_extremes_objective,
  CL_extremes_subjective,
  Dyson_extremes_objective,
  Dyson_extremes_subjective,
  IHIS_extremes_objective,
  IHIS_extremes_subjective,
  KOandM_extremes_objective,
  KOandM_extremes_subjective,
  MI_extremes_objective,
  MI_extremes_subjective,
  Mediacorp_extremes_objective,
  Mediacorp_extremes_subjective,
  MFS_extremes_objective,
  MFS_extremes_subjective,
  Navitas_extremes_objective,
  Navitas_extremes_subjective,
  OKX_extremes_objective,
  OKX_extremes_subjective,
  PAC_extremes_objective,
  PAC_extremes_subjective,
  RE_extremes_objective,
  RE_extremes_subjective,
  RWS_extremes_objective,
  RWS_extremes_subjective,
  SCM_extremes_objective,
  SCM_extremes_subjective,
  SMRT_extremes_objective,
  SMRT_extremes_subjective,
  STA_extremes_objective,
  STA_extremes_subjective,
  STE_extremes_objective,
  STE_extremes_subjective,
  SJ_extremes_objective,
  SJ_extremes_subjective,
  TW_extremes_objective,
  TW_extremes_subjective,
} from "../data/index";

const getFiles = (file1, file2) => {
  fetch(file1).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = file1;
      alink.click();
    });
  });

  fetch(file2).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = file2;
      alink.click();
    });
  });
};

const columns = [
  //   { field: "", headerName: "ID", width: 70 },
  { field: "company", headerName: "Company", width: 90 },
  { field: "date", headerName: "Date", width: 100 },
  { field: "rating", headerName: "Rating", type: "number", width: 60 },
  { field: "position", headerName: "Position", width: 150 },

  { field: "tab", headerName: "Source", width: 100 },
  { field: "subjectivity", headerName: "Subjectivity", width: 90 },
  { field: "sentiment", headerName: "Sentiment", width: 90 },
  { field: "confidence", headerName: "Confidence", width: 90 },
  { field: "text", headerName: "Review", width: 300 },
  {
    field: "absa",
    headerName: "Aspects",
    width: 200,
    valueGetter: ({ value }) => value && JSON.stringify(value),
  },
];

export default function DataTable(props) {
  const { company, reviews } = props;
  var file1, file2;

  switch (company) {
    case "AETOS":
      file1 = AETOS_extremes_objective;
      file2 = AETOS_extremes_subjective;
      break;

    case "Charles & Keith":
      file1 = CandK_extremes_objective;
      file2 = CandK_extremes_subjective;
      break;

    case "Cheil Worldwide":
      file1 = CW_extremes_objective;
      file2 = CW_extremes_subjective;
      break;

    case "Circles.Life":
      file1 = CL_extremes_objective;
      file2 = CL_extremes_subjective;
      break;

    case "Dyson":
      file1 = Dyson_extremes_objective;
      file2 = Dyson_extremes_subjective;
      break;

    case "Integrated Health Information Systems":
      file1 = IHIS_extremes_objective;
      file2 = IHIS_extremes_subjective;
      break;

    case "Keppel Offshore & Marine":
      file1 = KOandM_extremes_objective;
      file2 = KOandM_extremes_subjective;
      break;

    case "Mapletree Investments":
      file1 = MI_extremes_objective;
      file2 = MI_extremes_subjective;
      break;

    case "Mediacorp":
      file1 = Mediacorp_extremes_objective;
      file2 = Mediacorp_extremes_subjective;
      break;

    case "My First Skool":
      file1 = MFS_extremes_objective;
      file2 = MFS_extremes_subjective;
      break;

    case "Navitas":
      file1 = Navitas_extremes_objective;
      file2 = Navitas_extremes_subjective;
      break;

    case "OKX":
      file1 = OKX_extremes_objective;
      file2 = OKX_extremes_subjective;
      break;

    case "Panasonic Avionics Corporation":
      file1 = PAC_extremes_objective;
      file2 = PAC_extremes_subjective;
      break;

    case "Recruit Express":
      file1 = RE_extremes_objective;
      file2 = RE_extremes_subjective;
      break;

    case "Resorts World Sentosa":
      file1 = RWS_extremes_objective;
      file2 = RWS_extremes_subjective;
      break;

    case "SembCorp Marine":
      file1 = SCM_extremes_objective;
      file2 = SCM_extremes_subjective;
      break;

    case "SMRT":
      file1 = SMRT_extremes_objective;
      file2 = SMRT_extremes_subjective;
      break;

    case "ST Aerospace":
      file1 = STA_extremes_objective;
      file2 = STA_extremes_subjective;
      break;

    case "ST Engineering":
      file1 = STE_extremes_objective;
      file2 = STE_extremes_subjective;
      break;

    case "Surbana Jurong":
      file1 = SJ_extremes_objective;
      file2 = SJ_extremes_subjective;
      break;

    case "Tribal Worldwide":
      file1 = TW_extremes_objective;
      file2 = TW_extremes_subjective;
      break;

    default:
      file1 = overall_extremes_objective;
      file2 = overall_extremes_subjective;
      break;
  }
  return (
    <div>
      <Button
        variant="contained"
        fullWidth
        onClick={() => getFiles(file1, file2)}
      >
        Download Data
      </Button>
      <div
        style={{
          height: 680,
          width: "100%",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "15px",
          background: "white",
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
          allowTextWrap
        />
      </div>
    </div>
  );
}
