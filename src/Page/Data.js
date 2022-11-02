import { CompanyDropdown } from '../Components/CompanyDropdown';
import { CompanyData } from '../Components/CompanyData';
import { ModelAccuracy } from '../Components/ModelData';

export const Data = () => {
    return (
        <>
            <CompanyDropdown/>
            <ModelAccuracy/>
            <CompanyData/>
        </>
    )
}