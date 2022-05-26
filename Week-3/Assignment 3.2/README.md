# pesto Week-2 Assignment-2.1
JS Assignment <br />
By Jatin Gupta

## Technologies Used
- JS

## Description
JS Question Solutions

## Details

- **BIND**:The bind() method creates a new function which binds the **THIS** keyword to the object provided
    - the JS engine is creating a new displayFoo instance and binding foo as its this variable. It is important to understand that it copies the displayFoo function.
    - After creating a copy of the displayFoo function it is able to call returnName(), although it wasn’t on the foo object initially. It will now recognizes its properties (name) and its methods.
    - We can pass parameters
    - this is permanent. We can't rebind displayFoo function<br /><br />

- **CALL**:The call() method calls a function with a given **THIS** value and arguments provided individually.
    - Accepts additional parameters as well
    - Executes the function it was called upon right away.
    - The call() method does not make a copy of the function it is being called on.<br /><br />

- **APPLY**:call() and apply() serve the exact same purpose. The only difference  
    - call() expects all parameters to be passed in individually
    - whereas apply() expects an array of all of our parameters


