# Fox Lazy-loading
---
Hi! The main purpose of this project was to practice my skills in DOM manipulation with pure Javascript.
Let me explain the features.
![The Metamask Fox](./Fox.png)

### The UI
The user interface is very simple, as you can see. Besides the introduction text, there are two buttons placed just in the center of the screen. When you click on any button, there is a quick effect in the position and colors of the button to give the sensation of it being pressed.


Finally, there is a Grid container with a specified gap that is useful to place every picture added by the user in an automatically generated cell. Every picture has a gray background while loading as a signal of "something comes here" if the loading process is too slow.

### The Functionality

- The add button fires a function called **addImage**. This function calls another function that creates a Image node and then adds it to the DOM.

- Inside the **createImage** function, a **randomInteger** function is called to generate a random number between 1 and 123 that is the maximum number of foxes found in  [www.randomfox.ca](www.randomfox.ca). Then the image URL generated is saved in a custom atribute **"data-src"**.

- The addImage function also calls an Observer object created with the **Intersection Observer Web API**.

- The observer is programed to fire the loadImage function **only if** the element can be seen on the screen.

- The **loadImage function** takes the URL saved in the atribute data-src and paste it on the src atribute which allows the image to load and be visible to the user.

- Finally, some counter variables have been set in a global scope. This variables are print thanks to a **printCounters function** executed on every add and every load of an image.