document.addEventListener('DOMContentLoaded', function() {
  function date_month_year() {
      const monthNames = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const monthIndex = currentDate.getMonth(); 
      const monthName = monthNames[monthIndex];
      const date = currentDate.getDate();
      console.log(`${monthName}, ${date}, ${year}`);

      document.getElementById('displaydmy').textContent = `${monthName} ${date}, ${year}`;
  }

  function second_webpage() {
      document.querySelector('.addicon').addEventListener('click', function() {
          window.location.href = 'pro1.html';
      });
  }

  date_month_year();
  second_webpage();
});

document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('task-list');

  // Load tasks from localStorage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Function to create a new task container
  function createTaskContainer(task, index) {
      const container = document.createElement('div');
      container.classList.add('container');
      container.classList.toggle('completed', task.completed);

      // Create and add the icon
      const icon = document.createElement('i');
      icon.className = `fa-solid ${task.icon || 'fa-question'}`; // Use saved icon or default to question mark
      icon.style.color = task.iconColor || '#7b8ce4'; 
      container.appendChild(icon);

      // Create and add the task text
      const textNode = document.createTextNode(task.text);
      container.appendChild(textNode);

      // Add a click event to toggle the 'completed' class
      container.addEventListener('click', () => {
          task.completed = !task.completed;
          container.classList.toggle('completed');
          saveTasks(); // Save the updated tasks to localStorage
      });

      // Create edit button
      const editButton = document.createElement('button');
      editButton.innerHTML = '<i class="fa-solid fa-pen" style="color:#7b8ce4"></i>';
      editButton.classList.add('edit-button');
      editButton.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent triggering the container's click event
          const newText = prompt('Edit Task', task.text);
          if (newText !== null && newText.trim() !== '') {
              task.text = newText.trim();
              container.textContent = ''; // Clear existing content
              container.appendChild(icon); // Re-add the icon
              container.appendChild(document.createTextNode(task.text)); // Re-add task text
              container.appendChild(editButton);
              container.appendChild(deleteButton);
              saveTasks(); // Save the updated task to localStorage
          }
      });
      container.appendChild(editButton);

      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color:#7b8ce4"></i>';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent triggering the container's click event
          tasks.splice(index, 1); // Remove the task from the array
          saveTasks(); // Save the updated tasks to localStorage
          renderTasks(); // Re-render the task list
      });
      container.appendChild(deleteButton);

      return container;
  }

  // Function to render tasks
  function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
          const taskContainer = createTaskContainer(task, index);
          taskList.appendChild(taskContainer);
      });
  }

  // Function to save tasks to localStorage
  function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Render tasks on page load
  renderTasks();
});
