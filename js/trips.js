[
    {
      "name": "Caribbean Paradise Cruise",
      "price": 1200,
      "duration": "7 days",
      "places": "Bahamas, Jamaica, Cayman Islands",
      "image": "<img src="" alt="">"
    },
    {
      "name": "Mediterranean Odyssey Cruise",
      "price": 1500,
      "duration": "10 days",
      "places": "Italy, Greece, Turkey"
    },
    {
      "name": "Alaskan Glacier Expedition",
      "price": 1800,
      "duration": "8 days",
      "places": "Alaska, USA"
    },
    {
      "name": "Tropical Hawaii Cruise",
      "price": 1300,
      "duration": "9 days",
      "places": "Hawaii, USA"
    },
    {
      "name": "Norwegian Fjords Discovery",
      "price": 1600,
      "duration": "12 days",
      "places": "Norway"
    },
    {
      "name": "Asian Adventure Cruise",
      "price": 1700,
      "duration": "14 days",
      "places": "Singapore, Thailand, Malaysia"
    },
    {
      "name": "Pacific Island Getaway",
      "price": 1400,
      "duration": "11 days",
      "places": "Fiji, Tahiti, Bora Bora"
    },
    {
      "name": "Egypt and Jordan Exploration",
      "price": 2000,
      "duration": "15 days",
      "places": "Egypt, Jordan"
    },
    {
      "name": "Baltic Sea Capitals Cruise",
      "price": 1750,
      "duration": "9 days",
      "places": "Sweden, Finland, Russia"
    },
    {
      "name": "South American Discovery",
      "price": 1900,
      "duration": "13 days",
      "places": "Brazil, Argentina, Chile"
    }
  ]
  
  // Function to dynamically add trip cards
  function addTripCards() {
    const tripCardsContainer = document.getElementById("tripCards");

    tripsData.forEach(trip => {
      const card = document.createElement("div");
      card.classList.add("card", "mb-3");

      card.innerHTML = `
        <img src="..." class="card-img-top" alt="Trip Image">
        <div class="card-body">
          <h5 class="card-title">${trip.name}</h5>
          <p class="card-text">Price: $${trip.price}</p>
          <p class="card-text">Duration: ${trip.duration}</p>
          <p class="card-text">Places: ${trip.places}</p>
        </div>
      `;

      tripCardsContainer.appendChild(card);
    });
  }

  // Call the function to add trip cards
  addTripCards();