jQuery(function($){
  
  $("#Menu").on("click",function(){
	  $(this).toggleClass("active").parents(".header_wrap").toggleClass("active");
	  $(".header_sp_menu").fadeToggle();
  });
  
/*
  $("#MenuClose").on("click",function(){
	  $(this).parent().fadeOut();
  });
*/

	$("#CloseBtn,#LoginFilter").on("click",function(){
	  $("#LoginFilter").fadeOut();
	  $("#LoginPop").hide();
  });
  
  $("#H_Login,#H_LoginSp").on("click",function(){
	  $("#LoginFilter").fadeIn();
	  $("#LoginPop").show();
  });
  
  /* About area */
  $("#AboutCloseBtn,#AboutFilter").on("click",function(){
	  $("#AboutFilter").fadeOut();
	  $("#AboutPop").hide();
  });
  
  $("#AboutBtn").on("click",function(){
	  $("#AboutFilter").fadeIn();
	  $("#AboutPop").show();
  });
  
  $(".common_about_list .item").on("click",function(){
	  $(this).addClass("active").siblings().removeClass("active");
	  var AboutMapTarget = $(this).data("map");
	  $(".common_about_map_list").find("."+AboutMapTarget).fadeIn().siblings().hide();
  });
  
  $(".common_about_btn").on("click",function(){
	  var AboutOption = $(".common_about_list .active").data("map");
	  $("#MapSelect").val(AboutOption);
	  $("#AboutFilter").fadeOut();
	  $("#AboutPop").hide();
	  
  });
  
  /* About area end */
  
  
  
  
  $(window).on("load resize",function(){
	  /* header */
	  var Header_H = $(".header_wrap").outerHeight();
	  $(".common_main").css({"padding-top":Header_H});
	  
	  PicSize32(".top_pickup_common_block .pic");
	  PicSize34(".common_blog_item .pic");
	  PicSizeAside(".aside_blog_list .pic");
	  PicSize34(".search_common_block .pic");
	  PicSize32(".recruit_info_block .pic");
	  PicSize32(".recruit_point_block .pic");
	  
	  
	  
	  $('a[href^="#"]').on("click",function(){
	  	var speed = 500; 
	  	var href= $(this).attr("href");
	  	var target = $(href == "#" || href == "" ? 'html' : href);
	  	if(target.length){
	  	  var position = target.offset().top-Header_H;
	  	}
	  	$("body,html").animate({scrollTop:position}, speed, 'swing');
	  	return false;
	  });
	  
  });
  
  function PicSize34(e){
	  var Width = $(e).width();
	  $(e).css({"height": Width*3/4});
  }
  
  function PicSize32(e){
	  var Width = $(e).width();
	  $(e).css({"height": Width*2/3});
  }  
  
  function PicSizeAside(e){
	  var Width = $(e).width();
	  $(e).css({"height": Width/2.2});
  }
  
/*
  $(".blog_sitemap_choose label").on("click",function(){
	  var index = $(".blog_sitemap_choose label").index(this);
	  console.log(index);
	  $("#BlogChooseInfo li").eq(index).addClass("active").siblings().removeClass("active");
  });
*/
  

});