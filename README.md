# learnJS
JavaScript learning....

# Task1 - Shapes on DOM (OOP)
Create class Shape with three properties left, top and color and with method render() which will return empty string. Also create a constructor which will accept the left, top and color and save in class properties.
Create two normal classes Circle and Square. Add radius property to the Circle class and create a constructor (with 4 arguments: left, top, color and radius) which must call the parent class constructor. Add width property to Square class. Add constructor to Square class also with left, top, color and width arguments. It must call the parent constructor just like you did for Circle.
Both classes must extend the Shape class and override a render() method which must return HTML string. HTML string must be a div with corresponding, left and top coordinates, color and radius (for Circle class) or width (for Square class).
Create Board class with three properties: color, width and height and two methods: addShape(shape) which will accept a Shape instance as an argument and add it inside an internal array (You can add this internal array in Board class). Create render() method on Board class, which will iterate over added shapes and render them.
Also create a constructor for Board class which will accept color, width and height as arguments and save in class properties, width and height argument can be optional with default value of 500 and 300 respectively.

If you did everything correctly and execute the following code you should see the following pictures in your browser.

const board = new Board('cyan');
board.addShape(new Circle(100, 100, 'blue', 50));
board.addShape(new Square(200, 200, 'red', 100));
board.render();
