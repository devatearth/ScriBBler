function RemoveCard(card_name) {
    var new_div = document.createElement('div');
    var modal = '<div id="modal" class="modal-content post-warning-modal">' +
        '<div id=post-delete-modal><p>Are you sure you want to delete this post?</p>' +
        '<button id = "submit-button" class="btn btn-success column post-warning-button" onclick=DeleteCard("' + card_name + '")>YES</button>' +
        '<button id = "submit-button" class="btn btn-danger column post-warning-button" onclick=closeModal("delete_modal")  >NO</button>' +
        '</div>';
    new_div.innerHTML = modal;
    var signUpModal = document.getElementById('delete_modal');
    signUpModal.innerHTML = '';
    signUpModal.appendChild(new_div);
    signUpModal.style.display = 'block';
}

function viewPost(card) {
    console.log(card);
    var author = document.getElementById(card + "_author");
    var author = author.innerHTML;
    sessionStorage.setItem('author', author);
    var heading = document.getElementById(card + "_heading");
    var heading = heading.innerHTML;
    sessionStorage.setItem('heading', heading);
    var content = document.getElementById(card + "_content");
    var content = content.innerHTML;
    sessionStorage.setItem('content', content);
    window.location.href = "../html/post.html";
}

function DeleteCard(card_name) {
    closeModal("delete_modal");
    var card = document.getElementById(card_name);
    card.remove();
    var posts = document.getElementById("posts");
}