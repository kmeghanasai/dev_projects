document.addEventListener('DOMContentLoaded', function() {
    // Function to handle back button
    function back_to_firstwebpage() {
        const arrowIconBtn = document.querySelector('.arrowicon');
        if (arrowIconBtn) {
            console.log('Arrow icon button found');
            arrowIconBtn.addEventListener('click', function() {
                console.log('Arrow icon button clicked');
                window.location.href = 'index.html'; // Ensure this path is correct
            });
        } else {
            console.error('Arrow icon button not found');
        }
    }

    // Initialize back button functionality
    back_to_firstwebpage();

    // Form submission handling
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const iconSelector = document.getElementById('icon-selector');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        const selectedIcon = iconSelector.value;

        if (taskText) {
            // Save the task and selected icon to localStorage
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push({ text: taskText, completed: false, icon: selectedIcon });
            localStorage.setItem('tasks', JSON.stringify(tasks));

            // Redirect to the task list page
            window.location.href = 'index.html';
        }
    });

    // Handle dropdown change event
    iconSelector.addEventListener('change', function() {
        const selectedIcon = this.value;
        document.getElementById('icon').className = `fa-solid ${selectedIcon}`;
    });
});
