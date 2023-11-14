const runTimeOut = async() => {
    await doTimeout();
    console.log('Time out!');
};

const doTimeout = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    return promise;   
}

runTimeOut();