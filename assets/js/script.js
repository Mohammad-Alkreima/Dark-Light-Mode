function dark() {
    const html = document.documentElement;
    const moon = document.querySelector(".moon");
    if (html.classList.contains("dark-mode")) {
        html.classList.remove("dark-mode")
        moon.classList.add("fa-moon")
        moon.classList.remove("fa-sun")
    } else {
        html.classList.add("dark-mode")
        moon.classList.remove("fa-moon")
        moon.classList.add("fa-sun")
    }
}