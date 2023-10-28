const todoTitle = document.querySelector("#todoTitle");
const todoText = document.querySelector("#todoText");
const rightSide = document.querySelector('.right-side');
const createBTN = document.querySelector('.createBTN');


createBTN.addEventListener("click", function() {
        // Создаём нашу заметку при нажатии на кнопку
    const miniContainer = document.createElement("div");
    miniContainer.classList.add("mini-container");
    rightSide.append(miniContainer);
        // Появление элементов в заметке и добавление классов
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const deleteBTN = document.createElement("button");
    deleteBTN.classList.add("deleteBTN");
        // Параметры элементов в заметке
    deleteBTN.innerText = "delete";
    h2.innerText = todoTitle.value;
    p.innerText = todoText.value;
        // Проверка на наличие информации в тайтле и теле заметки
     if(todoTitle.value === '' || todoText.value === '') {
            alert("Please fill the text area")
            miniContainer.style.display = 'none'
        } else {
            miniContainer.style.display = 'block'
        }
        // Удаление заметки при нажатии на кнопку delete
    deleteBTN.addEventListener("click", function() {
        miniContainer.remove();
    })
        // Появление всех елементов внутри заметке
    miniContainer.append(h2, p, deleteBTN);
})






