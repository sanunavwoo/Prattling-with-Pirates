//For clicking button Events that will occur
var btn_Convert= document.querySelector("#btn-convert");
btn_Convert.addEventListener('click', clickEvent);

//Input Textarea queryselector
var input_text= document.querySelector("#txt-forEvent");

//For Output area
var output_txt= document.querySelector("#output-area");

//https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Sanu

//Pirate Api URL
var pirateAPI= "https://api.funtranslations.com/translate/pirate.json";

function clickEvent(){
    //alert('Clicked');
    try{
        var txt_value= input_text.value;
        if(txt_value=="")
        {
            alert("Please enter a valid input");
        }
        else{
            //Outputting in the output txt area
        output_txt.innerHTML= pirateTranslate(txt_value);
        }
    
    }
    catch(e){
        alert("Error fetching data from API: "+e);
    }


}

//function to fetch translated text from the minion api
function pirateTranslate(text_to_be_translated)
{
    var inputURL= pirateAPI+"?text="+text_to_be_translated;
    // output_txt.innerHTML= fetch(inputURL)
    // .then(fetchResponse=>fetchResponse.json())
    // .then(responseJson=>output_txt.innerHTML=(responseJson.contents.translated));

    output_txt.innerHTML= fetch(inputURL)
.then (function getRawResponse(res){return res.json()})
.then (function getTranslated(jsonValue){output_txt.innerHTML=(jsonValue.contents.translated)})
}
