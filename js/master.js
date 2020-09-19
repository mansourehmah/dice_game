function start() {
  var name = [];
  name[0] = document.getElementById("first").value;
  name[1] = document.getElementById("secound").value;
  if (name[0] == "") {
    name[0] = "user1";
  }
  if (name[1] == "") {
    name[1] = "user2";
  }
  document.getElementsByClassName("start")[0].style.top = "-100%";
  console.log(name)
}
