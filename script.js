function setCookiePrompt() {
    let username = prompt("Enter your name:");
    if (username) {
        document.cookie = "username=" + username + "; path=/";
        displayCookie();
    }
}

function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [key, value] = cookie.trim().split('=');
        if (key === name) return value;
    }
    return "";
}

function displayCookie() {
    let user = getCookie("username");
    if (user) {
        document.getElementById("cookieMessage").innerText = "Welcome back, " + user + "!";
    } else {
        document.getElementById("cookieMessage").innerText = "No cookie found. Please enter your name.";
    }
}

window.onload = displayCookie;
