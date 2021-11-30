$(document).ready(function() {

    $("#tweet-text").keydown(function(event) {
      
      let result = $(this).val().length
      
   
      const $counter = $(this).parentsUntil(".new-tweet").find(".counter")
      $counter.text(140-result)

      if (result > 140) {
        $(".counter").attr("id", "negative"); 
        
      } else {
        $(".counter").removeAttr("id", "negative"); 
      }
      
})
  });
   