$(function(){
  $(".shirt").click(function() {
    if ($(this).attr("class") == "shirt") {
      this.src = this.src.replace("_front.png","_back.png");
    } else {
      this.src = this.src.replace("_back.png","_front.png");
    } 

    $(this).toggleClass("1");
  });
});