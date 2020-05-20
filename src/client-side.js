// TODO: Function to fetch explanation
// TODO: Hover popovers
// TODO: Customizeable popovers


function addListeners() {
  document.querySelectorAll(".codexplain span").forEach((s) => {
    s.addEventListener("mouseOver", (e) => console.log(e.target));
  });
}

async function fetchExplanation(code, language) {
  const explanation = await fetch("/explain", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({language: language, code: code})
  });
  return explanation.json();
  // console.log(explanation.json());
  // return JSON.parse(explanation.body)
}