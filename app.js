
let input=document.querySelector('.input');





let data = [
  {
    name: "Faizan",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },

  {
    name: "John",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },

  {
    name: "Bliss",
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "Salena",
    src: "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  },

  {
    name: "Tanja",
    src: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  },
];


let person='';
data.forEach(function(val){

    person+=`<div class="person">

    <div class="img"><img src="${val.src}" alt=""></div>

    <h4>${val.name}</h4>

</div>`

})

let people=document.querySelector('.people').innerHTML=person;


input.addEventListener('input',function(){

let matching=data.filter(function(e){
return e.name.startsWith(input.value)

})


let newusers='';

matching.forEach(function(val){

    console.log(val);

    newusers+=`<div class="person">

    <div class="img"><img src="${val.src}" alt=""></div>

    <h4>${val.name}</h4>

</div>`

})

let people=document.querySelector('.people').innerHTML=newusers;


})
