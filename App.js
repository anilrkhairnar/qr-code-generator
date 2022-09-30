const inp = document.getElementById("input");
const imgQR = document.getElementById("img");
const loader = document.getElementById("loader");
const btn = document.getElementById("submit");

const generateQR = (val) => {
  val = val.trimStart();
  if (val.length == "") {
    alert("nothig is here");
    return false;
  } else {
    // API url
    const url = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${val}`;

    // Loader Start
    imgQR.classList.toggle("hidden");
    loader.classList.toggle("hidden");

    // Fetched API
    const makeQR = async () => {
      await fetch(url).then((res) => {
        imgQR.setAttribute("src", res.url);
      });

      setTimeout(() => {
        // Loader Stop
        loader.classList.toggle("hidden");
        imgQR.classList.toggle("hidden");

        // console.log(val);
        inp.value = "";
      }, 2000);
    };
    makeQR();
  }
};

// Event on Enter
inp.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    btn.click();
  }
});

// Event on click
btn.addEventListener("click", (e) => {
  e.preventDefault();
  generateQR(inp.value);
});
