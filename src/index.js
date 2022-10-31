// const _ = require('lodash');

var input = [
  { text: "One", indent: 0, type: "ordered" },
  { text: "Two", indent: 0, type: "ordered" },
  { text: "Alpha", indent: 1, type: "bullet" },
  { text: "Beta", indent: 1, type: "bullet" },
  { text: "I", indent: 2, type: "ordered" },
  { text: "II", indent: 2, type: "ordered" },
  { text: "Three", indent: 0, type: "ordered" }
];

let result = "";
let idx = 0;

const dfs = (indent) => {
  if (idx >= input.length) return;

  for (; idx < input.length; idx++) {
    const { text, indent: currIndent, type } = input[idx];
    console.log("->", text, currIndent, type);
    if (currIndent > indent) {
      if (type === "ordered") {
        result += "<ol>";
        result += `<li>${text}</li>`;
        idx++;
        dfs(currIndent);
        result += "</ol>";
      } else {
        result += "<ul>";
        result += `<li>${text}</li>`;
        idx++;
        dfs(currIndent);
        result += "</ul>";
      }
    } else if (currIndent < indent) {
      return;
    } else {
      result += `<li>${text}</li>`;
    }
  }
};

const deltaToHtml = () => {
  dfs(0, 0);
  console.log(result);
};
//o/p is missing first opening tag :(

deltaToHtml();

var inputTest = [
  { text: "One", indent: 0, type: "ordered" },
  { text: "Two", indent: 0, type: "ordered" },
  { text: "Alpha", indent: 1, type: "bullet" },
  { text: "Beta", indent: 1, type: "bullet" },
  { text: "I", indent: 2, type: "ordered" },
  { text: "II", indent: 2, type: "ordered" },
  { text: "Three", indent: 0, type: "ordered" }
];

let result = "";
let idx = 0;

const dfs = (indent, input) => {
  for (; idx < input.length; idx++) {
    const { text, indent: currIndent, type } = input[idx];
    if (currIndent > indent) {
      if (type === "ordered") {
        result += "<ol>";
        result += `<li>${text}</li>`;
        idx++;
        dfs(currIndent, input);
        result += "</ol>";
      } else {
        result += "<ul>";
        result += `<li>${text}</li>`;
        idx++;
        dfs(currIndent, input);
        result += "</ul>";
      }
    } else if (currIndent < indent) {
      return;
    } else {
      result += `<li>${text}</li>`;
    }
  }
};

const deltaToHtml = (input) => {
  dfs(0, input);
  console.log(result);
  return result;
};
//o/p is missing first opening tag :(

deltaToHtml(inputTest);
