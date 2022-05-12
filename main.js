$('#trigger').on('click', function() {
    $('#canvas').removeClass('blur');
    $('#trigger').css({'display': 'none', 'visibility': 'hidden'});
    document.body.requestFullscreen();
    document.body.mozRequestFullScreen();
    document.body.webkitRequestFullScreen();
    document.body.msRequestFullscreen();
});

////////// scripts for playground page ///////////
//code to play the sound
function playSound () {
    document.getElementById("audioSource").play();
}

/* code for slider */
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}


//code to apply dynamic background
var path = 'images/Backgrounds/';
var filename = getQueryVariable('filename');
var url = path+filename;
var canvas = document.getElementById('game-canvas');
canvas.style.backgroundImage = `url(${url})`;


//code to glow and fade boxes
var box = document.querySelectorAll('floating-box');
function glow(id)
{
    $(".floating-box").addClass("faded");
    $(".floating-box").removeClass("animatebox");
    $(`#${id}`).removeClass("faded");
    $(`#${id}`).addClass("activebox");
    playSound();
    glow = () => {};
}

function stopglow()
{
    $(".floating-box").addClass("faded");
    $(".floating-box").removeClass("animatebox");
}

$("#stone").click(function() {
    glow('stone');
});
$("#silver").click(function() {
    glow('silver');
});
$("#gold").click(function() {
    glow('gold');
});
$("#platinum").click(function() {
    glow('platinum');
});
$("#diamond").click(function() {
    glow('diamond');
});

function reglow()
{
    stopConfetti();
    $(".floating-box").removeClass("faded");
    $(".floating-box").removeClass("activebox");
    $(".floating-box").addClass("animatebox");
}

function interv () {
    glow = (id) =>{
        $(".floating-box").addClass("faded");
        $(".floating-box").removeClass("animatebox");
        $(`#${id}`).removeClass("faded");
        $(`#${id}`).addClass("activebox");
        playSound();
        glow = () => {};
    };
    reglow();
}

$(function () {
    setInterval(interv, 15000);
});

function showChorChance() {
    $('#chorchance').removeClass('hide');
}

function showPoliceChance() {
    $('#policechance').removeClass('hide');
}


//code for chor and police timer
function addChorTimer() {
    $('#chor-top').addClass('borderanimate');
    $('#chor-bottom').addClass('borderanimate');
    $('#chor-left').addClass('borderanimate');
    $('#chor-right').addClass('borderanimate');
}

$(function () {
    setInterval(addChorTimer, 0);
});

function addPoliceTimer() {
    $('#police-top').addClass('borderanimate');
    $('#police-bottom').addClass('borderanimate');
    $('#police-left').addClass('borderanimate');
    $('#police-right').addClass('borderanimate');
}

$(function () {
    setInterval(addPoliceTimer, 15000);
});


//code for chat functionality
var cMessages = document.getElementsByClassName('c-msg');
for(i = 0; i<cMessages.length; i++) {
    cMessages[i].onclick = function(){
        var clickedMessage = this.innerHTML;
        $('#policemsg').removeClass('hide');
        $('#policemsg').addClass('msganimate');
        $('#chorsent').html(clickedMessage);
        setTimeout(function(){
            $('#policemsg').addClass('hide');
        }, 4000);
        //console.log(clickedMessage);
    }
}
var cReactions = document.getElementsByClassName('cmoji');
for(i = 0; i<cReactions.length; i++) {
    cReactions[i].onclick = function(){
        var clickedMessage = this.innerHTML;
        $('#policemsg').removeClass('hide');
        $('#policemsg').addClass('msganimate');
        $('#chorsent').html(clickedMessage);
        setTimeout(function(){
            $('#policemsg').addClass('hide');
        }, 4000);
        //console.log(clickedMessage);
    }
}

var pMessages = document.getElementsByClassName('p-msg');
for(i = 0; i<pMessages.length; i++) {
    pMessages[i].onclick = function(){
        var clickedMessage = this.innerHTML;
        $('#chormsg').removeClass('hide');
        $('#chormsg').addClass('msganimate');
        $('#policesent').html(clickedMessage);
        setTimeout(function(){
            $('#chormsg').addClass('hide');
        }, 4000);
        //console.log(clickedMessage);
    }
}
var pReactions = document.getElementsByClassName('pmoji');
for(i = 0; i<pReactions.length; i++) {
    pReactions[i].onclick = function(){
        var clickedMessage = this.innerHTML;
        $('#chormsg').removeClass('hide');
        $('#chormsg').addClass('msganimate');
        $('#policesent').html(clickedMessage);
        setTimeout(function(){
            $('#chormsg').addClass('hide');
        }, 4000);
        //console.log(clickedMessage);
    }
}

$('#chor-chat').click(function () {
    $('#policeChatBox').removeClass('modal-right');
    $('#policemsg').addClass('hide');
    $('#chorChatBox').toggleClass('modal-left');
});
$('#police-chat').click(function () {
    $('#chorChatBox').removeClass('modal-left');
    $('#chormsg').addClass('hide');
    $('#policeChatBox').toggleClass('modal-right');
});
