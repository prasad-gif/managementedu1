/*jshint esversion: 6 */

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
      question: "A solid cube is painted red on all faces. It is then cut into 27 small cubes of equal sizes.You have to find, \n\nhow many cubes are without paint on any face?",
      choice1: "1",
      choice2: "2",
      choice3: "4",
      choice4: "6",
      answer: 1,
    },
    {
        question: "First two words are related to each other in some manner. Identify their relationship and select the word from the given choices which is related to the third word in the same manner. \n\nAsia : India :: South America :",
        choice1: "Brazil",
        choice2: "Canada",
        choice3: "Russia",
        choice4: "U.S.A",
        answer: 1,  
    },
    {
        question: "In a marathon run, Pramod ranked 5th from top and 105th from bottom. How many people were running in the marathon ?",
        choice1: "105",
        choice2: "109",
        choice3: "110",
        choice4: "111",
        answer: 2,
    },
    {
        question: "Banaras city is older than Pushkar city. Ujjain is older than Patna. Madurai is older than Ujjain. Patna is older than Pushkar and Banaras is older than Madurai. \n\nWhich is the oldest city ?",
        choice1: "Banaras",
        choice2: "Madhurai",
        choice3: "Ujjain",
        choice4: "Patna",
        answer: 1,
    },
    {
        question: "How many Y are there in the following series which are immediately preceded by X and followed by Z.\n\nXYZZXYZYXZYZXYXYZXYZYZXYZ",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 4,
    },
    {
        question: "Given below are two statements. You have to read both the statements and decide their nature of relationship. You have to assume that the information given in both the statements is true and you will not assume anything beyond the given information while deciding the answer.\n\nSTATEMENT (1): Yesterday, Rohit had taken a day off from school.\n\nSTATEMENT (2): Rohit fell ill yesterday.",
        choice1: "Statement (I) is the effect and statement (II) its immediate and principal cause.",
        choice2: "Statement (I) is the immediate and principal cause and statement (II) its effect.",
        choice3: "Statement (I) is an effect but statement (II) not its immediate and principal cause.",
        choice4: "Statement (II) is an effect but statement (I) not its immediate and principal cause.",
        answer: 1,
    },
    {
        question: "In the question there is a statement followed by two courses of action (1) and (2). Assume everything in the statement to be true, and then decide, which of the two suggested course of action logically follows.\n\nSTATEMENT: Lot of violence was witnessed on the voting day in the last elections. \n\nCOURSE OF ACTION: \n\n(1) People should avoid going to voting booths.\n\n(2) The authorities should take adequate security meaures during the elections.",
        choice1: "Only (1) follows",
        choice2: "Only (2) follows",
        choice3: "Both (1) and (2) follows",
        choice4: "Neither (1) and (2) follows",
        answer: 2,
    },
    {
        question: "Pointing to a photograph, a woman says, 'This man's son's sister is my mother-in-law'. How is the woman's husband related to the man in the photograph ?",
        choice1: "Grandson",
        choice2: "Son",
        choice3: "Son in Law",
        choice4: "Cousin",
        answer: 1,
    },
    {
        question: "In a certain code language 'JAISALMER' is coded as '1191013459'; How would 'KURUKSHETRA' be coded in that code language ?",
        choice1: "112118211119",
        choice2: "239321095291",
        choice3: "2313221215291",
        choice4: "13131212152",
        answer: 2,
    },
    {
        question: "Given below are two statements. You have to read both the statements and decide their nature of relationship. You have to assume that the information given in both the statements is true and you will not assume anything beyond the given information while deciding the answer.\n\nSTATEMENT (1): There were no books available so the students wrote their notes on plain papers.\n\nSTATEMENT (2): The students in modern schools take their notes on tablets.",
        choice1: "Statement (I) is the effect and statement (II) its immediate and principal cause.",
        choice2: "Statement (I) is an effect but statement (II) not its immediate and principal cause.",
        choice3: "Statement (II) is an effect but statement (I) not its immediate and principal cause.",
        choice4: "None of these.",
        answer: 4,
    },
    {
        question: "First two words are related to each other in some manner. Identify their relationship and select the word from the given choices which is related to the third word in the same manner.\n\nCricket : India :: Football :",
        choice1: "pakistan",
        choice2: "Brazil",
        choice3: "Srilanka",
        choice4: "Bhutan",
        answer: 2,
    },
    {
        question: "Find the missing number\n\n13, 17, 19, 23, 29, ….",
        choice1: "31",
        choice2: "37",
        choice3: "39",
        choice4: "41",
        answer: 1,
    },
    {
        question: "Eight friends A, B, C, D, E, F, G and H are sitting  around a round table facing the center. B is sitting between G and D. H is third to the left of B and second to the right of A. C is sitting between A and G and B and E are not sitting opposite to each other.\n\nWho is third to the left of F ?",
        choice1: "A",
        choice2: "E",
        choice3: "F",
        choice4: "cannot Be Determined",
        answer: 1,
    },
    {
        question: "A's mother is the only daughter of B's father. How is B's husband retaled to A?",
        choice1: "Uncle",
        choice2: "Brother",
        choice3: "Father",
        choice4: "Grandfather",
        answer: 3,
    },
    {
        question: "A woman is facing the rising sun and praying to the sun god. She takes a 360 degree circle, bows her head and starts walking in the opposite direction after finishing her prayers. Which direction is the woman walking ?",
        choice1: "East",
        choice2: "West",
        choice3: "North",
        choice4: "South",
        answer: 2,
    },
    {
        question: "From the given statements choose the appropriate conclusions given below\n\nSTATEMENTS:\n\n(A) Some cats are goats.\n(B) Some goats are wild.\n\nCONSLUSION: ( I ) Some cats are not wild.\n( II ) Some goats are not wild.",
        choice1: "Only conclusion ( I ) follows",
        choice2: "Only conclusion ( II ) follows",
        choice3: "Both  conclusions ( I ) and ( II )  follows",
        choice4: "Neither conclusion follows",
        answer: 3,
    },
    {
        question: "A girl leaves her office and walks in east direction for 1 km, she then turns right and walks 500 m and then turns left and walks another 500m before turning left. She again walks 500 m and reaches her house. In which direction is her house from office ?",
        choice1: "East",
        choice2: "West",
        choice3: "North",
        choice4: "South",
        answer: 1,
    },
    {
        question: "First two words are related to each other in some manner. Identify their relationship and select the word from the given choices which is related to the third word in the same manner\n\nRed Fort : Delhi : : Taj Mahal?",
        choice1: "Agra",
        choice2: "Kanpur",
        choice3: "Haryana",
        choice4: "Punjab",
        answer: 1,
    },
    {
        question: "Choose same relationship from given four choices as given in original pair.\n\nStairs : Lift",
        choice1: "Crane : Load",
        choice2: "Pen : Write",
        choice3: "Walk : Drive",
        choice4: "Write : Type",
        answer: 3,
    },
    {
        question: "From the given statements choose the appropriate conclusions given below\n\nSTATEMENTS: (A) Some chimps are monkeys.\n(B) All monkeys are smart.\n\nCONCLUSION: ( I ) All smart are monkeys.\n( II ) Some chimps are smart.",
        choice1: "Only conclusion ( I ) follows",
        choice2: "Only conclusion ( II ) follows",
        choice3: "Both  conclusions ( I ) and ( II )  follows",
        choice4: "Neither conclusion follows",
        answer: 2,
    },
    {
        question: "Given below are two statements. You have to read both the statements and decide their nature of relationship. You have to assume that the information given in both the statements is true and you will not assume anything beyond the given information while deciding the answer.\n\nSTATEMENT (1): The average middle class parents in our country do not wish to send their children to government schools and instead prefer private schools.\n\nSTATEMENT (2): Government school teachers get better pay package and retirement benefits compared to the teachers in most of the private schools.",
        choice1: "Statement (I) is the effect and statement (II) its immediate and principal cause.",
        choice2: "Statement (I) is the immediate and principal cause and statement (II) its effect.",
        choice3: "Statement (I) is an effect but statement (II) not its immediate and principal cause.",
        choice4: "Statement (II) is an effect but statement (I) not its immediate and principal cause.",
        answer: 3,
    },
     {
        question: "Choose same relationship from given four choices as given in original pair.\n\nBook : Read",
        choice1: "Pen : ink",
        choice2: "Eyes : Eyelids",
        choice3: "Pencil : Write",
        choice4: "Car : tyres",
        answer: 3,
    },
     {
        question: "Which numbers will be hidden if the cube is turned right twice ?",
        choice1: "4,5,6",
        choice2: "4,6,2",
        choice3: "4,6,1",
        choice4: "2,3,4",
        answer: 1,
    },
     {
        question: "In a certain code language, the value of RED = 17 and the value of YELLOW = 30, then what is the value of PINK ?",
        choice1: "12",
        choice2: "15",
        choice3: "18",
        choice4: "20",
        answer: 4,
    },
    {
        question: "A pilot is flying in his plane. He turns the plane 45 degrees to his right and then flying straight for 30 seconds turns 90 degrees to left to align his plane with the runway and then lands his plane on runway. On landing the plane was running in south direction. What was the initial direction in which the plane was headed before taking the 45 degree turn ?",
        choice1: "South-West",
        choice2: "South-East",
        choice3: "North-East",
        choice4: "North-West",
        answer: 2,
    },
    {
        question: "Murly is son of Ajit's father's sister. Pradeep is son of Reema who is mother of Vikram and Grandmother of Ajit. Pranav is father of Neha and grandfather of Murly. Reema is wife of Pranav.  How is Murly related to Reema?",
        choice1: "Grandson",
        choice2: "Son",
        choice3: "Nephew",
        choice4: "Son In Law",
        answer: 1,
    },
];

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 25;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};


getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS)  {
    localStorage.setItem('mostRecentScore', score);

    return window.location.assign('end.php');
    }

    questionCounter++;
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}';
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%';

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
      const number = choice.dataset.number;
      choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};


choices.forEach(choice => {
      choice.addEventListener('click', e=> {
        if (!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;
        
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect';

        if(classToApply === 'correct') {
          incrementScore(SCORE_POINTS);
        }
      
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
          selectedChoice.parentElement.classList.remove(classToApply);
          getNewQuestion();
        

        }, 1000);
    });
});


incrementScore = num => {
  score +=num;
  scoreText.innerText = score;
};

startGame();
