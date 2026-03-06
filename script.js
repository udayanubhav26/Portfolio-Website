function scrollToSection(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
})

}


function openSkill(url){

window.open(url,"_blank")

}



/* typing animation */

const text = [
"Web Developer",
"AI Enthusiast",
"Software Developer"
]

let i=0
let j=0
let current=""
let isDeleting=false

function type(){

const typing=document.querySelector(".typing")

if(i<text.length){

if(!isDeleting && j<=text[i].length){

current=text[i].substring(0,j++)
typing.textContent=current
}

if(isDeleting && j>=0){

current=text[i].substring(0,j--)
typing.textContent=current
}

if(j==text[i].length){

isDeleting=true
}

if(isDeleting && j===0){

isDeleting=false
i++
if(i===text.length) i=0
}

}

setTimeout(type,120)

}

type()



/* AJAX project load */

fetch("projects.json")
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("projectContainer")

data.forEach(project=>{

const card=document.createElement("div")
card.classList.add("project-card")

card.innerHTML=`
<h3>${project.title}</h3>
<p>${project.description}</p>
<button onclick="window.open('${project.link}')">View Project</button>
`

container.appendChild(card)

})

})


/* form */

document.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault()
alert("Message Sent!")

})
