document.getElementById("botRequestForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form refresh

    // Show confirmation message
    document.getElementById("confirmationMessage").classList.remove("hidden");

    // Clear form fields
    this.reset();
});
