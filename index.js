

$("form").submit(function(e) {
  e.preventDefault();
});


let x = document.forms["myform"]["country"].value;

// function to prevent submit in empty fields
$('#frm').submit(function() {
  if ($.trim($("#In").val()) === "")
  {}
  else {
          validate();
  }
});









function validate() {


  var ct = document.forms["myform"]["country"].value;
  var apdata = "https://api.covid19api.com/dayone/country/" + ct;

  fetch(apdata)
    .then(response => response.json() )
    .then(data => {

      var index = data.length - 1;
      $("#frm").toggle();
      $(".tabl").removeClass("vis")

      $("#c1").html(data[index].Deaths);

      $("#c2").html(data[index].Confirmed);
      $("#c3").html(data[index].Active);

    });



}
