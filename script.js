$(document).ready(function() {
    

$(function () {
    
    let hour = dayjs().format('HH');

    function updateClock() {
        let currentTime = dayjs().format('HH: mm: ss');
        $('#time').text(currentTime);
    }
    updateClock();
    let timeInterval = setInterval(updateClock, 1000);

    $('.time-block').each(function() {
        const id = $(this).attr('id');
        const localStorageKey = id;

        const appointment = localStorage.getItem(localStorageKey);
        if (appointment !== null) {
            $(this).find('.description').val(appointment);
        }
    });

    $('.saveBtn').on('click', function() {
 
        const appointmentEl = $(this).siblings('.description');
        const textInput = appointmentEl.val();
        const id = $(this).parent().attr('id');
        
        const localStorageKey = id;

        const appointment = localStorage.getItem(localStorageKey);
        if (appointment === null) {
            localStorage.setItem(localStorageKey, textInput);
        } else {
            localStorage.removeItem(localStorageKey);
        }
        
    });
      
    $('.time-block').each(function() {
        const id = $(this).attr('id');
        const match = id.match(/\d+/);

        if (match) {
        const number = parseInt(match[0]); 

        if (number < hour) {
            $(this).removeClass('past present future').addClass('past');
        } else if (number == hour) {
            $(this).removeClass('past present future').addClass('present');
        } else if (number > hour) {
            $(this).removeClass('past present future').addClass('future');
        }
        }
    });

    const currentDate = dayjs().format('dddd, MMMM D[th]');
    $('#currentDay').text(currentDate);

});
});
