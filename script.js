/************************************ */
/** What Is Asynchronous Programming? */
/************************************ */

// Sychronous code
//posts = loadPostSync();
//...wait till posts are fetched.
//...do something with loadPostSync.

/** So here's an example of some synchronous code. So we have a variable set to a function called loadPostSync. 
 * Okay, so load post synchronously and let's say this function fetches post from some server somewhere. 
 * Now we don't know how long it might take to get these posts. It could be really slow. It could be a really slow network, 
 * that we're getting them from low-bandwidth, whatever the reason it could take a few seconds or even more. 
 * Now in this way of writing this code, we're going to have to wait until the posts are fetched and then do something with the post and then only after that's done, 
 * can we move on to the doTheNextThing function. So this is what's called blocking code. It's going to block until the posts are fetched and loaded, which obviously slows things down */

//doTheNextThing(); // Has to wait until posts load.


//LoadPostsAsync(function(){
    //...wait till posts are fetched.
    //...do something with posts.

    /** In this case, instead of just pulling the posts out of a synchronous function, 
     * we're passing in a callback function, which is just one method for handling asynchronous code. 
     * This callback will run and fetch the posts and allow us to do something with the posts. 
     * But the doTheNextThing function does not have to wait until the posts are fetched and loaded. 
     * Alright, so the program isn't blocked and it will simply just keep going even if it takes a while for the post to be fetched. 
     * It's not going to stop the doTheNextThing function from running in turn this is much faster and that's the beauty of asynchronous JavaScript and asynchronous programming in general */
//});

//doTheNextThing(); // Doesn't have to wait until posts load.


/************************************ */
/** What Is Asynchronous Programming? --- END */
/************************************ */



/** Browser / Server APIs */
/**  
 * Most Async code you work with will be part of an API or library.
 * XMLHttpRequest & Fetch
 * jQuery Ajax, Axios, other HTTP libraries
 * Node.js fs (filesystem) module
*/

/** END */


/** Handling Async Code */
/** 
 * Callbacks
 * Promises
 * Async / Await
*/
/** END */

// Ajax, which actually stands for Asynchronous JavaScript and XML.


/** What is Ajax */
/** 
 * Asynchronous JavaScript & XML
 * Set of web technologies
 * Send & Recieve data asynchronously
 * Does not interfere with the current page
 * JSON has replaced XML for the most part
*/

/** Ajax & XHR Introduction */
/** 
 * What is Ajax?
 * Ajax stands for Asynchronous JavaScript and XML. 
 * Ajax isn't a language or framework or a library. 
 * It's a set of web technologies to send and receive data from the client and server and 
 * it does this asynchronously. 
 * So it's done behind the scenes without having to explicitly reload the webpage.
 * 
 *  Now the way that this happens is by making an Ajax call or an asynchronous JavaScript call and it goes through something 
 * called an Ajax Engine and uses the XmlHttpRequest object or the XHR object, 
 * which is actually part of the browser
 * 
 * Make async request in the background.
 * No page reload / refresh.
 * Fetch data.
 * Very interactive.
*/

/**
 * XmlHttpRequest (XHR) Object
 * API in the form of an object.
 * Provided by the browser JS environment.
 * Methods transfer data between client / server.
 * Can be used with other protocols than HTTP.
 * Can work with data other than XML (JSON, plaintext).
 */

 /** Libraries and Other Methods */
 /**
  *  So we are going to get into the Fetch API, but then you have external libraries that you can use like Axios, Superagent, of course, jQuery
  *  which is a DOM manipulation library. Node HTTP if you're dealing with node.js. 
  * Now it's up to you, how you want to make your request, 
  * fetch is what I would suggest because it's part of Vanilla JavaScript and it's a really nice API.
  * 
  * Fetch API
  * Axios
  * Superagent
  * jQuery
  * Node HTTP
  */