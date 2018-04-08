function addDuvida(id, msg) {
    var html = "\
    <div class='row duvida'>\
        <div class='col-md-2'>\
            <div id='"+id+"' class='upvote'>\
                <a class='upvote'></a>\
                <span class='count'>1</span>\
            </div>\
        </div>\
        <div class='col-md-10'>"+msg+"</div>\
    </div>";
    $("#duvidas").append(html);
    $("#"+id).upvote();
}


$('#duvida1').upvote();
$('#duvida2').upvote();
$('#duvida3').upvote();