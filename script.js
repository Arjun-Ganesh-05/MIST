const nameInput = document.getElementById("name");
const regInput = document.getElementById("reg");
const birthdayInput = document.getElementById("birthday");

const outName = document.getElementById("outName");
const outReg = document.getElementById("outReg");
const outBirthday = document.getElementById("outBirthday");

nameInput.addEventListener("input", () => {
  outName.textContent = nameInput.value;
});

regInput.addEventListener("input", () => {
  outReg.textContent = regInput.value;
});

birthdayInput.addEventListener("input", () => {
  const date = new Date(birthdayInput.value);
  if (!isNaN(date)) {
    const formatted = date.toLocaleDateString("en-GB");
    outBirthday.textContent = formatted;
  }
});

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const outYes = document.getElementById("outYes");
const outNo = document.getElementById("outNo");

yesBtn.addEventListener("click", () => {
  noBtn.style.display = "none";
  outNo.style.display = "none";
});

noBtn.addEventListener("click", () => {
  noBtn.style.display = "inline-block";
  outNo.style.display = "inline-block";
});
