/** REST APIs & HTTP Request */
/** 
 * What is an API?
 * Application Programming Interface.
 * Contract provided by one piece of software to another.
 * Structured request and response.
 * We just worked with an API that takes a request and responds with jokes.
 * 
 * What is REST APIs?
 * Representational State Transfer.
 * Architecture style for designing networked applications.
 * Relies on a stateless, client-server protocol, almost always HTTP.
 * Treats server objects as resources that can be created or destroyed.
 * Can be used by virtually any programming language.
 * All APIs have their own rules and structure.
 * 
 * HTTP Requests
 * GET : Retrieve data from a specified resource.
 * POST : Submit data to be processed to a specified resource.
 * PUT : Update a specified resource.
 * DELETE : Delete a specified resource.
 *
 * 
 * HEAD : Same as get but does not return a body.
 * OPTIONS : Returns the supported HTTP methods.
 * PATCH : Update partial resources.
*/

/** What is a callback function?*/
/**  
 * A callback is a function passed as an argument to another function. This technique allows
 * a function to call another function.
 * A callback function can run after another function has finished. 
 * 
 * 
 * 
 * Here is a quick example:

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);

* The above example is a synchronous callback, as it is executed immediately.
*/


/** Sychronous Example */

const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post two'}

 ];

// function createPost(post)
// {
//   setTimeout(function(){
//     posts.push(post);
//   }, 2000);
// }

// function getPosts()
// {
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post three', body: 'This is a post three'});

// getPosts();


/** Asynchronous Example */


function createPost(post,callback)
{
  setTimeout(function(){
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts()
{
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post three', body: 'This is a post three'}, getPosts);



