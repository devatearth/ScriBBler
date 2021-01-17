function loadPost() {
    var heading = document.getElementById("postHeading");
    heading.innerHTML = sessionStorage.getItem('heading');
    var author = document.getElementById('postAuthor');
    author.innerHTML = sessionStorage.getItem('author');
    var content = document.getElementById('postContent');
    content.innerHTML = sessionStorage.getItem('content');
    sessionStorage.setItem('likes_count', 0);
    showLikes();
}

function EditPost() {
    var text_area = '<textarea class = "edit-title postHeading" id = "edited-title" value = "">';
    var title = document.getElementById("postHeading");
    var current_title = title.innerHTML;
    text_area += current_title + '</textarea>';
    title.innerHTML = text_area;
    title.style.width = '100%';
    title.style.borderColor = 'rgb(236, 19, 92)';

    var content_text_area = '<textarea class = "edit-content postContent" id = "edited-content" value=""> ';
    var content = document.getElementById('postContent');
    var current_content = content.innerHTML;
    content_text_area += current_content + '</textarea>';
    console.log(content_text_area.innerHTML);
    content.innerHTML = content_text_area;
    content.style.width = '100%';
    content.style.borderColor = 'rgb(236, 19, 92)';
    swapIcons('btn-edit', 'btn-save');
}

function swapIcons(icon1, icon2) {
    document.getElementById(icon1).style.display = "none";
    document.getElementById(icon2).style.display = "block";
}

function SavePost() {
    var title = document.getElementById("edited-title").value;
    var content = document.getElementById('edited-content').value;
    sessionStorage.setItem('heading', 'UPDATED:' + title);
    sessionStorage.setItem('content', 'UPDATED:' + content);
    swapIcons('btn-save', 'btn-edit');
    loadPost();
}

function showLikes() {
    var count = sessionStorage.getItem('likes_count');
    var tag = count + ' people like this!';
    document.getElementById('like-count').innerHTML = tag;
    count++;
    sessionStorage.setItem('likes_count', count);
}

function AddComment() {
    var current_comment = document.getElementById("comment").value;
    document.getElementById("comment").value = '';
    console.log(current_comment);
    var existing_comments = document.getElementById("comment-list").innerHTML;
    var generate_html = '<div class="single-comment">' + current_comment + '</div>';
    document.getElementById("comment-list").innerHTML = generate_html;
    document.getElementById("comment-list").innerHTML += existing_comments;
}