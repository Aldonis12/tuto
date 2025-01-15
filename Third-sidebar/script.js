$(".menu > ul > li").click(function(e){
    // remove active from alredy active
    $(this).siblings().removeClass("active")
    // add active to clicked
    $(this).toggleClass("active");
    // if has sub-menu open it
    $(this).find("ul").slideToggle();
    // close all other sub-menu if any open
    $(this).siblings().find("ul").slideUp();
    // remove active from all sub-menu
    $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function () {
    $(".sidebar").toggleClass("active");
});