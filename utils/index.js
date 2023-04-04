function isValid(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    switch (email) {
        case '':
            return false;
        default:
            if (email.match(validRegex)) {
                return true;
            }
            return false;
    }
}
const submitBtn = document.getElementById("submit");
(function () {
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
    })
}())

