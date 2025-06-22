var summer = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var showprice = document.getElementById("showprice")
var Clear = document.getElementById("Clear")

var totalprice = 0

summer.forEach(function(item) {
  item.onclick = function() {
    totalprice += +item.getAttribute("price")
    content.innerHTML += item.textContent + "<br>"

    if(content.innerHTML!=""){
      showprice.style.display = "block"
      Clear.style.display = "block"
      Clear.style.cursor = "pointer"
      Clear.style.background = "green"
      Clear.style.width = "70px"
      Clear.style.height = "50px"
      Clear.style.borderRadius = "50px"
      showprice.style.cursor = "pointer"
      showprice.style.width = "70px"
      showprice.style.height = "50px"
      showprice.style.borderRadius = "50px"
      showprice.style.background = "green"
      showprice.style.textAlign = "center"
     Clear.style.marginTop = "30px"

      
    }
  }
})

showprice.addEventListener('click' , ()=>{
  if(totalprice >1000){
    alert("You got discount 30%")
    totalprice -=300
  }
    content.innerHTML += "Total Price is" + totalprice;
}
)

  Clear.addEventListener('click' , ()=>{
  content.innerHTML = ""
  showprice.style.display = "none"
  Clear.style.display = "none"
}
)
var inputsearch = document.getElementById("inputsearch")
var notFound = document.getElementById("notFound")
var List = document.querySelectorAll(".list li")
inputsearch.addEventListener('input' , ()=>{
  var inputvalue =inputsearch.value.toLowerCase()
  var anyvaisable = false 
  List.forEach((item) =>{
    if(item.textContent.toLowerCase().includes(inputvalue)){
      item.style.display = "list-item"
      anyvaisable = true 
    }else{
      item.style.display = "none"
    }
  })
  notFound.style.display = anyvaisable ? "none" :"block"

}
)