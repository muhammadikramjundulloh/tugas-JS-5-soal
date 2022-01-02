let tabchat = document.getElementById("tabchat");
let chatwindow = document.getElementById("chatwindow")
let chatwindow_head = document.getElementById("cw-head")

tabchat.addEventListener("click", bukachat = () => {
  chatwindow.style.display = "flex";
  tabchat.style.display = "none"
})
chatwindow_head.addEventListener("click", tutupchat = () =>{chatwindow.style.display = "none";
tabchat.style.display = "flex"
  
})

let chat = document.getElementById("cht")
let inp = document.getElementById("inp")
let send = document.getElementById("cw-send")

let balonchat = function(chat, text){
   chat.innerHTML += `
   <div class = "barischat">
      <div class = "balonchat send">
          <p>${text}</p>
      </div>
   </div>
  ` 
}
function kirim(fn){
  let text = inp.value
  if (text.trim().length > 0)
      return fn(chat, text)
}

send.addEventListener("click", function(){
  kirim(balonchat)
  inp.value = ""
  inp.focus()
})