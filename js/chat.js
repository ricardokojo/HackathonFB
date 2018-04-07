$.fn.addMessage = function() {
    var str = "<div class='container darker'>\
        <img src='/images/faustop.jpg' alt='Avatar' class='right'>\
        <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>\
        <span class='time-left'>11:05</span>\
        </div>";
    return(str);
}

$( document ).ready(function() {
    $('#Chat').prepend(addMessage(str));
});