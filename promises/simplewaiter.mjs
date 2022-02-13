

function simplyWait(promise, context) {

    return promise.then( resolved, rejected).catch(thrown );



function resolved(data) {
    console.log(context, " resolved ", data);
    return "good data";
}

function rejected(reason) {
    console.log(context, " rejected ", reason);
    throw "reject " + reason;
}

function thrown(exception){
    console.log(context, " exception ", exception);
    //throw exception;
}

}

export { simplyWait }