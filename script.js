const promptInp = document.querySelector("#promptInput")
const charInp = document.querySelector("#CharactersInput")
const btn = document.querySelector(".btn")
const wordInp = document.querySelector("#WordsInput")
const tokenRes = document.querySelector(".token-result")
const selectModel = document.querySelector("select")
const promptError = document.querySelector("#promptError")

function CharactersEst() {

    promptInp.addEventListener("keyup", () => {
        const    prompt = promptInp.value

        if (!prompt.trim()) {
            charInp.value = 0
            wordInp.value = 0
            tokenRes.textContent = ""
            promptError.textContent = ""
            return  
            
        }

        charInp.value = prompt.length


        wordInp.value = prompt.split(" ").length



    })


}
CharactersEst()

btn.addEventListener("click", function (e) {
    e.preventDefault()
    promptError.textContent = ""
    tokenRes.textContent = ""

    if (wordInp.value > 4) {
        const model = selectModel.value

        if (model === "GPT-4") {
            tokenRes.textContent = Math.floor(wordInp.value / 0.75)
        }
        else if (model === "GPT-4 Turbo") {
            tokenRes.textContent = Math.floor(wordInp.value / 0.8)
        }
        else if (model === "Claude") {
            tokenRes.textContent = Math.floor(wordInp.value / 0.7)
        }
        else if (model === "Gemini") {
            tokenRes.textContent = Math.floor(wordInp.value / 0.65)
        }
    }
    else {
        promptError.textContent = "Please enter a prompt with more than 4 words."
    }
})

