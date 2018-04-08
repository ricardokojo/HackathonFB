function addStudent(img) {
    var html = "<div class='col-md-2'>\
        <img class='aluno pop-in pop-out' src='"+img+"'>\
        </div>";
    $('#classrow').append(html);
}

function removeStudent() {
    $('#classrow div').last().remove();
}

var add_or_remove = true;
window.setInterval(function(){
    if(add_or_remove) {
        addStudent("images/avatar7.jpeg");
        add_or_remove = false;
    } else {
        removeStudent();
        add_or_remove = true;
    }
  }, 7000); 

$( document ).ready(function() {
    setTimeout(
    function() 
    {
        addStudent("images/faustop.jpg");
    }, 1500);
});