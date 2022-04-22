$('#loginBtn').click(function(){
    var userName = $('#userName').val();
    var password = $('#password').val();
    if(userName != 'admin' || password != '12345')
     {
        $('#errMsg').text('Invalid username or password');
         return false;
     }
     else if(userName == 'admin' && password == '12345')
     {
        loginFunction(true, login);
     }
 });
 function loginFunction(res, func) {
    func();
  }
 function login()
 {
     return true;
 }

 // api url
const api_url =
"https://jsonplaceholder.typicode.com/todos";

// Defining async function
async function getapi(url) {

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
var data = await response.json();
console.log(data);
if (response) {
    hideloader();
}
show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
let tab =
    `<tr>
    <th></th>
    <th></th>
    </tr>`;

// Loop to access all rows
for (let r of data) {
    tab += `<tr>
<td><input type="checkbox" id="todoCheckbox" onchange="checkboxFunc(this);"> </td>
<td>${r.title}</td>
</tr>`;
}
// Setting innerHTML as tab variable
document.getElementById("todoList").innerHTML = tab;
}
var i=0;
function checkboxFunc(checkbox){
    if(checkbox.checked == true){
        i++
        var promise = new Promise(function(resolve, reject) {
            if(i == 5) {
                resolve();
            } else {
                reject();
            }
        });
    
        promise.then(function () {
            alert('Congrats. 5 Tasks have been Successfully Completed');
        });
        // .catch(function () {
        //     alert('Some error has occurred');
        // });
   }
}
