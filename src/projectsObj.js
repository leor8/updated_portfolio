let allProjects = {
  0: {
    projectName: "Market Buddy",
    projectClassName: "marketbuddy",
    projectDescriptionOverview: "A Smart money-saving grocery shopping list maker for everyday use. Our app compares different prices in different grocery stores for the same product. You can construct a shopping list and compare the prices with all grocery stores nearby before you decide where to go for your day to day grocery shops.",
    projectDescriptionChallenge: "Using react router was one of the most challenging parts of the project since redux is not used. React router should simply be used as a conditional component rendering rather than setting the URL with item id and dynamically change them. We also used react router as a backend alternative which increased the challenge of the project. We had to retrieve data from the database every time there is rendering as a solution but that defeats the purpose of using react.js.",
    projectDescriptionLearned: "I mastered using react.js by completing this project along with all the essential parts of developing a component-based framework. Data-driven frontend framework was also made clearer to me as an addition to HTML family tree frontend framework (JQuery).",
    projectImageURL: "https://github.com/leor8/Market-Buddy-Web/raw/master/docs/Screen%20Shot%202018-08-10%20at%202.04.31%20PM.png",
    projectGitURL: "https://github.com/leor8/Market-Buddy-Web",
    projectStack: ["node.js", "react.js", "scss"],
    projectCategory: ["backend"],
    projectHTML: "projects/marketBuddy.html"
  } ,
  1: {
    projectName: "Market Buddy",
    projectClassName: "marketbuddyAndroid",
    projectDescriptionOverview: " A Smart money-saving grocery shopping list maker for everyday use. Our mobile app compares different prices in different grocery stores for the same product. You can construct a shopping list and compare the prices with all grocery stores nearby before you decide where to go for your day to day grocery shops.",
    projectDescriptionChallenge: "Using HTTP request API rather than HTTPS API is one of the challenges I encountered while developing this app. Walmart API only offers HTTP requests which by default android studio prohibits. The solution is to play around with android studio’s setting to accept HTTP request by setting.",
    projectDescriptionLearned: "I learnt how to develop a fully functioning Android app using native Android language including accessing local storage vs using an external database.",
    projectImageURL: "src/android_market.png",
    projectGitURL: "https://github.com/leor8/Market-Buddy-Android",
    projectStack: ["Java"],
    projectCategory: ["mobile"],
    projectHTML: "projects/marketBuddyAndroid.html"
  },
  2: {
    projectName: "Ant Racing",
    projectClassName: "ant",
    projectDescriptionOverview: "Ant racing is a two-player platformer game where each player controls an ant avatar and try to reach the top of the map before the opponent. Along the way, players can pick up powerups to move faster, jump higher or slow down the enemy. There are also snowstorms that can hit ant and freezes the ant as well. The game is built with Unity2D (C#).",
    projectDescriptionChallenge: "One challenge is to display powerups when picked up and reflects on both functional perspectives and interface level. I had to create a different C# class for simple inventory save that contains the UI images and a boolean variable for if a powerup has been picked up/used or not.",
    projectDescriptionLearned: "This was my first attempt to Unity2D and I learnt the basic of developing a game in Unity as well as C# unity library. It is also an addition to my portfolio in terms of a game designer.",
    projectImageURL: "https://github.com/leor8/Ant-Racing/raw/master/docs/menu.jpeg?raw=true",
    projectGitURL: "https://github.com/leor8/Ant-Racing-Final",
    projectStack: ["Unity"],
    projectCategory: ["game"],
    projectHTML: "projects/ant.html"
  },
  3: {
    projectName: "Chatty",
    projectClassName: "chatty",
    projectDescriptionOverview: "Chatty is a real-time chatting app that allows users from different geographical location to join a chat room and sends out messages to other people in the chat room. ",
    projectDescriptionChallenge: "Since this project is my first attempt to react.js, I had problem understanding using props and states when I started working on the project. I had to do tons of researches to get my head around how props and states work both within components and communicating them through components. ",
    projectDescriptionLearned: "I understood how component-based frontend frameworks work and how powerful react.js is alongside with the challenges of modern real-time application communication methods using WebSockets.",
    projectImageURL: "src/chatty.png",
    projectGitURL: "https://github.com/leor8/chattyApp",
    projectStack: ["node.js", "react.js"],
    projectCategory: ["frontend"],
    projectHTML: "projects/chatty.html"
  },
  // 4: {
  //   projectName: "Portfolio",
  //   projectDescription: "A pure frontend portfolio that also showcase understanding of transferring data by exporting objects",
  //   projectImageURL: "./port.png",
  //   projectGitURL: "https://github.com/leor8/chattyApp",
  //   projectStack: ["HTML", "CSS", "JavaScript"],
  //   projectCategory: ["frontend"],
  //   projectHTML: "projects/portfolio.html"
  // },
  4: {
    projectName: "Tweeter",
    projectClassName: "tweeter",
    projectDescriptionOverview: "Tweeter is an application that allows users to post words in a online community. Users can see the date or how long ago a tweet is posted as well as the icon and name of the person who posted it. The project is built HTML/CSS as the frontend, express.js as the backend and MongoDB as data storage. Communication between the backend and the frontend is by using ajax. ",
    projectDescriptionChallenge: "Using MongoDB is considered a challenge in this project as it is a document based database and follows a different pattern than the more popular relational database. I had to review through a bunch of videos and posts to fully understand MongoDB.",
    projectDescriptionLearned: "I mastered JQuery from this project as the project contains a wide usage of JQuery. Also, this was the first full-stack project I got to use and practice AJAX calls along.",
    projectImageURL: "https://github.com/leor8/tweeter/raw/master/docs/WechatIMG694.jpeg?raw=true",
    projectGitURL: "https://github.com/leor8/tweeter",
    projectStack: ["HTML", "CSS", "node.js"],
    projectCategory: ["frontend"],
    projectHTML: "projects/tweeter.html"
  },
  5: {
    projectName: "ToDoBot",
    projectClassName: "todo",
    projectDescriptionOverview: "Todo Bot is a SMART todo list to keep track of restaurants, movies, books or purchases you want to keep track of. Using Wolfram API to classify your todo item Todo Bot will then add your todo item to the appropriate category and provide useful information. The front end is built with JQuery and AJAX call.",
    projectDescriptionChallenge: "The major challenge is getting different information for different categories. For instance, for movies, we are getting the ratings, titles, for restaurants, we are getting the ratings, name, and address, for books we are getting the author and title. So different category will have different sections. As a solution, we had to use 4 different APIs for 4 different categories as well as using some default APIs in case something can’t be categorized by google. ",
    projectDescriptionLearned: "I worked mainly on the front end with a bit backend for this project. It is another opportunity for me to keep growing on my frontend skill while still working on the backend. I also got to work with multiple APIs that I had not yet worked with before this project.",
    projectImageURL: "https://github.com/leor8/midterm_todo_list/raw/master/Screenshots/Index.JPG",
    projectGitURL: "https://github.com/leor8/midterm_todo_list",
    projectStack: ["HTML", "CSS", "JavaScript"],
    projectCategory: ["backend"],
    projectHTML: "projects/todo.html"
  }

}












