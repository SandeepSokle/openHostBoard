

let permissionBtn = document.querySelector(".permission");
let stopBtn = document.querySelector(".stop");
// let body = document.querySelector("body");


permissionBtn.addEventListener("click", function (e) {
    grantPermission(e.currentTarget);
    console.log("ok:")
    socket.emit("myclick");
  });

function grantPermission(target) {
  if (target.classList.contains("selectPermissionBtn")) {
    target.classList.remove("selectPermissionBtn");
  } else {
    target.classList.add("selectPermissionBtn");
  }

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
