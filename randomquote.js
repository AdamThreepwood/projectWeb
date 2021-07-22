    function getQuote(){

      var ajaxRequest = new XMLHttpRequest();
      ajaxRequest.onreadystatechange = function(){

        if(ajaxRequest.readyState == 4){
          //the request is completed, now check its status
          if(ajaxRequest.status == 200){
         
            var messagesArray = JSON.parse(ajaxRequest.responseText);

           
            var randomIndex = Math.floor(Math.random()*messagesArray.length);
            var messageObj = messagesArray[randomIndex];

          
            var quoteDiv = document.getElementById("quote");
            quoteDiv.innerHTML = '"' + messageObj.title + ". " + messageObj.tagline + '"';
          }
          else{
            console.log("Status error: " + ajaxRequest.status);
          }
        }
        else{
          console.log("Ignored readyState: " + ajaxRequest.readyState);
        }
      }
      ajaxRequest.open('GET', "https://happycoding.io/api/site.json");
      ajaxRequest.send();
    }
	