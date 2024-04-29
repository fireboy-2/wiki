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
function isMobileDevice() {
    var mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return mobileDeviceRegex.test(navigator.userAgent);
  }
    function redirectMobileUsers() {
    var redirectUrl = "https://google.com";
      window.location.href = redirectUrl;
  }
  if (isMobileDevice()) {
    redirectMobileUsers();
  }