function common(){
	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var signupBtn = document.getElementById("signUp");
	
	// Get the button that opens the modal
	var signInBtn = document.getElementById("signIn");
	
	var createPostBtn = document.getElementById("createPost");

	// Get the <span> element that closes the modal
	//var span = document.getElementsByClassName("close")[0];
	

	// When the user clicks the button, open the modal 
	signupBtn.onclick = function() {
		document.getElementById('modal').innerHTML='<span class="close" onclick = "closeModal()">&times;</span>';
		var div = document.createElement('div');
		div.innerHTML = "<form id='form'><p>Get Started</p>";
		div.innerHTML += "<label for='name' >Name</label>";
		div.innerHTML += "<input type='text' placeholder='Enter your name' id='name' class='form-control'></input>";
		div.innerHTML += "<label for='name' >Username</label>";
		div.innerHTML += "<input type='text' placeholder='Enter your username' id='userName' class='form-control'></input>";
		div.innerHTML += "<label for='name' >Password</label>";
		div.innerHTML += "<input type='password' placeholder='Enter your password' id='password' class='form-control'></input>";
		div.innerHTML += "<label for='name' >Confirm Password</label>";
		div.innerHTML += "<input type='password' placeholder='Re-enter your password' id='confirmPassword' class='form-control'></input>";
		div.innerHTML += "<button id = 'submit-button'class='btn btn-success form-control' >Sign Up</button> </form>";
	    document.getElementById('modal').appendChild(div);
	    modal.style.display = "block";
	}
	
	// When the user clicks the button, open the modal 
	signInBtn.onclick = function() {
		document.getElementById('modal').innerHTML = '<span class="close" onclick = "closeModal()">&times;</span>';
		var div = document.createElement('div');
		div.innerHTML = "<form id='form'><p>Welcome Back!</p>";
		div.innerHTML += "<label for='name' >Username</label>";
		div.innerHTML += "<input type='text' placeholder='Enter your username' id='userName' class='form-control'></input>";
		div.innerHTML += "<label for='name' >Password</label>";
		div.innerHTML += "<input type='password' placeholder='Enter your password' id='password' class='form-control'></input>";
		div.innerHTML += "<button id = 'submit-button'class='btn btn-success form-control' >Sign Up</button> ";
		div.innerHTML += "<p>Not a member? Sign Up</p></form>";
	    document.getElementById('modal').appendChild(div);
	    modal.style.display = "block";
	}

	createPostBtn.onclick = function() {
		document.getElementById('modal').innerHTML = '<span class="close" onclick = "closeModal()">&times;</span>';
		var div = document.createElement('div');
		div.innerHTML = "<form id='form'><p>Pen Your Post</p>";
		div.innerHTML += "<label for='name' >Title</label>";
		div.innerHTML += "<input type='text' placeholder='Enter title of your post' id='title' class='form-control'></input>";
		div.innerHTML += "<label for='name' >Contents</label>";
		div.innerHTML += "<input type='text' placeholder='Enter the contents of your post' id='contents' class='form-control'></input>";
		div.innerHTML += "<button id = 'submit-button'class='btn btn-success form-control' >Sign Up</button> ";
		document.getElementById('modal').appendChild(div);
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	function closeModal(){
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
	  }
	}
}
