# This is research into Mongoose

![MongoDB](https://img.shields.io/badge/-MongoDB-201f22?&logo=MongoDB)
![Mongoose](https://img.shields.io/badge/-Mongoose-201f22?&logo=Mongoose)
![Bcrypt](https://img.shields.io/badge/-Bcrypt-201f22?&logo=Bcrypt)

### Goals

- [x] Learn how to efficiently seed a MongoDB **Database**
- [x] Learn how to define **Schema** and create **Models**
- [x] Learn how to implement search of **Posts/Users**

### File structure

```
    root
    ├── models
    │   └── [modelName].js
    ├── connection.js
    ├── searchPost.js
    ├── searchUser.js
    └── seed.js
```

### .env file variables

- MONGODB_URI
- SALT_ROUNDS

### Setup

1. fork this repository
2. run `pnpm i`
3. create `.env` file and add required variables
4. adjust the seeder to what you need at `./seed.js`
5. run `pnpm seed`
6. to run search(-es) you will have to go to `./search_.js` (\_ is user/post) and run it from there directly

### Scripts

```
    "pretier",    // for keeping code consistent
    "seed"        // for seeding a DB
```
