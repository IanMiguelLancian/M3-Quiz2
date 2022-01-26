fetch("https://api.unsplash.com/search/photos?query=philippines&client_id=2BHRf_91BeuRTt7CDCE-_eA3l95wlZLWlyog-KQ2c2Y")
    .then(
        function(response){
            console.log(response);
            
            if(response.status !== 200){
                console.log("There was a problem. Status code: " + response.status);
                return;
            }

            response.json().then( 
                function(data){
                    document.getElementById("image1").style.backgroundImage = 'url(' + data["results"][0]["urls"]["full"] +')';
                    document.getElementById("image2").style.backgroundImage = 'url(' + data["results"][1]["urls"]["full"] +')';
                    document.getElementById("image3").style.backgroundImage = 'url(' + data["results"][2]["urls"]["full"] +')';
                    document.getElementById("image4").style.backgroundImage = 'url(' + data["results"][9]["urls"]["full"] +')';
                    document.getElementById("image5").style.backgroundImage = 'url(' + data["results"][5]["urls"]["full"] +')';
                    
                }
            )
        }
    )
    .catch(
        function(err){
            console.log(err+'404');
        }
        )