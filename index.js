let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
document.querySelector("h1").onmouseover = e => {
    const initial_text = e.target.dataset.text.split("");
    e.target.innerText = e.target.dataset.text;
    letters = letters + initial_text.join("");
    // console.log(letters);
    let iters = 0;
    const interval = setInterval(() => {
        e.target.innerText = e.target.innerText.split("")
            .map((letter, index) => {
                if (iters >= 1 && letter === initial_text[index]) {
                    return initial_text[index]
                }
                return letters[Math.floor(Math.random() * letters.length)]
            })
            .join("");
        iters++;
        if (iters >= 30) {
            clearInterval(interval);
            e.target.innerText = e.target.dataset.text;
            // console.log("yes");
        }
        // console.log(iters);
        letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }, 30);
}