// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    // Adding an event listener to the devoured buttons to change the devoured boolean in the db
    $(".change-devoured").on("click", function(event) {
      let id = $(this).data("id");
      let burgerEat = $(this).data("devoured");
      
      let newDevouredState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured state to", burgerEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".un-eat").on("click", function(event) {
        let id = $(this).data("id");
        let burgerEat = $(this).data("devoured");
        
        let newDevouredState = {
          devoured: false
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("changed devoured state to", burgerEat);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    // Adding an event listener for the delete button
    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
      
    // Adding an event listener to add a new burger when the submit button is pressed
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        let newBurger = {
          burger_name: $("#burgerName").val().trim(),
          devoured: $("[name=devoured]:checked").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

});