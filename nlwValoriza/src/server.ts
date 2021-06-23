import express from "express"; // @types/libary
const PORT = 3000;

// Initialize the express
const app = express();

/*
* ** Methods:
* GET => To find and get information (search for something)
* POST => To insert an information (create an information)
* PUT => Change an information (address, name, any data)
* DELETE => remove a data
* PATCH => Change a specific change (user's name only)
*/

// Create a route (first parameter is a route "/products")
// all req from the browser is by .get
app.get("/test", (req, res)=>{
    // Request => every information to inside
    // Response => all information that is  going out (to the client)
    return res.send("hello nlw")
})

// need to configure the inmsomnia for example.
app.post("/test-post", (req, res)=>{
    return res.send("Hello nlw method post")
})




// Create the server https://localhost:PORT
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))