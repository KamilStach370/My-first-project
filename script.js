//GO BUTTON SCROLL

$('.button').on('click', function () {

    $('body, html').animate({
        scrollTop: $('.secondPage').offset().top
    }, 1000); // w [ms]

});

//BODYBUILDING SCROLL

$('.bodybu').on('click', function () {

    $('body, html').animate({
        scrollTop: $('.bodybuildingPage').offset().top
    }, 1000); // w [ms]

});

//Martial arts SCROLL

$('.ma').on('click', function () {

    $('body, html').animate({
        scrollTop: $('.boxerPage').offset().top
    }, 1000); // w [ms]

});

//FITNESS SCROLL

$('.fitn').on('click', function () {

    $('body, html').animate({
        scrollTop: $('.fitnessPage').offset().top
    }, 1000); // w [ms]

});

//YOGA SCROLL

$('.yog').on('click', function () {

    $('body, html').animate({
        scrollTop: $('.yogaPage').offset().top
    }, 1000); // w [ms]

});
//INFO O TRENERZE MEN

const bioM = document.querySelector('.bioM');
const infoBio = document.querySelector('.infoBioM');
const menRight = document.querySelector('.men .right');
bioM.addEventListener('click', function () {
    infoBio.classList.toggle('active');
    infoTrain.classList.remove('active');
    infoCon.classList.remove('active');

    // menRight.classList.toggle('active');
    if ($('.infoBioM').hasClass('active')) {
        $('.men .right').addClass('active');
    } else {
        $('.men .right').removeClass('active');
    }
});

const trainM = document.querySelector('.trainM');
const infoTrain = document.querySelector('.infotrainM');
trainM.addEventListener('click', function () {
    infoTrain.classList.toggle('active');
    infoCon.classList.remove('active');
    infoBio.classList.remove('active');

    // menRight.classList.toggle('active');
    if ($('.infotrainM').hasClass('active')) {
        $('.men .right').addClass('active');
    } else {
        $('.men .right').removeClass('active');
    }
});

const conM = document.querySelector('.contM');
const infoCon = document.querySelector('.infocontM');
conM.addEventListener('click', function () {
    infoCon.classList.toggle('active');
    infoTrain.classList.remove('active');
    infoBio.classList.remove('active');

    // menRight.classList.toggle('active');
    if ($('.infocontM').hasClass('active')) {
        $('.men .right').addClass('active');
    } else {
        $('.men .right').removeClass('active');
    }
});

//INFO O TRENERCE WOMEN

const bioW = document.querySelector('.bioW');
const infoBioW = document.querySelector('.infoBioW');
const womenLeft = document.querySelector('.women .left');
bioW.addEventListener('click', function () {
    infoBioW.classList.toggle('active');
    infoTrainW.classList.remove('active');
    infoConW.classList.remove('active');

    // womenLeft.classList.toggle('active');
    if ($('.infoBioW').hasClass('active')) {
        $('.women .left').addClass('active');
    } else {
        $('.women .left').removeClass('active');
    }
});

const trainW = document.querySelector('.trainW');
const infoTrainW = document.querySelector('.infotrainW');
trainW.addEventListener('click', function () {
    infoTrainW.classList.toggle('active');
    infoConW.classList.remove('active');
    infoBioW.classList.remove('active');

    // womenLeft.classList.toggle('active');
    if ($('.infotrainW').hasClass('active')) {
        $('.women .left').addClass('active');
    } else {
        $('.women .left').removeClass('active');
    }
});

const conW = document.querySelector('.contW');
const infoConW = document.querySelector('.infocontW');
conW.addEventListener('click', function () {
    infoConW.classList.toggle('active');
    infoTrainW.classList.remove('active');
    infoBioW.classList.remove('active');

    // womenLeft.classList.toggle('active');
    if ($('.infocontW').hasClass('active')) {
        $('.women .left').addClass('active');
    } else {
        $('.women .left').removeClass('active');
    }
});

//INFO O BOXERZE

const bioB = document.querySelector('.bioX');
const infoBioB = document.querySelector('.infoBioB');
const boxerRight = document.querySelector('.boxerPage .box-right');
bioB.addEventListener('click', function () {
    infoBioB.classList.toggle('active');
    infoTrainB.classList.remove('active');
    infoConB.classList.remove('active');

    // womenLeft.classList.toggle('active');
    if ($('.infoBioB').hasClass('active')) {
        $('.boxerPage .box-right').addClass('active');
    } else {
        $('.boxerPage .box-right').removeClass('active');
    }
});

const trainB = document.querySelector('.trainX');
const infoTrainB = document.querySelector('.infotrainB');
trainB.addEventListener('click', function () {
    infoTrainB.classList.toggle('active');
    infoConB.classList.remove('active');
    infoBioB.classList.remove('active');

    // womenLeft.classList.toggle('active');
    if ($('.infotrainB').hasClass('active')) {
        $('.boxerPage .box-right').addClass('active');
    } else {
        $('.boxerPage .box-right').removeClass('active');
    }
});

const conB = document.querySelector('.contX');
const infoConB = document.querySelector('.infocontB');
conB.addEventListener('click', function () {
    infoConB.classList.toggle('active');
    infoTrainB.classList.remove('active');
    infoBioB.classList.remove('active');

    // womenLeft.classList.toggle('active');
    if ($('.infocontB').hasClass('active')) {
        $('.boxerPage .box-right').addClass('active');
    } else {
        $('.boxerPage .box-right').removeClass('active');
    }
});