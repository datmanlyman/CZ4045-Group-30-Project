import DataTable from "../Components/DataTable";
import { ModelAccuracy } from "../Components/ModelData";
import dataJSON from "../data/data.json";

export const Data = () => {
  return (
    <>
      <ModelAccuracy />
      <DataTable company="all" reviews={dataJSON} />
    </>
  );
};
