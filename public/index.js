import { callFMScript } from "fm-webviewer-fetch";

const returnToFM = (result) => {
  const obj = { result };

  callFMScript("Get Result", obj);
};
const returnToFMInScript = (result) => {
  const obj = JSON.stringify({ result });
  FileMaker.PerformScriptWithOption("Get Result In Script", obj, 5);
};

window.simpleQuery = function (json, query, option = null) {
  var j = JSON.parse(json);
  console.log(j);
  var result = jsonata(query).evaluate(j);
  returnToFM(result);
};
window.simpleQueryInScript = function (json, query) {
  var j = JSON.parse(json);
  console.log(j);
  var result = jsonata(query).evaluate(j);
  returnToFMInScript(result);
};
