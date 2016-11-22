
  // 1. set up MVC
  // * create a view for the homepage
  // * set up a router
  // * read api docs & set up models to manage data

  // 2. set up flux
  // * create actions module
  // * create store (pub)
  // * tell view to become a (sub)

VIEW (listening for broadcasts) --> ACTIONS --> STORE (((broadcast)))

  // 3. create backend for faves
  // * set up schema for a fave
  // * set up api routes
  // * test with postman

  // 4. integrate front-end with backend
  // * create actions to store faves (model.save / POST)
  // * create actions to fetch faves (coll.fetch / GET)

  // 5. styling
  // * use a css framework

  // 6. integrate user functionality x
  // * create a login screen to register & login users x
  // * create a button/link to log a user out x
  // * modify schema for faves to include a user ID x
  // * save with a user ID when i save a new fave x
  // * fetch according to the current user's ID when fetching faves 
        // we will use a query string on the end of the url
        // like so: ?user_id=[MY ID HERE]
        // which on the server becomes req.query, which looks like {
            user_id: [USER ID HERE]
        }
