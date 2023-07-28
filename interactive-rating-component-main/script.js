options = document.querySelectorAll(".option")
confirmation = document.querySelector(".confirmation")
user_rating = document.querySelector(".user-rating span")
rating_state = document.querySelector(".rating-state")
thanking_state = document.querySelector(".thanking-state")

for(let i = 0; i < options.length; i++) {
    let option = options[i]
    option.addEventListener("click", () => {
        options.forEach(element => {
            element.classList.remove("clicked")        
        })
        option.classList.add("clicked")
    })
}

confirmation.addEventListener("click", () => {
    let clicked = document.querySelector(".clicked");
    if (clicked === null) {
        alert("You have to choose a rating option before submitting!");
        return null;
    }
    user_rating.textContent = clicked.textContent;
    rating_state.setAttribute('hidden', 'hidden');
    thanking_state.style.display = 'flex';
})