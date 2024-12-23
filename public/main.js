window.onload = function() {
    console.log("Hello, World! This message is from main.js.");
};

function copyEmail() {
    // Get the email text
    var copyText = document.getElementById("emailText").innerText;
    
    // Copy the text to clipboard
    navigator.clipboard.writeText(copyText).then(function() {
        alert("Copied the text: " + copyText);
    }).catch(function(error) {
        console.error("Failed to copy text: ", error);
    });
}

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
