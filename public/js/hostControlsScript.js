

let stopBtn = document.querySelector(".stop");
// let body = document.querySelector("body");
let permissionBtn = document.querySelector(".permission");


permissionBtn.addEventListener("click", function (e) {
  grantPermission();
  console.log("ok:")
  socket.emit("myclick");
  
});

function grantPermission() {
  let permissionBtn = document.querySelector(".permission");
  if (permissionBtn.classList.contains("selectPermissionBtn")) {
    permissionBtn.classList.remove("selectPermissionBtn");
  } else {
    permissionBtn.classList.add("selectPermissionBtn");
  }
}

stopBtn.addEventListener("click", function () {
  body.innerHTML = "";
  window.location.assign("endingmeeting.html");
socket.emit("onstop");
  // body.innerHTML=`<div class="meetingEndContainer">
  // <div class="meetingEndPopup">
  //     <span class="endmeetingspan">Meeting Closed</span>
  // </div>
  // </div>`;
});
