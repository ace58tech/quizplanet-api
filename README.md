# QuizPlanet

Challenge your knowledge with QuizPlanet.

![QuizPlanet Logo](qp01.png)

## Getting Started

### Requirements

- Node.js ^18.15.0

### Initial setup
1. Clone the repo

2. Run 

```bash 
npm install
```

3. SignUp to [MongoDB Atlas](https://www.mongodb.com/atlas/database).
  - Create a free cluster
  - On success click connect, connect by driver, select Node and copy connection string.

4. Run 

```bash 
cp .env.template .env 
```

6. Paste connection string into  ***MONGO_CONNECTION_STRING***

7. You can optionally specify port number into ***PORT***

## Development

Run the following to start the server.

```bash
npm run dev
```

### Seeds
