const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
let hook = document.getElementById("typing"),
text = "Our modern society, is in chaos. Who do we have to thank? Are you politically correct?",
screenText = "",
speed = 100.20;

(async function() { 
    for (let letter of text) {
        await wait(speed)
        hook.textContent += letter;
    }
    await wait(screenText.length * speed);

    for (let letter of hook.textContent) {
        await wait(speed)
        hook.textContent = hook.textContent.slice(0, hook.textContent.length - 1)
    }
})();
