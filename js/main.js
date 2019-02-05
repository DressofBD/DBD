$(document).ready(function(){
	$('#nav').slicknav();
});


//slider
$(function() {

    var $c = $('#carousel'),
        $w = $(window);

    $c.carouFredSel({
        align: false,
        items: 6,
        scroll: {
            items: 1,
            duration: 3000,
            timeoutDuration: 0,
            easing: 'linear',
            pauseOnHover: 'immediate'
        }
    });

    
    $w.bind('resize.example', function() {
        var nw = $w.width();
        if (nw < 990) {
            nw = 990;
        }

        $c.width(nw * 3);
        $c.parent().width(nw);

    }).trigger('resize.example');

});



//Clock
	$(document).ready(function() {
	// Create two variable with the names of the months and days in an array
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	// Create a newDate() object
	var newDate = new Date();
	// Extract the current date from Date object
	newDate.setDate(newDate.getDate());
	// Output the day, date, month and year    
	$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
	setInterval( function() {
	    // Create a newDate() object and extract the seconds of the current time on the visitor's
	    var seconds = new Date().getSeconds();
	    // Add a leading zero to seconds value
	    $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	    },1000);
	setInterval( function() {
	    // Create a newDate() object and extract the minutes of the current time on the visitor's
	    var minutes = new Date().getMinutes();
	    // Add a leading zero to the minutes value
	    $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
	    },1000);
	setInterval( function() {
	    // Create a newDate() object and extract the hours of the current time on the visitor's
	    var hours = new Date().getHours();
	    // Add a leading zero to the hours value
	    $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
	    }, 1000);
	}); 