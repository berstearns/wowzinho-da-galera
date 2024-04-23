document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#timezoneTable tbody tr').forEach(row => {
        const addNameButton = row.querySelector('.add-name');
        const clicksCell = row.cells[3];
        const namesCell = row.cells[5];

        addNameButton.addEventListener('click', () => {
            const nameEl = document.querySelector('#nome');
            const name =  document.querySelector('#nome').value
            if (name) {
                // .textContent += 
                newEl = document.createElement("span")
                newEl.classList.add('nome')
                newEl.innerHTML = `${name}`;
                namesCell.appendChild(newEl)
                clicksCell.textContent = parseInt(clicksCell.textContent) + 1
            }
            else{
              alert('teu nome ta vazio porra')
            }
        });
    });
    document.querySelectorAll('span.nome').forEach(spanEl => {
      spanEl.onclick = () => spanEl.remove()
    });
});

