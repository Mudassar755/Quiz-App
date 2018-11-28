window.onload = function () {
    application.init();
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

    ],

    // onAnswerSelected(event) {
    //     let answer = event.target.innerText;

    //     let selectedAns = application.data[application.currentQuestion].correct;

    //     if (application.data[application.currentQuestion].correct == answer) {

    //         application.score += application.data[application.currentQuestion].score;

    //         score.innerText = application.score;



    //         application.currentQuestion++;

    //         if (application.currentQuestion >= application.data.length) {
    //             application.checkResult();

    //             // alert('Congratulation ! Yor Score is :' + application.score);


    //         }
    //         else {
    //             application.setQuestion(application.data[application.currentQuestion]);
    //         }
    //     }

    //     else {
    //         // alert('Allah Hafiz');
        // }

    // },

    init() {
        let currentQuestion = this.data[this.currentQuestion];
        this.setQuestion(currentQuestion);

    },
    setQuestion: function (question) {
        quizQuestions.innerText = question.question;
        quesNo.innerText = "Question " + question.questionNo + " of 10";
        quizAnswer.innerHTML = '';



        question.answers.forEach((answer) => {
            let answerBox = document.createElement('div');

            let check = document.createElement('input');
             
            check.onchange = function () {
                if (this.checked) {
                    application.data[application.currentQuestion].selectedAnswer = this.value;
                }
            }
            // let option = document.createElement('p');
            // option.innerText = "a";
            check.type = 'radio';
            check.id = 'select';
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
        


        if (application.currentQuestion == application.data.length - 1) {

            // alert('Yor Score is :' + application.score);
            // application.checkResult();


        }
        else {
            application.currentQuestion++;
            application.setQuestion(application.data[application.currentQuestion]);
        }
    },

    checkResult() {
        var cAnswers = 0;
        // let correctAnswers = application.data[application.currentQuestion].correct;
        for (let i = 0; i < application.data.length; i++) {

            var selectedAnswer = application.data[i].selectedAnswer;
            // /var cQuestion = application.data[i].question;
          //  application.data[i].answers.forEach(function (answer) {

                if (selectedAnswer ==  application.data[i].correct) {
                    
                    cAnswers++
                
                }
            
          

        }

        score.innerText ="Your score is : " + cAnswers;
    },

}