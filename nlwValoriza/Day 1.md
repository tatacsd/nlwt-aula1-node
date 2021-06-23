## Day 1

```
yarn init -y

yarn add typescript -D

yarn tsc --init


```

Add typescript modules

```
yarn add typescript -D
```

Inicialize tsc

```
yarn tsc --init
```

To node undestand the tsc we need to convert it to js

```
yarn tsc
```

Express.js

```
yarn add express
```

Dependency to dont be typing yarn tsc all the time

```
yarn add ts-node-dev -D
```

and add a script in the json

```
"scripts": {
   "dev": "ts-node-dev src/server.ts"
 }
```

so now just need to run and it load automatically like nodemon

```
yarn dev
```

/\*

- \*\* Methods:
- GET => To find and get information (search for something)
- POST => To insert an information (create an information)
- PUT => Change an information (address, name, any data)
- DELETE => remove a data
- PATCH => Change a specific change (user's name only)
  \*/
