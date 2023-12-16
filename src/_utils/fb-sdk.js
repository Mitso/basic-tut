export function initFB() {
    return new Promise((resolve, reject) => {
        window.fbAsyncInit = function() {
            /*
                Initialize the SDK with your app and the Graph API version for your app
                   
            */
            FB.init({
                appId   : import.meta.env.VITE_FB_APP_ID,
                xfbml   : true,
                version : 'v18.0'
            })

            // Auto authenticate with the api if already logged in with facebook
            // FB.getLoginStatus(({ authResponse }) => {
            //     if (authResponse) {
            //         accountService.apiAuthenticate(authResponse.accessToken).then(resolve);
            //     } else {
            //         resolve();
            //     }
            // });

            // If you are logged in, automatically get your name and email adress, your public profile information -->
            FB.login(function(response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ')
                    FB.api('/me', {fields: 'name, email'}, function(response) {
                        document.getElementById("profile").innerHTML = "Good to see you, " + response.name + ". i see your email address is " + response.email
                    })
                    resolve()
                } else { 
                    // If you are not logged in, the login dialog will open for you to login asking for permission to get your public profile and email -->
                    console.log('User cancelled login or did not fully authorize.')
                    reject()
                }
            })
        }
        //Automatically invoke load sdk script
        (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0]
                if (d.getElementById(id)) {return}
                js = d.createElement(s); js.id = id
                js.src = "https://connect.facebook.net/en_US/sdk.js"
                fjs.parentNode.insertBefore(js, fjs)
            }(document, 'script', 'facebook-jssdk')
        )
    })
}
