$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const firstSide = parseInt().val();
    const secondSide = parseInt().val();
    const thirdSide = parseInt().val();

    $(".side1").text(firstSide);
    $(".side2").text(secondSide);
    $(".side3").text(thirdSide);
        event.preventDefault();
  })
})