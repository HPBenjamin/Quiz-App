let allQuestions = [
    {
        'Question': 'Wer hat HTML erfunden?',
        'answer_1': 'Robbie Williams',
        'answer_2': 'Lady Gaga',
        'answer_3': 'Tim Burners-Lee',
        'answer_4': 'Justin Bieber',
        'right_answer': 3
    },
    {
        'Question': 'Was bedeutet das HTML-Tag &lt; a &gt; ?',
        'answer_1': 'Text Fett',
        'answer_2': 'Container',
        'answer_3': 'Ein Link',
        'answer_4': 'Kursiv',
        'right_answer': 3
    },
    {
        'Question': 'Wie bindet man eine Website in eine Website ein?',
        'answer_1': '&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;',
        'answer_2': '&lt;iframe&gt;',
        'answer_3': '&lt;frame&gt;',
        'answer_4': '&lt;frameset&gt;',
        'right_answer': 2
    }
];

let right_answer;
let question_number = 0;
let progress = 0;


function nextQuestion() {
    hideElements();

    question_number = question_number + 1;
    progress = question_number * 10;
    document.getElementById('progress-bar').innerHTML = progress + '%';
    document.getElementById('progress-bar').style.width = progress + '%';
    loadQuestion();
}

function loadQuestion() {
    document.getElementById('question').innerHTML = allQuestions[question_number - 1]['Question'];
    document.getElementById('answer1').innerHTML = allQuestions[question_number - 1]['answer_1'];
    document.getElementById('answer2').innerHTML = allQuestions[question_number - 1]['answer_2'];
    document.getElementById('answer3').innerHTML = allQuestions[question_number - 1]['answer_3'];
    document.getElementById('answer4').innerHTML = allQuestions[question_number - 1]['answer_4'];
    right_answer = allQuestions[0]['right_answer'];
}


function hideElements() {
    document.getElementById('right-answer').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
}

function answer(a) {
    if (a == right_answer) {   // Right answer
        document.getElementById('wrong-answer').classList.add('d-none');
        document.getElementById('right-answer').classList.remove('d-none');
        // Show next button
        document.getElementById('next-btn').classList.remove('d-none');
    } else {
        document.getElementById('right-answer').classList.add('d-none');
        document.getElementById('wrong-answer').classList.remove('d-none');
    }
}

