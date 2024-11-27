document.addEventListener("DOMContentLoaded", () => {
    let timerElement = document.getElementById("timer");
    let header1 = document.getElementById("header1");
    let header2 = document.getElementById("header2");
    let footer1 = document.getElementById("footer1");
    let footer2 = document.getElementById("footer2");

    let scrollTopButton = document.getElementById("scrollTop");
    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Timer Logic
    let timerDuration = 90; // 1.5 minutes in seconds
    let timerInterval = setInterval(() => {
        let minutes = Math.floor(timerDuration / 60);
        let seconds = timerDuration % 60;

        timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        if (timerDuration <= 0) {
            // Switch Headers and Footers
            header1.classList.toggle("active");
            header2.classList.toggle("active");
            footer1.classList.toggle("active");
            footer2.classList.toggle("active");

            timerDuration = 90; // Restart timer
        } else {
            timerDuration--;
        }
    }, 1000);
});
