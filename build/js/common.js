function refreshVar(){navPos=nav.offset().top,navHeight=nav.outerHeight(!0)}$(document).ready(function(){$(".single-item").slick({dots:!0,arrows:!1,fade:!0}),$(".navbar-toggle").click(function(){$(".menu").toggleClass("menu-active")})});var navPos,winPos,navHeight,nav=$(".nav-menu");refreshVar(),$(window).resize(refreshVar),$('<div class="clone-nav"></div>').insertBefore(".nav-left").css("height",navHeight).hide(),$(window).scroll(function(){winPos=$(window).scrollTop(),winPos>=navPos?(nav.addClass("fixed shadow"),$(".clone-nav").show()):(nav.removeClass("fixed shadow"),$(".clone-nav").hide())});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJyZWZyZXNoVmFyIiwibmF2UG9zIiwibmF2Iiwib2Zmc2V0IiwidG9wIiwibmF2SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNsaWNrIiwiZG90cyIsImFycm93cyIsImZhZGUiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwid2luUG9zIiwid2luZG93IiwicmVzaXplIiwiaW5zZXJ0QmVmb3JlIiwiY3NzIiwiaGlkZSIsInNjcm9sbCIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwic2hvdyIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFnQkEsUUFBU0EsY0FDTEMsT0FBU0MsSUFBSUMsU0FBU0MsSUFDdEJDLFVBQVlILElBQUlJLGFBQVksR0FsQmhDQyxFQUFFQyxVQUFVQyxNQUFNLFdBQ2RGLEVBQUUsZ0JBQWdCRyxPQUNkQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsTUFBTSxJQUdWTixFQUFFLGtCQUFrQk8sTUFDaEIsV0FDSVAsRUFBRSxTQUFTUSxZQUFZLGtCQUtuQyxJQUFJZCxRQUFRZSxPQUFRWCxVQUFXSCxJQUFNSyxFQUFFLFlBT3ZDUCxjQUNBTyxFQUFFVSxRQUFRQyxPQUFPbEIsWUFFakJPLEVBQUUsaUNBQWlDWSxhQUFhLGFBQWFDLElBQUksU0FBVWYsV0FBV2dCLE9BRXRGZCxFQUFFVSxRQUFRSyxPQUFPLFdBQ2JOLE9BQVNULEVBQUVVLFFBQVFNLFlBRWZQLFFBQVVmLFFBQ1ZDLElBQUlzQixTQUFTLGdCQUNiakIsRUFBRSxjQUFja0IsU0FFaEJ2QixJQUFJd0IsWUFBWSxnQkFDaEJuQixFQUFFLGNBQWNjIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2luZ2xlLWl0ZW0nKS5zbGljayh7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGZhZGU6IHRydWVcbiAgICB9KTtcblxuICAgICQoXCIubmF2YmFyLXRvZ2dsZVwiKS5jbGljayhcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLm1lbnUnKS50b2dnbGVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgKTtcbn0pO1xuXG52YXIgbmF2UG9zLCB3aW5Qb3MsIG5hdkhlaWdodCwgbmF2ID0gJChcIi5uYXYtbWVudVwiKTtcblxuZnVuY3Rpb24gcmVmcmVzaFZhcigpIHtcbiAgICBuYXZQb3MgPSBuYXYub2Zmc2V0KCkudG9wO1xuICAgIG5hdkhlaWdodCA9IG5hdi5vdXRlckhlaWdodCh0cnVlKTtcbn1cblxucmVmcmVzaFZhcigpO1xuJCh3aW5kb3cpLnJlc2l6ZShyZWZyZXNoVmFyKTtcblxuJCgnPGRpdiBjbGFzcz1cImNsb25lLW5hdlwiPjwvZGl2PicpLmluc2VydEJlZm9yZShcIi5uYXYtbGVmdFwiKS5jc3MoXCJoZWlnaHRcIiwgbmF2SGVpZ2h0KS5oaWRlKCk7XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIHdpblBvcyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgIGlmICh3aW5Qb3MgPj0gbmF2UG9zKSB7XG4gICAgICAgIG5hdi5hZGRDbGFzcyhcImZpeGVkIHNoYWRvd1wiKTtcbiAgICAgICAgJChcIi5jbG9uZS1uYXZcIikuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5yZW1vdmVDbGFzcyhcImZpeGVkIHNoYWRvd1wiKTtcbiAgICAgICAgJChcIi5jbG9uZS1uYXZcIikuaGlkZSgpO1xuICAgIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
