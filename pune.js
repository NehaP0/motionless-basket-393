let products=document.getElementById("productsection")
let search_propname=document.getElementById("search-propname")
let Accesibility=document.querySelector("input[id=one]")
let Location=document.querySelector("input[id=two]")
let AccesibilitY=document.querySelector("input[id=three]")
let ACcesibilitY=document.querySelector("input[id=four]")
let Amenities=document.querySelector("input[id=five]")
let twothousand=document.querySelector("input[id=twothousand]")
let fourthousand=document.querySelector("input[id=fourthousand]")
let eightthuosand=document.querySelector("input[id=eightthousand]")
let eleventhuosand=document.querySelector("input[id=eleventhousand]")
let greaterthaneleven=document.querySelector("input[id=greaterthaneleven]")
let Any=document.querySelector("input[id=Any]")
let Wonderful=document.querySelector("input[id=Wonderful]")
let Very_good=document.querySelector("input[id=Very_good]")
let Good=document.querySelector("input[id=Good]")
let Sorting=document.getElementById("Sorting")

let NeededData=[]
   
    fetch("https://6399ee6316b0fdad774e78ff.mockapi.io/hotels")
    .then((fetcheddata)=>{
        return fetcheddata.json()
    }) 
    .then((actualdata)=>{
       // console.log(actualdata)
        NeededData=actualdata
        DisplayIt(actualdata)
    })
    .catch((error)=>{
        console.log(error)
    })



   


    Accesibility.addEventListener( "change", function(element) {
        if(element.target.checked) {
            itsforaaccesibility(element)  
        } 
        
    })



    Location.addEventListener( "change", function(element) {
        if(element.target.checked) {
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Location===element.target.value){
                    return true
                   // console.log("yes "+ hotel.Location)
                }
                else {
                    return false
                    //console.log("no")
                }
            })
            DisplayIt(filtered) 
        } 
        
    })


    AccesibilitY.addEventListener( "change", function(element) {
        if(element.target.checked) {
            itsforaaccesibility(element)  
        } 
        
    })


    ACcesibilitY.addEventListener( "change", function(element) {
        if(element.target.checked) {
            itsforaaccesibility(element) 
        } 
        
    })


    

    Amenities.addEventListener( "change", function(element) {
        if(element.target.checked) {
            itsforamneties(element)
        }         
    })

    function itsforamneties(data){
        let filtered = NeededData.filter((hotel)=>{
            if(hotel.Amenities===data.target.value){
                return true
                //console.log("yes "+ hotel.Location)
            }
            else {
                return false
                //console.log("no")
            }
        })
        DisplayIt(filtered) 
    }

    function itsforaaccesibility(data){
        let filtered = NeededData.filter((hotel)=>{
            if(hotel.Accesibility===data.target.value){
                return true
                //console.log("yes "+ hotel.Location)
            }
            else {
                return false
                //console.log("no")
            }
        })
        DisplayIt(filtered) 
    }
   


    twothousand.addEventListener( "change", function(element) {
        if(element.target.checked) {
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Price<2000){
                    return true
                    //console.log("yes "+ hotel.Location)
                }
                else {
                    return false
                    //console.log("no")
                }
            })
            DisplayIt(filtered) 
        } 
        
    })

    fourthousand.addEventListener( "change", function(element) {
        if(element.target.checked) {
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Price>=2000 && hotel.Price<=4000 ){
                    return true
                    //console.log("yes "+ hotel.Location)
                }
                else {
                    return false
                    //console.log("no")
                }
            })
            DisplayIt(filtered) 
        } 
        
    })

    eightthuosand.addEventListener( "change", function(element) {
        if(element.target.checked) {
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Price>4000 && hotel.Price<=8000 ){
                    return true
                    //console.log("yes "+ hotel.Location)
                }
                else {
                    return false
                    //console.log("no")
                }
            })
            DisplayIt(filtered) 
        } 
        
    })

    eleventhousand.addEventListener( "change", function(element) {
        if(element.target.checked) {
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Price>8000 && hotel.Price<=11000 ){
                    return true
                    //console.log("yes "+ hotel.Location)
                }
                else {
                    return false
                    //console.log("no")
                }
            })
            DisplayIt(filtered) 
        } 
        
    })

    greaterthaneleven.addEventListener( "change", function(element) {
        if(element.target.checked) {
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Price>11000){
                    return true
                    //console.log("yes "+ hotel.Location)
                }
                else {
                    return false
                    //console.log("no")
                }
            })
            DisplayIt(filtered) 
        } 
        
    })

    Any.addEventListener( "change", function(element) {
        if(element.target.checked) {
            DisplayIt(NeededData) 
        } 
        
    })

    Wonderful.addEventListener( "change", function(element) {
        if(element.target.checked) {
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Rating>=9){
                    return true
                    //console.log("yes "+ hotel.Location)
                }
                else {
                    return false
                    //console.log("no")
                }
            })
            DisplayIt(filtered) 
        } 
        
    })

    Very_good.addEventListener( "change", function(element) {
        if(element.target.checked) {
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Rating>=8 && hotel.Rating<9){
                    return true
                    //console.log("yes "+ hotel.Location)
                }
                else {
                    return false
                    //console.log("no")
                }
            })
            DisplayIt(filtered) 
        } 
        
    })

    Good.addEventListener( "change", function(element) {
        if(element.target.checked) {
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Rating>=7 && hotel.Rating<8){
                    return true
                    //console.log("yes "+ hotel.Location)
                }
                else {
                    return false
                    //console.log("no")
                }
            })
            DisplayIt(filtered) 
        } 
        
    })

    search_propname.addEventListener( "keypress", function(e) { 
        if (e.key === 'Enter') {       
            let filtered = NeededData.filter((hotel)=>{
                if(search_propname.value===hotel.Name) {
                    console.log(hotel.Name)
                    return true
                    //console.log("yes "+ hotel.Location)
                }
                else {
                    return false
                    //console.log("no")
                }
            })
            DisplayIt(filtered) 
        }
        
    })


    Sorting.addEventListener("change",()=>{

        if(Sorting.value==="Recommended"){            
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Rating>=9){
                    return true
                }
                else {
                    return false
                }
            })
            DisplayIt(filtered)        
        }


        else if(Sorting.value==="Price: low to high"){
            NeededData.sort((a,b)=>{
                    return a.Price-(b.Price)          
                })         
                DisplayIt(NeededData)         
        }

        else if(Sorting.value==="Price: high to low"){
            NeededData.sort((a,b)=>{
                    return b.Price-(a.Price)          
                })         
                DisplayIt(NeededData)         
        }

        else if(Sorting.value==="Guest rating + our choices"){            
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Rating>=8 && hotel.Price>4000 && hotel.Price<=8000 ){
                    return true
                }
                else {
                    return false
                }
            })
            DisplayIt(filtered)        
        }
        if(Sorting.value==="Property class"){            
            let filtered = NeededData.filter((hotel)=>{
                if(hotel.Rating>=9){
                    return true
                }
                else {
                    return false
                }
            })
            DisplayIt(filtered)        
        }
        
    })
        
      




    function DisplayIt(data){
        products.innerHTML=""
        data.forEach((element,index) => {
            let card=document.createElement("div")
            card.style.display="flex"
            card.style.border="2px dashed red"
            card.style. borderRadius= "20px";
            card.style.height="200px"
            card.style.marginTop="15px" ;
            card.style.marginBottom="15px" ;

            let leftdiv=document.createElement("div")
            leftdiv.style.border="2px dashed green"
            leftdiv.style. borderRadius= "20px";
            leftdiv.style.width="40%"

            let rightdiv=document.createElement("div")
            rightdiv.style.border="2px dashed blue"
            rightdiv.style. borderRadius= "20px";
            rightdiv.style.width="60%"
            rightdiv.style.padding="15px"

            let Image=document.createElement("img")
            Image.setAttribute("src", element.Image)
            Image.style.display="flex"
            Image.style.width="100%"
            Image.style.height="100%"
            Image.style. borderRadius= "20px";

            let Name=document.createElement("h3")
            Name.innerText=element.Name
            Name.style.textAlign="left"

            let Area=document.createElement("p")
            Area.innerText=element.Area
            Area.style.textAlign="left"
            Area.style.fontWeight="lighter" ;   

            let Amenities=document.createElement("p")
            Amenities.innerText=element.Amenities
            Amenities.style.textAlign="left"
            Amenities.style.fontWeight="lighter" ;

            let Payment_type=document.createElement("p")
            Payment_type.innerText=element.Payment_type
            Payment_type.style.textAlign="left"
            Payment_type.style.fontWeight="lighter" ;
            Payment_type.style.color="darkgreen"

            let Price=document.createElement("h2")
            Price.innerText="Rs "+element.Price
            Price.style.textAlign="right"

            let text=document.createElement("p")
            text.innerText="per night"
            text.style.textAlign="right"
            text.style.fontWeight="lighter" ;


            let divforrating=document.createElement("div")
            divforrating.style.border="2px dashed blue"
            divforrating.style.width="75%"
            divforrating.style.display="flex"

            let Rating=document.createElement("p")
            Rating.innerText=element.Rating+"/10"
            Rating.style.textAlign="left"

            let Review=document.createElement("p")
            if(element.Rating>=9){
                Review.innerText=" Wonderful "
            }
            else if(element.Rating>=8 && element.Rating<9){
                Review.innerText=" Very Good "
            }
            else {
                Review.innerText=" Good "
            }
           
            Review.style.fontWeight="lighter"


            divforrating.append(Rating,Review)
            rightdiv.append(Name,Area,Amenities,Payment_type,Price,text,divforrating)
            leftdiv.append(Image)
            card.append(leftdiv,rightdiv)
            products.append(card)
        });
    }


