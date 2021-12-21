const clockspan = document.querySelector(".digital-clock")

function time() {
    const newdate = new Date()
    const hours = String(newdate.getHours()).padStart(2, "0");
    const minutes = String(newdate.getMinutes()).padStart(2, "0");
    const seconds = String(newdate.getSeconds()).padStart(2, "0");
    clockspan.innerText = `${hours}:${minutes}:${seconds}`
}

setInterval(time, 1000);