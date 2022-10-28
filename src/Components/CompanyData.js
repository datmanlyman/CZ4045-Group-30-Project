import { Dropdown } from "./Dropdown";

export const CompanyData = () => {
    switch (Dropdown.display) {
        case "AETOS":
            return (<p>a</p>);
        case "Charles & Keith":
            return (<p>b</p>);
        case "Cheil Worldwide":
            return (<p>c</p>);
        case "Circles.Life":
            return (<p>d</p>);
        case "Dyson":
            return (<p>e</p>);
        case "Integrated Health Information System":
            return (<p>f</p>);
        case "Keppel Offshore & Marine":
            return (<p>g</p>);
        case "Mapletree Investments":
            return (<p>h</p>);
        case "Mediacorp":
            return (<p>i</p>);
        case "My First Skool":
            return (<p>j</p>);
        case "Navitas":
            return (<p>k</p>);
        case "OKX":
            return (<p>l</p>);
        case "Panasonic Avionics Corporation":
            return (<p>m</p>);
        case "Recruit Express":
            return (<p>n</p>);
        case "Resort World Sentosa":
            return (<p>o</p>);
        case "SembCorp Marine":
            return (<p>p</p>);
        case "SMRT":
            return (<p>q</p>);
        case "ST Aerospace":
            return (<p>r</p>);
        case "ST Engineering":
            return (<p>s</p>);
        case "Surbana Jurong":
            return (<p>t</p>);
        case "Tribal Worldwide":
            return (<p>u</p>);
        default:
            return (<p>default</p>);
    }
}