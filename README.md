# User-Details-React-js
### preview :
<b>Live link</b> - [User-Details-React-js](https://oyws58.csb.app/)
### Description :

The web application created using create-react-app is a user card grid layout with a navbar displaying a brand name. The application allows users to fetch user data from an API and display it in a grid format.

The navbar consists of a brand name and a "Get Users" button. When the "Get Users" button is clicked, an API call is made to retrieve user data from the server. The application uses the axios library to handle the HTTP request to the API endpoint "https://reqres.in/api/users?page=1".

<p align="center">
  <img  src="https://github.com/Tara-Choudhary/User-Details-React-js-/assets/103630608/1ade61e3-e4d5-44f7-9884-c0232fd3fc26" width="600" height="500" >
</p>
While the API fetches the data, a loader is displayed to indicate that the data is being loaded. Once the data is fetched successfully, it is stored in the component's state. The user data consists of information such as the user's avatar, first name, last name, and email.

The user data is then rendered in a grid layout using the UserGrid component. Each user is represented by a UserCard component, which displays the user's avatar, full name, and email.

Custom CSS is applied to style the components. The navbar has a background color and is aligned to the center. The user grid is displayed using CSS grid, with four columns and a gap between the cards. The user cards have a background color, padding, and are centered with the user's avatar, name, and email displayed.

By utilizing create-react-app, axios, and custom CSS, this web application provides a responsive and visually appealing user interface for fetching and displaying user data in a grid layout.
