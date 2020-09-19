var which_player = 0,
  score = [0, 0],
  noAwards = true;

var width = window.innerWidth;

function start() {
  var name = [];
  name[0] = document.getElementById("first").value;
  name[1] = document.getElementById("second").value;
  if (name[0] == "") {
    name[0] = "user1";
  }
  if (name[1] == "") {
    name[1] = "user2";
  }
  document.getElementsByClassName("start")[0].style.top = "-100%";
  document.getElementsByClassName("play")[0].style.top = "0";
  document.querySelector("#first-player>h2").innerHTML = name[0];
  document.querySelector("#second-player>h2").innerHTML = name[1];

  _play();
}

function _play() {
  if (noAwards) {
    if (which_player % 2 == 0) {
      document.getElementById("first-player-deactive").style.top = "-100%";
      document.getElementById("second-player-deactive").style.top = "0";
      if (width < 767) {
        document.getElementById("first-player").style.top = "0";
        document.getElementById("second-player").style.top = "100%";
      }
    } else {
      document.getElementById("first-player-deactive").style.top = "0";
      document.getElementById("second-player-deactive").style.top = "-100%";
      if (width < 767) {
        document.getElementById("first-player").style.top = "100%";
        document.getElementById("second-player").style.top = "0%";
      }
    }
  }
}

function _rand() {
  var random_number;
  _play();
  if (noAwards) {
    random_number = Math.floor(Math.random() * 6 + 1);
  } else {
    noAwards = true;
    random_number = Math.floor(Math.random() * 5 + 1);
  }
  document.getElementById("rubic-one").setAttribute("class", "parent-rubic");
  document.getElementById("rubic-two").setAttribute("class", "parent-rubic");
  if (random_number == 1) {
    if (which_player % 2 == 0) {
      document
        .getElementById("rubic-one")
        .setAttribute("class", "parent-rubic anime-one");
    } else {
      document
        .getElementById("rubic-two")
        .setAttribute("class", "parent-rubic anime-one");
    }
  }
  if (random_number == 2) {
    if (which_player % 2 == 0) {
      document
        .getElementById("rubic-one")
        .setAttribute("class", "parent-rubic anime-two");
    } else {
      document
        .getElementById("rubic-two")
        .setAttribute("class", "parent-rubic anime-two");
    }
  }
  if (random_number == 3) {
    if (which_player % 2 == 0) {
      document
        .getElementById("rubic-one")
        .setAttribute("class", "parent-rubic anime-three");
    } else {
      document
        .getElementById("rubic-two")
        .setAttribute("class", "parent-rubic anime-three");
    }
  }
  if (random_number == 4) {
    if (which_player % 2 == 0) {
      document
        .getElementById("rubic-one")
        .setAttribute("class", "parent-rubic anime-four");
    } else {
      document
        .getElementById("rubic-two")
        .setAttribute("class", "parent-rubic anime-four");
    }
  }
  if (random_number == 5) {
    if (which_player % 2 == 0) {
      document
        .getElementById("rubic-one")
        .setAttribute("class", "parent-rubic anime-five");
    } else {
      document
        .getElementById("rubic-two")
        .setAttribute("class", "parent-rubic anime-five");
    }
  }
  if (random_number == 6) {
    if (which_player % 2 == 0) {
      document
        .getElementById("rubic-one")
        .setAttribute("class", "parent-rubic anime-six");
    } else {
      document
        .getElementById("rubic-two")
        .setAttribute("class", "parent-rubic anime-six");
    }
  }

  function set_score() {
    if (which_player % 2 == 0) {
      score[0] = score[0] + random_number;
      document.getElementsByClassName("score-one")[0].innerHTML = score[0];
    } else {
      score[1] = score[1] + random_number;
      document.getElementsByClassName("score-two")[0].innerHTML = score[1];
    }
    if (score[which_player % 2] >= 30) {
      if (which_player % 2 == 0) {
        document.getElementById("second-player-deactive").style.top = "0";
        document.getElementById("winner-one").setAttribute("class", "active");
      } else {
        document.getElementById("first-player-deactive").style.top = "0";
        document.getElementById("winner-two").setAttribute("class", "active");
      }
    }
    which_player++;
  }
  setTimeout(set_score, 2000);
  setTimeout(_reapet, 2200);

  function _reapet() {
    if (score[(which_player - 1) % 2] < 30) {
      if (random_number == 6) {
        which_player--;
        noAwards = false;
      }
      _play();
    }
  }
}

function play_again() {
  random_number = 0;
  score[0] = 0;
  score[1] = 0;
  j = 0;
  which_player = 0;
  noAwards = true;
  document.getElementById("second-player-deactive").style.top = "-100%";
  document.getElementById("winner-one").removeAttribute("class");
  document.getElementById("first-player-deactive").style.top = "-100%";
  document.getElementById("winner-two").removeAttribute("class");
  document.getElementsByClassName("score-one")[0].innerHTML = 0;
  document.getElementsByClassName("score-two")[0].innerHTML = 0;
  _rand();
}

//resize window
window.onresize = function () {
  width = window.innerWidth;
  if (width < 767 && width > 760) {
    location.reload();
  }
};
