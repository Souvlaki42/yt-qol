const handleTimestampSave = (player: HTMLVideoElement) => {
	player.addEventListener("pause", () => {
		const url = new URL(window.location.href);
		const rawTimestamp = player.currentTime;
		const integerTimestamp = Math.floor(rawTimestamp);
		const parsedTimestamp = integerTimestamp.toString();
		url.searchParams.set("t", parsedTimestamp);
		history.replaceState("", "", url.href);
	});
};
try {
	const videoPlayerQuery = "#movie_player > div.html5-video-container > video";
	const videoPlayer: HTMLVideoElement | null =
		document.querySelector(videoPlayerQuery);
	if (!videoPlayer) throw new Error("No video player found in the page.");
	handleTimestampSave(videoPlayer);
} catch (error) {
	console.info(error);
}
