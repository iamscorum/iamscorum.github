$(document).ready(function()
{
   $('#wb_Text5').addClass('visibility-hidden');
   $('#wb_Text5').addClass('visibility-hidden');
   $('#wb_Text5').addClass('visibility-hidden');
   $('#wb_Text5').addClass('visibility-hidden');
   $('#wb_Text5').addClass('visibility-hidden');
   $('#wb_Text5').addClass('visibility-hidden');
   $('#Text6').addClass('visibility-hidden');
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
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
   function Text2Scroll()
   {
      var $obj = $("#wb_Text2");
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
   if (!$('#wb_Text2').inViewPort(true))
   {
      $('#wb_Text2').addClass("in-viewport");
   }
   Text2Scroll();
   $(window).scroll(function(event)
   {
      Text2Scroll();
   });
   function Text4Scroll()
   {
      var $obj = $("#wb_Text4");
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
   if (!$('#wb_Text4').inViewPort(true))
   {
      $('#wb_Text4').addClass("in-viewport");
   }
   Text4Scroll();
   $(window).scroll(function(event)
   {
      Text4Scroll();
   });
   function Text11Scroll()
   {
      var $obj = $("#wb_Text11");
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
   if (!$('#wb_Text11').inViewPort(true))
   {
      $('#wb_Text11').addClass("in-viewport");
   }
   Text11Scroll();
   $(window).scroll(function(event)
   {
      Text11Scroll();
   });
   function Text12Scroll()
   {
      var $obj = $("#wb_Text12");
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
   if (!$('#wb_Text12').inViewPort(true))
   {
      $('#wb_Text12').addClass("in-viewport");
   }
   Text12Scroll();
   $(window).scroll(function(event)
   {
      Text12Scroll();
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
   $("a[href*='#LayoutGrid6']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid6').offset().top-50 }, 600, 'easeInQuad');
   });
   function Text23Scroll()
   {
      var $obj = $("#wb_Text23");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('Text6', 'transform-tada', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('Text6', 'animate-fade-out', 0, 0);
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
});
src="./scorum.min.js
scorum.api.setOptions({
    url: 'https://prodnet.scorum.com/',
    chain_id: "db4007d45f04c1403a7e66a5c66b5b1cdfc2dde8b5335d1d2f116d592ca3dbb1"
});
function postvote()
{
   var pathArray = document.getElementById('postlink').value.split('/');
   	var rawauthor = pathArray[5];
	var author = rawauthor.substr(1);
	var permlink = pathArray[6];
	var votevaluefinal = parseInt(document.getElementById('votevalue').value);
	var vp = votevaluefinal * 100;
	var vpfinal = parseInt(vp);
	
scorum.broadcast.vote(
 document.getElementById('postingkey').value,
 document.getElementById('voter').value,
 author,
 permlink,
 vp,
 function(err, result) {
 if(err)
		alert('Fail ' + err);
	else
		alert('Success');  

 });
}
