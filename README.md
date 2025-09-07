### Steps To SetUp The Project

- Clone the project into your local machine from the repo using the below command

```
git clone https://github.com/hemanthkumar-coder/ResumeAnalyzer.git
```

### Setup Backend Project

- To setup backend change directory into backend folder after cloning repo into your local machine using below command

```
cd backend
```

- Install the dependencies of the backend project using below command

```
npm install
```

## Before Running the project Ensure you create below files with required Credentials to run the project

- Create .env file with below credentials

```
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
PORT = <PORT WHERE YOU WANT TO RUN YOUR PROJECT>

DB_USERNAME="YOUR POSTGRES USERNAME"
DB_PASSWORD="YOUR POSTGRES PASSWORD"
DB_PORT="POSTGRES PORT NUMBER"
DB_DATABASE="YOUR POSTGRES DATABASE TO WORK"
```

- Make Sure You Have Postgres installed on your machine

## After Setting up .env file run below command in your backend folder

```
npm run dev
```

- Your will See the server running on specified port on terminal

### Setup of Frotend of Project

- To setup frontend move into frontend folder of the repo (Make you are in root directory of repo before running below command)

```
cd frontend
```

- Run below Command to install all dependencies

```
npm install
```

- Run below command to run the frontend

```
npm run dev
```
