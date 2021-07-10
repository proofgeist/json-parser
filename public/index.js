import { callFMScript, callFMScriptWithOption } from "fm-webviewer-fetch";

window.simpleQuery = function (json, query) {
  const j = JSON.parse(json);
  console.log(j);
  const result = jsonata(query).evaluate(j);
  const obj = { result };
  callFMScript("Get Result", obj);
  // returnToFM(result);
};

window.simpleQueryInScript = function (json, query) {
  var j = JSON.parse(json);
  console.log(j);
  var result = jsonata(query).evaluate(j);
  const obj = JSON.stringify({ result });
  FileMaker.PerformScriptWithOption("Get Result In Script", obj, 5);
};
