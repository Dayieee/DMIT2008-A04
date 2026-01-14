// 1. Select topic & new topic
let topicList = document.querySelector(".topics-list")
let newTopicForm =  document.querySelector(".new-topic-form")

// 5. create a funcition addTopicToPage that will take a 
const addTopicToPage = (topicName, topicListElement) => {
    // 6. create a new inner list element
    let newTopicElement = `<li class = "list-group-item">
    ${topicName}
    </li>`
    topicListElement.innerHTML += newTopicElement
}

// 2. add event listener. Stop default form submit 
newTopicForm.addEventListener(
    "submit",
    (event) => {
        event.preventDefault()
        // 3. grab input element and extract/store value. 
        let topicInput = event.target.elements["new-topic"]
        let newTopic = topicInput.value
        console.log(newTopic)

        // 4.to add new class use class list|| Validation -  check for empty, use bootstrap.
        if (newTopic === ""){
            topicInput.classList.add("is-invalid")
        } else {
            topicInput.classList.remove("is-invalid")
        }
        addTopicToPage(newTopic, topicList)
    })


