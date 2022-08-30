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

const nameEl = document.getElementById("name")
const usernameEl = document.getElementById("username")
const locationEl = document.getElementById("location")
const avatarEl = document.getElementById("avatar")
const postEl = document.getElementById("post")
const commentEl = document.getElementById("comment")
const likesEl = document.getElementById("likes")
let newEl = document.getElementById("new-post")
let redHeart = document.getElementById("red-heart")
let comu = document.getElementById("com")

for(let i=0; i< posts.length; i++) {
    
    nameEl.innerHTML =posts[i].name
    
    locationEl.innerHTML =posts[i].location 
    avatarEl.innerHTML =""
    avatarEl.innerHTML =`<img src="${posts[i].avatar}" class="avatar-main-photo">` 
    
    postEl.innerHTML=""
    postEl.innerHTML =`<img src="${posts[i].post}" class="main-photo">`

    comu.innerHTML = 
    `
    <div class="container">
        <img src="images/icon-heart.png" class="icons" id="heart${i}">
        <img src="images/icon-comment.png" class="icons">
        <img src="images/icon-dm.png" class="icons">
                    
                    
    <div class="container">
        <p class="likes-p" ><span id="likes${i}">${posts[i].likes} likes</span></p>
    </div>
    <div class="container last">
        <p class="comments"><span id="username">${posts[i].username}</span><span id="comment"> ${posts[i].comment}</span></p>
    </div>
    </div>
    
    `

    let clone = newEl.cloneNode(true); 

    clone.id = `post${i}`
    
    newEl.parentNode.appendChild(clone);
    
}

newEl.textContent = ""

let h1 = document.getElementById("heart0")
let h2 = document.getElementById("heart1")
let h3 = document.getElementById("heart2")

let l0 = document.getElementById("likes0")
let l1 = document.getElementById("likes1")
let l2 = document.getElementById("likes2")


let toggle = true
h1.addEventListener("click", function() {
    toggle = !toggle
    if(toggle) {
        h1.src = "images/icon-heart.png"
        l0.innerHTML = `${posts[0].likes} likes`
        
    } else {
        h1.src = "images/icon-heart-like.png"
        l0.innerHTML = `${posts[0].likes+1} likes`
    }
    

})
let toggle1 = true
h2.addEventListener("click", function() {
    toggle1 = !toggle1
    if(toggle1) {
        h2.src = "images/icon-heart.png"
        l1.innerHTML = `${posts[1].likes} likes`
    } else {
        h2.src = "images/icon-heart-like.png"
        l1.innerHTML = `${posts[1].likes+1} likes`
    }
})
let toggle2 = true
h3.addEventListener("click", function() {
    toggle2 = !toggle2
    if(toggle2) {
        h3.src = "images/icon-heart.png"
        l2.innerHTML = `${posts[2].likes} likes`
    } else {
        h3.src = "images/icon-heart-like.png"
        l2.innerHTML = `${posts[2].likes+1} likes`
    }
})
    


