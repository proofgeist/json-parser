const returnToFM = (result) => {
  const obj =
    Array.isArray(result) || typeof result === "object"
      ? JSON.stringify(result)
      : result;
  FileMaker.PerformScript("Get Result", obj);
};
const returnToFMInScript = (result) => {
  const obj =
    Array.isArray(result) || typeof result === "object"
      ? JSON.stringify(result)
      : result;
  FileMaker.PerformScriptWithOption("Get Result In Script", obj, 5);
};

window.simpleQuery = function (json, query) {
  // alert("Simple");
  var j = JSON.parse(json);
  console.log(j);
  var result = jsonata(query).evaluate(j);
  returnToFM(result);
};
window.simpleQueryInScript = function (json, query) {
  // alert("Simple");
  var j = JSON.parse(json);
  console.log(j);
  var result = jsonata(query).evaluate(j);
  returnToFMInScript(result);
};
