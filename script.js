const detailsButton = document.getElementById('details-button');
const studentDetails = document.getElementById('student-details');

detailsButton.addEventListener('click', () => {
  const shouldShowDetails = studentDetails.hidden;

  studentDetails.hidden = !shouldShowDetails;
  detailsButton.textContent = shouldShowDetails ? 'Hide Details' : 'Show Details';
  detailsButton.setAttribute('aria-expanded', String(shouldShowDetails));
});
