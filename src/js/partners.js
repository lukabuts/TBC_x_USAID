const partner_section_btns = document.querySelectorAll(".partner_section_btn");
const partners_div = document.getElementById("partners_div");
const partners_nav = document.getElementById("partners_nav");

async function partnersFunction() {
  let data;
  let partnerNumber = 3;
  let autoPartnerIncrease;

  try {
    const response = await fetch("./src/data/partners.json");

    const jsonData = await response.json();

    data = Object.values(jsonData);
    const maxNumber = data.length + 3 - (data.length % 3);
    generateDots(maxNumber);
  } catch (error) {
    console.error(error);
  }

  // Next | Previous buttons
  partner_section_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id === "prev_btn") {
        partnerNumber -= 3;
      } else if (btn.id === "next_btn") {
        partnerNumber += 3;
      }

      generatePartners(partnerNumber);
      // Clearing previous timeout
      clearInterval(autoPartnerIncrease);
      // Starting new Timeout
      timeoutFunction();
    });
  });

  // Generating Dots
  function generateDots(maxNum) {
    // Clear innerHTML
    partners_nav.innerHTML = "";

    for (let i = 1; i <= maxNum / 3; i++) {
      partners_nav.innerHTML += `<button class="partner_section_dot" id="dot-${i}"></button>`;
    }

    const partner_section_dots = document.querySelectorAll(
      ".partner_section_dot"
    );

    // Adding EventListener
    partner_section_dots.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.id.split("-")[1];
        if (partnerNumber === Number(id) * 3) return;
        partnerNumber = Number(id) * 3;

        generatePartners(partnerNumber);
        // Clearing previous timeout
        clearInterval(autoPartnerIncrease);
        // Starting new Timeout
        timeoutFunction();
      });
    });
  }

  // Show data
  function generatePartners(number) {
    !partners_div.classList.contains("fade") &&
      partners_div.classList.add("fade");

    // Fade Animation
    setTimeout(() => {
      partners_div.classList.contains("fade") &&
        partners_div.classList.remove("fade");

      // Clear Partners Div
      partners_div.innerHTML = "";

      const maxNumber = data.length + 3 - (data.length % 3);
      if (number <= 0) {
        number = maxNumber;
        partnerNumber = maxNumber;
      } else if (number > maxNumber) {
        number = 3;
        partnerNumber = 3;
      }

      for (let i = number - 3; i < number; i++) {
        if (data[i]) {
          partners_div.innerHTML += `<img src="${data[i].image}" alt="${data[i].name}">`;
        }
      }
    }, 200);
  }

  // Timeout Function - Showing more partners
  function timeoutFunction() {
    autoPartnerIncrease = setInterval(() => {
      partnerNumber += 3;
      generatePartners(partnerNumber);
    }, 10000);
  }

  generatePartners(partnerNumber);
  timeoutFunction();
}

partnersFunction();
