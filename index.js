$(document).ready(function()
{
   $('#wb_Text6').addClass('visibility-hidden');
   $('#wb_Text14').addClass('visibility-hidden');
   $('#wb_Team1').addClass('visibility-hidden');
   $('#wb_Text1').addClass('visibility-hidden');
   $('#wb_Team1').addClass('visibility-hidden');
   $('#wb_Name1').addClass('visibility-hidden');
   $('#wb_Name3').addClass('visibility-hidden');
   $('#wb_Text5').addClass('visibility-hidden');
   $('#wb_Name1').addClass('visibility-hidden');
   $('#wb_Text5').addClass('visibility-hidden');
   $('#wb_Text5').addClass('visibility-hidden');
   $('#wb_Name1').addClass('visibility-hidden');
   $('#wb_Name3').addClass('visibility-hidden');
   $('#wb_Name1').addClass('visibility-hidden');
   $('#wb_Name3').addClass('visibility-hidden');
   $('#wb_Text5').addClass('visibility-hidden');
   $('#wb_Text5').addClass('visibility-hidden');
   $('#wb_Text6').addClass('visibility-hidden');
   $('#wb_Name1').addClass('visibility-hidden');
   $('#wb_Name1').addClass('visibility-hidden');
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
   function Text6Scroll()
   {
      var $obj = $("#wb_Text6");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text6', 'transform-tada', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text6', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text6').inViewPort(true))
   {
      $('#wb_Text6').addClass("in-viewport");
   }
   Text6Scroll();
   $(window).scroll(function(event)
   {
      Text6Scroll();
   });
   function Text14Scroll()
   {
      var $obj = $("#wb_Text14");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text14', 'animate-fade-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text14', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text14').inViewPort(true))
   {
      $('#wb_Text14').addClass("in-viewport");
   }
   Text14Scroll();
   $(window).scroll(function(event)
   {
      Text14Scroll();
   });
   function FontAwesomeIcon2Scroll()
   {
      var $obj = $("#wb_FontAwesomeIcon2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Team1', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Team1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_FontAwesomeIcon2').inViewPort(true))
   {
      $('#wb_FontAwesomeIcon2').addClass("in-viewport");
   }
   FontAwesomeIcon2Scroll();
   $(window).scroll(function(event)
   {
      FontAwesomeIcon2Scroll();
   });
   $("a[href*='#intro']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#intro').offset().top-50 }, 600, 'easeInQuad');
   });
   $("a[href*='#about']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#about').offset().top-50 }, 600, 'easeInQuad');
   });
   function Text1Scroll()
   {
      var $obj = $("#wb_Text1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text1', 'transform-tada', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text1').inViewPort(true))
   {
      $('#wb_Text1').addClass("in-viewport");
   }
   Text1Scroll();
   $(window).scroll(function(event)
   {
      Text1Scroll();
   });
   $("a[href*='#team']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#team').offset().top-50 }, 600, 'easeInQuad');
   });
   function Team1Scroll()
   {
      var $obj = $("#wb_Team1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Team1', 'transform-spring', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Team1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Team1').inViewPort(true))
   {
      $('#wb_Team1').addClass("in-viewport");
   }
   Team1Scroll();
   $(window).scroll(function(event)
   {
      Team1Scroll();
   });
   function Name1Scroll()
   {
      var $obj = $("#wb_Name1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name1', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Name1').inViewPort(true))
   {
      $('#wb_Name1').addClass("in-viewport");
   }
   Name1Scroll();
   $(window).scroll(function(event)
   {
      Name1Scroll();
   });
   function Name3Scroll()
   {
      var $obj = $("#wb_Name3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name3', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Name3').inViewPort(true))
   {
      $('#wb_Name3').addClass("in-viewport");
   }
   Name3Scroll();
   $(window).scroll(function(event)
   {
      Name3Scroll();
   });
   $("a[href*='#contact']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-50 }, 600, 'easeInQuad');
   });
   function Text5Scroll()
   {
      var $obj = $("#wb_Text5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text5').inViewPort(true))
   {
      $('#wb_Text5').addClass("in-viewport");
   }
   Text5Scroll();
   $(window).scroll(function(event)
   {
      Text5Scroll();
   });
   function Heading1Scroll()
   {
      var $obj = $("#wb_Heading1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name1', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading1').inViewPort(true))
   {
      $('#wb_Heading1').addClass("in-viewport");
   }
   Heading1Scroll();
   $(window).scroll(function(event)
   {
      Heading1Scroll();
   });
   function Text13Scroll()
   {
      var $obj = $("#wb_Text13");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text13').inViewPort(true))
   {
      $('#wb_Text13').addClass("in-viewport");
   }
   Text13Scroll();
   $(window).scroll(function(event)
   {
      Text13Scroll();
   });
   function Text15Scroll()
   {
      var $obj = $("#wb_Text15");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text15').inViewPort(true))
   {
      $('#wb_Text15').addClass("in-viewport");
   }
   Text15Scroll();
   $(window).scroll(function(event)
   {
      Text15Scroll();
   });
   function Heading2Scroll()
   {
      var $obj = $("#wb_Heading2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name1', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading2').inViewPort(true))
   {
      $('#wb_Heading2').addClass("in-viewport");
   }
   Heading2Scroll();
   $(window).scroll(function(event)
   {
      Heading2Scroll();
   });
   function Heading3Scroll()
   {
      var $obj = $("#wb_Heading3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name3', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading3').inViewPort(true))
   {
      $('#wb_Heading3').addClass("in-viewport");
   }
   Heading3Scroll();
   $(window).scroll(function(event)
   {
      Heading3Scroll();
   });
   function Heading5Scroll()
   {
      var $obj = $("#wb_Heading5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name1', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading5').inViewPort(true))
   {
      $('#wb_Heading5').addClass("in-viewport");
   }
   Heading5Scroll();
   $(window).scroll(function(event)
   {
      Heading5Scroll();
   });
   function Heading6Scroll()
   {
      var $obj = $("#wb_Heading6");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name3', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading6').inViewPort(true))
   {
      $('#wb_Heading6').addClass("in-viewport");
   }
   Heading6Scroll();
   $(window).scroll(function(event)
   {
      Heading6Scroll();
   });
   $("#Banner1").animatetext({showDelay: 50, hideDelay: 50, showMode: 2, hideMode: 2, pause: 500});
   $("#Banner3").animatetext({showDelay: 50, hideDelay: 50, showMode: 2, hideMode: 2, pause: 500});
   function Text18Scroll()
   {
      var $obj = $("#wb_Text18");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text18').inViewPort(true))
   {
      $('#wb_Text18').addClass("in-viewport");
   }
   Text18Scroll();
   $(window).scroll(function(event)
   {
      Text18Scroll();
   });
   function Text19Scroll()
   {
      var $obj = $("#wb_Text19");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text19').inViewPort(true))
   {
      $('#wb_Text19').addClass("in-viewport");
   }
   Text19Scroll();
   $(window).scroll(function(event)
   {
      Text19Scroll();
   });
   $("a[href*='#LayoutGrid4']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid4').offset().top-50 }, 600, 'easeInQuad');
   });
   function Text23Scroll()
   {
      var $obj = $("#wb_Text23");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text6', 'transform-tada', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text6', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text23').inViewPort(true))
   {
      $('#wb_Text23').addClass("in-viewport");
   }
   Text23Scroll();
   $(window).scroll(function(event)
   {
      Text23Scroll();
   });
   function Heading8Scroll()
   {
      var $obj = $("#wb_Heading8");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name1', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading8').inViewPort(true))
   {
      $('#wb_Heading8').addClass("in-viewport");
   }
   Heading8Scroll();
   $(window).scroll(function(event)
   {
      Heading8Scroll();
   });
   $("#Banner2").animatetext({showDelay: 50, hideDelay: 50, showMode: 2, hideMode: 2, pause: 500});
   function Heading4Scroll()
   {
      var $obj = $("#wb_Heading4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name1', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading4').inViewPort(true))
   {
      $('#wb_Heading4').addClass("in-viewport");
   }
   Heading4Scroll();
   $(window).scroll(function(event)
   {
      Heading4Scroll();
   });
   $("#Banner4").animatetext({showDelay: 50, hideDelay: 50, showMode: 2, hideMode: 2, pause: 500});
});
