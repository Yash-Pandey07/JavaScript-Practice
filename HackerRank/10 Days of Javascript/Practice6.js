console.log("Starting...")

setTimeout(function(){
    console.log("Timeout Callback");
}
, 0);

console.log("Ending...")
// Output: Starting... Ending... Timeout Callback