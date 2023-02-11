function validateEmail(emailAddress: string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailAddress);
}

function validate() {
    const emailValue: string = (<HTMLInputElement>document.getElementById("entry.1917220112")).value;
    if (emailValue == null) {
        alert('Please provide a valid email address.');
        return false;
    } else {
        if (validateEmail(emailValue)) {
            return true;
        } else {
            return false;
        }
    }
}

$('#validate').on('click', validate);

if (validate()) {
    $('#gform').on('submit', () => {
        $('#gform *').fadeOut(0);
        $('#gform').prepend('Thank you! We will notify you with product updates!');
    }); 
}
