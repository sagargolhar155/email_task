const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function isValid(input, field) {
    const rules = field.split('|');
    for (const rule of rules) {
      if (!check(rule, input)) {
        console.log('false')
        return false;
      }
    }
    console.log('true')
    return true;
  }

function check(val, input) {
  switch (val) {
    case 'required':
      return input.trim() !== '';

    case 'email':
      return validRegex.test(input);
  }
}


const submitBtn = document.getElementById("submit");
(function () {
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
    })
}())

