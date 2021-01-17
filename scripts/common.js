function ShowSignUpModal() {
    //This function will generate the signUP modal and popup in UI
    var new_div = document.createElement('div');
    var modal = '<div id="modal" class="modal-content">' +
        '<span class="close" onclick = closeModal("signUpModal")>&times;</span>' +
        '<form id=form><p>Get Started</p>' +
        '<label for="name" >Name</label>' +
        '<input required type= text placeholder="Enter your name" id="name" class="form-control"></input>' +
        '<label for="name" >Username</label>' +
        '<input required type="text" placeholder="Enter your username" id="userName" class="form-control"></input>' +
        '<label for="name" >Password</label>' +
        '<input required type="password" placeholder="Enter your password " id="password" class="form-control"></input>' +
        '<label for="name" >Confirm Password</label>' +
        '<input required type="password" placeholder="Re-enter your password" id="confirmPassword" class="form-control"></input>' +
        '<br>' +
        '<button id = "submit-button" class="btn btn-success form-control" >Sign Up</button>' +
        '</div>';
    new_div.innerHTML = modal;
    var signUpModal = document.getElementById('signUpModal');
    signUpModal.innerHTML = '';
    signUpModal.appendChild(new_div);
    signUpModal.style.display = 'block';

}

function ShowSignInModal() {
    //This function will generate the signIn modal and popup in UI
    var new_div = document.createElement('div');
    var modal = '<div id="modal" class="modal-content">' +
        '<span class="close" onclick = closeModal("signInModal")>&times;</span>' +
        '<form id=form><p>Welcome Back!</p>' +
        '<label for="Username" >Username</label>' +
        '<input required type= text placeholder="Enter your username" id="userName" class="form-control"></input>' +
        '<label for="password" >Password</label>' +
        '<input type="password" placeholder="Enter your password" id="password" class="form-control" required></input>' +
        '<br>' +
        '<button id = "submit-button"class="btn btn-success form-control" >Sign In</button>' +
        '<span><p style="text-align:center">Not a member? </span><span style="color:blue;cursor:pointer;" onclick=SwitchToSignUpModal()> Sign Up </p></span></form>' +
        '</div>';
    new_div.innerHTML = modal;
    var signUpModal = document.getElementById('signInModal');
    signUpModal.innerHTML = '';
    signUpModal.appendChild(new_div);
    signUpModal.style.display = 'block';

}

function closeModal(modal) {
    //This function will take an id of modal and close it
    var modal = document.getElementById(modal);
    modal.style.display = "none";
}

function showModal(modal) {
    //This function will take an id of modal and pops it to UI
    var modal = document.getElementById(modal);
    console.log("triggered");
    modal.style.display = "block";
}

function switchModal(open, close) {
    //This function will take 2 parameters 1st modal will be opened by closing 2nd modal
    console.log(open, close);
    var modal = document.getElementById(close);
    modal.style.display = "none";
    signUpModal();
}

function SwitchToSignUpModal() {
    //This modal will close the signin modal and open up signUP modal
    var signUpModal = document.getElementById('signInModal');
    signUpModal.style.display = 'none';
    ShowSignUpModal();
}