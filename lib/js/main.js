// Clever...
// Here's your reward...
// secret #5 = O

// There are many ways of doing this
// Your solution may be different, and that's OK!

const articles = document.getElementsByTagName("article");

/**
 * Returns string of new position given old position and the change.
 * @param {String} oldPos old position of element 
 * @param {Number} change change in direction
 */
const getNewPosition = function(oldPos, change){
    const lengthToSlice = oldPos.length - 2; // cutting everything but the 'px'
    const stringNumber = oldPos.slice(0,lengthToSlice);
    const num = Number(stringNumber); // convert string to number
    
    const newPosition = num + change;
    return newPosition + "px";
}

/**
 * Adds my custom listener events to give element.
 * @param {HTMLElement} element element being given listener events
 */
const addMyEventsToElement = function(element){
    // trigger when mouse clicks on element
    element.addEventListener("mousedown", function(e){
        // if mouse gets off element (for whatever reason)
        // don't want "mousemove" event still firing
        // So, attach "mousemove" logic to document
        // "mouesup" should also go on document for same reason
        // "mouseup" stops everything (removing events accordingly)
        document.addEventListener("mousemove", draggingMouse);
    
        // naming callback for easy removal later
        function draggingMouse(e){
            // LEFT - X
            element.style.left  = getNewPosition( element.style.left , e.movementX/2 ); // halfing works better
    
            // TOP - Y
            element.style.top   = getNewPosition( element.style.top  , e.movementY/2 ); // halfing works better
        }
    
        document.addEventListener("mouseup",function(e){
            // removing callback
            document.removeEventListener("mousemove", draggingMouse);
        })
    });
}

// Adding events to each article
for(const article of articles){
    addMyEventsToElement(article);
}