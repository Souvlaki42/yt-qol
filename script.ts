try {
	const videoPlayer = document.querySelector<HTMLVideoElement>(
		"#movie_player > div.html5-video-container > video"
	);
	if (!videoPlayer) throw new Error("No video player found in the page.");

	const saveTimestampToURL = () => {
		const url = new URL(window.location.href);
		const rawTimestamp = videoPlayer.currentTime;
		const integerTimestamp = Math.floor(rawTimestamp);
		const parsedTimestamp = integerTimestamp.toString();
		url.searchParams.set("t", parsedTimestamp);
		history.replaceState("", "", url.href);
	};

	const skipAdShortcut = (e: KeyboardEvent) => {
		const skipAdButton = document.querySelector<HTMLButtonElement>(
			".ytp-skip-ad-button"
		);
		if (!skipAdButton || e.key !== "\\") return;
		skipAdButton.click();
	};

	videoPlayer.addEventListener("pause", saveTimestampToURL);
	document.addEventListener("keypress", skipAdShortcut);
} catch (error) {
	if (error instanceof Error) console.error(`YT QOL: ${error.message}`);
	else console.error(error);
}
