import React, { useEffect, useState } from "react";

function addSeconds(numOfSeconds, date) {
	date.setSeconds(date.getSeconds() + numOfSeconds);

	return date;
}
const now = new Date();

const TimeChecker = ({ time }) => {
	console.log(time);
	const finishedDate = addSeconds(time, now);

	const [sec, setSec] = useState(finishedDate);

	useEffect(() => {
		const buildingInterval = setInterval(() => {
			setSec(sec - 1);
			console.log(sec);
		}, 1000);
		return () => clearInterval(buildingInterval);
	});
	return <div>{sec}</div>;
};

export default TimeChecker;
