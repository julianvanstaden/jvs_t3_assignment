// checkout.js

// Function to update the total cost in the checkout table
function updateTotalCost() {
    // Your code for updating the total cost
  }
  
  // Function to add a row to the checkout table
  function addRowToCheckoutTable(trip) {
    // Your code for adding a row to the checkout table
  }
  
  // Load the trips data and add event listeners to add trips to the checkout table
  document.addEventListener("DOMContentLoaded", () => {
    // Your code for adding trips to the checkout table and related event listeners
  
    // Add event listener to "Go to Checkout" button
    document.getElementById("goToCheckoutButton").addEventListener("click", () => {
      // Get the selected trips and navigate to the checkout page
      const selectedTrips = document.querySelectorAll("#selectedTrips .card");
      const selectedTripIndexes = Array.from(selectedTrips).map((tripCard) =>
        parseInt(tripCard.getAttribute("data-trip-index"))
      );
  
      // Redirect to the checkout page with selected trip indexes as a query parameter
      window.location.href = `checkout.html?selectedTrips=${selectedTripIndexes.join(",")}`;
    });
  });
  