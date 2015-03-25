Import instructions
===========
1. Replace `books` with the name of your database.
1. Import the data (per collection or in one step)
1. Done

Import seed data in one step
```
mongorestore -d books ~/workspaces/books/data/seed
```

## WINDOWS ONLY

Restoring a MongoDB database from just a .bson & .metadata.json file

1. Start _mongod.exe_, it is located in the MongoDB installation directory, which should be _"C:/mongodb/"_. Keep it open, this is your database program that needs to be running to access all databases.
2. With a new command prompt window (CMD.exe), go to the _'bin'_ directory in your MongoDB installation directory, which should be _"C:/mongodb/bin"_. Keep this command prompt open!
3. Copy the __path of the folder__ where the .bson and .metadata.json files are located. For example: _"C:\Users\Brian\Desktop\books-master\data\s12345678"_
4. Enter the following command into the CMD window you opened in step two:

__mongorestore -d pSTUDENTNUMBER "paste the path that you copied at step 3 here".__
(NOTE the sSTUDENTNUMBER, it's 's' + your student number, so s12345678 for example)

The result will be something like this: __mongorestore -d s12345678 "C:\Users\Brian\Desktop\books-master\data\seed"__

Press ENTER and you're done. The database is now stored in your local MongoDB database.

Use Robomongo to connect to your local database and open the database you just created (should be 'p' + your studentnumber), open collections and see the new collection created.

