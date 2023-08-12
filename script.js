const questions = [
    {
        question: "1+1=?",
        options: ["11", "2", "-2", "我幼稚園沒畢業"],
        answer: "2"
    },

    {
        question: "請問WC代表哪個意思?",
        options: ["哇操", "暐權", "廁所", "Wonderful Candle"],
        answer: "Wonderful Candle"
    },

    {
        question: "訓歌名字?",
        options: ["Never gonna give you up", "OAO", "現在就是永遠 OAOA", "永遠就是現在 OAOA"],
        answer: "現在就是永遠 OAOA"
    },

    {
        question: "HTML全名?",
        options: ["HyperText Markup Language", "Holy This Monkey Lifts", "Hold Thighs Most Liked", "Happy Tigers Munch Leaves"],
        answer: "HyperText Markup Language"
    },

    {
        question: "請排出火山矽肺症的英文讀法順序(1)?",
        options: ["pneumono", "ultra", "volcano", "silico"],
        answer: "pneumono"
    },

    {
        question: "請排出火山矽肺症的英文讀法順序(2)?",
        options: ["volcano", "silico", "ultra", "pneumono"],
        answer: "ultra"
    },

    {
        question: "請排出火山矽肺症的英文讀法順序(3)?",
        options: ["silico", "microscopic", "ultra", "coniosis"],
        answer: "microscopic"
    },

    {
        question: "請排出火山矽肺症的英文讀法順序(4)?",
        options: ["coniosis", "ultra", "volcano", "silico"],
        answer: "silico"
    },

    {
        question: "請排出火山矽肺症的英文讀法順序(5)?",
        options: ["pneumono", "ultra", "volcano", "silico"],
        answer: "volcano"
    },

    {
        question: "請排出火山矽肺症的英文讀法順序(6)?",
        options: ["microscopic", "ultra", "coniosis", "silico"],
        answer: "coniosis"
    },

    // 添加更多問題
];



const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const submitButton = document.getElementById("submitBtn");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion(index) {
    if (index < questions.length) {
        questionElement.textContent = questions[index].question;
        optionsElement.innerHTML = ""; // 清空選項
        for (let i = 0; i < questions[index].options.length; i++) {
            const optionLabel = document.createElement("label");
            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = "option";
            optionInput.value = questions[index].options[i];
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(" " + questions[index].options[i]));
            optionsElement.appendChild(optionLabel);
        }
    } else {
        questionElement.textContent = "遊戲結束，你超廢指數是：" + score+"/10";
        optionsElement.style.display = "none";
        submitButton.style.display = "none";
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === questions[currentQuestionIndex].answer) {
            resultElement.textContent = "回答正確！";
            score++;
        } else {
            resultElement.textContent = "錯誤，正確答案是：" + questions[currentQuestionIndex].answer;
        }
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    } else {
        resultElement.textContent = "請選擇一個答案。";
    }
}

submitButton.addEventListener("click", checkAnswer);

displayQuestion(currentQuestionIndex);