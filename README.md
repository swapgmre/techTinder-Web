# TechTinder-Web

- Created a Vite + React project
- Removed unecessary code and create a app
- Installed Tailwind CSS and configure
- Install Daisy UI (component library) and configure
- Add NavBar component to App.jsx
- Create separate component for NavBar and import in App.js
- Install react-router-dom
- Create BrowserRouter > Routes > Route=/Body > RouteChildren
- Create an Outlet in Body Component

- Create a login page
- Install axios
- CORS - install cors in backend => add middleware with configurations :origin: frontEnd URL and credentials :true
- Whenever we are making API call so pass {withCredentials:true}
- Install Redux Toolkit & react-redux
- configureStore => Provider => createSlice => add Reducer to store
- Add redux devtools in chrome
- login and see if your data is coming properly in the store
- Navbar should update as soon as user logins in
- Refactor our code to add constants file + create a components folder
- You should not be able to access other routes without login
- if token is not present, redirect user to login page
- Logout Feature
- Get the feed and add the feed in the store
- Build the userCard on feed
- Edit Profile Feature
- Show toast message on save profile
- New Page - See all my connections
- New Page - Sell all my connections Requests
- Feature - Accept/Reject Conection Requests

Remaining:

- Send/Ignore the user card from feed
- Signup New User
- E2E Testing

# Body

----NavBar
----Route=/ =>feed
----Route=/login => Login
----Route=/connections => Connections
----Route=/profile => Profile
