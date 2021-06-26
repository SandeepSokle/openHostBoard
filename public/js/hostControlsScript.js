

let permissionBtn = document.querySelector(".permission");
let stopBtn = document.querySelector(".stop");
// let body = document.querySelector("body");


permissionBtn.addEventListener("click", function (e) {
    grantPermission();
    console.log("ok:")
    
  });

function grantPermission() {
  if (permissionBtn.classList.contains("selectPermissionBtn")) {
    permissionBtn.classList.remove("selectPermissionBtn");
  } else {
    permissionBtn.classList.add("selectPermissionBtn");
  }
socket.emit("myclick");
}

stopBtn.addEventListener("click", function () {
  body.innerHTML = "";
  window.location.assign("endingmeeting.html");
  // body.innerHTML=`<div class="meetingEndContainer">
  // <div class="meetingEndPopup">
  //     <span class="endmeetingspan">Meeting Closed</span>
  // </div>
  // </div>`;
});
