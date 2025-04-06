setInterval(function () {
    let now = new Date();
    $("#time").text(now.toLocaleTimeString());
    $("#date")  .text(now.toLocaleDateString());
}, 1000);







setInterval(function () {
    $(".box-1").css({
        "position": "absolute",
        "top": "33%",
        "left" : "65%",
        "transition" : "0.4s"
      });

      $(".box-2").css({
        "position": "absolute",
        "top": "60%",
        "left" : "35%",
        "transition" : "0.4s"
      });
}, 3000);