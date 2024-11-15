async function checkExamResults() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const passed = Math.random() > 0.5;
            if (passed) {
                resolve("Congratulations, you passed!");
            } else {
                reject("Sorry, you didn’t pass this time.");
            }
        }, 2000);
    });
}

async function getExamResults() {
    try {
        const result = await checkExamResults();
        console.log(result); // Success
    } catch (error) {
        console.error(error); // Error
    }
}

getExamResults();	