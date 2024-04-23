document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#scheduleTable tbody tr').forEach(row => {
        // Process each day column to handle name addition
        for (let i = 3; i < row.cells.length; i++) { // Start from the 4th cell (days of the week)
            row.cells[i].addEventListener('click', () => {
                const existingNames = row.cells[i].textContent.trim();
                const name = prompt("Enter your name to add to this time slot:");
                if (name) {
                    if (existingNames.length > 0) {
                        row.cells[i].textContent += `, ${name}`; // Add with comma separation
                    } else {
                        row.cells[i].textContent = name; // Add first name
                    }
                }
            });
        }
    });
});
