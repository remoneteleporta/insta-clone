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
let postEl=document.getElementById("img-post")
let likesEl=document.getElementById("likes-count")


function display(){
    nameEl.textContent += `${posts[0].name}`
    unameEl.textContent += `${posts[0].username}`
    captionEl.textContent += `${posts[0].comment}`
    avartarEl.innerHTML = `<img id="user-avatar" src="${posts[0].avatar}">`
    postEl.innerHTML = `<img id="img-post" src="${posts[0].post}">`
    locationEl.textContent += `${posts[0].location}`
    likesEl.textContent += `${posts[0].likes} likes`
}