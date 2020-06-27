function getValue(num){

var result=document.getElementById("res");
result.value+=num;

}

function cler(){
    // console.log("work "+result.value)

    var result=document.getElementById("res");
    result.value='';
    }

    function getResut(){
        var result=document.getElementById("res");
        result.value=eval(result.value);
        

    }