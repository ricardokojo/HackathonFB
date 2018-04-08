function scrollDown() {
    var objDiv = document.getElementById("chattab");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function addMessage(msg, img, style){
    var html = "<div class='chat-container "+style+"'>\
        <img src='"+ img +"' alt='Avatar'>\
        <p>"+msg+"</p>\
        <span class='time-right'>"+ getNow() +"</span>\
        </div>";
    $('#chattab').append(html);
    scrollDown();
}

function generateMessage(msg, img){
    var html = "<div class='chat-container darker'>\
        <img src='"+ img +"' alt='Avatar' class='right'>\
        <p>"+msg+"</p>\
        <span class='time-left'>"+ getNow() +"</span>\
        </div>";
    $('#chattab').append(html);
    scrollDown();
}

function getNow(){
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    return(time);
}

function messageGenerator() {
    var messages = [
        "Lorem ipsun e essas paradas",
        "Mensagens geradas automaticamente",
        "Rodando permutações de frases e avatares e tals",
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
    generateMessage(messages[random1], avatars[random2]);
}

window.setInterval(function(){
    messageGenerator();
  }, 7000); 

function teste1(){
    setTimeout(
    function() 
    {
        addMessage("Não lembro. Melhor perguntar pro João.", "images/avatar6.jpeg", "bilhetinho");
    }, 1000);
}

function teste2() {
    setTimeout(
    function() 
    {
        addMessage("É semana que vem. Mesmo dia, 19 horas.", "images/avatar2.png", "bilhetinho");
    }, 1000);
}

function teste3() {
    setTimeout(
    function() 
    {
        addMessage("Sim, exatamente. Esse é o caminho.", "images/avatar1.png", "professor");
    }, 1000);
}

$( document ).ready(function() {
    messageGenerator();
});