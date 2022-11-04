import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import { Typography } from '@mui/material';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

export default function BarChart(props) {
	const { data } = props;
	var { companyName, averageInterview, averageBenefit, averageReview } = data;

	if (companyName === "all") {
		companyName = "Overall";
	};

	const options = {
		title: {
			text: "Average Sentiment Chart (" + companyName + ")"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "Reviews",  y: averageReview },
				{ label: "Benefits", y: averageBenefit },
				{ label: "Interviews", y: averageInterview },
			]
		}
		]
	}

	return (
		<>	
			<Typography variant='h5'>Company Average Sentiment</Typography>
			<p>We took the average sentiments for the company you have chosen:
				<li>+1 for Positive</li>
				<li>0 for Neutral</li>
				<li>-1 for Negative</li> 
			</p>
			<CanvasJSChart options = {options}/>
		</>
	);
}