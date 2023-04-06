const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
const mobileRegex = /^[6-9][0-9]{9}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;

const da = {
  name: "sagar golhar",
  mobile: "ygtgfy",
  email: "sagargolhar46gmail.com",
  password: "Sg133155@!"
};
const err = {
  name: "required|name",
  mobile: "required|mobile",
  email: "required|email",
  password: "required|password"
};
console.log(isValid(da,err))
function isValid(data, error) {
  const errors = {};
  for (const res in data) {
    const rules = error[res].split("|");
    for (const rule of rules) {
      if (!check(rule, data[res])) {
        if (!errors[res]) {
          errors[res] = [];
        }
        errors[res].push(`${res} validation failed`);
      }
    }
  }
  return Object.keys(errors).length === 0 ? true : errors;
}

function check(val, input) {
  switch (val) {
    case "required":
      return input.trim() !== "";

    case "name":
      return nameRegex.test(input);

    case "mobile":
      return mobileRegex.test(input);

    case "email":
      return emailRegex.test(input);

    case "password":
      return passwordRegex.test(input);
  }
}

// const submitBtn = document.getElementById("submit");
// (function () {
//     submitBtn.addEventListener('click', (event) => {
//         event.preventDefault();
//     })
// }())

