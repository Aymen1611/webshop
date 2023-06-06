const addToCartButtons = document.getElementsByClassName("games_button");

let cartMessage = 0;

const cartMessageValue = document.getElementsByClassName("shoppingCart__massage")[0];

const shoppingModal = document.getElementById("js--shoppingModal");

let modalIsopen = false;




let simba = 0;

let dalmatians = 0;

let lilo = 0;

let buzz = 0;

let winnie = 0;




for(let i = 0; i < addToCartButtons.length; i++){

    addToCartButtons[i].onclick = function(){

        cartMessage += 1;

        cartMessageValue.innerHTML = cartMessage;

         switch(addToCartButtons[i].dataset.product){

            case "simba":

                simba += 1;

                break;

            case "dalmatians":

                dalmatians += 1;

                break;

            case "lila":

                lilo += 1;

                break;

            case "buzz":

                buzz += 1;

                break;

            case "winnie":

                winnie += 1;

                 break;

         }




        if(modalIsopen == false){

        modalIsopen = true;

        shoppingModal.style.display= "flex";

       

        setTimeout(function(){

            shoppingModal.style.display="none";

            modalIsopen = false;

        }, 2000);

    }

    }

}




const checkoutButton = document.getElementById("js--checkoutButton");

const checkoutWindow = document.getElementById("js--checkoutWindow");

const searchBar = document.getElementById("js--searchBar");

const logo = document.getElementById("logo");

const fill = document.getElementsByClassName("fill");

let checkoutOpen = false;




checkoutButton.onclick = function(){

    if(checkoutOpen === false){

    document.querySelector("main").style.display = "none";

    searchBar.style.display ="none";

    for (let i = 0; i < fill.length; i++) {

        fill[i].style.display = "none";

      }

    checkoutWindow.style.display = "block";

    checkoutOpen = true;

    document.getElementById("js--amount-simb").innerHTML = simba + "x";

    document.getElementById("js--amount-dalmatians").innerHTML = dalmatians + "x";

    document.getElementById("js--amount-lilo").innerHTML = lilo + "x";

    document.getElementById("js--amount-buzz").innerHTML = buzz + "x";

    document.getElementById("js--amount-winnie").innerHTML = winnie + "x";




    document.getElementById("js--prijs-simb").innerHTML = "€" + simba*55;

    document.getElementById("js--prijs-dalmatians").innerHTML = "€" + dalmatians*53;

    document.getElementById("js--prijs-lilo").innerHTML = "€" + lilo*45;

    document.getElementById("js--prijs-buzz").innerHTML = "€" + buzz*44;

    document.getElementById("js--prijs-winnie").innerHTML = "€" + winnie*75.55;




    logo.innerHTML = "arrow_back";





    document.getElementsByClassName("searchBar__glass")[0].style.display = "none";




    return;

    }

        document.querySelector("main").style.display = "block";

        checkoutWindow.style.display = "none";

        checkoutOpen = false;

        logo.innerHTML = "shopping_cart";

        searchBar.style.display ="block";

        for (let i = 0; i < fill.length; i++) {

            fill[i].style.display = "block";

          }

        document.getElementsByClassName("searchBar__glass")[0].style.display = "flex";

}





const games = document.getElementsByClassName("games_game");

const glass = document.getElementById("js--searchBarGlass");




function searchGames() {

    let searchTerm = searchBar.value.toUpperCase().split(" ").join("");

    console.log(searchTerm)

    for (let i = 0; i < games.length; i++) {

        if (games[i].dataset.title.search(searchTerm) === -1) {

            games[i].style.opacity = .3;

        } else {

            games[i].style.opacity = 1;

        }

    }

}




searchBar.onkeyup = function(event) {

    if (event.keyCode === 13) {

        searchGames();

    }

}




glass.onclick = function() {

    searchGames();

}




// Maak een nieuwe IntersectionObserver-instantie aan

let observer = new IntersectionObserver(

    // De callback-functie die wordt uitgevoerd wanneer het waargenomen element intersecteert met het viewport

    function(entries) {

      // Controleer of het eerste entry intersecteert

      if (entries[0].isIntersecting === true) {

        // Als het waargenomen element intersecteert, voeg de "a-popup" klasse toe aan het eerste "main" element

        document.getElementsByTagName("main")[0].classList.add("a-popup");

       

        // Verbreek de observer omdat we geen verdere intersecties meer hoeven te volgen

        observer.disconnect();

      } else {

        // Behandel het geval wanneer het waargenomen element niet intersecteert (optioneel)

        // Je kunt hier code toevoegen om dit geval te behandelen, indien nodig

      }

    },

    {

      // Configuratieopties voor de IntersectionObserver

      threshold: 0.5, // De vereiste intersectieratio om de callback te activeren

    }

  );

 

  // Begin met het observeren van het eerste "main" element in het document

  observer.observe(document.getElementsByTagName("main")[0]);