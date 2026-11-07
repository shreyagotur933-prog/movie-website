
// ======================================
// CINEBOOK - MOVIE TICKET BOOKING WEBSITE
// ======================================

// Movie Data
const movies = [
    {
        id: 1,
        name: "Pushpa 2",
        category: "Action",
        language: "Telugu / Hindi",
        duration: "3h 20m",
        rating: "8.2",
        price: 180,
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600"
    },
    {
        id: 2,
        name: "Jawan",
        category: "Action",
        language: "Hindi",
        duration: "2h 49m",
        rating: "7.8",
        price: 160,
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600"
    },
    {
        id: 3,
        name: "3 Idiots",
        category: "Comedy",
        language: "Hindi",
        duration: "2h 50m",
        rating: "8.4",
        price: 150,
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600"
    },
    {
        id: 4,
        name: "Dangal",
        category: "Drama",
        language: "Hindi",
        duration: "2h 41m",
        rating: "8.3",
        price: 170,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600"
    },
    {
        id: 5,
        name: "Vikram",
        category: "Action",
        language: "Tamil",
        duration: "2h 54m",
        rating: "8.1",
        price: 190,
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600"
    },
    {
        id: 6,
        name: "Drishyam 2",
        category: "Thriller",
        language: "Hindi",
        duration: "2h 20m",
        rating: "8.0",
        price: 160,
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600"
    },
    {
        id: 7,
        name: "Zindagi Na Milegi Dobara",
        category: "Drama",
        language: "Hindi",
        duration: "2h 35m",
        rating: "8.2",
        price: 150,
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600"
    },
    {
        id: 8,
        name: "Chennai Express",
        category: "Comedy",
        language: "Hindi",
        duration: "2h 21m",
        rating: "7.0",
        price: 140,
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600"
    }
];

// Indian Food Data
const foodItems = [
    {
        id: 1,
        name: "Paneer Tikka",
        category: "North Indian",
        description: "Delicious grilled paneer with Indian spices.",
        price: 149,
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600"
    },
    {
        id: 2,
        name: "Butter Chicken",
        category: "North Indian",
        description: "Creamy tomato gravy with delicious chicken.",
        price: 249,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600"
    },
    {
        id: 3,
        name: "Veg Biryani",
        category: "North Indian",
        description: "Aromatic rice cooked with vegetables and spices.",
        price: 179,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=600"
    },
    {
        id: 4,
        name: "Masala Dosa",
        category: "South Indian",
        description: "Crispy dosa served with potato masala.",
        price: 99,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600"
    },
    {
        id: 5,
        name: "Idli Sambar",
        category: "South Indian",
        description: "Soft idlis with traditional sambar and chutney.",
        price: 79,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600"
    },
    {
        id: 6,
        name: "Medu Vada",
        category: "South Indian",
        description: "Crispy South Indian lentil fritters.",
        price: 89,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"
    },
    {
        id: 7,
        name: "Pani Puri",
        category: "Chaat",
        description: "Crispy puris filled with spicy tangy water.",
        price: 69,
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600"
    },
    {
        id: 8,
        name: "Pav Bhaji",
        category: "Chaat",
        description: "Mumbai style spicy bhaji with buttery pav.",
        price: 119,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600"
    },
    {
        id: 9,
        name: "Samosa",
        category: "Chaat",
        description: "Golden crispy potato-filled Indian snack.",
        price: 49,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600"
    },
    {
        id: 10,
        name: "Gulab Jamun",
        category: "Chaat",
        description: "Soft sweet dumplings dipped in sugar syrup.",
        price: 69,
        image: "https://images.unsplash.com/photo-1666190092159-8a2a6c9f7b0e?w=600"
    },
    {
        id: 11,
        name: "Mango Juice",
        category: "Drinks",
        description: "Refreshing chilled mango juice.",
        price: 59,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600"
    },
    {
        id: 12,
        name: "Cold Coffee",
        category: "Drinks",
        description: "Creamy chilled coffee for movie time.",
        price: 89,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600"
    }
];

// ======================================
// VARIABLES
// ======================================

let selectedCategory = "All";
let selectedFoodCategory = "All";
let selectedTime = "10:00 AM";
let selectedSeats = [];
let foodCart = [];

const movieGrid = document.getElementById("movieGrid");
const foodGrid = document.getElementById("foodGrid");
const bookingMovie = document.getElementById("bookingMovie");

// ======================================
// MOVIE DISPLAY
// ======================================

function displayMovies(movieList) {

    movieGrid.innerHTML = "";

    if (movieList.length === 0) {
        movieGrid.innerHTML = `
            <p class="no-results">No movies found. Try another search.</p>
        `;
        return;
    }

    movieList.forEach(movie => {

        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <div class="movie-image">
                <img src="${movie.image}"
                     alt="${movie.name} movie poster"
                     loading="lazy">
                <span class="movie-rating">
                    <i class="fa-solid fa-star"></i> ${movie.rating}
                </span>
            </div>

            <div class="movie-info">
                <h3>${movie.name}</h3>
                <p>${movie.category} | ${movie.language} | ${movie.duration}</p>

                <div class="movie-bottom">
                    <span class="movie-price">₹${movie.price}</span>
                    <button class="book-btn" onclick="bookMovie(${movie.id})">
                        Book Now
                    </button>
                </div>
            </div>
        `;

        movieGrid.appendChild(card);
    });
}

// Populate movie dropdown
function populateMovieDropdown() {

    bookingMovie.innerHTML = '<option value="">Choose a movie</option>';

    movies.forEach(movie => {

        const option = document.createElement("option");

        option.value = movie.id;
        option.textContent = `${movie.name} - ₹${movie.price}`;

        bookingMovie.appendChild(option);
    });
}

// Book Now button
function bookMovie(movieId) {

    bookingMovie.value = movieId;

    selectedSeats = [];

    updateSeatDisplay();
    updateBookingSummary();

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

// ======================================
// MOVIE SEARCH
// ======================================

document.getElementById("movieSearch").addEventListener("input", function () {

    const searchValue = this.value.toLowerCase();

    const filteredMovies = movies.filter(movie => {

        const matchesSearch =
            movie.name.toLowerCase().includes(searchValue) ||
            movie.category.toLowerCase().includes(searchValue) ||
            movie.language.toLowerCase().includes(searchValue);

        const matchesCategory =
            selectedCategory === "All" ||
            movie.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayMovies(filteredMovies);
});

// Movie category filter
document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click", function () {

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        selectedCategory = this.dataset.category;

        document.getElementById("movieSearch").dispatchEvent(
            new Event("input")
        );
    });
});

// ======================================
// FOOD DISPLAY
// ======================================

function displayFood(foodList) {

    foodGrid.innerHTML = "";

    if (foodList.length === 0) {
        foodGrid.innerHTML = `
            <p class="no-results">No food items found.</p>
        `;
        return;
    }

    foodList.forEach(food => {

        const card = document.createElement("div");

        card.className = "food-card";

        card.innerHTML = `
            <div class="food-image">
                <img src="${food.image}"
                     alt="${food.name}"
                     loading="lazy">

                <span class="food-category-tag">
                    ${food.category}
                </span>
            </div>

            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>

                <div class="food-bottom">
                    <span class="food-price">₹${food.price}</span>

                    <button class="add-food-btn"
                            onclick="addFood(${food.id})">
                        <i class="fa-solid fa-plus"></i> Add
                    </button>
                </div>
            </div>
        `;

        foodGrid.appendChild(card);
    });
}

// Food category filter
document.querySelectorAll(".food-filter").forEach(button => {

    button.addEventListener("click", function () {

        document.querySelectorAll(".food-filter").forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        selectedFoodCategory = this.dataset.category;

        const filteredFood = selectedFoodCategory === "All"
            ? foodItems
            : foodItems.filter(food =>
                food.category === selectedFoodCategory
            );

        displayFood(filteredFood);
    });
});

// ======================================
// FOOD CART FUNCTIONALITY
// ======================================

function addFood(foodId) {

    const food = foodItems.find(item => item.id === foodId);

    if (!food) return;

    const existingItem = foodCart.find(item => item.id === foodId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        foodCart.push({
            ...food,
            quantity: 1
        });
    }

    updateFoodCart();
}

function updateFoodCart() {

    const foodTotal = foodCart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const totalItems = foodCart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    document.getElementById("cartCount").textContent = totalItems;

    document.getElementById("foodTotal").textContent =
        `₹${foodTotal}`;

    if (foodCart.length === 0) {

        document.getElementById("foodCartText").textContent =
            "No food items added yet.";

    } else {

        const cartDescription = foodCart.map(item => {
            return `${item.name} x ${item.quantity}`;
        }).join(", ");

        document.getElementById("foodCartText").textContent =
            cartDescription;
    }

    updateBookingSummary();
}

// Go to food section from cart icon
function scrollToFood() {

    document.getElementById("food").scrollIntoView({
        behavior: "smooth"
    });
}

// ======================================
// SEAT SELECTION
// ======================================

const seatLayout = document.getElementById("seatLayout");

const rows = ["A", "B", "C", "D", "E"];

const occupiedSeats = [
    "A3", "A4", "B2", "B7",
    "C5", "C6", "D1", "D8",
    "E3", "E4"
];

function createSeats() {

    seatLayout.innerHTML = "";

    rows.forEach(row => {

        for (let i = 1; i <= 8; i++) {

            const seatNumber = row + i;

            const seat = document.createElement("button");

            seat.type = "button";
            seat.className = "seat-item";
            seat.textContent = seatNumber;

            seat.setAttribute("aria-label", `Seat ${seatNumber}`);

            if (occupiedSeats.includes(seatNumber)) {

                seat.classList.add("occupied");
                seat.disabled = true;

            } else {

                seat.addEventListener("click", function () {

                    toggleSeat(seatNumber, seat);

                });
            }

            seatLayout.appendChild(seat);
        }
    });
}

function toggleSeat(seatNumber, seatElement) {

    if (selectedSeats.includes(seatNumber)) {

        selectedSeats = selectedSeats.filter(
            seat => seat !== seatNumber
        );

        seatElement.classList.remove("selected");

    } else {

        if (selectedSeats.length >= 8) {
            alert("You can select a maximum of 8 seats.");
            return;
        }

        selectedSeats.push(seatNumber);

        seatElement.classList.add("selected");
    }

    updateBookingSummary();
}

// Reset seats when selecting a different movie
bookingMovie.addEventListener("change", function () {

    selectedSeats = [];

    updateSeatDisplay();
    updateBookingSummary();
});

function updateSeatDisplay() {

    createSeats();
}

// ======================================
// SHOWTIME SELECTION
// ======================================

document.querySelectorAll(".time-btn").forEach(button => {

    button.addEventListener("click", function () {

        document.querySelectorAll(".time-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        selectedTime = this.dataset.time;

        updateBookingSummary();
    });
});

// ======================================
// DATE SELECTION
// ======================================

const bookingDate = document.getElementById("bookingDate");

// Get today's date in local time
function getTodayDate() {

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

bookingDate.min = getTodayDate();
bookingDate.value = getTodayDate();

bookingDate.addEventListener("change", updateBookingSummary);

// ======================================
// BOOKING SUMMARY
// ======================================

function updateBookingSummary() {

    const selectedMovie = movies.find(
        movie => movie.id === Number(bookingMovie.value)
    );

    const moviePrice = selectedMovie
        ? selectedMovie.price
        : 0;

    const ticketTotal = moviePrice * selectedSeats.length;

    const foodTotal = foodCart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const grandTotal = ticketTotal + foodTotal;

    document.getElementById("summaryMovie").textContent =
        selectedMovie ? selectedMovie.name : "Not selected";

    document.getElementById("summaryDate").textContent =
        bookingDate.value || "Not selected";

    document.getElementById("summaryTime").textContent =
        selectedTime;

    document.getElementById("summarySeats").textContent =
        selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "0";

    document.getElementById("ticketPrice").textContent =
        `₹${ticketTotal}`;

    document.getElementById("bookingTotal").textContent =
        `₹${grandTotal}`;
}

// ======================================
// CONFIRM BOOKING
// ======================================

document.getElementById("confirmBooking").addEventListener("click", function () {

    const selectedMovie = movies.find(
        movie => movie.id === Number(bookingMovie.value)
    );

    if (!selectedMovie) {
        alert("Please select a movie first!");
        bookingMovie.focus();
        return;
    }

    if (!bookingDate.value) {
        alert("Please select a booking date!");
        bookingDate.focus();
        return;
    }

    if (bookingDate.value < getTodayDate()) {
        alert("Please select today or a future date!");
        bookingDate.focus();
        return;
    }

    if (selectedSeats.length === 0) {
        alert("Please select at least one seat!");
        return;
    }

    const ticketTotal = selectedMovie.price * selectedSeats.length;

    const foodTotal = foodCart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    const grandTotal = ticketTotal + foodTotal;

    let foodDetails = "No food ordered";

    if (foodCart.length > 0) {

        foodDetails = foodCart.map(item => {
            return `${item.name} x ${item.quantity}`;
        }).join(", ");
    }

    const confirmationDetails = document.getElementById(
        "confirmationDetails"
    );

    confirmationDetails.innerHTML = `
        <p><strong>Movie:</strong> ${selectedMovie.name}</p>
        <p><strong>Date:</strong> ${bookingDate.value}</p>
        <p><strong>Showtime:</strong> ${selectedTime}</p>
        <p><strong>Seats:</strong> ${selectedSeats.join(", ")}</p>
        <p><strong>Food:</strong> ${foodDetails}</p>
        <p><strong>Ticket Amount:</strong> ₹${ticketTotal}</p>
        <p><strong>Food Amount:</strong> ₹${foodTotal}</p>
        <p><strong>Total Amount:</strong> ₹${grandTotal}</p>
        <p><strong>Booking ID:</strong> CB${Date.now().toString().slice(-8)}</p>
    `;

    document.getElementById("confirmationModal").classList.add("show");
});

// ======================================
// CLOSE CONFIRMATION MODAL
// ======================================

function closeConfirmation() {

    document.getElementById("confirmationModal").classList.remove("show");
}

document.getElementById("closeModal").addEventListener(
    "click",
    closeConfirmation
);

document.getElementById("doneButton").addEventListener(
    "click",
    closeConfirmation
);

document.getElementById("confirmationModal").addEventListener(
    "click",
    function (event) {

        if (event.target === this) {
            closeConfirmation();
        }
    }
);

// ======================================
// MOBILE NAVBAR
// ======================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        icon.classList.replace("fa-xmark", "fa-bars");
    });
});

// ======================================
// INITIALIZE WEBSITE
// ======================================

displayMovies(movies);

populateMovieDropdown();

displayFood(foodItems);

createSeats();

updateFoodCart();

updateBookingSummary();
