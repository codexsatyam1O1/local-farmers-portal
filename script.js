function searchProduct() {
    var input = document.getElementById("search").value.toLowerCase();
    var cards = document.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        var name = cards[i].getAttribute("data-name");

        if (name.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function showAll() {
    var cards = document.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
    }

    document.getElementById("search").value = "";
}

function requestItem(product) {
    alert("Your request for " + product + " has been submitted! (Demo only)");
}

document.getElementById("productForm").onsubmit = function(event) {
    event.preventDefault();

    var farmer = document.getElementById("farmer").value;
    var product = document.getElementById("product").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
    var location = document.getElementById("location").value;

    var newCard = document.createElement("div");
    newCard.className = "card";
    newCard.setAttribute("data-name", product.toLowerCase());

    newCard.innerHTML =
        "<h3>" + product + "</h3>" +
        "<p>Farmer: " + farmer + "</p>" +
        "<p>Quantity: " + quantity + " kg</p>" +
        "<p>Price: Rs. " + price + "/kg</p>" +
        "<p>Location: " + location + "</p>" +
        "<p>Not Verified</p>" +
        "<button onclick=\"requestItem('" + product + "')\">" +
        "Request Product</button>";

    document.getElementById("productList").appendChild(newCard);

    alert("Product Added Successfully!");

    document.getElementById("productForm").reset();
};
