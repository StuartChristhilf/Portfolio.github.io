document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        var imageUrl = card.getAttribute('data-image');
        card.style.backgroundImage = imageUrl;
    });
});
