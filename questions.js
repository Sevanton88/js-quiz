/* ============================================================
   JS Quiz — Question Bank
   questions.js

   Each question object has:
     question  — the question string
     options   — array of 4 answer strings
     answer    — index (0–3) of the correct option
   ============================================================ */

const ALL_QUESTIONS = [
  {
    question: "Which keyword declares a block-scoped variable in JavaScript?",
    options: ["var", "let", "both var and let", "function"],
    answer: 1,
  },
  {
    question: "What does `const` guarantee in JavaScript?",
    options: [
      "The value can never change",
      "The binding cannot be reassigned",
      "The variable is globally scoped",
      "The variable is immutable and frozen",
    ],
    answer: 1,
  },
  {
    question: "What is the output of: `typeof null`?",
    options: ["'null'", "'undefined'", "'object'", "'boolean'"],
    answer: 2,
  },
  {
    question: "Which method selects a single DOM element by its CSS selector?",
    options: [
      "document.getElementById()",
      "document.querySelector()",
      "document.getElement()",
      "document.findElement()",
    ],
    answer: 1,
  },
  {
    question: "What does `===` check in JavaScript?",
    options: [
      "Only value equality",
      "Only type equality",
      "Value AND type equality",
      "Reference equality only",
    ],
    answer: 2,
  },
  {
    question: "Which event fires when a user clicks a button?",
    options: ["'hover'", "'keydown'", "'click'", "'press'"],
    answer: 2,
  },
  {
    question: "What is the output of: `Boolean('')`?",
    options: ["true", "false", "undefined", "null"],
    answer: 1,
  },
  {
    question: "How do you add an event listener in JavaScript?",
    options: [
      "element.on('click', fn)",
      "element.addEvent('click', fn)",
      "element.addEventListener('click', fn)",
      "element.listen('click', fn)",
    ],
    answer: 2,
  },
  {
    question: "Which array method creates a new array with filtered results?",
    options: ["array.map()", "array.find()", "array.filter()", "array.reduce()"],
    answer: 2,
  },
  {
    question: "What does `NaN` stand for?",
    options: ["Not a Node", "Not a Number", "Null and Nothing", "New and Null"],
    answer: 1,
  },
  {
    question: "How do you change the text content of a DOM element?",
    options: [
      "element.innerHTML = 'text'",
      "element.text = 'text'",
      "element.textContent = 'text'",
      "Both A and C are valid",
    ],
    answer: 3,
  },
  {
    question: "Which of the following is a falsy value in JavaScript?",
    options: ["'false'", "[]", "0", "{}"],
    answer: 2,
  },
  {
    question: "What is the scope of a variable declared with `var`?",
    options: ["Block scope", "Function scope", "Module scope", "Global only"],
    answer: 1,
  },
  {
    question: "What does `Array.isArray([1, 2, 3])` return?",
    options: ["'array'", "false", "undefined", "true"],
    answer: 3,
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.toObject()",
    ],
    answer: 1,
  },
  {
    question: "What keyword is used to stop a loop immediately?",
    options: ["stop", "exit", "break", "return"],
    answer: 2,
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A way to close the browser window",
      "A function that remembers its lexical scope",
      "A method to end a loop",
      "A CSS class toggle function",
    ],
    answer: 1,
  },
  {
    question: "How do you create a new HTML element in JavaScript?",
    options: [
      "document.newElement('div')",
      "document.makeElement('div')",
      "document.createElement('div')",
      "document.buildElement('div')",
    ],
    answer: 2,
  },
  {
    question: "Which method removes an element from the DOM?",
    options: [
      "element.delete()",
      "element.remove()",
      "element.destroy()",
      "document.removeElement(element)",
    ],
    answer: 1,
  },
  {
    question: "What does the `spread` operator (`...`) do?",
    options: [
      "Declares rest parameters only",
      "Copies and expands iterable elements",
      "Creates a new class instance",
      "Converts a string to an array",
    ],
    answer: 1,
  },
];
