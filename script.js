function jumboTron () {
    var dateTime = moment().format('dddd MMM Do YYYY, h:mm a')
    $('#currentDay').text(dateTime)

}
jumboTron()
// older javascript
$(document).ready(function () {



    $('.saveButton').on('click', function() {
        var input = $(this).siblings('.input').val();
        var block = $(this).parent().attr('id');
        // block is the location, the input is the data that's being passed through
        localStorage.setItem(block, input)

    });
    
function timeUpdater() {
    var momentTime = moment().hour(); 
    
    $('.timeBlock').each(function () {
        var blockHour = parseInt($(this).attr("id"));
       // if else 
       // add and remove classes in order to change colors 
       if (momentTime > blockHour) {
           $(this).children(".input").addClass('past');
       }   else if (momentTime === blockHour) {
           $(this).children('.input').removeClass('past')
           $(this).children('.input').addClass('present')
       } else {
           $(this).children('.input').removeClass('past')
           $(this).children('.input').removeClass('present')
           $(this).children('.input').addClass('future')
       }
    })



}
timeUpdater();

$('#9 .input').val(localStorage.getItem('9'));
$('#10 .input').val(localStorage.getItem('10'));
$('#11 .input').val(localStorage.getItem('11'));
$('#12 .input').val(localStorage.getItem('12'));
$('#13 .input').val(localStorage.getItem('13'));
$('#14 .input').val(localStorage.getItem('14'));
$('#15 .input').val(localStorage.getItem('15'));
$('#16 .input').val(localStorage.getItem('16'));
$('#17 .input').val(localStorage.getItem('17'));
$('#18 .input').val(localStorage.getItem('18'));
$('#19 .input').val(localStorage.getItem('19'));
$('#20 .input').val(localStorage.getItem('20'));

})
