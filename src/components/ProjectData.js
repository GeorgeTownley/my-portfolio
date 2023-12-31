const projects = [
  {
    id: 4,
    image: "./factorio.png",
    title: "Factorio Server",
    description:
      "This project is a Docker container setup for hosting a Factorio server. It demonstrates the use of Docker for containerizing applications, in this case, a popular game server.",
    tags: ["Docker", "Containers", "Server Config"],
    demoLink: "",
    repoLink: "https://github.com/GeorgeTownley/FactorioServerContainer",
  },

  {
    id: 2,
    image: "./crypto wizard.png",
    title: "Crypto Wizard",
    description:
      "This Single Page Application (SPA) is a dynamic web application that provides real-time cryptocurrency data. It features a responsive table displaying the current rates, 24-hour rate changes, and full names of the top 20 cryptocurrencies. By fetching data from the Coinlayer API, it offers users updated cryptocurrency market insights. The application integrates historical data comparison to calculate and display the 24-hour change in rates, enriching user experience with valuable market trends.",
    tags: ["React", "API"],
    demoLink: "https://stellar-chaja-9d3edb.netlify.app/",
    repoLink: "https://github.com/GeorgeTownley/Crypto-App",
  },

  {
    id: 3,
    image: "./globe.png",
    title: "Flight Scanner",
    description:
      "Currently under construction. An app that uses the opensky API to fetch current flight data then display the route and location of the aircraft on the globe (rendered using globe.gl)",
    tags: ["React", "API", "Globe GL", "3D"],
    demoLink: "https://demo-link.com",
    repoLink: "https://github.com/GeorgeTownley/flight-globe-app",
  },

  {
    id: 1,
    image: "./fanfare.png",
    title: "Fanfare - Discord Bot",
    description:
      "A Discord bot made to solve the problem of not knowing who had joined discord calls. The Bot assigns mp3 files to usernames and plays the relevant mp3 file when a user joins a voice channel.",
    tags: ["SDK", "Node", "javascript"],
    demoLink: "",
    repoLink: "https://github.com/GeorgeTownley/discord-bot",
  },
];

export default projects;
