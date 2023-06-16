document.querySelector("h1").onmouseover = e => {
    e.target.innerText = e.target.innerText.split("").map(l => letters[Math.round(Math.random(26)) * 26])
}