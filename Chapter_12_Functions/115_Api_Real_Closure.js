//Real API Closure example using setTimeout
function fetchData(url) {
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
        const data = { id: 1, name: 'Sample Data' }; // Simulated fetched data
        console.log(`Data fetched from ${url}:`, data);
    }, 2000);
}

fetchData('https://api.example.com/data');  
//Retry attempt using closure to maintain state
function createRetryFunction(url, retries) {
    let attempts = 0;   
    return function() {
        if (attempts < retries) {
            console.log(`Attempt ${attempts + 1} to fetch data from ${url}...`);
            setTimeout(() => {
                const success = Math.random() > 0.5; // Simulate success/failure
                if (success) {
                    const data = { id: 1, name: 'Sample Data' }; // Simulated fetched data
                    console.log(`Data fetched successfully from ${url}:`, data);
                }
                else {
                    console.log(`Failed to fetch data from ${url}.`);
                    attempts++;
                    retry(); // Retry fetching data
                }
            }, 1000);
        }
        else {
            console.log(`All ${retries} attempts to fetch data from ${url} have failed.`);
        }
    };
}
const retry = createRetryFunction('https://api.example.com/data', 3);
retry();

