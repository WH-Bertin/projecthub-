const actionButtons = document.querySelectorAll('.action-links a, .action-danger');
const loadMoreButton = document.querySelector('.btn-load');

function showMessage(message) {
  alert(message);
}

if (actionButtons.length) {
  actionButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const actionText = button.textContent.trim();
      const row = button.closest('tr');

      if (actionText === 'Approve' && row) {
        const badge = row.querySelector('.status-badge');
        if (badge) {
          badge.textContent = 'Active';
          badge.classList.remove('status-pending');
          badge.classList.add('status-active');
        }
        showMessage('Project approved.');
        return;
      }

      if (actionText === 'Delete' && row) {
        row.remove();
        showMessage('Project removed from the list.');
        return;
      }

      showMessage('View details is not available in this demo.');
    });
  });
}

if (loadMoreButton) {
  loadMoreButton.addEventListener('click', () => {
    showMessage('No more projects to load in this simple demo.');
  });
}
