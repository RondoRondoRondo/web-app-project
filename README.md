# Web App Project

## About
The purpose of the this app is for users to share their favorite recipes with the world. This app follows the CRUD Application Design where we can create, read, update, and delete posts. I built using the MERN stack which has MongoDB as a database, NodeJS and Express as the backend, and React as the frontend library. React-redux is used for feature scalability while material-ui(react) is used for styling. Future iterations of the app will include additional pages, post sorting/searching, and a user authentication feature. 

## TODO

  - FIND: Title/logo for website. 
  - REPLACE: Theme.spacing() in Forms and Posts. *Changed to '4px' currently*
  - REPLACE: createStore in src/index.js with configureStore *Read about this*
  - IMPLEMENT: User authentication. One 'like' per user per post and users can only delete/edit their posts.  
  - STYLE: Make color scheme prettier. 
  - STYLE: Adjust the logo png. 
  - STYLE: Adjust the file input button.
  - STYLE: I want the tags to register as their own 'box' after input in the form. 
  - STYLE: I want the 'message' box in the form to be changed to 'recipe'. Also, want it to be more conducive to a recipe entry. (Same idea as the tags format but as a list)

## Tech Stack 

  - MongoDB
  - Express
  - React
  - NodeJS

## How to Run

  - Download [NodeJS](https://nodejs.org/en/download/)
  - Split Terminal in preferred IDE. 
  - In one terminal use command: `cd web-app-project/client/`
  - In the other terminal use command: `cd web-app-project/server/`
  - In both terminals use command: `npm start`
  - Should automatically open webpage. 
  - *Client* localhost:3000 && *Server* localhost:5000/posts in your web browser otherwise. 

## Additional Resources

#### Material UI Documentation
https://mui.com/material-ui/getting-started/overview/
#### React-redux Documentation
https://react-redux.js.org/tutorials/quick-start
#### Component Styles 
https://gist.github.com/adrianhajdin/d99aaa67124f0de7667fd3937715fb26
#### CSS Background Images
https://bgjar.com
#### HTTP Status Codes Guide
https://www.restapitutorial.com/httpstatuscodes.html