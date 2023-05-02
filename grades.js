const getResult = () => {

    let grade  = Number(document.getElementById('gs').value);


        if(grade>=90 && grade<=100){
            document.getElementById('grade').innerHTML = "PASSED"
            document.getElementById('desc').innerHTML = "Outstanding";
        }
        else if(grade>=85 && grade<=89){
            document.getElementById('grade').innerHTML = "PASSED"
            document.getElementById('desc').innerHTML = "Very Satisfactory";
        }
        else if(grade>=80 && grade<=84){
            document.getElementById('grade').innerHTML = "PASSED"
            document.getElementById('desc').innerHTML = "Satisfactory";
        }
        else if(grade>=75 && grade<=79){
            document.getElementById('grade').innerHTML = "PASSED"
            document.getElementById('desc').innerHTML = "Fairly Satisfactory";
        }
        else if(grade>=0 && grade<75){
            document.getElementById('grade').innerHTML = "FAILED"
            document.getElementById('desc').innerHTML = "FAILED";
        }
        else{
            document.getElementById('grade').innerHTML = "DOES NOT EXIST"
            document.getElementById('desc').innerHTML = "DOES NOT EXIST";
        }
    }