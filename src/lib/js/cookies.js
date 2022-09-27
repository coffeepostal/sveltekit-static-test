// Cookie Functions
// @ts-ignore
function setCookie(cookieName, cookieValue, daysUntilExpire) {
    const d = new Date();
    d.setTime(d.getTime() + daysUntilExpire * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
}

// @ts-ignore
function getCookie(cookieName) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        if (cookieName == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

export {setCookie, getCookie}