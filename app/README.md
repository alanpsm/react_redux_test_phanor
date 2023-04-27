# React redux content fetch test
This is a simple test to check if you can work with react components, redux states and fetching content
The objective is to include a simple modal, call that modal using a button and change the contents of the modal using a async action
There are different ways of accomplishing this task, but this repository is the closest to the code of our actual product which you will be working on

Docs:
* antd as the library
    * Modal component: https://4x.ant.design/components/modal/
    * Button component: https://4x.ant.design/components/button/

Setup:
* Mockoon to mock an api endpoint: https://mockoon.com/
    * Set mockoon port to 3001, as the default 3000 will be used by this app

* Chrome redux dev tools: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

* Create a new instance of chrome so allow requests to go through mockoon https://simplelocalize.io/blog/posts/what-is-cors/#3-disable-browser-cors-checks

* Install the dependencies using 'yarn' inside the app folder

* Run the app using 'yarn start' inside the app folder

Steps:
* Create a new branch with your firstname

* Make the modal close when the close button is clicked
    * This should be done by dispatching an action to change the modalOpen state

* Create a get api in mockoon that returns a json object with title and description keys

* Change the contents of the modal when clicking the "Change info" button
    * This should be done by dispatching a async action that fetches the info from the api and updates the modalTitle and modalDescription states

* Create a new stylesheet for the modal
    * Change the modal to be aligned vertically at the center of the screen
    * Change the modal content to be aligned to the right
    * Change the background color of the modal title
    * Change the modal to be fullscreen on resolutions lower than 1024x768

* By the end, push your changes with a relevant commit message

* Open a PR with your changes to master