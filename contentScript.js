const video = document.querySelector(
	"#movie_player > div.html5-video-container > video"
);

if (
	!video ||
	!window.location.href.includes("https://www.youtube.com/watch?v=")
)
	throw new Error("No youtube video found!");

video.addEventListener("pause", () => {
	console.log(window.location.href);

	var url = new URL(window.location.href);

	url.searchParams.set("t", parseInt(video.currentTime.toString()).toString());

	history.replaceState("", "", url.href);
});
