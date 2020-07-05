# Daily News Sense Staff site

[![Build Status](https://semaphoreci.com/api/v1/erikbjoern/newsroom_staff-april-2020/branches/dependabot-npm_and_yarn-websocket-extensions-0-1-4/badge.svg)](https://semaphoreci.com/erikbjoern/newsroom_staff-april-2020)


The objective was to create a news platform that allow for the staff to create, review and publish news, and for users to browse both local and international news, as well as a mobile version of the user client.

All clients make use of roles (journalist, editor, regular user, subscriber) to authorise users on different levels.

The user facing site also features 
* automatic geolocation detection
* live local weather
* ads 
* ability to become a subscriber to access more content
* automatic browser language detection (eng / swe)
* ability to choose between english and swedish UI language
* browsing news by categories such as "economy" and "latest news".

Visit the [live website for staff](https://dailynewssense-staff.netlify.app/) or clone the repo to see the app in action.


## Authors:

[Ali Erbay](https://github.com/kermit-klein) 
[Steve Watson](https://github.com/designerofthing)  
[Pauline Barnades](https://github.com/PaulineBA)  
[Erik Björn](https://github.com/erikbjoern)  
[Marcus Sjöqvist](https://github.com/viamarcus)  
[Jenny Scherr](https://github.com/jysmys)  


## Clone:

To run this app locally, you need to clone both this and the [API](https://github.com/kermit-klein/newsroom_api-april-2020) and follow the instructions there. When the API is running, run `$ yarn start` and visit http://localhost:3002. There's also a [user client](https://github.com/kermit-klein/newsroom_client-april-2020) that uses the same API.

## Testing:

The application was developed test driven using [Cypress](https://cypress.io). To run the tests locally, run `$ yarn cypress` which executes commands for both starting the local server and Cypress, thank to [start-server-and-test](https://github.com/bahmutov/start-server-and-test#readme). Having the API running is not necessary for this, since the tests use mock data.

## Styling:

Styling was done with the help of [Semantic UI for React](https://react.semantic-ui.com/)

## Additional dependencies used:

In addition to the packages already mentioned, we used:
* [j-tockauth](https://github.com/Eth3rnit3/j-tockauth#readme) to simplify the authentication process on front end
* [redux](https://redux.js.org/introduction/getting-started) for application state management
* [axios](https://github.com/axios/axios#readme) for making HTTP calls
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom#readme) for routing


