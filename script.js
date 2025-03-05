document.getElementById("botRequestForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simulate sending the request (replace with real backend later)
    document.getElementById("confirmationMessage").style.display = "block";

    // Clear form
    setTimeout(() => {
        document.getElementById("botRequestForm").reset();
        document.getElementById("confirmationMessage").style.display = "none";
    }, 3000);
});
