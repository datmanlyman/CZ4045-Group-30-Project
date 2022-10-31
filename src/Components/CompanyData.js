import { useContext } from "react";
import { DropdownContext } from "../Utils/DropdownContext";
import { 
    overall_negative, overall_objective, overall_positive, overall_extremes_objective, overall_extremes_subjective,
    AETOS_negative, AETOS_objective, AETOS_positive, AETOS_extremes_objective, AETOS_extremes_subjective,
    CandK_negative, CandK_objective, CandK_positive, CandK_extremes_objective, CandK_extremes_subjective,
    CW_negative, CW_objective, CW_positive, CW_extremes_objective, CW_extremes_subjective,
    CL_negative, CL_objective, CL_positive, CL_extremes_objective, CL_extremes_subjective,
    Dyson_negative, Dyson_objective, Dyson_positive, Dyson_extremes_objective, Dyson_extremes_subjective,  
    IHIS_negative, IHIS_objective, IHIS_positive, IHIS_extremes_objective, IHIS_extremes_subjective,
    KOandM_negative, KOandM_objective, KOandM_positive, KOandM_extremes_objective, KOandM_extremes_subjective,
    MI_negative, MI_objective, MI_positive, MI_extremes_objective, MI_extremes_subjective,
    Mediacorp_negative, Mediacorp_objective, Mediacorp_positive, Mediacorp_extremes_objective, Mediacorp_extremes_subjective,
    MFS_negative, MFS_objective, MFS_positive, MFS_extremes_objective, MFS_extremes_subjective,
    Navitas_negative, Navitas_objective, Navitas_positive, Navitas_extremes_objective, Navitas_extremes_subjective,
    OKX_negative, OKX_objective, OKX_positive, OKX_extremes_objective, OKX_extremes_subjective,
    PAC_negative, PAC_objective, PAC_positive, PAC_extremes_objective, PAC_extremes_subjective,
    RE_negative, RE_objective, RE_positive, RE_extremes_objective, RE_extremes_subjective,
    RWS_negative, RWS_objective, RWS_positive, RWS_extremes_objective, RWS_extremes_subjective,
    SCM_negative, SCM_objective, SCM_positive, SCM_extremes_objective, SCM_extremes_subjective,
    SMRT_negative, SMRT_objective, SMRT_positive, SMRT_extremes_objective, SMRT_extremes_subjective,
    STA_negative, STA_objective, STA_positive, STA_extremes_objective, STA_extremes_subjective,
    STE_negative, STE_objective, STE_positive, STE_extremes_objective, STE_extremes_subjective,
    SJ_negative, SJ_objective, SJ_positive, SJ_extremes_objective, SJ_extremes_subjective,
    TW_negative, TW_objective, TW_positive, TW_extremes_objective, TW_extremes_subjective
 } from "../data/index";

export const CompanyData = () => {
    const getFiles = (file1, file2) => {
        fetch(file1).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = file1;
                alink.click();
            })
        });

        fetch(file2).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = file2;
                alink.click();
            })
        });
    }

    const { display } = useContext(DropdownContext);
    var img1 = overall_positive;
    var img2 = overall_objective;
    var img3 = overall_negative;
    var file1 = overall_extremes_objective;
    var file2 = overall_extremes_subjective;

    switch (display) {
        case "AETOS":
            img1 = AETOS_positive;
            img2 = AETOS_objective;
            img3 = AETOS_negative;
            file1 = AETOS_extremes_objective;
            file2 = AETOS_extremes_subjective;
            break;

        case "Charles & Keith":
            img1 = CandK_positive;
            img2 = CandK_objective;
            img3 = CandK_negative;
            file1 = CandK_extremes_objective;
            file2 = CandK_extremes_subjective;
            break;

        case "Cheil Worldwide":
            img1 = CW_positive;
            img2 = CW_objective;
            img3 = CW_negative;
            file1 = CW_extremes_objective;
            file2 = CW_extremes_subjective;
            break;

        case "Circles.Life":
            img1 = CL_positive;
            img2 = CL_objective;
            img3 = CL_negative;
            file1 = CL_extremes_objective;
            file2 = CL_extremes_subjective;
            break;

        case "Dyson":
            img1 = Dyson_positive;
            img2 = Dyson_objective;
            img3 = Dyson_negative;
            file1 = Dyson_extremes_objective;
            file2 = Dyson_extremes_subjective;
            break;

        case "Integrated Health Information System":
            img1 = IHIS_positive;
            img2 = IHIS_objective;
            img3 = IHIS_negative;
            file1 = IHIS_extremes_objective;
            file2 = IHIS_extremes_subjective;
            break;

        case "Keppel Offshore & Marine":
            img1 = KOandM_positive;
            img2 = KOandM_objective;
            img3 = KOandM_negative;
            file1 = KOandM_extremes_objective;
            file2 = KOandM_extremes_subjective;
            break;

        case "Mapletree Investments":
            img1 = MI_positive;
            img2 = MI_objective;
            img3 = MI_negative;
            file1 = MI_extremes_objective;
            file2 = MI_extremes_subjective;
            break;

        case "Mediacorp":
            img1 = Mediacorp_positive;
            img2 = Mediacorp_objective;
            img3 = Mediacorp_negative;
            file1 = Mediacorp_extremes_objective;
            file2 = Mediacorp_extremes_subjective;
            break;

        case "My First Skool":
            img1 = MFS_positive;
            img2 = MFS_objective;
            img3 = MFS_negative;
            file1 = MFS_extremes_objective;
            file2 = MFS_extremes_subjective;
            break;

        case "Navitas":
            img1 = Navitas_positive;
            img2 = Navitas_objective;
            img3 = Navitas_negative;
            file1 = Navitas_extremes_objective;
            file2 = Navitas_extremes_subjective;
            break;

        case "OKX":
            img1 = OKX_positive;
            img2 = OKX_objective;
            img3 = OKX_negative;
            file1 = OKX_extremes_objective;
            file2 = OKX_extremes_subjective;
            break;

        case "Panasonic Avionics Corporation":
            img1 = PAC_positive;
            img2 = PAC_objective;
            img3 = PAC_negative;
            file1 = PAC_extremes_objective;
            file2 = PAC_extremes_subjective;
            break;

        case "Recruit Express":
            img1 = RE_positive;
            img2 = RE_objective;
            img3 = RE_negative;
            file1 = RE_extremes_objective;
            file2 = RE_extremes_subjective;
            break;

        case "Resort World Sentosa":
            img1 = RWS_positive;
            img2 = RWS_objective;
            img3 = RWS_negative;
            file1 = RWS_extremes_objective;
            file2 = RWS_extremes_subjective;
            break;

        case "SembCorp Marine":
            img1 = SCM_positive;
            img2 = SCM_objective;
            img3 = SCM_negative;
            file1 = SCM_extremes_objective;
            file2 = SCM_extremes_subjective;
            break;

        case "SMRT":
            img1 = SMRT_positive;
            img2 = SMRT_objective;
            img3 = SMRT_negative;
            file1 = SMRT_extremes_objective;
            file2 = SMRT_extremes_subjective;
            break;

        case "ST Aerospace":
            img1 = STA_positive;
            img2 = STA_objective;
            img3 = STA_negative;
            file1 = STA_extremes_objective;
            file2 = STA_extremes_subjective;
            break;

        case "ST Engineering":
            img1 = STE_positive;
            img2 = STE_objective;
            img3 = STE_negative;
            file1 = STE_extremes_objective;
            file2 = STE_extremes_subjective;
            break;

        case "Surbana Jurong":
            img1 = SJ_positive;
            img2 = SJ_objective;
            img3 = SJ_negative;
            file1 = SJ_extremes_objective;
            file2 = SJ_extremes_subjective;
            break;

        case "Tribal Worldwide":
            img1 = TW_positive;
            img2 = TW_objective;
            img3 = TW_negative;
            file1 = TW_extremes_objective;
            file2 = TW_extremes_subjective;
            break;

        default:
            img1 = overall_positive;
            img2 = overall_objective;
            img3 = overall_negative;
            file1 = overall_extremes_objective;
            file2 = overall_extremes_subjective;
            break;
    }

    return (
        <>
            <h5>Click on the button below to download CSV files for the company you have chosen</h5>
            <button className="download" onClick={() => getFiles(file1, file2)}><b>Download Data</b></button>
            <h5>Here are the wordclouds for the different sentiments for the company you have chosen</h5>
            <div>
                <h2>Subjective (Positive Sentiment)</h2>
                <img src={img1} alt="" />
            </div>
            <div>
                <h2>Subjective (Negative Sentiment)</h2>
                <img src={img3} alt="" />
            </div>
            <div>
                <h2>Objective</h2>
                <img src={img2} alt="" />
            </div>
        </>
    );
}