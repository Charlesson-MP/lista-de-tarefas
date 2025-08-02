const lista = document.querySelector(".list ul");

document.querySelector("#add").addEventListener('click', () => {
    const inputTarefa = document.querySelector("#tarefa");
    const tarefa = inputTarefa.value.trim();
    
    if(tarefa !== "") {
        const li = document.createElement('li');
        li.innerHTML = `<span>${tarefa}</span>
                    <div class="btn">
                        <button class="check">
                            <span class="material-symbols-outlined">
                                check_box
                            </span>
                        </button>
                        <button class="delete">
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>`;
        li.querySelector(".delete").disabled = true;
        li.querySelector(".delete").style.cursor = "not-allowed";
        lista.appendChild(li);
        inputTarefa.value = "";
        inputTarefa.focus();
    }
});

lista.addEventListener('click', (e) => {
    const alvo = e.target.closest("button");

    if(alvo.classList.contains("check")) {
        e.target.closest("li").querySelector("span").classList.add('checkedList');
        e.target.closest('li').querySelector("span").style.textDecoration = "line-through";
        e.target.closest('li').querySelector(".delete").disabled = false;
        e.target.closest('li').querySelector(".delete").style.cursor = "pointer";
        e.target.closest("li").querySelector(".check").disabled = true;
        e.target.closest("li").querySelector(".check").style.cursor = "not-allowed";
    }

    if(alvo.classList.contains('delete')) {
        e.target.closest('li').remove();
    }
});