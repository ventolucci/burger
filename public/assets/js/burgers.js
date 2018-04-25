$(function () {

  $("#create-form").on("submit", function (event) {
   
      event.preventDefault();

      var newBurger = {
          name: $("#burg").val().trim(),
      };
      console.log(newBurger);
    
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function (data) {
              console.log(data);
              console.log("created new burger");
          
              location.reload();
          }   
      );
  });


  $(".btn-devour").on("click", function(event) {
      var id = $(this).data("id");
          
    
      $.ajax("/api/burgers/" + id, {
        type: "PUT"       
      }).then(
        function() {
          console.log("updated");
          location.reload();
        }
      );
    });
  

});