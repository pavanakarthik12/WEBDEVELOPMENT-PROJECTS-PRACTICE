document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for contacting me!");
    document.getElementById('contact-form').reset();
});
