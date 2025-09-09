// Select the button and message paragraph
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// Add click event listener
button.addEventListener("click", () => {
    message.textContent = "Hello! You clicked the button!";
    message.style.color = "darkblue";
});
