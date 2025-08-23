(function(){
  const STORAGE_KEY = 'tasks-v1';

  class Task {
    constructor(title){
      this.id = (Date.now().toString(36) + Math.random().toString(36).slice(2,8));
      this.title = title.trim();
      this.completed = false;
      this.createdAt = new Date().toISOString();
    }
  }
 
  let tasks = load();

  const listEl = document.getElementById('taskList');
  const formEl = document.getElementById('addForm');
  const inputEl = document.getElementById('taskInput');
  const countEl = document.getElementById('count');
  const clearBtn = document.getElementById('clearBtn');

  render();

  formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    const title = inputEl.value.trim();
    if(!title) return;
    tasks.push(new Task(title));
    save();
    inputEl.value = '';
    render();
    inputEl.focus();
  });

  listEl.addEventListener('change', (e)=>{
    if(e.target.matches('input[type="checkbox"]')){
      const id = e.target.closest('li').dataset.id;
      const t = tasks.find(x=>x.id===id);
      if(t){
        t.completed = e.target.checked;
        save();
        e.target.closest('li').classList.toggle('done', t.completed);
        updateCount();
      }
    }
  });

  listEl.addEventListener('click', (e)=>{
    const delBtn = e.target.closest('button.delete');
    if(delBtn){
      const id = delBtn.closest('li').dataset.id;
      tasks = tasks.filter(x=>x.id!==id);
      save();
      render();
    }
  });

  clearBtn.addEventListener('click', ()=>{
    const hadCompleted = tasks.some(t=>t.completed);
    if(!hadCompleted) return;
    tasks = tasks.filter(t=>!t.completed);
    save();
    render();
  });

  function render(){
    listEl.innerHTML = '';
    if(tasks.length === 0){
      listEl.innerHTML = '<li class="empty">No tasks yet — add one above.</li>';
    } else {
      for(const t of tasks){
        const li = document.createElement('li');
        li.className = 'task' + (t.completed ? ' done' : '');
        li.dataset.id = t.id;
        li.innerHTML = `
          <label>
            <input type="checkbox" ${t.completed ? 'checked' : ''} aria-label="Mark complete" />
            <span>${escapeHtml(t.title)}</span>
          </label>
          <button class="delete" aria-label="Delete task">&times;</button>
        `;
        listEl.appendChild(li);
      }
    }
    updateCount();
  }

  function updateCount(){
    const remaining = tasks.filter(t=>!t.completed).length;
    const total = tasks.length;
    countEl.textContent = `${remaining}/${total} left`;
  }

  // Storage
  function save(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
  function load(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(err){
      console.warn('Failed to parse storage, resetting.', err);
      localStorage.removeItem(STORAGE_KEY);
      return [];
    }
  }

  // Utils
  function escapeHtml(str){
    return str.replace(/[&<>"']/g, (c)=>({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
    })[c]);
  }
})();
