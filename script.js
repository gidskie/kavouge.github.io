document.addEventListener('DOMContentLoaded', function () {
    var contact = document.getElementById('scrolltocontact');

    scrollButton.addEventListener('click', function () {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var about = document.getElementById('scrolltocontact');

    scrollButton.addEventListener('click', function () {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
});

