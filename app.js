document.querySelector('.get-jokes').addEventListener
('click', getJokes);

function getJokes(e) 
{
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();
    
    xhr. open('GET',`https://api.icndb.com/jokes/random/${number}`, true);


    xhr.onload = function() {
        if(this.status === 200)
        {
            const reponse = this.responseText;
            console.log(reponse);
        }
    }

    
    xhr.send();
    e.preventDefault();
}
