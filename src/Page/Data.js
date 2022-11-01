import { CompanyDropdown } from '../Components/CompanyDropdown';
import { CompanyData } from '../Components/CompanyData';
import { ModelPredictions, ModelAccuracy } from '../Components/ModelData';

export const Data = () => {
    return (
        <>
            <CompanyDropdown/>
            <ModelPredictions/>
            <ModelAccuracy/>
            <CompanyData/>
        </>
    )
}