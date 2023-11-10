// function scop
const form = document.getElementById("myForm");
const inputs = form.querySelectorAll("input[required]");


// function
function validateForm() {

  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      alert(`Please fill in the ${input.name} field.`);
    }
  });

  if (isValid) {
    form.submit();
  }
}


// closure

const internName = (name) => {

  const getName = () => {
    return name;
  }

  return getName;

}

const myName = internName("ibrahim lawal");
console.log(myName());
