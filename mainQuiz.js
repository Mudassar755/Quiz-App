startQuiz = function () {
    application.init();

    var fiveMinutes = 60 * 0.5,
        display = document.querySelector('#time');
    application.startTimer(fiveMinutes, display);

    quizContainer.classList.remove('hide');
    start.classList.add('hide');


}



class Question {
    constructor(questionNo, question, answers, correct, score) {
        this.questionNo = questionNo;
        this.question = question;
        this.answers = answers;
        this.correct = correct;
        this.score = score;
    }
};

let application = {
    score: 0,
    currentQuestion: 0,
    data: [
        new Question(1, "what is capital of Pakistn?", ['Islamabad', 'karachi', 'Lahore', 'Queta'], 'Islamabad', 1),
        new Question(2, 'What is capital of Punjab?', ['Faisalabad', 'Multan', 'Lahore', 'Gujranwala'], 'Lahore', 1),
        new Question(3, 'what is capital of Sindh?', ['Peshawar', 'karachi', 'Sakkur', 'Larkana'], 'karachi', 1),
        new Question(4, 'who is prime minister of pakistan ?', ['Nawaz Shrif', 'Imran Khan', 'Asif Zrdari', 'Shahbaz Shrif'], 'Imran Khan', 1),
        new Question(5, 'Geoghrapically speaking Paksistan is located in?', ['South East', 'South Asia', 'Central Asia', 'Middle East'], 'South Asia', 1),
        new Question(6, 'pakistan shares a border with china whose leng?th is?', ['485 Kms', '585 Kms', '685 kms', '785 Kms'], '585 Kms', 1),
        new Question(7, 'In terms of area the smallest provience is?', ['Sindh', 'KPK', 'Punjab', 'Balochistan'], 'KPK', 1),
        new Question(8, 'The soap was made by ---- first of all?', ['Hazrat Ishaq (AS)', 'Hazrat Yusha (AS)', 'Hazrat Younas (AS)', 'Hazrat Salih (AS)'], 'Hazrat Salih (AS)', 1),
        new Question(9, 'There are ---- countries in the world?', ['193', '182', '186', '196'], '193', 1),
        new Question(10, 'The currency of turkey is ?', ['Pound', 'Peso', 'Markka', 'Lira'], 'Lira', 1),



    ],


    init() {


        this.data = this.data.sort(function (p, n) {
            return Math.random() - 0.5;
        });
        let currentQuestion = this.data[this.currentQuestion];
        this.setQuestion(currentQuestion);



        // application.currentQuestion

    },
    setQuestion: function (question) {

        quizQuestions.innerText = question.question;
        quesNo.innerText = "Question " + (this.currentQuestion + 1) + " of " + application.data.length;
        // quesNo.innerText = "Question " + question.questionNo + " of " + application.data.length;

        quizAnswer.innerHTML = '';



        question.answers.forEach((answer, index) => {
            let answerBox = document.createElement('label');

            let check = document.createElement('input');
            let elementId = 'select_' + index;
            answerBox.setAttribute('for', elementId);

            check.onchange = function () {

                document.querySelector('button.disable').classList.remove('disable');

                if (this.checked) {
                    application.data[application.currentQuestion].selectedAnswer = this.value;
                }
            }


            check.type = 'radio';
            check.id = elementId;
            check.value = answer;
            answerBox.className = 'answer-box';
            check.name = 'answer';

            // span.onclick = application.onAnswerSelected;
            answerBox.innerText = answer;
            quizAnswer.appendChild(answerBox);
            // check.appendChild(option);
            answerBox.appendChild(check);




        });


    },

    nextQuestion() {

        nextButton.classList.add('disable');
        if (application.currentQuestion == application.data.length - 1) {
            // document.getElementById('submitButton').classList.remove('hide');
            document.getElementById('submitButton').style.visibility = 'visible';
            




        }

        if (document.querySelectorAll('input:checked').length) {


            application.currentQuestion++;
            application.setQuestion(application.data[application.currentQuestion]);
            // document.getElementById('nextButton').classList.remove('disable');
        }
        else {
            alert('please select one');


        }
    },

    checkResult() {
        var cAnswers = 0;
        var wrongAnswers = 0;


        for (let i = 0; i < application.data.length; i++) {

            var selectedAnswer = application.data[i].selectedAnswer;


            if (selectedAnswer == application.data[i].correct) {

                cAnswers++

            }
            else if (selectedAnswer !== application.data[i].correct) {

                wrongAnswers++
            }



        }
        resultNotify.classList.add('hide');
        quizContainer.classList.add('hide');

        let resultPersentage = (cAnswers / application.data.length) * 100;

        document.getElementById('score').style.backgroundColor = 'rgb(134, 109, 38)';

        right.innerText = "Correct answers : " + cAnswers;
        wrong.innerText = 'Wrong answers :' + wrongAnswers;

        rPercent.innerText = resultPersentage + ' %';

        if (resultPersentage >= 70) {
            percentage.innerText = 'You are Passed !';

        }
        else {
            percentage.innerText = 'You are Failed';
        }

        percentage.classList.remove('hide');
        rPercent.classList.remove('hide');
    },

    startTimer(duration, display) {
        this.timer = duration;
        var minutes, seconds;

        var clear = setInterval(() => {

            minutes = parseInt(this.timer / 60, 10)
            seconds = parseInt(this.timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (this.timer-- == 0) {

                clearInterval(clear); //it is builtin function

                timeCounter.classList.add('hide');
                quizContainer.classList.add('hide');
                resultNotify.classList.remove('hide');
                // this.checkResult()


            }
        }, 1000);
    }
}
