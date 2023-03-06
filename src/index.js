
console.log('%c HI', 'color: firebrick')



function init (){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dropDown = document.getElementById("breed-dropdown");

    dropDown.addEventListener('change', (e) => {
        const uL = document.getElementById('dog-breeds');
        const filterValue = e.target.value

        fetch(breedUrl)
        .then((resp) => resp.json())
        .then((dogs) =>  {
            dogs = dogs.message; 
            uL.textContent = " "
           
            for (const breed in dogs){
                
                console.log(breed.charAt(0))
                if(breed.charAt(0) === filterValue){
                renderDog(breed, dogs)
                // if (dog.message[dog].length > 0){
                // console.log(dog.message[dog]);
                 }
            }
                
            } 
        )
        //filterBreeds(filterValue)
    })
    

  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((dogs) =>  {
        dogs = dogs.message; 
       
        for (const breed in dogs){

            //console.log(breed[dog])

            renderDog(breed, dogs)
            // if (dog.message[dog].length > 0){
            // console.log(dog.message[dog]);
            // }
            
        } 
    });


    
}

function renderDog(breed, dogs, filterValue){
    const dogBreeds = document.getElementById('dog-breeds');
    const dogLi = document.createElement('li');
    const dogImg = document.createElement("img");

    dogLi.innerText  = breed;
    if(dogs[breed].length > 0 ){
        const breedUl = document.createElement('ul');
        for(const subBreed of dogs[breed]){
            const breedLi = document.createElement('li');
            breedLi.innerText = subBreed;
            breedUl.appendChild(breedLi);

        }
        dogLi.appendChild(breedUl);
    } 
    // dogLi.append(dogImg)
     dogBreeds.append(dogLi);

     dogLi.addEventListener('click', ()=>{

        dogLi.style.color = "blue"
     })

    //console.log(dog)
}


function filterBreeds(filterValue){
    const dogBreeds = document.getElementById('dog-breeds');

    for(let i = 0; i < dogBreeds.childElementCount; i++){

        let test =  dogBreeds.children[i].innerText.charAt(0);
    

        console.log(dogBreeds.children[i]);

        if( test === filterValue){
            console.log("hey")
            dogBreeds.children[i].remove();
        }
    }

}



document.addEventListener("DOMContentLoaded", init)