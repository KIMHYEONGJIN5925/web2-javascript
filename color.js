var link = {
  setColor: function setColor(color) {
    // var alist = document.querySelectorAll("a");
    // var i = 0;
    // while (i < alist.length) {
    //   alist[i].style.color = color;
    //   i += 1;
    // }
    $("a").css("color", color); // 웹페이지 모든 a태그를 jquery로 제어하겠다.
  },
};

var body = {
  setColor: function setColor(color) {
    // document.querySelector("body").style.color = color;
    $("body").css("color", color); // 컬러값을 parameter 컬러값으로 한다
  },
  setBackGroundColor: function setBackGroundColor(color) {
    // document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
};

function nightDayHandler(self) {
  if (self.value == "day") {
    body.setBackGroundColor("white");
    body.setColor("black");
    link.setColor("red");
    self.value = "night";
  } else {
    body.setBackGroundColor("black");
    body.setColor("white");
    link.setColor("powderblue");
    self.value = "day";
  }
}
