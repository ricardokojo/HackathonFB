// QUESTION FEATURE

function question(id) {
    $("#"+id).parent().append(
        "<img class='question pop-in shake' src='images/hand.png'>"
    );
}

function questionSolved(id) {
    $("#"+id).parent().children().last().remove();
}

// esta com duvida
function changeQuestionBtn(duvida) {
    if(duvida) {
        $("#questionBtn").removeClass("btn-danger").addClass("btn-success");
        $("#questionBtn").html("Entendi!");
    } else {
        $("#questionBtn").removeClass("btn-success").addClass("btn-danger");
        $("#questionBtn").html("Estou com dúvida!");
    }
}

var questionbool = false; // esta com duvida
$("#questionBtn").click(function() {
    if(!questionbool) {
        question("faustop");
        questionbool = true;
        changeQuestionBtn(questionbool);
    } else {
        questionSolved("faustop");
        questionbool = false;
        changeQuestionBtn(questionbool);
        $("#mic").removeClass("mic-on");
        $("#mic").addClass("mic-off");
        $("#mic").attr("src", "images/mic-off.png");
    }
});

// MIC ON AND OFF



// ADD STUDENTS

var persist_id = null;
function addStudent(id, img) {
    $("#desk18 img").attr("src", "images/avatar7.jpeg");
}

function removeStudent() {
    $("#desk18 img").attr("src", "images/blankavatar.png");
}

function chooseDesk(elem){
    var id = $(elem).attr('id');
    if($('#'+id+" img").attr("src") === "images/blankavatar.png"){
        if(persist_id) {
            $('#'+persist_id+" img").attr("src", "images/blankavatar.png");
            $('#'+persist_id+" img").attr("id", "");
        }
        persist_id = id;
        $('#'+id+" img").attr("src", "images/faustop.jpg");
        $('#'+id+" img").attr("id", "faustop");
    } else {
        alert("Lugar ocupado");
        return;
    }
}

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