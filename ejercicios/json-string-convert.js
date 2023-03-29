//  THIS IS A JS OBJECT THAT CONTAINS A JSON

let infoCourse = {
    "titulo": "Learning Node.js",
    "numVistas": 987654,
    "numLikes": 123456,
    "topics": [
      "Javascript",
      "Node.js"
    ],
    "isPublic": true
}

//  Convert JSON files to string and viceversa

let infoCourseJSON = JSON.stringify(infoCourse);

console.log(typeof infoCourse);
console.log(typeof infoCourseJSON, '\n');

let infoCourseObjeto = JSON.parse(infoCourseJSON);

console.log(typeof infoCourseJSON);
console.log(typeof infoCourseObjeto);
