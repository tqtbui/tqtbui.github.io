/* My Theme */

;
(function($){let $navbar=$('.navbar');$(document).on('click','.navbar-collapse.show',function(e){let targetElement=$(e.target).is('a')?$(e.target):$(e.target).parent();if(targetElement.is('a')&&targetElement.attr('class')!='dropdown-toggle'){$(this).collapse('hide');}});$('#back_to_top').on('click',function(event){event.preventDefault();$('html, body').animate({'scrollTop':0},800,function(){window.location.hash="";});});$('nav li a').each(function(){if($(this).prop('href')==window.location.href){$(this).addClass('active');$(this).parents('li').addClass('active');}});$('.collapsible-header').click(function(){var co=$('.collapsible-content')
var el=$(this).next(co);var doit=el.is(':hidden')?(co.slideUp(),el.slideDown()):co.slideUp();});})(jQuery);