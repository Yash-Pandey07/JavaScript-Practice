console.log("Starting...")

setTimeout(function cbT(){
    console.log("Timeout Callback");
},5000);

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        // console.log("Data fetched:", data);
        console.log("Callback function executed after data fetch:", data[0].title);
        // console.log("Callback function executed after data fetch:", data[0].body);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

console.log("Ending...")
