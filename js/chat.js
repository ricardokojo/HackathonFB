function updateScroll(){
    var out = $("#chattab");
    var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;
    if(isScrolledToBottom)
        out.scrollTop = out.scrollHeight - out.clientHeight;
    // $("#chattab").scrollTop = $("#chattab").scrollHeight - $("#chattab").clientHeight;
}

function addMessage(msg, img){
    var html = "<div class='chat-container'>\
        <img src='"+ img +"' alt='Avatar'>\
        <p>"+msg+"</p>\
        <span class='time-right'>"+ getNow() +"</span>\
        </div>";
    $('#chattab').append(html);
    updateScroll();
}

function getNow(){
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    return(time);
}

$("#messageInput").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#messageBtn").click();
    }
});

$("#messageBtn").click(function() {
    var text = $("#messageInput").val();
    $("#messageInput").val("");
    if(text.trim())
        addMessage(text, "images/faustop.jpg");
});

function messageGenerator() {
    var messages = [
        "Lorem ipsun e essas paradas",
        "Mensagens geradas automaticamente",
        "Rodando permutações e tals",
        "Mas eu não sei o que é permutação",
        "O que o prof disse",
        "Não entendi o ex. 5",
        "Tem pelos menos 1 frase pra cada avatar.",
        "pelo menos isso",
        "kk eae men"
    ];
    var avatars = [
        "images/avatar1.png", "images/avatar2.png", "images/avatar3.jpeg",
        "images/avatar4.jpeg", "images/avatar5.jpeg", "images/avatar6.jpeg"
    ]
    var random1 = Math.floor(Math.random() * messages.length);
    var random2 = Math.floor(Math.random() * avatars.length);
    addMessage(messages[random1], avatars[random2]);
}

window.setInterval(function(){
    messageGenerator();
  }, 5000);  

$( document ).ready(function() {
    messageGenerator();
});