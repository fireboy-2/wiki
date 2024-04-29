const currentDate = new Date();
const date = new Date();
console.log(date);
let time = document.querySelector(".time")
function updateTime() {
    const currentDate = new Date();
    time.innerHTML = "📅 " + currentDate.toLocaleString();
}
updateTime();
setInterval(updateTime, 1000)