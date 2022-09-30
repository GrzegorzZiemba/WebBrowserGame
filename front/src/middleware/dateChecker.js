export function checkDates(now, whenShouldFinish) {
	if (whenShouldFinish > now) {
		var diffDays = parseInt((whenShouldFinish - now) / 1000, 10);
		console.log("----------");
		console.log(now);
		console.log(whenShouldFinish);
		console.log("----------");
		console.log(diffDays);
		console.log("----------");
	} else {
		console.log(now);
		console.log(whenShouldFinish);
	}
}
