# Password-Generator
set up github inclusive of readme files, branches and issues.
created initial code for random password selector.




index html activity 4
   <div>
          <h1>Current count: <span id="count">0</span></h1>
          <div class="countainer">
         <button id="decrement">Decrement</button>
         <button id="increment">Increment</button>
          </div>
      </div>
    game.js
    var counter=0 

var decrementEl= document.querySelector("#decrement");
var incrementEl= document.querySelector("#increment")

var countEl= document.querySelector("#count")

var displayCount=function(){countEl.textContent=counter}

var increment = function(){counter=counter+1
displayCount()
}

var decrement = function(){if(counter>0){counter=counter-1
displayCount()}
}


decrementEl.addEventListener("click",decrement)
incrementEl.addEventListener("click",increment)


