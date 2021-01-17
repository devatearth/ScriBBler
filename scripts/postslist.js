function RemoveCard(card_name) {
    var card = document.getElementById(card_name);
    card.remove();
    var posts = document.getElementById("posts");
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