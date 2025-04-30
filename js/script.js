document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy check (you can replace this with real server authentication later)
    if(username === "student" && password === "password") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials! Please try again.");
    }
});
window.addEventListener("load", () => {
    const splash = document.getElementById("splash");
    setTimeout(() => {
        splash.style.display = "none";
    }, 2000); // 2 seconds loading
});
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy credentials
    if (username === "student" && password === "password") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials! Please try again.");
    }
});

// Protect dashboard pages
if (window.location.pathname.includes("dashboard.html") && localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}
// Logout function
const logoutBtn = document.getElementById("logout");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html";
    });
}

