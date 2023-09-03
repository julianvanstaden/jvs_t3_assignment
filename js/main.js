const trips = [
    {
      "name": "Caribbean Paradise Cruise",
      "price": "1200",
      "duration": 7,
      "places": "Bahamas, Jamaica, Cayman Islands",
      "image": "trip1.jpeg",
      "special": "Rowboat Trip",
      "roundtrip": "yes",

    },
    {
      "name": "Mediterranean Odyssey Cruise",
      "price": "1500",
      "duration": 5,
      "places": "Italy, Greece, Turkey",
      "image": "trip2.jpg",
      "roundtrip": "yes",
      

    },
    {
      "name": "Alaskan Glacier Expedition",
      "price": "1800",
      "duration": 8,
      "places": "Alaska, USA",
      "image": "trip3.jpeg",
      


    },
    {
      "name": "Tropical Hawaii Cruise",
      "price": "1300",
      "duration": 9,
      "places": "Hawaii, USA",
      "image": "trip4.jpeg",
      "roundtrip": "yes",
      



    },
    {
      "name": "Norwegian Fjords Discovery",
      "price": "1600",
      "duration": 12,
      "places": "Norway",
      "image": "trip5.jpg",
      "special": "Rowboat Trip"

    },
    {
      "name": "Asian Adventure Cruise",
      "price": "1700",
      "duration": 14,
      "places": "Singapore, Thailand, Malaysia",
      "image": "trip6.webp",
     


    },
    {
      "name": "Pacific Island Getaway",
      "price": "1400",
      "duration": 11,
      "places": "Fiji, Tahiti, Bora Bora",
      "image": "trip7.webp",
      "roundtrip": "yes",
     



    },
    {
      "name": "Egypt and Jordan Exploration",
      "price": "2000",
      "duration": 5,
      "places": "Egypt, Jordan",
      "image": "trip8.jpg",
      "special": "Rowboat Trip"


    },
    {
      "name": "Baltic Sea Capitals Cruise",
      "price": "1750",
      "duration": 9,
      "places": "Sweden, Finland, Russia",
      "image": "trip9.jpg",
     

    },
    {
      "name": "South American Discovery",
      "price": "1900",
      "duration": 13,
      "places": "Brazil, Argentina, Chile",
      "image": "trip10.jpg",
    


    }
  ];


$("#applyFilters").click(function () {
  filterTrips();
});

$(document).ready(function () {
  loadTrips();
});



// Load and display all the trips
function loadTrips() {
  for (let i = 0; i < trips.length; i++) {
    // Append the trip card template and set its content
    $("#tripsContainer").append($("#tripCardTemplate").html());

    // Get the most recently added trip card
    let currentChild = $("#tripsContainer").children().eq(i + 1);

    // Set the content for the trip card from the trips data
    $(currentChild).find(".card-img-top").attr('src', '../assets/' + trips[i].image);
    $(currentChild).find("#nameText").text('Name: ' + trips[i].name);
    $(currentChild).find("#priceText").text('Price: $' + trips[i].price);
    $(currentChild).find("#durationText").text('Duration: ' + trips[i].duration);
    $(currentChild).find("#placesText").text('Places: ' + trips[i].places);

    // Conditionally set "Special" and "Roundtrip" details
    if (trips[i].special) {
      $(currentChild).find("#specialText").text('Special: ' + trips[i].special);
    }
    if (trips[i].roundtrip) {
      $(currentChild).find("#roundtripText").text('Roundtrip: ' + trips[i].roundtrip);
    }
  }
}


function filterTrips() {
  const durationFilter = $("#durationFilter").val();
  const destinationTypeFilter = $("#destinationTypeFilter").val();
  const specialFilter = $("#specialFilter").val();

  $(".card").each(function () {
    const trip = trips[$(this).index() - 1]; // Get the corresponding trip data

    let shouldShow = true;

    if (durationFilter === "short") {
      shouldShow = trip.duration <= 5; // Check if duration is less than or equal to 5 days
    } else if (durationFilter === "long") {
      shouldShow = trip.duration > 5; // Check if duration is greater than 5 days
    }

    const destinations = trip.places.toLowerCase();

    if (destinationTypeFilter === "single" && destinations.includes(",")) {
      shouldShow = false;
    } else if (destinationTypeFilter === "multi" && !destinations.includes(",")) {
      shouldShow = false;
    }

    if (specialFilter === "rowboat" && !trip.special) {
      shouldShow = false;
    } else if (specialFilter === "roundtrip" && trip.roundtrip !== "yes") {
      shouldShow = false;
    }

    if (shouldShow) {
      $(this).show();
    } else {
      $(this).hide();
    }
  })}


  $(document).ready(function () {
    // Function to update the "Selected Trips" section
    function updateSelectedTripsUI() {
      const selectedTripsContainer = $("#selectedTrips");
      selectedTripsContainer.empty();
  
      if (selectedTrips.length === 0) {
        selectedTripsContainer.append("<p>No trips selected.</p>");
      } else {
        selectedTrips.forEach((trip, index) => {
          const tripCard = `
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">${trip.name}</h5>
                <p class="card-text">Price: $${trip.price.toFixed(2)}</p>
                <button class="btn btn-danger remove-trip-button" data-index="${index}">Remove</button>
              </div>
            </div>
          `;
          selectedTripsContainer.append(tripCard);
        });
  
        // Add event listener to "Remove" buttons
        $(".remove-trip-button").click(function () {
          const indexToRemove = $(this).data("index");
          selectedTrips.splice(indexToRemove, 1);
          updateSelectedTripsUI();
          // After removing a trip, display an alert
          alert("Trip removed. Scroll up to see your selected trips.");
        });
  
        // Update local storage
        localStorage.setItem("selectedTrips", JSON.stringify(selectedTrips));
      }
    }
  
    // Initialize selectedTrips from Local Storage
    const selectedTrips = getSelectedTripsFromStorage();
  
    // Call the function to display selected trips initially
    updateSelectedTripsUI();
  
    // Event listener for the "Add to Cart" button
    $(".add-to-cart-button").click(function () {
      const tripCard = $(this).closest(".card");
      const tripName = tripCard.find("#nameText").text().trim();
      const tripPrice = tripCard.find("#priceText").text().trim();
  
      // Create a trip object with name and price
      const trip = {
        name: tripName,
        price: parseFloat(tripPrice.replace("Price: ", "").replace("$", ""))
      };
  
      // Add the trip to the selectedTrips array
      selectedTrips.push(trip);
  
      // Update the "Selected Trips" section
      updateSelectedTripsUI();
  
      // Display an alert when a trip is added
      alert(`Trip "${trip.name}" added. Scroll up to see your selected trips.`);
    });
  
    // Event listener for the "Go to Checkout" button
    $("#goToCheckoutButton").click(function () {
      // Pass the selected trips as a query parameter in the URL
      const selectedTripsQueryParam = encodeURIComponent(JSON.stringify(selectedTrips));
      window.location.href = `checkout.html?selectedTrips=${selectedTripsQueryParam}`;
    });
  
    // Function to get the selected trips from Local Storage
    function getSelectedTripsFromStorage() {
      const storedTrips = localStorage.getItem("selectedTrips");
      return storedTrips ? JSON.parse(storedTrips) : [];
    }
  
    // Function to display the selected trips on the Checkout page
    function displaySelectedTrips() {
      const selectedTrips = getSelectedTripsFromStorage();
      const selectedTripsContainer = $("#selectedTrips");
  
      if (selectedTrips.length === 0) {
        selectedTripsContainer.append("<p>No trips selected.</p>");
      } else {
        selectedTrips.forEach((trip) => {
          const tripCard = `
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">${trip.name}</h5>
                <p class="card-text">Price: $${trip.price.toFixed(2)}</p>
              </div>
            </div>
          `;
          selectedTripsContainer.append(tripCard);
        });
      }
    }
  
    // Call the function to display selected trips when the page loads
    displaySelectedTrips();
  });

  // Event listener for the "Confirm Purchase" button
  $("#confirmPurchaseButton").click(function () {
    // Close the purchase modal
    $("#purchaseModal").modal("hide");

    // After confirming purchase, redirect to the home page
    window.location.href = "..//index.html";
});

