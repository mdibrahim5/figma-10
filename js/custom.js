jQuery (document).ready(function() {
   jQuery(".owl-carousel").owlCarousel({
       'items' : 5,
       'autoPlay' : 2000,
       'goToFirst': true,
       'goToFirstSpeed': 1000,
   });
});
jQuery (document).ready(function() {
   jQuery(".owl-carousel-two").owlCarousel({
       'items' : 6,
       'autoPlay' : 2000,
       'goToFirst': true,
       'goToFirstSpeed': 1000,
   });
});
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Only Enter Your email ");
    return false;
  }
}