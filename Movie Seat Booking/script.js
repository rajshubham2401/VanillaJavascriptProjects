const movie = document.querySelector("#select-movie");
const seat_container = document.querySelector(".seat-container");
const count = document.querySelector(".count");
const total = document.querySelector(".total");
const error_text = document.querySelector(".error-text");
let ticket_price = 0;


movie.addEventListener("change", (e) => {
    const open_seat = document.querySelectorAll(".row .seat");
    ticket_price = parseInt(movie.value);
    movie.classList.remove("error");
    error_text.classList.remove("visible");
    let total_occupied_seat = 5 + Math.floor(Math.random() * 24);
    for (let i = 0; i < total_occupied_seat; i++) {
        let seat_number = 0 + Math.floor(Math.random() * open_seat.length - 1);
        open_seat[seat_number].classList.remove("selected");
        open_seat[seat_number].classList.add("occupied");
        console.log(open_seat);
        console.log(seat_number);
    }
    updateCount();
});

seat_container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        if (movie.value == "null") {
            movie.classList.add("error");
            error_text.classList.add("visible");
        } else {
            e.target.classList.toggle("selected");
            updateCount();
        }
    }

});

function updateCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * ticket_price;
}