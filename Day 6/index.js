function validateForm() {
  const form = document.getElementById("myForm");
  const inputs = form.querySelectorAll("input[required]");

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
