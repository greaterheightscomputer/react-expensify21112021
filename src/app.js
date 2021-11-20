import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "react-dates/lib/css/_datepicker.css";

//store
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));

//- open all your components one after the order to remove all unnecessary comments
//- startup jest test suit like this
//C:\react-course-projects032021\xpensify-app6>yarn test -- --watch
//- startup dev-server
//C:\react-course-projects032021\xpensify-app6>yarn run dev-server

//Deploying your app
//Installing Git
//- Git is a free and open source distributed version control system designed to handle from
//small to very large projects speed and efficiency.
//- open terminal then run this command
//C:\react-course-projects032021\xpensify-app6>git --version
//- its will return git version 2.21.0.windows.1
//- if you see the above output its mean you have already install git before, if you don't see
//the above output then google search git-scm.com, click on Download button choice based on your
//operating system.
//- after Download and installing Git then check the version again like this
//C:\react-course-projects032021\xpensify-app6>git --version

//How GitHub Work
//- Initial our project with Git inorder to create either local or remote repository.
//A repository is a git folder that is created on your project implicity by initializing git.
//- Untracked files -> immediately we initialize git on our project, we will have all our files.
//- Staged changes -> when issue git add. command, its will move all the untracked files to
//stage changes level. Staged changes is still not track by git but let you build up your stage
//for saving or commiting.
//- Commits -> when issue git commit -m "project", its permanently save your files to either
//local or remote git repository. Its will generate a code like 1ab49 which mean will have a
//track files.
//- Unstaged Changes -> its contain the modify files that git have being tracking. We need to
//use git add . command to move files from unstage changes to stage changes.

//Integrating Git into our Project
//- initialize our project with git from the root of your project like this
//C:\react-course-projects032021\xpensify-app6>git init
//its return this Initialized empty Git repository in C:/react-course-projects032021/xpensify-app6/.git/
//- open your project on the file explore to view the .git folder which is the local repository
//on your system.
//- C:\react-course-projects032021\xpensify-app6>git status
//the above command will move all your project files to untracked files.
//- create file called .gitignore in the root folder of your project
//- sometime the files may be created automatically for you by vscode.
//- .gitignore file is use to add files or folders that you did not want to push to either
//local or remote github.
//- add node_modules/ onto the .gitignore file inorder to not to push this folder to github
//becos its can be easily regenerated
//- C:\react-course-projects032021\xpensify-app6>git status
//to view the untracked files
//- move our file from untracked files to stage changes area by typing this command
