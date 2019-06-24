This is a simple Movie portal website. 
Technology used is NodeJs and MongodbAtlas for the database.

Functionality :
1. accessing movie informations from existing free movie database (OMDBAPI API).
2. Save the selected/secific movie information 
3. give comments to specific movie and save it to database
4. See all comments

APIs
- GET /movies
to retrieve all the movie informations that has been saved to the database.
- GET /movies/:id
to retrieve one specific movie from the database
- GET /api/search
to serach movies form the OMDBAPI
- POST /movies
to save specific movies from the OMDBAPI

- GET /comments
to retrieve all saved comments in the application database
- POST /comments
to save comments in the application database

How to run :
1. npm install
2. make .env file and put these variables
    DB_CONNECTION = CHANGE_TO_YOUR_DB_CONNECTION
    API_OMDB = CHANGE_TO_YOUR_API_KEY
3. once done, npm start

Screenshot:


Note: get your API-Key in OMDBAPI 