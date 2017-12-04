window.fbAsyncInit = function() {
          FB.init({
            appId      : '306726549824274',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.11'
          });
            
          FB.getLoginStatus(function(response) {
             statusChangeCallback(response);
          });  
            
        };
      
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "https://connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));
         
         
         function statusChangeCallback(response){
            if(response.status === 'connected'){
               // console.log('Logged in and authenticated');
               setElements(true);       
               testAPI();
            }else{
               // console.log('Not authenticated');
               setElements(false);
            }
         }
         
         function checkLoginState() {
            FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
            });
         }
         
         function testAPI(){
            FB.api('/me?fields=name,location', function(response){
               if(response && !response.error){
                  // console.log(response);
                  buildProfile(response);
               }
            })
         }
      
         
         function buildProfile(user){
               let length = user.location.name.length;
               let location = "";
               
               let i = 0;
               while(user.location.name[i] != ","){
                  location += user.location.name[i];
                  i++;
               }
               // console.log("This is the city: " + location);
               // console.log(user.location.name.length);
               var parent =  document.getElementById('parent');
               if(parent.childElementCount === 5){
                  document.getElementById('cityTextbox').value = location;   
               }
            
               i = 0;
               let name = "";
               while(user.name[i] != " "){
                  name += user.name[i];
                  i++;
               }
               
               document.getElementById('logout').innerHTML = name + " Logout";
               
         }
         
         function setElements(isLoggedIn){
            if(isLoggedIn){
               // console.log('HERE: True, we are logged in to Facebook');
               document.getElementById('fb-btn').style.display = 'none';
               document.getElementById('logout').style.display = 'block';
               document.getElementById('logout').style.marginTop = '-7px';
               document.getElementById('logout').style.marginLeft = '-11px';
            }else{
               document.getElementById('fb-btn').style.display = 'block';
               document.getElementById('logout').style.display = 'none';
            }
         }
         
         function logout(){
            FB.logout(function(response){
               setElements(false);
            });
         }
