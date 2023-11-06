

const url= `https://api.thedogapi.com/v1/breeds`;
const api_key = "live_8ulucQb78BcSrp1ulv58M4RgWPNmc139QC23hLRhNdxkO1rK5iL1CE3XRfUJBLC8 "

let storedBreeds = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
    console.log(data);
   
   //filter to only include those with an `image` object
   
  storedBreeds = data;
   
   for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
    
     
     //skip any breeds that don't have an image
     
    //use the current array index
    option.value = i;
    option.innerHTML = `${breed.name}`;
document.getElementById('breed_selector').appendChild(option);
    
    }
   //show the first breed by default
   showBreedImage(0)
})
.catch(function(error) {
   console.log(error);
});

function showBreedImage(index)
{ 
  let p = document.createElement('p')
  document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
  document.getElementById("breed_json").innerHTML= `<h1>Informacion</h1>
  <p> Temperamento: ${storedBreeds[index].temperament} </p>
 <p> Origen: ${storedBreeds[index].origin}</p>
 <p> Esperanza de vida: ${storedBreeds[index].life_span}</p>
  `
  
  
 
  // document.getElementById("breed_image").width=400;
  // document.getElementById("breed_image").height=500;
  



}