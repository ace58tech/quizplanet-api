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
### How to resolve MongooseServiceSelectionError
![MongooseServiceSelectionError example image](./error_images/mongoose%20error.jpg)

Steps to resolve the above solution
> 1. Login into your mongoDB atlas
> 2. Go to the **Network Access** 
> 3. Click on *EDIT* of the ***IP Address*** with a *My IP Address* comment 
> 4. Click on *ALLOW ACCESS FROM ANYWHERE* and click **Confirm**

### Seeds
