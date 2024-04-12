console.log(Date());

function toTop() {
    const element = document.getElementById("main-header");
    element.scrollIntoView();
}
function faqFood() {
    const element = document.getElementById("meals");
    element.scrollIntoView();
}
function faqPackages() {
    const element = document.getElementById("all-inclusive");
    element.scrollIntoView();
}
function faqAmenities() {
    const element = document.getElementById("amenities");
    element.scrollIntoView();
}
function faqActivities() {
    const element = document.getElementById("outdoor_pool");
    element.scrollIntoView();
}
function faqPets() {
    const element = document.getElementById("pets");
    element.scrollIntoView();
}

function validateForm(event) {
    event.preventDefault();
    var arrivalDate = new Date(document.getElementById("arrival").value);
    var currentDate = new Date();
    var nights = document.getElementById("nights").value;
    var guests = document.getElementById("guests").value;
    if (arrivalDate <= currentDate || nights <= 0 || guests <= 0) {
        return false;
    } else {
        document.getElementById("submit-overlay").classList.add("show");
        document.getElementById("book-fail").classList.add("show");
        return true;
    }
}
function hideBookFail() {
    document.getElementById("book-fail").classList.remove("show");
    document.getElementById("submit-overlay").classList.remove("show");
}