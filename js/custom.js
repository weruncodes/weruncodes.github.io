var validator = new FormValidator('contact-form', [{
    name: 'contact-name',
    display: 'Nome',
    rules: 'required'
}, {
    name: 'contact-email',
    display: 'Email',
    rules: 'required|valid_email'
}, {
    name: 'contact-university',
    display: 'Instituição de Ensino',
    rules: 'required'
}, {
    name: 'contact-message',
    display: 'Mensagem',
    rules: 'required'
}], function(errors, evt) {
    if (evt && evt.preventDefault) {
        evt.preventDefault();
    } else if (event) {
        event.returnValue = false;
    }
    $(".form-control").removeClass("has-error");
    $(".help-block").remove();
    if (errors.length > 0) {
        console.log(errors);
        errors.forEach(function (err) {
            $("#" + err.id).addClass("has-error");
            $("#" + err.id).parent().append("<p class='help-block has-error'>" + err.message + "</p>");
        });
    } else {
        var form = $("#contact-form");
        var post_url = form.attr('action');
        var post_data = form.serialize(); //Serialized the form data for process.php
        $('.form-process-contact').html('<p><i class="fa fa-spinner fa-spin fa-2x"></i> Enviando...</p>');
        $.ajax({
            type: 'POST',
            url: '/contact', // Your form script
            data: post_data,
            success: function(msg) {
                $(form).fadeOut(500, function() {
                    $('.form-process-contact').html('');
                    form.html(msg).fadeIn();
                });
            }
        });
    }
});
validator.setMessage('required', 'O campo %s não foi preenchido corretamente');
validator.setMessage('valid_email', 'O campo %s não foi preenchido com um email válido');

var validator2 = new FormValidator('middle-form', [{
    name: 'use-name',
    display: 'Nome',
    rules: 'required'
}, {
    name: 'use-email',
    display: 'Email',
    rules: 'required|valid_email'
}, {
    name: 'use-university',
    display: 'Instituição de Ensino',
    rules: 'required'
}], function(errors, evt) {
    if (evt && evt.preventDefault) {
        evt.preventDefault();
    } else if (event) {
        event.returnValue = false;
    }
    $(".form-control").removeClass("has-error");
    if (errors.length > 0) {
        console.log(errors);
        errors.forEach(function (err) {
            $("#" + err.id).addClass("has-error");
        });
    } else {
        var form = $("#middle-form");
        var post_url = form.attr('action');
        var post_data = form.serialize(); //Serialized the form data for process.php
        $('.btn-middle-optin').html('<i class="fa fa-spinner fa-spin fa-2x"></i> Enviando...');
        $.ajax({
            type: 'POST',
            url: '/useRunCodes', // Your form script
            data: post_data,
            success: function(msg) {
                $(form).fadeOut(500, function() {
                    form.html(msg).fadeIn();
                });
            }
        });
    }
});
validator2.setMessage('required', 'O campo %s não foi preenchido corretamente');
validator2.setMessage('valid_email', 'O campo %s não foi preenchido com um email válido');

$(document).ready(function() {	
    //$("a[data-gal^='prettyPhoto']").prettyPhoto();
    //Start Main Box Animation
    setTimeout(function () {
        $(".box-main-animation h3").toggleClass("stable");
        setTimeout(function () {
            $(".box-main-animation .screen-1").toggleClass("stable");
            setTimeout(function () {
                $(".box-main-animation .screen-2").toggleClass("stable");
                setTimeout(function () {
                    $(".box-main-animation .screen-3").toggleClass("stable");
                },250);
            },250);
        },800);
    },2000);
});

// --------------------------------------------------------
//	Scroll Up
// -------------------------------------------------------- 	
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.scroll-up').fadeIn();
	} else {
		$('.scroll-up').fadeOut();
	}
});

$('.scroll-up').click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, 600);
	return false;
});

// --------------------------------------------------------
//	Navigation Bar
// -------------------------------------------------------- 	
$(window).scroll(function(){	
	"use strict";	
	var scroll = $(window).scrollTop();
	if( scroll > 60 ){		
		$(".navbar").addClass("scroll-fixed-navbar");
        $(".navbar").addClass("scrolled-bar");
	} else {
		$(".navbar").removeClass("scroll-fixed-navbar");
        $(".navbar").removeClass("scrolled-bar");
	}
});

// --------------------------------------------------------
//	Smooth Scrolling
// -------------------------------------------------------- 	
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});

// --------------------------------------------------------
//	Accordion (FAQ)
// -------------------------------------------------------- 
function toggleIcon(e) {
	$(e.target)
		.prev('.panel-heading')
		.find('.panel-title a')
		.toggleClass('active')
		.find("i.fa")
		.toggleClass('fa-plus-square fa-minus-square');
}
$('.panel').on('hidden.bs.collapse', toggleIcon);
$('.panel').on('shown.bs.collapse', toggleIcon);

$('.carousel').carousel({
    interval: 8000
});