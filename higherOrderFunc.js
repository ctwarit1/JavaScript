let intQues=(name)=>{
    if(name== "twarit"){
        return function(topic){
            console.log(`Hi ${name}, what is ${topic} ?`);
        }
    }
    if(name== "SB"){
        return function(topic){
            console.log(`Hi ${name}, what is ${topic} ?`);
        }
    }
    if(name== "chetna"){
        return function(topic){
            console.log(`Hi ${name}, what is ${topic} ?`);
        }
    }
    else{
        return function(){
            console.log("welcome to the page");
        }
    }

}

intQues("twarit")("Higher order func");
intQues("SB")("Array operations");
intQues("chetna")("Closures");