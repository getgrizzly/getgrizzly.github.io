$(function(){
  $(".shirtsection").click(function() {
    if ($(this).attr("class") == "shirtsection") {
      this.src = this.src.toggleClass("_front.png","_back.png");
    } else {
      this.src = this.src.replace("_back","_front");
    } 

    $(this).toggleClass("1");
  });
});