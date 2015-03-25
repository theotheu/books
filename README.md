Description
===========
This demo is an exercise of MEAN with books.

Video available at http://goo.gl/9aXbXa

Presentation available at http://goo.gl/tnmOeD

**Your assignment: Fix the TODO's**


Setup
=====
Installation for development
----------------------------

Create a directory `workspaces` in your home directory.
```
mkdir ~/workspaces
```

Clone the repository with
```
git clone https://github.com/theotheu/books.git ~/workspaces/books
```

Go to the working directory
```
cd ~/workspaces/books
```

See the README in ~/workspaces/books/data how to import the initial seed


Configuration
----------
Copy ```config.js.default``` to ```config.js```.
```sh
cp ~/workspaces/books/server/config/config.js.default ~/workspaces/books/server/config/config.js
```

Change the database, port and emailaddress.

Example
```javascript
module.exports = {
    development: {
        db: 'mongodb://localhost/books-dev',
        port: 3000,
        debug: true
    }
    , test: {
        db: 'mongodb://localhost/books-tst',
        port: 3000,
        debug: false
    }
    , production: {
    }
}
```

Install node modules
----------
The archive is without the node modules.

Install with
```sh
cd ~/workspaces/books/server
npm install
```

Export variable to set environment
----------------------------------
Node.js starts default with the development environment.

To set explicitly the environment, use an environment variable. With this, you do not have to change a single line of code for switching environments.

Valid values are defined in the config/config.js file (development, test, production).

```export NODE_ENV=development```


supervisor
----------
Make sure you have `nodemon` installed - with the global option

```sh
npm install -g nodemon
```

Use it with
```
nodemon
```

Tests
----------
See the README in `~/workspaces/books/tests` how to perform tests



Instructions to prepare a deployment
===================================

- Verify that you have a explanatory README.md
  - Installation instructions
  - Configuration instructions
  - Import data instructions
  - Run instructions
  - Test instructions
- Export data
  - Make sure that the output directory exist ```mkdir ~/workspaces/books/data```
  - Make an export of your data with mongodump ```mongodump -d books -o ~/workspaces/books/data```
  - Create in ~/workspaces/books/data a README.md with import instructions.
  - Import instructions
- Tests
  - static-analyzer with 0 errors
  - Unit tests with 0 errors
  - End-to-end tests with 0 errors
- Push the repository



