export function getDateInFuture(days) {
	const day = new Date();

	const futureDay = new Date();

	futureDay.setDate(day.getDate() + days);

	return futureDay.toISOString().split("T")[0];
}
