const partner_section_btns = document.querySelectorAll(".partner_section_btn");
const partners_div = document.getElementById("partners_div");
const partner_section_buttons = document.querySelectorAll(
  ".partner_section_button"
);

let partnerNumber = 3;
let autoPartnerIncrease;

// Timeout Function - Showing more partners
function timeoutFunction() {
  autoPartnerIncrease = setInterval(() => {
    partnerNumber += 3;
    getData(partnerNumber);
  }, 10000);
}

// Small dots
partner_section_buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id == 1) {
      partnerNumber = 3;
    } else if (e.target.id == 2) {
      partnerNumber = 6;
    } else if (e.target.id == 3) {
      partnerNumber = 9;
    }

    getData(partnerNumber);
    clearInterval(autoPartnerIncrease);
    timeoutFunction();
  });
});

// Next | Previous buttons
partner_section_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "prev_btn") {
      partnerNumber -= 3;
    } else if (btn.id === "next_btn") {
      partnerNumber += 3;
    }

    getData(partnerNumber);
    clearInterval(autoPartnerIncrease);
    timeoutFunction();
  });
});

// GetData Function
function getData(number) {
  fetch("./src/data/partners.json")
    .then((res) => res.json())
    .then((data) => {
      const valueData = Object.values(data);
      const maxNumber = valueData.length + 3 - (valueData.length % 3);

      if (number <= 0) {
        number = maxNumber;
        partnerNumber = maxNumber;
      } else if (number > maxNumber) {
        number = 3;
        partnerNumber = 3;
      }

      !partners_div.classList.contains("fade") &&
        partners_div.classList.add("fade");
      setTimeout(() => {
        partners_div.innerHTML = "";
        generatePartners(valueData, number);
      }, 200);
    })
    .catch((err) => console.error(err));
}

// Show data
function generatePartners(data, number) {
  partners_div.classList.contains("fade") &&
    partners_div.classList.remove("fade");
  for (let i = number - 3; i < number; i++) {
    if (data[i]) {
      partners_div.innerHTML += `<img src="${data[i].image}" alt="${data[i].name}">`;
    }
  }
}

// Call getData Function
getData(partnerNumber);
timeoutFunction();
