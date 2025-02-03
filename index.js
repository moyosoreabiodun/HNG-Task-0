function getCurrentUTCTime() {
    const currentDate = new Date();
    const currentUTCTime = currentDate.toUTCString();
    return currentUTCTime;
}

document.getElementById("current-time").innerText = getCurrentUTCTime();