var urlParams = new URLSearchParams(window.location.search);
var heading = urlParams.get("heading");
var image = urlParams.get("imageSrc");

// Modify the h1 element with the retrieved heading
document.getElementById("name").textContent = heading;
document.getElementById("photo").src = image;
