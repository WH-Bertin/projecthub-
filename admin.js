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
