// event loop is the calls waiting for execution in the queue

let funcFirst = () => {
    setTimeout ( () => {
        console.log("its done")

    }, 3000);
}

let funcSecond = () => {
    console.log("Good Morning");
    funcFirst();
    console.log("Lets Start");
    
}
funcSecond();

