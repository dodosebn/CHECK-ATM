const cardNumCont = document.querySelector(".cardNum");
const cvvCont = document.getElementById("cvv");
const cvvInput = document.getElementById("cvv-input");
const Front = document.getElementById("Front");
const Back = document.getElementById("Back");
const ownerCont = document.getElementById("owner");
const ownerInput = document.getElementById("owner-input");
const inp = [...document.querySelectorAll(".inp")];
const numInput = [...document.querySelectorAll("#num-input")];
const numInput1 = document.querySelector(".num-input1");
const numInput2 = document.querySelector(".num-input2");
const numInput3 = document.querySelector(".num-input3");
const numInput4 = document.querySelector(".num-input4");
const month = document.getElementById("month");
const year = document.getElementById("year");
const dateCont = document.getElementById("date");
const form = document.getElementById("form");
let num = 0;

window.addEventListener("load", () => {
  inp.forEach((inp) => {
    inp.value = null;
  });
});

// console.log(numInput1);

// let cvvInputValue = cvvInput.value;

function toggleCards() {
  Back.style.display = Back.style.display === "none" ? "block" : "none";
  Front.style.display = Front.style.display === "none" ? "block" : "none";
}

[2, 3, 4, 5, 6, 7];

numInput.forEach((b) => {
  // console.log(numInput[1])

  b.addEventListener("keyup", (e) => {
    //   console.log( e.target.value.length);
    // console.log(numInput[num++]);
    let numInput1Value = numInput1.value;
    let numInput2Value = numInput2.value;
    let numInput3Value = numInput3.value;
    let numInput4Value = numInput4.value;
    //   console.log(numInput1Value.length);

    cardNumCont.innerHTML =
      `${numInput1Value}` +
      "    " +
      `${numInput2Value}` +
      "   " +
      "  " +
      `${numInput3Value}` +
      "  " +
      `${numInput4Value}`;

    // console.log(numInput[num].value.length,numInput[num].maxLength);

    // console.log(numInput[num].minLength);

    // if (numInput[num].value.length == numInput[num].maxLength ) {
    //   num++
    //     numInput[num].focus()
    // }
    // if (numInput[num].value.length == numInput[num].minLength ) {
    //   num--
    //   console.log(num);
    //     numInput[num].focus()
    // }

    console.log(e.target.minLength);
    if (e.target.value.length == e.target.maxLength) {
      e.target.nextElementSibling.focus();
    }

    if (e.target.value.length == e.target.minLength) {
      e.target.previousElementSibling.focus();
    }
  });
});

ownerInput.addEventListener("keyup", () => {
  let ownerInputValue = ownerInput.value;
  ownerCont.innerHTML = ownerInputValue;
});

const dateFunc = () => {
  let monthValue = month.value;
  let yearValue = year.value;
  console.log(monthValue);
  console.log(yearValue);
  dateCont.innerHTML = `${monthValue}` + "/" + `${yearValue}`;
};

month.addEventListener("change", () => {
  dateFunc();
});
year.addEventListener("change", () => {
  dateFunc();
});

// console.log(cvvCont);
cvvInput.addEventListener("keyup", () => {
  let cvvInputValue = cvvInput.value;
  cvvCont.innerHTML = cvvInputValue;

  //   cvvCont.innerHTML =
  // `${cvvValue}`;
});

cvvInput.addEventListener("focusin", () => {
  Back.style.display = "block";
  Front.style.display = "none";
});

cvvInput.addEventListener("focusout", () => {
  Back.style.display = "none";
  Front.style.display = "block";
});

const inputValidation1 = () => {
  const ownerInputValue = ownerInput.value;
  const SharpVal1 = ownerInputValue.replace(/[^a-zA-Z]/g, "");
  ownerInput.value = SharpVal1;
  ownerCont.textContent = SharpVal1;

  if (ownerInputValue !== SharpVal1) {
    ownerInput.style.outline = "2px solid red";
    ownerCont.textContent = "It should only contain alphabets";
  } else {
    ownerInput.style.outline = "none";
  }
};
const outlineOut = () => {
  ownerInput.style.outline = "none";
};
ownerInput.addEventListener("input", inputValidation1);
ownerInput.addEventListener("focusout", outlineOut);

const inputValidation2 = () => {
  const numInput1Value = numInput1.value.replace(/\D/g, "");
  const numInput2Value = numInput2.value.replace(/\D/g, "");
  const numInput3Value = numInput3.value.replace(/\D/g, "");
  const numInput4Value = numInput4.value.replace(/\D/g, "");

  numInput1.value = numInput1Value;
  numInput2.value = numInput2Value;
  numInput3.value = numInput3Value;
  numInput4.value = numInput4Value;

  cardNumCont.textContent =
    numInput1Value + numInput2Value + numInput3Value + numInput4Value;

  if (
    numInput1.value !== numInput1Value ||
    numInput2.value !== numInput2Value ||
    numInput3.value !== numInput3Value ||
    numInput4.value !== numInput4Value
  ) {
    numInput.style.outline = "2px solid red";
    cardNumCont.textContent = "It should only contain numbers";
  } else {
    numInput.style.outline = "none";
  }
};

numInput1.addEventListener("input", inputValidation2);
numInput2.addEventListener("input", inputValidation2);
numInput3.addEventListener("input", inputValidation2);
numInput4.addEventListener("input", inputValidation2);

const inputValidation3 = () => {
  const cvvInputValue = cvvInput.value;
  const SharpVal3 = cvvInputValue.replace(/\d+/g, "");
  cvvInput.value = SharpVal3;
  cvvCont.textContent = SharpVal3;

  if (cvvInputValue !== SharpVal3) {
    cvvInput.style.backgroundColor = "red";
    cvvCont.innerHTML = "It should only contain numbers";
  } else {
    cvvInput.style.backgroundColor = "";
    cvvCont.innerHTML = "";
  }
};

cvvCont.addEventListener("input", inputValidation3);
cvvCont.addEventListener("focusout", outlineOut);
