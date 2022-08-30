const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: "21,492"
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: "12,502"
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: "15,137"
    }
]

const nameEl = document.getElementById("name")
const usernameEl = document.getElementById("username")
const locationEl = document.getElementById("location")
const avatarEl = document.getElementById("avatar")
const postEl = document.getElementById("post")
const commentEl = document.getElementById("comment")
const likesEl = document.getElementById("likes")
let newEl = document.getElementById("new-post")
let redHeart = document.getElementById("red-heart")

for(let i=0; i< posts.length; i++) {
    
    nameEl.innerHTML =posts[i].name
    usernameEl.innerHTML =posts[i].username + " "
    locationEl.innerHTML =posts[i].location 
    avatarEl.innerHTML =""
    avatarEl.innerHTML =`<img src="${posts[i].avatar}" class="avatar-main-photo">` 
    commentEl.innerHTML =posts[i].comment 
    postEl.innerHTML=""
    postEl.innerHTML =`<img src="${posts[i].post}" class="main-photo">`
    
    likesEl.innerHTML = `${posts[i].likes} likes`

    let clone = newEl.cloneNode(true); 
    
    newEl.parentNode.appendChild(clone);
    
}

newEl.textContent = ""    
    


