$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const firstSide = parseInt($("#side1").val());
    const secondSide = parseInt($("#side2").val());
    const thirdSide = parseInt($("#side3").val());
    const resutls = (".results");
    
    if (firstSide === secondSide && secondSide === thirdSide && thirdSide === firstSide){
    
    } else if  (firstSide === secondSide || secondSide === thirdSide || thirdSide === firstSide){ 
     
    } else if (firstSide !== secondSide && secondSide !== thirdSide && thirdSide !== firstSide ){
      
    }   
     event.preventDefault();
  })
})