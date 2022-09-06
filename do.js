const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `<li class="list-group-item">
    <span>${todo}</span>
    <lord-icon class="delete" src="https://cdn.lordicon.com/dovoajyj.json" trigger="loop-on-hover" delay="2000">
    </lord-icon>
 </li>
 `;
   list.innerHTML+=html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo=addForm.add.value.trim();
    if(todo.length)
    {
        generateTemplate(todo);
        addForm.reset();
    } 
})

list.addEventListener('click', e => {
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
})

const filterTodos = term =>{
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}

search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase();
    filterTodos(term);
})