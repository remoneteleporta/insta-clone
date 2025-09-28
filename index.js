const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let nameEl = document.getElementById("id-name")
let unameEl=document.getElementById("username")
let captionEl=document.getElementById("caption")
let locationEl=document.getElementById("location")
let avartarEl=document.getElementById("user-avatar")
let postEl=document.getElementById("feed-post")
let likesEl=document.getElementById("likes-count")
let feedEl=document.getElementById("feed")


window.addEventListener('load', function display(){
    nameEl.textContent += `${posts[0].name}`
    unameEl.textContent += `${posts[0].username}`
    captionEl.textContent += `${posts[0].comment}`
    avartarEl.innerHTML = `<img id="user-avatar" src="${posts[0].avatar}">`
    postEl.innerHTML = `<img id="feed-post" src="${posts[0].post}">`
    locationEl.textContent += `${posts[0].location}`
    likesEl.textContent += `${posts[0].likes} likes`

    for(let i=1; i<posts.length; i++){
        postfeed(i)
    }
})

function postfeed(arrnum){

feedEl.innerHTML += `<div id="separator"><div>
            <article class="olda-post">
            <header class="user-info">
                <div id="user-avatar"><img id="user-avatar" src="${posts[arrnum].avatar}"></div>
                <div class="name-location">
                 <h2 id="id-name">${posts[arrnum].name}</h2>
                 <p id="location">${posts[arrnum].location}</p>
                </div>
            </header>
            <figure id="feed-post"><img id="feed-post" src="${posts[arrnum].post}">
            </figure>
            <div class="interactive-icons">
            <button class="btn"><img id="like-btn" src="images/icon-heart.png"></button>
            <button class="btn"><img id="cmt-btn" src="images/icon-comment.png"></button>
            <button class="btn"><img id="share-btn" src="images/icon-dm.png"></button>
            </div>
            <footer>
            <p id="likes-count">${posts[arrnum].likes} likes</p>
            <p id="username-caption"><span id="username">${posts[arrnum].username}</span><span id="caption">${posts[arrnum].comment}</span></span></p>
            </footer>
        </article>`

        return

}