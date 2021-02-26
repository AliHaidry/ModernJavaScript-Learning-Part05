/************************************ */
/** What Is Asynchronous Programming? */
/************************************ */

// Sychronous code
posts = loadPostSync();
//...wait till posts are fetched.
//...do something with loadPostSync.

/** So here's an example of some synchronous code. So we have a variable set to a function called loadPostSync. 
 * Okay, so load post synchronously and let's say this function fetches post from some server somewhere. 
 * Now we don't know how long it might take to get these posts. It could be really slow. It could be a really slow network, 
 * that we're getting them from low-bandwidth, whatever the reason it could take a few seconds or even more. 
 * Now in this way of writing this code, we're going to have to wait until the posts are fetched and then do something with the post and then only after that's done, 
 * can we move on to the doTheNextThing function. So this is what's called blocking code. It's going to block until the posts are fetched and loaded, which obviously slows things down */

doTheNextThing(); // Has to wait until posts load.


LoadPostsAsync(function(){
    //...wait till posts are fetched.
    //...do something with posts.

    /** In this case, instead of just pulling the posts out of a synchronous function, 
     * we're passing in a callback function, which is just one method for handling asynchronous code. 
     * This callback will run and fetch the posts and allow us to do something with the posts. 
     * But the doTheNextThing function does not have to wait until the posts are fetched and loaded. 
     * Alright, so the program isn't blocked and it will simply just keep going even if it takes a while for the post to be fetched. 
     * It's not going to stop the doTheNextThing function from running in turn this is much faster and that's the beauty of asynchronous JavaScript and asynchronous programming in general */
});

doTheNextThing(); // Doesn't have to wait until posts load.


/************************************ */
/** What Is Asynchronous Programming? --- END */
/************************************ */