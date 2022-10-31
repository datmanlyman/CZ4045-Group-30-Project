import { useContext } from "react";
import { DropdownContext } from "../Utils/DropdownContext";
import { 
    AETOS_negative, AETOS_objective, AETOS_positive,
    CandK_negative, CandK_objective, CandK_positive, 
    CW_negative, CW_objective, CW_positive, 
    CL_negative, CL_objective, CL_positive,
    Dyson_negative, Dyson_objective, Dyson_positive,    
    IHIS_negative, IHIS_objective, IHIS_positive,
    KOandM_negative, KOandM_objective, KOandM_positive,
    MI_negative, MI_objective, MI_positive,
    Mediacorp_negative, Mediacorp_objective, Mediacorp_positive,
    MFS_negative, MFS_objective, MFS_positive,
    Navitas_negative, Navitas_objective, Navitas_positive,
    OKX_negative, OKX_objective, OKX_positive,
    PAC_negative, PAC_objective, PAC_positive,
    RE_negative, RE_objective, RE_positive,
    RWS_negative, RWS_objective, RWS_positive,
    SCM_negative, SCM_objective, SCM_positive,
    SMRT_negative, SMRT_objective, SMRT_positive,
    STA_negative, STA_objective, STA_positive,
    STE_negative, STE_objective, STE_positive,
    SJ_negative, SJ_objective, SJ_positive,
    TW_negative, TW_objective, TW_positive
 } from "../data/wordcloud";

export const CompanyData = () => {
    const { display } = useContext(DropdownContext);
    var img1;
    var img2;
    var img3;

    switch (display) {
        case "AETOS":
            img1 = AETOS_positive;
            img2 = AETOS_objective;
            img3 = AETOS_negative;
            break;

        case "Charles & Keith":
            img1 = CandK_positive;
            img2 = CandK_objective;
            img3 = CandK_negative;
            break;

        case "Cheil Worldwide":
            img1 = CW_positive;
            img2 = CW_objective;
            img3 = CW_negative;
            break;

        case "Circles.Life":
            img1 = CL_positive;
            img2 = CL_objective;
            img3 = CL_negative;
            break;

        case "Dyson":
            img1 = Dyson_positive;
            img2 = Dyson_objective;
            img3 = Dyson_negative;
            break;

        case "Integrated Health Information System":
            img1 = IHIS_positive;
            img2 = IHIS_objective;
            img3 = IHIS_negative;
            break;

        case "Keppel Offshore & Marine":
            img1 = KOandM_positive;
            img2 = KOandM_objective;
            img3 = KOandM_negative;
            break;

        case "Mapletree Investments":
            img1 = MI_positive;
            img2 = MI_objective;
            img3 = MI_negative;
            break;

        case "Mediacorp":
            img1 = Mediacorp_positive;
            img2 = Mediacorp_objective;
            img3 = Mediacorp_negative;
            break;

        case "My First Skool":
            img1 = MFS_positive;
            img2 = MFS_objective;
            img3 = MFS_negative;
            break;

        case "Navitas":
            img1 = Navitas_positive;
            img2 = Navitas_objective;
            img3 = Navitas_negative;
            break;

        case "OKX":
            img1 = OKX_positive;
            img2 = OKX_objective;
            img3 = OKX_negative;
            break;

        case "Panasonic Avionics Corporation":
            img1 = PAC_positive;
            img2 = PAC_objective;
            img3 = PAC_negative;
            break;

        case "Recruit Express":
            img1 = RE_positive;
            img2 = RE_objective;
            img3 = RE_negative;
            break;

        case "Resort World Sentosa":
            img1 = RWS_positive;
            img2 = RWS_objective;
            img3 = RWS_negative;
            break;

        case "SembCorp Marine":
            img1 = SCM_positive;
            img2 = SCM_objective;
            img3 = SCM_negative;
            break;

        case "SMRT":
            img1 = SMRT_positive;
            img2 = SMRT_objective;
            img3 = SMRT_negative;
            break;

        case "ST Aerospace":
            img1 = STA_positive;
            img2 = STA_objective;
            img3 = STA_negative;
            break;

        case "ST Engineering":
            img1 = STE_positive;
            img2 = STE_objective;
            img3 = STE_negative;
            break;

        case "Surbana Jurong":
            img1 = SJ_positive;
            img2 = SJ_objective;
            img3 = SJ_negative;
            break;

        case "Tribal Worldwide":
            img1 = TW_positive;
            img2 = TW_objective;
            img3 = TW_negative;
            break;

        default:
            return (<p>default</p>);
    }

    return (
        <>
            <button>Download Data</button>
            <h1>Positive</h1>
            <img src={img1} alt="" />
            <h1>Objective</h1>
            <img src={img2} alt="" />
            <h1>Negative</h1>
            <img src={img3} alt="" />
        </>
    );
}