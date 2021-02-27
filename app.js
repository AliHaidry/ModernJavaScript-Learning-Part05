document.getElementById('button1').addEventListener
('click',loadCustomer);

function loadCustomer()
{
    const xhr = new XMLHttpRequest();

    xhr.open('GET','customer.json',true); // true for asynchronous.

    xhr.onload = function() {
        if(this.status === 200)
        {
         //   console.log(this.responseText);
         const customer = JSON.parse(this.responseText);
         const output = `
         <ul>
            <li>ID: ${customer.id}</li>
            <li>ID: ${customer.name}</li>
            <li>ID: ${customer.company}</li>
            <li>ID: ${customer.phone}</li>
        </ul>
         `;


         document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}