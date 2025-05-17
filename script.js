const restaurantData = {
  Delhi: [
    { name: "Karim's", image: "images/karims.jpg" },
    { name: "Bukhara", image: "images/bukhara.jpg" },
    { name: "Saravana Bhavan", image: "images/saravana.jpg" }
  ],
  Mumbai: [
    { name: "Leopold Cafe", image: "images/leopold.jpg" },
    { name: "Trishna", image: "images/trishna.jpg" },
    { name: "The Bombay Canteen", image: "images/canteen.jpg" }
  ],
  Chennai: [
    { name: "Murugan Idli Shop", image: "images/murugan.jpg" },
    { name: "Annalakshmi", image: "images/annalakshmi.jpg" },
    { name: "Dakshin", image: "images/dakshin.jpg" }
  ],
  Kolkata: [
    { name: "6 Ballygunge Place", image: "images/ballygunge.jpg" },
    { name: "Peter Cat", image: "images/petercat.jpg" },
    { name: "Aaheli", image: "images/aaheli.jpg" }
  ]
};

function showRestaurants(city) {
  document.getElementById("city-container").style.display = "none";
  document.getElementById("restaurant-section").style.display = "block";
  document.getElementById("city-name").innerText = `Restaurants in ${city}`;

  const list = document.getElementById("restaurant-list");
  list.innerHTML = "";
  restaurantData[city].forEach((restaurant) => {
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.innerHTML = `
      <img src="${restaurant.image}" alt="${restaurant.name}">
      <h4>${restaurant.name}</h4>
    `;
    list.appendChild(card);
  });
}

function goBack() {
  document.getElementById("restaurant-section").style.display = "none";
  document.getElementById("city-container").style.display = "flex";
}