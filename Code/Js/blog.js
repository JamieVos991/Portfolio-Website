<<<<<<< HEAD
// Filter 
=======

>>>>>>> bd0899b067e12b4128e47c063da6cb131cf31bee
$(document).ready(function (){
    $(".filter-item").click(function (){
      const value = $(this).attr("data-filter");
      if (value == "all") {
        $(".post-box").show("1000");
      }
      else {
        $(".post-box").not('.' + value).hide("1000");
        $(".post-box").filter('.' + value).show("1000");
      }
    });
  
    $(".filter-item").click(function(){
      $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
  });
