import { PieChart } from "react-minimal-pie-chart";

export const Piechart = (props) => {
    const { positive, neutral, negative } = props;

    return (
        <PieChart data={[
            { title: 'Positive', value: positive, color: '#FF0000'},
            { title: 'Neutral', value: neutral, color: '#FF7F00'},
            { title: 'Negative', value: negative, color: '#FFFF00'}
        ]} />
    )
}