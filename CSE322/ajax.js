//ajax.js
function ajax(url, handler){
   // console.log("\n\nTimeline: under 1: " );
   var req = new XMLHttpRequest();
   // console.log(req);
   
   if(!req){
      alert('Browser not supported.');
      return;
   }
   
   var changeTheState = function(){
      var resp;
      if(this.readyState === XMLHttpRequest.DONE){
         // console.log("\nNow, readyState is: " + this.readyState);
         // console.log("This is the status: " + this.status);
         //console.log('Here in onreadystatechange function');
         //console.log(this.status); //if  http://, then the value for this.status = 0
         if(this.status === 200){
            // console.log("\nThis is the responseText: " + this.responseText);
            resp = this.responseText;
            // console.log("\nThis is resp: " + resp);
            handler(resp);//is this why we can use resp in index.html
         }else{
            handler('Ajax error, status: ' + this.status);
         }
      }
   };
   
   // console.log(req.onreadystatechange);
   req.onreadystatechange = changeTheState;
   // console.log(req.onreadystatechange);
   req.open('GET',url);
   req.send();
   // console.log("End of Timeline: under 1:");
   // console.log("This is the readyState: "+ this.readyState);//NOT READY
}//The goal for this is to fetch the info