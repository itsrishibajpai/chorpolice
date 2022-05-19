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
// function playSound () {
//     document.getElementById("audioSource").play();
// }

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
    // playSound();
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

function wrong() {
    $('.floating-box').addClass('faded');
    $('#diamond').addClass('wrong');
}

$("#diamond").click(function() {
    wrong();
    stopConfetti();
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
    setTimeout(function(){
        $('#chorchance').addClass('hide');
    }, 3000);
}

function showPoliceChance() {
    $('#policechance').removeClass('hide');
    setTimeout(function(){
        $('#policechance').addClass('hide');
    }, 3000);
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
        $('#chorChatBox').addClass('hide');
        $('#chormsg').removeClass('hide');
        $('#chormsg').addClass('msganimate');
        $('#policesent').html(clickedMessage);
        msgSound();
        setTimeout(function(){
            $('#chormsg').addClass('hide');
        }, 4000);
        console.log(clickedMessage);
    }
}
var cReactions = document.getElementsByClassName('cmoji');
for(i = 0; i<cReactions.length; i++) {
    cReactions[i].onclick = function(){
        var clickedMessage = this.innerHTML;
        $('#chorChatBox').addClass('hide');
        $('#chormoji').removeClass('hide');
        $('#chormoji').addClass('msganimate');
        $('#chormoji').addClass('enlarge');
        $('#policesentmoji').html(clickedMessage);
        msgSound();
        setTimeout(function(){
            $('#chormoji').addClass('hide');
        }, 4000);
        console.log(clickedMessage);
    }
}

var pMessages = document.getElementsByClassName('p-msg');
for(i = 0; i<pMessages.length; i++) {
    pMessages[i].onclick = function(){
        var clickedMessage = this.innerHTML;
        $('#policeChatBox').addClass('hide');
        $('#policemsg').removeClass('hide');
        $('#policemsg').addClass('msganimate');
        $('#chorsent').html(clickedMessage);
        msgSound();
        setTimeout(function(){
            $('#policemsg').addClass('hide');
        }, 4000);
        console.log(clickedMessage);
    }
}
var pReactions = document.getElementsByClassName('pmoji');
for(i = 0; i<pReactions.length; i++) {
    pReactions[i].onclick = function(){
        var clickedMessage = this.innerHTML;
        $('#policeChatBox').addClass('hide');
        $('#policemoji').removeClass('hide');
        $('#policemoji').addClass('msganimate');
        $('#policemoji').addClass('enlarge');
        $('#chorsentmoji').html(clickedMessage);
        msgSound();
        setTimeout(function(){
            $('#policemoji').addClass('hide');
        }, 4000);
        console.log(clickedMessage);
    }
}

$('#chor-chat').click(function () {
    $('#chorChatBox').removeClass('hide');
    $('#policeChatBox').removeClass('modal-right');
    $('#policemoji').addClass('hide');
    $('#chorChatBox').toggleClass('modal-left');
});
$('#police-chat').click(function () {
    $('#policeChatBox').removeClass('hide');
    $('#chorChatBox').removeClass('modal-left');
    $('#chormsg').addClass('hide');
    $('#policeChatBox').toggleClass('modal-right');
});


// JS Code for enabling / disabling popups in Game Level Cards
//controls to show/hide popups
$('.close').on('click', function(){
    $('.canvas').removeClass('blur');
    $('.slidewrapper').removeClass('hide');
    $('.topbar').removeClass('hide');
    $('.bottomnav').removeClass('hide');
    $('.game-popup').removeClass('visible');
});

$('#bank').on('click', function(){
    $('.canvas').addClass('blur');
    $('.slidewrapper').addClass('hide');
    $('.topbar').addClass('hide');
    $('.bottomnav').addClass('hide');
    $('#bank-popup').addClass('visible');
})

$('#temple').on('click', function(){
    $('.canvas').addClass('blur');
    $('.slidewrapper').addClass('hide');
    $('.topbar').addClass('hide');
    $('.bottomnav').addClass('hide');
    $('#temple-popup').addClass('visible');
})

$('#meuseum').on('click', function(){
    $('.canvas').addClass('blur');
    $('.slidewrapper').addClass('hide');
    $('.topbar').addClass('hide');
    $('.bottomnav').addClass('hide');
    $('#meuseum-popup').addClass('visible');
})

$('#palace').on('click', function(){
    $('.canvas').addClass('blur');
    $('.slidewrapper').addClass('hide');
    $('.topbar').addClass('hide');
    $('.bottomnav').addClass('hide');
    $('#palace-popup').addClass('visible');
})

//show friends popup to choose between create and join match
$('#bankFriends').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.secret-popup').addClass('hide');
    $('#bank-friends').addClass('show');
})

$('#templeFriends').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.secret-popup').addClass('hide');
    $('#temple-friends').addClass('show');
})

$('#meuseumFriends').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.secret-popup').addClass('hide');
    $('#meuseum-friends').addClass('show');
})

$('#palaceFriends').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.secret-popup').addClass('hide');
    $('#palace-friends').addClass('show');
})

//show friends create match popup -- match ID will be given to copy 
$('#copyBankSecret').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.game-popup').removeClass('show');
    $('#bankCopy').addClass('show');
})

$('#templeFriends').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.game-popup').removeClass('show');
    $('#templeCopy').addClass('show');
})

$('#meuseumFriends').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.game-popup').removeClass('show');
    $('#meuseumCopy').addClass('show');
})

$('#palaceFriends').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.game-popup').removeClass('show');
    $('#palaceCopy').addClass('show');
})

//show friends secret input popup -- secret input will be given to paste match ID
$('#copyBankSecret').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.game-popup').removeClass('show');
    $('#bank-secret').removeClass('hide');
    $('#bank-secret').addClass('show');
})

$('#copyTempleSecret').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.game-popup').removeClass('show');
    $('#temple-secret').removeClass('hide');
    $('#temple-secret').addClass('show');
})

$('#copyMeuseumSecret').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.game-popup').removeClass('show');
    $('#meuseum-secret').removeClass('hide');
    $('#meuseum-secret').addClass('show');
})

$('#copyPalaceSecret').on('click', function() {
    $('.canvas').addClass('blur');
    $('.game-popup').removeClass('visible');
    $('.game-popup').removeClass('show');
    $('#palace-secret').removeClass('hide');
    $('#palace-secret').addClass('show');
})

//closing the popup
$('.popup-btn').on('click', function(){
    $('.secret-popup').removeClass('visible');
    $('.game-popup').removeClass('visible');
    $('.canvas').removeClass('blur'); 
})