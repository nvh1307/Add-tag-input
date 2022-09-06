const ul = document.querySelector("ul")
const input = ul.querySelector("input")
const countNumb = document.querySelector(".details span")

let maxTags = 10

let tags = []

countTag()
function countTag(){
    countNumb.innerText = maxTags - tags.length
}

function createTag(){
    // tags có chứa một phần tử của lần add trước nên trước khi tạo phải xóa đi phần
    // tử cũ đó ở trogn tags đi
    ul.querySelectorAll("li").forEach(li => li.remove())
    tags.forEach(tag =>{
        let liTag =  `<li>${tag} <i class='bx bx-x' onClick = "remove(this,'${tag}') "></i></li>`
        ul.insertAdjacentHTML("afterbegin",liTag);
    })
    countTag()
}

function remove(element, tag){
    let index = tags.indexOf(tag) // getting removing  tag index
    tags =[...tags.slice(0,index), ...tags.slice(index + 1)] // removing or excluding selected tag from an array
    element.parentElement.remove() // removing li of removed tag
    countTag()
}
function addTag(e){
    if(e.key == "Enter"){
        let tag = e.target.value.replace(/\s+/g,' '); /* removing unwanted spaces from user taggg */

        if(tag.length > 1 && !tags.includes(tag)){
            if(tags.length < 10){

                /* if tag length is greater than 1 and the tag isnt exist already */
                tag.split(',').forEach(tag =>{ // splitting each tag from comma (,)
                    tags.push(tag) // add tag
    
                    createTag()
                })
            }
        }
        e.target.value = ""
    }
}



input.addEventListener("keyup", addTag)

const removeBtn = document.querySelector("button")

removeBtn.addEventListener("click",()=>{
    tags.length = 0
    ul.querySelectorAll("li").forEach(li =>{
        li.remove()

    })
    countTag()
})