const video = document.querySelector(
	"#movie_player > div.html5-video-container > video"
);

if (
	video != null &&
	window.location.href.includes("https://www.youtube.com/watch?v=")
) {
	video.addEventListener("pause", () => {
		console.log(window.location.href);

		var url = new URL(window.location.href);

		url.searchParams.set(
			"t",
			parseInt(video.currentTime.toString()).toString()
		);

		history.replaceState("", "", url.href);
	});
} else {
	console.error("No youtube video found!");
}
