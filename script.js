
let nameInput=document.getElementById("name-input")
let addbtn=document.getElementById("btn")
let nameList=document.getElementById("items-list")
let inputText;
let inputTextArray=[]



function setLocalStorage(){
    localStorage.setItem("name",JSON.stringify(inputTextArray))
    
    
}
function getLocalStorage(){
    if (localStorage.getItem("name")) {
        inputTextArray= JSON.parse(localStorage.getItem("name"))
    
        buildUi()
    }
   
    
}
function buildUi(){

    nameList.textContent=""

    inputTextArray.forEach((item) => {

        let listItem=document.createElement("li")
    let spanElement=document.createElement("span")
    listItem.appendChild(spanElement)
    nameList.appendChild(listItem)
    spanElement.innerText=item

    nameInput.value=""
   
        

    listItem.addEventListener("click", dltItem)
    function dltItem(event){
        console.log(event)
       
        if (event.target.classList[1]==="fa-delete-left") {
    

            listItem.remove()

            if(inputTextArray.indexOf(item)>-1){
                inputTextArray.splice(inputTextArray.indexOf(item),1)
                setLocalStorage()

            }
            
        }
        
        
            
    }


    listItem.addEventListener("click", edtItem)
    function edtItem(event){
        console.log(event)
        if(event.target.classList[1]==="fa-pen-to-square"){
            oldItem=spanElement.innerText
            let editItem=prompt("edit list item",oldItem)
            if(editItem==null || editItem==""){
                alert("nothing to change")
            }else{
            spanElement.innerHTML=editItem

            let index=inputTextArray.indexOf(oldItem)
            if(index >-1){
                inputTextArray[index]=editItem
                setLocalStorage()
            }

            }
        }
    }



    let dltBtn=document.createElement("i")
    dltBtn.classList.add("fa-solid", "fa-delete-left")
    listItem.appendChild(dltBtn)

    let edtBtn=document.createElement("i")
    edtBtn.classList.add("fa-solid", "fa-pen-to-square")
    listItem.appendChild(edtBtn)

    })
    


}
function addItem(){
    if (nameInput.value!="") {

        inputText=nameInput.value 

        inputTextArray.push(inputText)
        console.log(inputTextArray)

        setLocalStorage()
        getLocalStorage()
             
    
  

    }else{
        alert("empty feild")
    }
}

addbtn.addEventListener("click", addItem)
nameInput.addEventListener("keypress", enterItem)

function enterItem(event){
    if(event.key==="Enter") {
        event.preventDefault();
        addItem()
    }

}
getLocalStorage()
console.log("hello wolrd")
document.write("hello world")
document.write("my name is muhammad sinan")

document.write("i am a web developer")

console.log("welcome")

