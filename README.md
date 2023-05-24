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
  > **Please copy the *username* and *password* and store in a file. It will be needed for login**
  - After successful cluster creation, click the Atlas logo on the left side of the header
  - A project screen will be displayed.
  - Click create ***New Project*** button and follow prompt to create a new project.
  - After successfully creating a project, naviagte into the project if you were not navigated to it by default.
  - In the project screen, click the ***Browse Collections*** tab to the right of the cluster name.
  - On the new screen click on ***Create Database*** tab.
  - Follow prompt to create the database to be used to store collections of documents
  - Navigate back to the Project Directory using the breadcrumbs beneath the header
  - Click connect
  - Click ***connect by driver***, select Node and copy connection string.

4. Run 

```bash 
cp .env.template .env 
```

6. Paste connection string into  ***MONGO_CONNECTION_STRING***
> *Format:**mongodb+srv://<username>:<username_password>@cluster0.urtwo46.mongodb.net/<database_name>?retryWrites=true&w=majority**

7. You can optionally specify port number into ***PORT***

## Development

Run the following to start the server.

```bash
npm run dev
```

To get a clear understanding of what is to be built please refer to the [UserStories.md File](UserStories.md)

### How to resolve MongooseServiceSelectionError
![MongooseServiceSelectionError example image](./error_images/mongoose%20error.jpg)

Steps to resolve the above solution
> 1. Login into your mongoDB atlas
> 2. Go to the **Network Access** 
> 3. Click on *EDIT* of the ***IP Address*** with a *My IP Address* comment 
> 4. Click on *ALLOW ACCESS FROM ANYWHERE* and click **Confirm**

### Seeds
