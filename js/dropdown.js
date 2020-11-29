$(function() {
    
    let button = $('#artists');
    let dropDown = $('.dropdown-content');
   

    button.on('click', function() {
        dropDown.toggle('.show');
    });

});