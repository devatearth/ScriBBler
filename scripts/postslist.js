function RemoveCard(card_name){
var card = document.getElementById(card_name);
card.remove();
var posts = document.getElementById("posts");
posts.style.alignContent = "center";
}