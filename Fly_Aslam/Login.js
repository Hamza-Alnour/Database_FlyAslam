
var userList = [
    { email: "aslam@example.com", password: "1234" },
  ];

const login_button = document.getElementById("login_button");

login_button.addEventListener("click", LogIn);

function LogIn(){
    const email_input = document.getElementById("email_input").value;
    const password_input = document.getElementById("password_input").value;

    userList.forEach((user, index) => {
        if(email_input === user.email && password_input === user.password){
            window.location.href = "index.html";
        }
        else{
            alert("wrong Email or Password")
        }
    });
}