# JAVASCRIPT NETWORK
## Manipulating JSON Data

JSON (JavaScript Object Notation) is a popular data format for storing and exchanging data between a server and a client, or between different parts of an application. Here's a brief guide on how to manipulate JSON data in JavaScript.

## How to Manipulate JSON Data

### 1. Parsing JSON

To work with JSON data in JavaScript, you first need to parse it into a JavaScript object using `JSON.parse()`. For example:

```javascript
const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: "John"
```

### 2. Modifying JSON Data

You can easily modify the properties of a JavaScript object and convert it back to a JSON string using `JSON.stringify()`. For example:

```javascript
const person = { name: "Alice", age: 25 };
person.age = 26; // Modify the age property
const jsonString = JSON.stringify(person);

console.log(jsonString); // Output: '{"name":"Alice","age":26}'
```

### 3. Adding and Removing Properties

To add or remove properties from a JSON object, simply use standard JavaScript object notation:

```javascript
const car = { make: "Toyota", model: "Camry" };

// Add a new property
car.year = 2022;

// Remove a property
delete car.model;
```

## Using `request` and `fetch` API

The `request` library is deprecated in favor of the `fetch` API, which is a modern way to make HTTP requests in JavaScript.

### How to Use `fetch` API

To use the `fetch` API to make HTTP requests, you can do the following:

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Use the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
  });
```

## Reading and Writing Files using the `fs` Module

In Node.js, you can use the built-in `fs` (File System) module to read and write files. Here's how to do it:

### Reading a File

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});
```

### Writing to a File

```javascript
const fs = require('fs');

const content = 'This is the content to write to the file.';
fs.writeFile('example.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File has been written.');
});
```

Remember to handle errors when working with file operations to ensure your code is robust and error-tolerant.