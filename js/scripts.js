$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const firstSide = parseInt($("#side1").val());
    const secondSide = parseInt($("#side2").val());
    const thirdSide = parseInt($("#side3").val());
    const resutls = (".results");
    
    if (firstSide === secondSide && secondSide === thirdSide && thirdSide === firstSide){
      $(".results").children().hide();
      $("#Equilateral").show();
    } else if  (firstSide === secondSide || secondSide === thirdSide || thirdSide === firstSide){ 
      $(".results").children().hide();
      $("#Isosceles").show();
    } else if (firstSide !== secondSide && secondSide !== thirdSide && thirdSide !== firstSide ){
      $(".results").children().hide();
      $("#Scalene").show();
    }   
     event.preventDefault();
  })
})