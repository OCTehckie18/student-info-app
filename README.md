# Student Information Portal

## Project Title

Student Information Portal

## Team Members

- 2547237 - Omkaar Chakraborty
- 2547201 - Aadharsh Krishnaa G
- 2547259 - Ananya M

## Project Description

The Student Information Portal is a single-page web application for Northstar
Academy students. It provides a centralized view of student information,
academic progress, class schedules, school notices, and contact details.

## Technologies Used

- HTML5 for the application structure
- CSS3 for responsive styling and layout
- Vanilla JavaScript for interactive behavior, including the student-details
  toggle
- Git and GitHub for version control and collaboration

## Git Branching Strategy

The project uses a feature-branch workflow:

1. Work is developed in separate branches such as `feature/ui`,
   `feature/javascript`, `feature/contact`, and `feature/app-title`.
2. Completed feature branches are merged into `development` for integration.
3. The tested `development` branch is merged into `main`.
4. `production` represents the initial production baseline.

## Pull Requests Created

- **Pull Request #1:** Merged `feature/javascript` into `development`, adding
  the student-details toggle functionality.
- **Pull Request #2:** Merged `development` into `main`, including the portal
  structure, styling, JavaScript behavior, and README updates.

## Merge Conflict

### What caused the conflict?

The conflict occurred because `main` and `development` both contained
different updates to `README.md`. One branch had the original project
requirements and formatting, while the other had expanded project
documentation. A merge also left the `>>>>>>> development` conflict marker in
the file.

### How was it resolved?

The README was consolidated into one complete document. The useful project
details from both versions were retained, the required sections were filled
in, and the stray merge marker was removed.

## How to Run the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/OCTehckie18/student-info-app.git
   cd student-info-app
   ```

2. Open `index.html` directly in a web browser.
3. Use the navigation links to explore the portal. Select **Show Details**
   in the overview section to display additional student information.

No package installation or build step is required.
