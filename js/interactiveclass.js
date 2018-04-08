// QUESTION FEATURE

function question(id) {
    $("#"+id).append(
        "<img class='question pop-in shake' src='images/hand.png'>"
    );
}

function questionSolved(id) {
    $("#"+id+' img').last().remove();
}

var questionbool = false; // esta com duvida
$("#questionBtn").click(function() {
    if(!questionbool) {
        question("faustop");
        questionbool = true;
    } else {
        questionSolved("faustop");
        questionbool = false;
    }
});

// ADD STUDENTS

function addStudent(id, img) {
    var html = "<div id='"+id+"' class='col-md-2' >\
        <img class='aluno pop-in pop-out' src='"+img+"'>\
        </div>";
    $('#classrow').append(html);
}

function removeStudent() {
    $('#classrow div').last().remove();
}

$("#messageBtn").click(function() {
    var text = $("#messageInput").val();
    $("#messageInput").val("");
    if(text.trim())
        addMessage(text, "images/faustop.jpg");
});

var add_or_remove = true;
window.setInterval(function(){
    if(add_or_remove) {
        addStudent("7","images/avatar7.jpeg");
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
        addStudent("faustop", "images/faustop.jpg");
    }, 1500);
});