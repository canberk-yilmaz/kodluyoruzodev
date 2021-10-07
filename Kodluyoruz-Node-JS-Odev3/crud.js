//Importing fs

const fs = require('fs');

//Creating File

fs.appendFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
    if(err) console.error(err);
    console.log('Saved');
});

//Reading File

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

// //Updating File

fs.appendFile('employees.json', ',{"name": "Employee 2 Name", "salary": 2500}', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

// //Deleting File
fs.unlink('employees.json', (err) => {
    console.error(err);
    console.log('File Delete')
});

//Renaming File

fs.rename('employees.json', 'employees2.json', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });