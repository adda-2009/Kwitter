function next()
{
log_in_name = document.getElementById("username").value;
localStorage.setItem("log_in_name",log_in_name);
window.location="kwitter_room.html";
}