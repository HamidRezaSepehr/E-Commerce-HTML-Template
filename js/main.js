/*!
 * Little Shopper | HTML5 E-Commerce Template
 * Author: Web_Trendy
 * Copyright 2021 © Web_Trendy (https://www.templatemonster.com/authors/hamidsepehr/)
 * Licensed under Template Monster (https://www.templatemonster.com/licenses/)
 *
 * "Love is out mother, we are born of LOVE!" --Rumi
 *
 */

$(document).ready(function(){

    // Add to Wishlist Button Script
    $('.wishlist').on('click', function(){
        $.toast({
            text: 'Product added to wishlist! <i class="ri-checkbox-circle-line ri-lg ri-middle ps-1"></i>',
            showHideTransition: 'slide', 
            allowToastClose: false, 
            stack: false, 
            position: 'bottom-right', 
            bgColor: '#011627',
            textColor: 'white',
            loader: false,
            hideAfter: 3000
        });
    });

    // Add to Cart Button Script
    $('.add-to-card').on('click', function(){
        $.toast({
            text: 'Product added to cart! <i class="ri-shopping-bag-2-line ri-lg ri-middle ps-1"></i>',
            showHideTransition: 'slide', 
            allowToastClose: false, 
            stack: false, 
            position: 'bottom-right', 
            bgColor: '#E63946',
            textColor: 'white',
            loader: false,
            hideAfter: 3000
        });
    });

    // Home Page OwlCarousel Initialization
    if($(".owl-carousel").length) {
        $(".owl-carousel").owlCarousel({
            items: 1,
            autoplay: true,
            center: true,
            loop: true,
            animateIn: 'anim-in',
            onChanged: callback,
        });
    
        function callback(event) {
            let index = $('.owl-carousel .owl-item.active img').attr('data-index');
            index = Number(index);
            if (index == 6) {
                index = 0;
            }
            $('.carousel-info').eq(index).addClass('active').siblings().removeClass('active');
        }
    }

    // Dark Mode Toggle Button Scripts
    if(localStorage.getItem('dark-mode') == "on") {
        darkify();
        $("#dm_toggle").attr("checked", true);
    }

    $("#dm_toggle").on('click', function(){
        ($(this).is(":checked"))? darkify() : lightify();
    });

    function darkify() {
        $('html').addClass('dark');
        localStorage.setItem('dark-mode', 'on');
    }

    function lightify() {
        $('html').removeClass('dark');
        localStorage.setItem('dark-mode', 'off');
    }
    // End Dark Mode Toggle Button Script

    // Product Colors Button
    $('.product-colors span, .product-sizes span').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Scroll Hide Element
    if ($('body.shop') || $('body.blog') || $('body.product')) {
        let hiddenItems = $('.dropend, .social-media'),
            windowHeight = $(window).height();
        $(window).scroll(function(){
            let scroll = $(this).scrollTop();
            if (scroll >= windowHeight/2) {
                hiddenItems.addClass('active');
            }
            if (scroll < windowHeight/2) {
                hiddenItems.removeClass('active');
            }
        });
    }

    // Image Zoom Script (product.html)
    let productZoomWrapper = document.querySelector('.zoom-wrapper');
	if (productZoomWrapper) {
		$('.zoom-wrapper').zoom({
			url: $(this).attr('data-src'),
			magnify: 1.2,
		});
	}

    // Product Image Thumbnail Click
    if ($(".product-image-wrapper").length && $(".product-thumb-wrapper").length) {
        let imageWrapper = $(".product-image-wrapper");
        $(".product-thumb-wrapper").on('click', function(){
            let srcUpdate = $(this).children('img').attr('src');
            imageWrapper.attr('data-src', srcUpdate);
            imageWrapper.children('img').attr('src', srcUpdate);
        });
    } 

    // Product Quantity Button
    if ($(".quantity-wrapper").length) {
        let amountElement = $(".quantity-wrapper .amount"),
            amountValue = amountElement.attr('data-amount');
        $(".quantity-wrapper .add").on('click', function(){
            let amountUpdate = ++amountValue;
            amountElement.attr('data-amount', amountUpdate).html(amountUpdate);
        });
        $(".quantity-wrapper .sub").on('click', function(){
            if (amountValue == 1) {
                return;
            }
            let amountUpdate = --amountValue;
            amountElement.attr('data-amount', amountUpdate).html(amountUpdate);
        });
    }

});
// End of scripts