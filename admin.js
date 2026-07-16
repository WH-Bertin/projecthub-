// Get action buttons
const actionButtons = document.querySelectorAll('.action-links a, .action-danger');
// Get load button
const loadMoreButton = document.querySelector('.btn-load');

// Show alert
function showMessage(message) {
  alert(message);
}

// If buttons exist
if (actionButtons.length) {
  // Loop buttons
  actionButtons.forEach(button => {
    // Click handler
    button.addEventListener('click', event => {
      // Stop link action
      event.preventDefault();
      // Get button text
      const actionText = button.textContent.trim();
      // Get row
      const row = button.closest('tr');

      // Approve action
      if (actionText === 'Approve' && row) {
        // Find badge
        const badge = row.querySelector('.status-badge');
        // Change status
        if (badge) {
          badge.textContent = 'Active';
          badge.classList.remove('status-pending');
          badge.classList.add('status-active');
        }
        // Show message
        showMessage('Project approved.');
        return;
      }

      // Delete action
      if (actionText === 'Delete' && row) {
        row.remove();
        // Show message
        showMessage('Project removed from the list.');
        return;
      }

      // Default message
      showMessage('View details is not available in this demo.');
    });
  });
}

// If load button exists
if (loadMoreButton) {
  // Click handler
  loadMoreButton.addEventListener('click', () => {
    // Show message
    showMessage('No more projects to load in this simple demo.');
  });
}

 fetch('admin.json') 

 .then(response => response.json())

 .then (data => {
    const tBody = document.querySelector('tbody')
     tBody.innerHTML= data.map(item => `
      <tr>
          <td>
              <div class="cell-title">${item.cellTitle}</div>
              <div class="cell-meta">${item.cellMate}· Submission: (${item.Date})</div>
               </td>
               <td>${item.name}</td>
               <td><span class="status-badge status-${item.status}">${item.status}</span></td>
                <td>
                <div class="action-links">
                <a class="action-link" href="#">Approve</a>
                <a class="action-link" href="#">View</a>
                <a class="action-danger" href="#">Delete</a>
                </div>
           </td>
        </tr>
      `).join('');
       const rows = document.querySelectorAll(".projects-table tbody tr");

for (let i = 0; i < rows.length; i++) {

    // Get the status in the current row
    const status = rows[i].querySelector(".status-badge");

    // Get all links in the current row
    const links = rows[i].querySelectorAll("a");

    // Check every link
    for (let j = 0; j < links.length; j++) {

        if (
            status.textContent.trim() === "active" &&
            links[j].textContent.trim() === "Approve"
        ) {
            links[j].remove();
        }

    }
}

 })

 .catch(error => {
  console.error("there is error from json",error);
 });


