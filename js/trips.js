const trips = [
    {
      "name": "Caribbean Paradise Cruise",
      "price": "1200",
      "duration": "7 days",
      "places": "Bahamas, Jamaica, Cayman Islands",
      "image": "trip1.jpeg"
    },
    {
      "name": "Mediterranean Odyssey Cruise",
      "price": "1500",
      "duration": "10 days",
      "places": "Italy, Greece, Turkey",
      "image": "trip2.jpg"
    },
    {
      "name": "Alaskan Glacier Expedition",
      "price": "1800",
      "duration": "8 days",
      "places": "Alaska, USA",
      "image": "trip3.jpeg"

    },
    {
      "name": "Tropical Hawaii Cruise",
      "price": "1300",
      "duration": "9 days",
      "places": "Hawaii, USA",
      "image": "trip4.jpeg"

    },
    {
      "name": "Norwegian Fjords Discovery",
      "price": "1600",
      "duration": "12 days",
      "places": "Norway",
      "image": "trip5.jpg"

    },
    {
      "name": "Asian Adventure Cruise",
      "price": "1700",
      "duration": "14 days",
      "places": "Singapore, Thailand, Malaysia",
      "image": "trip6.webp"

    },
    {
      "name": "Pacific Island Getaway",
      "price": "1400",
      "duration": "11 days",
      "places": "Fiji, Tahiti, Bora Bora",
      "image": "trip7.webp"

    },
    {
      "name": "Egypt and Jordan Exploration",
      "price": "2000",
      "duration": "15 days",
      "places": "Egypt, Jordan",
      "image": "trip8.jpg"

    },
    {
      "name": "Baltic Sea Capitals Cruise",
      "price": "1750",
      "duration": "9 days",
      "places": "Sweden, Finland, Russia",
      "image": "trip9.jpg"

    },
    {
      "name": "South American Discovery",
      "price": "1900",
      "duration": "13 days",
      "places": "Brazil, Argentina, Chile",
      "image": "trip10.jpg"

    }
  ];

$("#applyFilters").click(function () {
    filterTrips();
});
  
$(document).ready(function(){
    loadTrips();
}); 

// Load and display all the trips
function loadTrips() {

for (let i = 0; i < trips.length; i++) {
    // const trip = trips[i];
    console.log(trips[i])
    // Append the trip card template and set its content
    $("#tripsContainer").append($("#tripCardTemplate").html());
  
    // Get the most recently added trip card
    let currentChild = $("#tripsContainer").children().eq(i+1);
  
    // Set the content for the trip card from the trips data
    $(currentChild).find(".card-img-top").attr('src','../assets/' + trips[i].image);
    $(currentChild).find("#nameText").text(trips[i].name);
    $(currentChild).find("#priceText").text('Price: $' + trips[i].price);
    $(currentChild).find("#durationText").text('Duration: ' + trips[i].duration);
    $(currentChild).find("#placesText").text('Places: ' + trips[i].places);

}};

function filterTrips() {
  const durationFilter = $("#durationFilter").val();
  const destinationTypeFilter = $("#destinationTypeFilter").val();
  const specialFilter = $("#specialFilter").val();

  $(".card").each(function () {
    const duration = $(this).find("#durationText").text().toLowerCase();
    const destinations = $(this).find("#placesText").text().toLowerCase();
    const special = $(this).data("special");

    let shouldShow = true;

    if (durationFilter === "short" && duration.includes("days") && !duration.includes("long")) {
      shouldShow = false;
    } else if (durationFilter === "long" && duration.includes("long")) {
      shouldShow = false;
    }

    if (destinationTypeFilter === "single" && destinations.includes(",")) {
      shouldShow = false;
    } else if (destinationTypeFilter === "multi" && !destinations.includes(",")) {
      shouldShow = false;
    }

    if (destinationTypeFilter === "round" && destinations.split(", ").length < 2) {
      shouldShow = false;
    }

    if (specialFilter === "rowboat") {
      // Assuming you have a data field named "price" in your trip data
      const price = parseInt($(this).find("#priceText").text().replace("$", ""));
      if (price > 500 || special) {
        shouldShow = false;
      }
    }

    if (shouldShow) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}
