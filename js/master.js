var which_player = 0,
  score = [0, 0],
  noawards = true;

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

  //start game
  document.getElementsByClassName("play")[0].style.top = "0";
  document.querySelector("#first-player>h2").innerHTML = name[0];
  document.querySelector("#secound-player>h2").innerHTML = name[1];
  _play();
}

function _play() {
  if (which_player % 2 == 0) {
    document.getElementById("first-player-deactive").style.top = "-100%";
    document.getElementById("secound-player-deactive").style.top = "0";
  } else {
    document.getElementById("first-player-deactive").style.top = "0";
    document.getElementById("secound-player-deactive").style.top = "-100%";
  }
}
