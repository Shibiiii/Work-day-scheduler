// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var dayEl = $('#currentDay');
var today = dayjs();
var formattedDate = today.format('MM-DD-YYYY');

dayEl.text(formattedDate)

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var hour9 = $('#hour-9');
  var hour10 = $('#hour-10');
  var hour11 = $('#hour-11');
  var hour12 = $('#hour-12');
  var hour1 = $('#hour-1');
  var hour2 = $('#hour-2');
  var hour3 = $('#hour-3');
  var hour4 = $('#hour-4');
  var hour5 = $('#hour-5');

  var saveBtn = $('.fas fa-save');

  saveBtn.on('click', function () {
  localStorage.setItem( hour9, textArea );
  localStorage.setItem( hour10, textArea );
  localStorage.setItem( hour11, textArea );
  localStorage.setItem( hour12, textArea );
  localStorage.setItem( hour1, textArea );
  localStorage.setItem( hour2, textArea );
  localStorage.setItem( hour3, textArea );
  localStorage.setItem( hour4, textArea );
  localStorage.setItem( hour5, textArea );
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var currentHour = dayjs().hour()
  var pastHour = dayjs().isBefore().hour()
  var futureHour = dayjs().isAfter().hour()

  if ($('#hour-9') === currentHour) {
    $('#hour-9').replaceClass('row time-block present')
  } else if ($('#hour-9') === pastHour) {
    $('#hour-9').replaceClass('row time-block past')
  } else ($('#hour-9') === futureHour) ;{
    $('#hour-9').replaceClass('row time-block future')
  };

  if ($('#hour-10') === currentHour) {
    $('#hour-10').replaceClass('row time-block present')
  } else if ($('#hour-10') === pastHour) {
    $('#hour-10').replaceClass('row time-block past')
  } else ($('#hour-10') === futureHour) ;{
    $('#hour-10').replaceClass('row time-block future')
  };

  if ($('#hour-11') === currentHour) {
    $('#hour-11').replaceClass('row time-block present')
  } else if ($('#hour-11') === pastHour) {
    $('#hour-11').replaceClass('row time-block past')
  } else ($('#hour-11') === futureHour) ;{
    $('#hour-11').replaceClass('row time-block future')
  };

  if ($('#hour-12') === currentHour) {
    $('#hour-12').replaceClass('row time-block present')
  } else if ($('#hour-12') === pastHour) {
    $('#hour-11').replaceClass('row time-block past')
  } else ($('#hour-12') === futureHour) ;{
    $('#hour-12').replaceClass('row time-block future')
  };

  if ($('#hour-1') === currentHour) {
    $('#hour-1').replaceClass('row time-block present')
  } else if ($('#hour-1') === pastHour) {
    $('#hour-1').replaceClass('row time-block past')
  } else ($('#hour-1') === futureHour) ;{
    $('#hour-1').replaceClass('row time-block future')
  };

  if ($('#hour-2') === currentHour) {
    $('#hour-2').replaceClass('row time-block present')
  } else if ($('#hour-2') === pastHour) {
    $('#hour-2').replaceClass('row time-block past')
  } else ($('#hour-2') === futureHour) ;{
    $('#hour-2').replaceClass('row time-block future')
  };

  if ($('#hour-3') === currentHour) {
    $('#hour-3').replaceClass('row time-block present')
  } else if ($('#hour-3') === pastHour) {
    $('#hour-3').replaceClass('row time-block past')
  } else ($('#hour-3') === futureHour) ;{
    $('#hour-3').replaceClass('row time-block future')
  };

  if ($('#hour-4') === currentHour) {
    $('#hour-4').replaceClass('row time-block present')
  } else if ($('#hour-4') === pastHour) {
    $('#hour-4').replaceClass('row time-block past')
  } else ($('#hour-4') === futureHour) ;{
    $('#hour-4').replaceClass('row time-block future')
  };

  if ($('#hour-5') === currentHour) {
    $('#hour-5').replaceClass('row time-block present')
  } else if ($('#hour-5') === pastHour) {
    $('#hour-5').replaceClass('row time-block past')
  } else ($('#hour-5') === futureHour) ;{
    $('#hour-5').replaceClass('row time-block future')
  };
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
   if (localStorage.getItem( hour9, textArea)) {
    hour9.text = '';
   }
});


