// console.log('script is working from different file')

// var username =prompt("give me username");
// alert("script works " +username);
var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverUrl = 	"https://api.funtranslations.com/translate/minion.json";


function getTranslationUrl(text){
    return serverUrl + "?" + "text=" +text
}
function errorHandler(error){
    console.log("error occured",error)
    alert("there is error try again after some time");
}


function clickEventHandlar(){
    
    var inputTxt = txtInput.value; //taking input

    // calling server for processing
    fetch(getTranslationUrl(inputTxt )).then(response => response.json()).then(json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText =translatedText;//output
     } ).catch(errorHandler)
    

}

btnTranslate.addEventListener("click",clickEventHandlar)

