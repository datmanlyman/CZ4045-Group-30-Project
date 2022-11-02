import "./Report.css";
import { Button } from "react-bootstrap";
import ReportConstructor from "../Components/ReportConstructor";

export const Report = () => {
    return (
        <>
        <ReportConstructor />
        { /*<div className="report">
            <div className="introduction">
                <h1>Introduction</h1>
                <p>
                    Glassdoor is an all-in-one portal for jobs around the world
                    to offer insights to the employees experience. However,
                    there comes multiple throttling factors when it comes to
                    using glassdoor:
                </p>
                <ul>
                    <li>Different priorities when reviewing the workplace </li>
                    <li>Different standards for each rating</li>
                    <li>Different cultures</li>
                </ul>
                <p>
                    Thus, we created a Sentimental Analysis (SA) to clear such
                    possible issues.
                </p>
            </div>
            <div className="crawling">
                <h1>Crawling</h1>
                <p>
                    As Glassdoor’s API is only available to their API partners,
                    and a public API is not provided to access their review
                    data, we instead used Python, BeautifulSoup and Selenium to
                    crawl and parse data from their webpages.
                </p>
                <p>
                    For each company, we decided to scrape reviews from three
                    subpages:
                </p>
                <Button variant="primary" style={{ margin: "10px" }}>
                    Overall Reviews
                </Button>
                <Button variant="warning" style={{ margin: "10px" }}>
                    Interviews
                </Button>
                <Button variant="success" style={{ margin: "10px" }}>
                    Benefits
                </Button>
            </div>
            <div className="classification">
                <h1>Classification</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="innovations">
                <h1>Innovations</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
    </div> */ }
    </>
    );
};
