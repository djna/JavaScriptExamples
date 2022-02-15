
let worker = {
    first: null,
    second: null,

    doWork: async function (startWith) {
        
        let firstResult = await this.makePromise(startWith);
        this.recordFirstResult(firstResult);

        let secondResult = await this.makePromise(firstResult.value);
        this.second = secondResult;

        this.showStatus();    
    },

    recordFirstResult: function (result){
        this.first = result;
    },

    showStatus: function(){
        console.log("Status first: ", this.first, ", second: ", this.second);
    },

    makePromise: function (waitFor) {
        let thePromise = new Promise(
            (resolve, reject) => {
                if (waitFor > 500) {
                    reject("not valid");
                }

                setTimeout(
                    () => resolve({ value: waitFor * 10 })
                    , waitFor);
            }

        );
        return thePromise;
    }
}

worker.doWork(7).catch(
    (error) => console.log("doWork failed: ", error)
);

