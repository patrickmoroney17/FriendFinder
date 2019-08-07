Friend Finder


Overview

Please enjoy hours of fun and joy with my take on a "FriendFinder". This app will take users' surveys, and then compare their answers based on some scoring thing-ama-jig with those who have chosen to take the survery. The app will then display the name of the person  with the best overall match.

The app is based on using Express to handle routing.

Before You Begin
Create a folder called FriendFinder. Inside the folder, organize your directories so it matches the following:

    app
        data
            friends.js
        public
            home.html
            survey.html
        routing
            apiRoutes.js
            htmlRoutes.js
    node_modules
    package.json
    server.js


Instructions

The survey has 10 questions from the instructions, with users answering each answer on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

The server.js requires the npm packages express and path.

The htmlRoutes.js file includes routes to:

- A GET Route to /survey which displays the survey page.
- A default route which displays the home page.

Your apiRoutes.js file should contain two routes:

- A GET route with the url /api/friends. This will be used to display a JSON of the default friend friends entered to date.
- A POST routes to /api/friends. This will be used to handle incoming user entered survey results. This route will also be used to handle the compatibility logic.

The default friend is an array as displayed below:

	{
        "name":"Ahmed",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
            ]
	}

To determine the user's most compatible friend using the following logic:

- Convert each user's results into a simple array of numbers (ex: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]).

- Compare the difference between current user's scores against those from other users entered so far. 

- Add up the differences to calculate the difference runningTotal.

    Example:
    User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
    Total Difference: 2 + 1 + 2 = 5

    This logic will be performed for all users that have so far taken the survey.

- The app takes the absolute value of the differences aka - no negative differences (quite a pain to program / debug).

- The closest runningTotal will be the user with the least amount of difference.

- The app will calculate the least different user's difference and will pop-up the name at the bottom of the survey.