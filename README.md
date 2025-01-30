What I Learned:
p5.js Basics:

Used createCanvas(windowWidth, windowHeight) to make the canvas responsive to window resizing.
Created an array of Bubble objects using a for loop.
Object-Oriented Programming (OOP):

Defined a Bubble class with properties like position, radius, and speed.
Created move() and display() methods to animate and render each bubble.
Animation Techniques:

Used random() to generate random positions and speeds for bubbles.
Managed boundary conditions (resetting bubbles when they move off-screen).
How the Code Works:
The setup() function creates a canvas and initializes 30 bubbles.
The draw() function constantly updates the canvas, moving and displaying each bubble.
The move() function updates the position of each bubble by slightly changing its x and y coordinates.
If a bubble moves off-screen, it is repositioned at the bottom with a random x position.
Problem Solving:
Issue:
Bubbles weren't resetting properly when they moved off-screen.

Solution:
Implemented a conditional check to reset the bubble’s position when it reaches the top of the canvas, ensuring continuous movement.

Further Development Ideas:
Add more interaction, such as mouse movement influencing the bubbles.
Introduce different bubble sizes or colors based on speed or position.
