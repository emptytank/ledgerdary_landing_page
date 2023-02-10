function validateEmail(emailAddress) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailAddress);
}
function validate() {
    var emailValue = document.getElementById("entry.1917229112").value;
    if (!validateEmail(emailValue)) {
        document.getElementById("entry.1917229112").className += "red-border formInvalid";
        alert("Please provide a valid email address.");
        document.getElementById("entry.1917229112").removeAttribute("formInvalid");
        return false;
    }
}
$("#validate").on('click', function (event) { validate; });
$('#gform').on('submit', function (e) {
    $('#gform *').fadeOut(0);
    $('#gform').prepend('Thank you! We will notify you with product updates!');
});
