try {
    var videoPlayer_1 = document.querySelector("#movie_player > div.html5-video-container > video");
    if (!videoPlayer_1)
        throw new Error("No video player found in the page.");
    var saveTimestampToURL = function () {
        var url = new URL(window.location.href);
        var rawTimestamp = videoPlayer_1.currentTime;
        var integerTimestamp = Math.floor(rawTimestamp);
        var parsedTimestamp = integerTimestamp.toString();
        url.searchParams.set("t", parsedTimestamp);
        history.replaceState("", "", url.href);
    };
    var skipAdShortcut = function (e) {
        var skipAdButton = document.querySelector(".ytp-skip-ad-button");
        if (!skipAdButton || e.key !== "\\")
            return;
        skipAdButton.click();
    };
    videoPlayer_1.addEventListener("pause", saveTimestampToURL);
    document.addEventListener("keypress", skipAdShortcut);
}
catch (error) {
    if (error instanceof Error)
        console.error("YT QOL: ".concat(error.message));
    else
        console.error(error);
}
