Create a guest list app using React that allows for:

- [-] Adding a guest using separate first name and last name fields
  - [-] The first name input needs to have a related label containing `First name`
  - [-] The last name input needs to have a related label containing `Last name`
  - [-] A guest should be created upon pressing <kbd>Return</kbd> in the last name input
  - [ ] After a guest is created, both fields need to be cleared again
  - [ ] Newly created guests should be set as **not attending** by default
  - [ ] Each guest (all content and form fields) should be contained inside a div element with the attribute `data-test-id="guest"`
- [ ] Deleting a guest with a button that **either**:
  - [ ] Contains the text `Remove`
  - [ ] Has an `aria-label` attribute which starts with `Remove` (eg. `Remove <first name> <last name>`)
- [ ] Setting a guest as "attending" by clicking on a checkbox
  - [ ] The checkbox needs to have an `aria-label` which contains the text `attending` (eg. `<first name> <last name> attending status`) - the text can be uppercase or lowercase
  - [ ] On the first click of the attending checkbox, the guest needs to be set to attending (the checkbox needs to be checked)
  - [ ] On the second click of the attending checkbox, the guest needs to be set to not attending (the checkbox needs to be unchecked)
- [ ] Set up [this API](https://github.com/upleveled/express-guest-list-api-memory-data-store) and read the docs to understand how you can use it to store and retrieve data:
  - [ ] Save any changes to the API
  - [ ] Load the guest list from this API
- [ ] While the guest list is first loaded from the API (on page load):
  - [ ] Show a loading message containing the text `Loading...`
  - [ ] Disable the form fields

The default view should show all guests in the list.

Some features are similar to [this example](https://todomvc.com/examples/react/#/) - check this out to see how the app should generally behave.

## Stretch TODOs

- [ ] Button to delete all attending guests
- [ ] Filters:
  - [ ] Filter to show only non-attending guests
  - [ ] Filter to show only attending guests
  - [ ] Button to reset filters to again show all of the guests
- [ ] Allow editing first and last names of existing guests
- [ ] Store the guest list permanently
  - [ ] Set up a database with either ElephantSQL (PostgreSQL) or Firebase Cloud Firestore (NoSQL)
  - [ ] Fork the API repo and change it to use the database
- [ ] Allow for saving an "attending deadline" with each guest and if the current date is later than that deadline (and the guest hasn't been set to "attending"), display the guest differently
- [ ] Change the frontend and the API to allow for creating multiple events, each with their own name, location, and guest list
- [ ] Convert your frontend code to TypeScript (see [Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/))
- [ ] Create a favicon that identifies your app: (see [Generating and Adding Favicons](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-design-ux/#generating-and-adding-favicons))
- [ ] Right after [creating your first (empty) Git commit](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-command-line/#4-create-and-push-an-initial-commit), create a new branch. Use this branch to [open a pull request on GitHub](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-git-github/#opening-pull-requests)

## Acceptance Criteria

- [ ] Preflight runs through without errors in your project
  - [ ] Link in your GitHub repo's About section: Netlify deployed website
- [ ] Project has been [imported into CodeSandbox](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-tasks/#codesandbox) and a comment has been added below with the sandbox URL
- [ ] [Drone bot](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-git-github/#writing-commit-messages))

### What to do baby steps

An input that I write text it wont be submited until I fill second input

name last name with submit
boolean true/false

remove button
