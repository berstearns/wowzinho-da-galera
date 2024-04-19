document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#timezoneTable tbody tr').forEach(row => {
        const plusButton = row.querySelector('.plus');
        const minusButton = row.querySelector('.minus');
        const addNameButton = row.querySelector('.add-name');
        const clicksCell = row.cells[3];
        const namesCell = row.cells[5];

        addNameButton.addEventListener('click', () => {
            const name = prompt("Enter your name:");
            if (name) {
                namesCell.textContent += namesCell.textContent.length > 0 ? `, ${name}` : name;
            }
        });
    });
});

