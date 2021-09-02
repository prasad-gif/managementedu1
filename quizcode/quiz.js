/*jshint esversion: 6 */

let questions = [
  {
    id: 1,
    question: "A solid cube is painted red on all faces. It is then cut into 27 small cubes of equal sizes.You have to find, \n\nhow many cubes are without paint on any face?",
    answer: "1",
    options: [
      "1",
      "2",
      "4",
      "6"
    ]
  },
  {
    id: 2,
    question: "First two words are related to each other in some manner. Identify their relationship and select the word from the given choices which is related to the third word in the same manner. \n\nAsia : India :: South America :",
    answer: "Brazil",
    options: [
      "Brazil",
      "Canada",
      "Russia",
      "U.S.A"
    ]
  },
  {
    id: 3,
    question: "In a marathon run, Pramod ranked 5th from top and 105th from bottom. How many people were running in the marathon ?",
    answer: "109",
    options: [
      "105",
      "109",
      "110",
      "111"
    ]
  },
  {
    id: 4,
    question: "Banaras city is older than Pushkar city. Ujjain is older than Patna. Madurai is older than Ujjain. Patna is older than Pushkar and Banaras is older than Madurai. \n\nWhich is the oldest city ?",
    answer: "Banaras",
    options: [
      "Banaras",
      "Madhurai",
      "Ujjain",
      "Patna"
    ]
  },
  {
    id: 5,
    question: "How many Y are there in the following series which are immediately preceded by X and followed by Z.\n\nXYZZXYZYXZYZXYXYZXYZYZXYZ",
    answer: "4",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    id: 6,
    question: "Given below are two statements. You have to read both the statements and decide their nature of relationship. You have to assume that the information given in both the statements is true and you will not assume anything beyond the given information while deciding the answer.\n\nSTATEMENT (1): Yesterday, Rohit had taken a day off from school.\n\nSTATEMENT (2): Rohit fell ill yesterday.",
    answer: "Statement (I) is the effect and statement (II) its immediate and principal cause.",
    options: [
      "Statement (I) is the effect and statement (II) its immediate and principal cause.",
      "Statement (I) is the immediate and principal cause and statement (II) its effect.",
      "Statement (I) is an effect but statement (II) not its immediate and principal cause.",
      "Statement (II) is an effect but statement (I) not its immediate and principal cause."
    ]
  },
  {
    id: 7,
    question: "In the question there is a statement followed by two courses of action (1) and (2). Assume everything in the statement to be true, and then decide, which of the two suggested course of action logically follows.\n\nSTATEMENT: Lot of violence was witnessed on the voting day in the last elections. \n\nCOURSE OF ACTION: \n\n(1) People should avoid going to voting booths.\n\n(2) The authorities should take adequate security meaures during the elections.",
    answer: "Only (2) follows",
    options: [
      "Only (1) follows",
      "Only (2) follows",
      "Both (1) and (2) follows",
      "Neither (1) and (2) follows"
    ]
  },
  {
    id: 8,
    question: "Pointing to a photograph, a woman says, 'This man's son's sister is my mother-in-law'. How is the woman's husband related to the man in the photograph ?",
    answer: "Grandson",
    options: [
      "Grandson",
      "Son",
      "Son in Law",
      "Cousin"
    ]
  },
  {
    id: 9,
    question: "In a certain code language 'JAISALMER' is coded as '1191013459'; How would 'KURUKSHETRA' be coded in that code language ?",
    answer: "239321095291",
    options: [
      "112118211119",
      "239321095291",
      "2313221215291",
      "13131212152"
    ]
  },
  {
    id: 10,
    question: "Given below are two statements. You have to read both the statements and decide their nature of relationship. You have to assume that the information given in both the statements is true and you will not assume anything beyond the given information while deciding the answer.\n\nSTATEMENT (1): There were no books available so the students wrote their notes on plain papers.\n\nSTATEMENT (2): The students in modern schools take their notes on tablets.",
    answer: "None of these.",
    options: [
      "Statement (I) is the effect and statement (II) its immediate and principal cause.",
      "Statement (I) is an effect but statement (II) not its immediate and principal cause.",
      "Statement (II) is an effect but statement (I) not its immediate and principal cause.",
      "None of these."
    ]
  },
  {
    id: 11,
    question: "First two words are related to each other in some manner. Identify their relationship and select the word from the given choices which is related to the third word in the same manner.\n\nCricket : India :: Football :",
    answer: "Brazil",
    options: [
      "pakistan",
      "Brazil",
      "Srilanka",
      "Bhutan"
    ]
  },
  {
    id: 12,
    question: "Find the missing number\n\n13, 17, 19, 23, 29, ….",
    answer: "31",
    options: [
      "31",
      "37",
      "39",
      "41"
    ]
  },
  {
    id: 13,
    question: "Eight friends A, B, C, D, E, F, G and H are sitting  around a round table facing the center. B is sitting between G and D. H is third to the left of B and second to the right of A. C is sitting between A and G and B and E are not sitting opposite to each other.\n\nWho is third to the left of F ?",
    answer: "A",
    options: [
      "A",
      "E",
      "F",
      "cannot Be Determined"
    ]
  },
  {
    id: 14,
    question: "A's mother is the only daughter of B's father. How is B's husband retaled to A?",
    answer: "Father",
    options: [
      "Uncle",
      "Brother",
      "Father",
      "GrandFather"
    ]
  },
  {
    id: 15,
    question: "A woman is facing the rising sun and praying to the sun god. She takes a 360 degree circle, bows her head and starts walking in the opposite direction after finishing her prayers. Which direction is the woman walking ?",
    answer: "West",
    options: [
      "East",
      "West",
      "North",
      "South"
    ]
  },
  {
    id: 16,
    question: "From the given statements choose the appropriate conclusions given below\n\nSTATEMENTS:\n\n(A) Some cats are goats.\n(B) Some goats are wild.\n\nCONSLUSION: ( I ) Some cats are not wild.\n( II ) Some goats are not wild.",
    answer: "Both  conclusions ( I ) and ( II )  follows",
    options: [
      "Only conclusion ( I ) follows",
      "Only conclusion ( II ) follows",
      "Both  conclusions ( I ) and ( II )  follows",
      "Neither conclusion follows"
    ]
  },
  {
    id: 17,
    question: "A girl leaves her office and walks in east direction for 1 km, she then turns right and walks 500 m and then turns left and walks another 500m before turning left. She again walks 500 m and reaches her house. In which direction is her house from office ?",
    answer: "East",
    options: [
      "East",
      "West",
      "North",
      "South"
    ]
  },
  {
    id: 18,
    question: "First two words are related to each other in some manner. Identify their relationship and select the word from the given choices which is related to the third word in the same manner\n\nRed Fort : Delhi : : Taj Mahal?",
    answer: "Agra",
    options: [
      "Agra",
      "Kanpur",
      "Haryana",
      "Punjab"
    ]
  },
   {
    id: 19,
    question: "Choose same relationship from given four choices as given in original pair.\n\nStairs : Lift",
    answer: "Walk : Drive",
    options: [
      "Crane : Load",
      "Pen : Write",
      "Walk : Drive",
      "Write : Type"
    ]
  },
   {
    id: 20,
    question: "From the given statements choose the appropriate conclusions given below\n\nSTATEMENTS: (A) Some chimps are monkeys.\n(B) All monkeys are smart.\n\nCONCLUSION: ( I ) All smart are monkeys.\n( II ) Some chimps are smart.",
    answer: "Only conclusion ( II ) follows",
    options: [
      "Only conclusion ( I ) follows",
      "Only conclusion ( II ) follows",
      "Both  conclusions ( I ) and ( II )  follows",
      "Neither conclusion follows"
    ]
  },
   {
    id: 21,
    question: "Given below are two statements. You have to read both the statements and decide their nature of relationship. You have to assume that the information given in both the statements is true and you will not assume anything beyond the given information while deciding the answer.\n\nSTATEMENT (1): The average middle class parents in our country do not wish to send their children to government schools and instead prefer private schools.\n\nSTATEMENT (2): Government school teachers get better pay package and retirement benefits compared to the teachers in most of the private schools.",
    answer: "Statement (I) is an effect but statement (II) not its immediate and principal cause.",
    options: [
      "Statement (I) is the effect and statement (II) its immediate and principal cause.",
      "Statement (I) is the immediate and principal cause and statement (II) its effect.",
      "Statement (I) is an effect but statement (II) not its immediate and principal cause.",
      "Statement (II) is an effect but statement (I) not its immediate and principal cause."
    ]
  },
   {
    id: 22,
    question: "Choose same relationship from given four choices as given in original pair.\n\nBook : Read",
    answer: "Pencil : Write",
    options: [
      "Pen : ink",
      "Eyes : Eyelids",
      "Pencil : Write",
      "Car : tyres"
    ]
  },
  {
    id: 23,
    question: "In a certain code language, the value of RED = 17 and the value of YELLOW = 30, then what is the value of PINK ?",
    answer: "20",
    options: [
      "12",
      "15",
      "18",
      "20"
    ]
  },
  {
    id: 24,
    question: "A pilot is flying in his plane. He turns the plane 45 degrees to his right and then flying straight for 30 seconds turns 90 degrees to left to align his plane with the runway and then lands his plane on runway. On landing the plane was running in south direction. What was the initial direction in which the plane was headed before taking the 45 degree turn ?",
    answer: "South-East",
    options: [
      "South-West",
      "South-East",
      "North-East",
      "North-West"
    ]
  },
  {
    id: 25,
    question: "Murly is son of Ajit's father's sister. Pradeep is son of Reema who is mother of Vikram and Grandmother of Ajit. Pranav is father of Neha and grandfather of Murly. Reema is wife of Pranav.  How is Murly related to Reema?",
    answer: "Grandson",
    options: [
      "Grandson",
      "Son",
      "Nephew",
      "Son in law"
    ]
  },
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end1.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}