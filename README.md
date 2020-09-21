<h1>Weather Control</h1>
 
An application to observe the temperature in differents cities and places. Built with React, JavaScript and CSS.
 
<h2>Installation and Setup Instructions</h2>
 
You will need node and npm installed globally on your machine.
 
<h3>Installation:</h3>
 
<code>npm install</code>
 
<h3>To Start Server:</h3>
 
<code>npm start</code>
 
<h3>To Visit App:</h3>
 
<code>localhost:3000/</code>
 
<h2>Objectives</h2>
 
This application was made to fulfill some parameters, such as:
<ul>
<li>1 – Showing a map. The application must show a map and a button “Search”.</li>
<li>2 – Adding a pin. The user should be able to place a pin on the map and click on the button “Search”.</li>
<li>3 – Consuming an API. The application needs to call API considering the LAT/LON where the user placed the pin and search for the closest 15 cities (API: http://api.openweathermap.org/data/2.5/find?lat={LAT}&lon={LON}&cnt=15&APPID= <APP_ID>).</li>
<li>4 – Creating an app ID. Please sign up for an app ID (https://home.openweathermap.org/users/sign_up).</li>
<li>5 – Listing cities. The application needs to show the list of the city names and the user should be able to visualize more information about the city temperature.</li>
<li>6 – Selecting a city. When the user picks a city, the application opens a new window showing more details:
    <ul>
    </li>i. Name of the selected city</li>
    </li>ii. Minimum temperature (Celsius)</li>
    </li>iii. Maximum temperature (Celsius) </li>
    </ul>
</li>
</ul>
 
<h2>Usage</h2>
 
With the app running you need to click in a place on the map. That will set a marker in the chosen place, the marker is represented by a thermometer icon. 
 
With the makers placed you need to click on the search icon, represented by a magnifying glass, this will give the 15 near places of this marker in right side of the screen. To give a quick look at the temperature of the place that you marked you can click again at the maker icon, or if you want to look at the temperature of the 15 nearest places of the marker just hover with the mouse in one of the cities listed at the right side.
 
<h2>Reflection</h2>
 
To accomplish this challenge some tools were used. 
 
The map was done with the aid of Google Maps Api.
 
<code>@react-google-maps/api</code>
 
This was the simplest api available and there was no cost for a great number of accesses, the adequate amount for a project with the goal of sample programming skills.
 
The weather api was provided by http://api.openweathermap.org. 
 
For the better presentation and layout organization, the Ant Design framework (<code>antd</code>) was used, using antd's grid made the app more responsive and also this framework is easy to implement. Other components by this framework weren't used to demonstrate a better mastery of the subject.
 
Axios (<code>axios</code>) was used as a connection library. Axios is an asynchronous HTTP client that is largely used in the market.
 
For animations rc-queue (<code>rc-queue-anim</code>)was used. It gave a pleasant feeling to the side buttons.
 
For good practices and security all the api keys were stored in a different file in a local environment, local since there was no intent of online distribution.
 
The code was made keeping in mind the best practices for react and using a functional approach using hooks. Using stateless components in most of the project, leaving the state control to the app page.
 
Redux wasn't used for this project having the performance in consideration, since the size of the project and the low manipulation of props was implemented. The Redux could be used as an alternative to remove the manipulation of the props in the app file thus creating a stateless app.
  
The main challenge was to use the google maps api to provide the information necessary to the app and maintain a pleasant visual aesthetics. The technologies implemented in this project are React, VanillaJS, JSX, and CSS.