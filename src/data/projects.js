export default [
  {
    id: 1,
    title: "TODO-app",
    summary: "En webbapplikation för att hantera att-göra-uppgifter, byggd med <strong>Vue.js</strong> för frontend, <strong>ASP.NET Core Web API</strong> för backend och <strong>Entity Framework</strong> för databasåtkomst.",
    description: "Applikationen erbjuder en front- och backend för att hantera TODO-uppgifter. Användare kan skapa nya uppgifter, markera dem som färdiga och ta bort de som inte längre behövs. Frontend är byggd med <strong>Vue.js</strong> och kommunicerar med ett <strong>ASP.NET Core Web API</strong>. <br><br>För datalagring används <strong>Entity Framework</strong>, som hanterar databaskommunikation och automatiskt initierar en <strong>SQL Server</strong>-databas vid första körning, om den inte redan finns.",
    images: [require("@/assets/images/image1.png"), require("@/assets/images/image2.png")],
    repoLink: "https://github.com/tomsvensson/TodoApp"
  },
  {
    id: 2,
    title: "Min Blogg",
    summary: "En webbapplikation för att skriva, läsa, redigera och ta bort blogginlägg, byggd med <strong>Vue.js</strong> för frontend, <strong>ASP.NET Core Web API</strong> för backend och <strong>SQL Server</strong> för databasåtkomst.",
    description: "En plattform för att hantera och visa blogginlägg. Användare kan skapa nya inlägg, redigera befintliga och ta bort de som inte längre behövs. Frontend är byggd med <strong>Vue.js</strong> och kommunicerar med ett <strong>ASP.NET Core Web API</strong>. <br><br>Varje inlägg visas på startsidan, med summering av innehållstexten. För att läsa hela inlägget kan användaren klicka in på varje enskilt inlägg. Fältvalidering sker i frontend för att säkerställa korrekt användarinmatning. Fält får inte lämnas tomma, titeln får inte överstiga 100 tecken, och innehållet får inte överstiga 5000 tecken.<br><br>För datalagring används <strong>SQL Server</strong>, och om en databas inte finns vid körning av projektet skapas den automatiskt genom backendlogik som hanterar initieringen.",
    images: [
      require("@/assets/images/image3.png"),
      require("@/assets/images/image4.png"),
      require("@/assets/images/image5.png"),
      require("@/assets/images/image6.png")
    ],
    repoLink: "https://github.com/tomsvensson/BloggApp"
  },
  {
    id: 3,
    title: "Restaurang Vue",
    summary: "En restauranghemsida skapad med <strong>Vue.js</strong> med lunchmeny, öppettider och kontaktinformation.",
    description: "En simpel och responsiv restauranghemsida skapad med <strong>Vue.js</strong>. Sidan presenterar lunchmeny, öppettider och kontaktinformation.",
    images: [
      require("@/assets/images/image7.png"),
      require("@/assets/images/image8.png"),
      require("@/assets/images/image9.png")
    ],
    repoLink: "https://github.com/tomsvensson/RestaurangVue"
  },
  {
    id: 4,
    title: "Recept-app",
    summary: "En webbapplikation för att skapa, visa, redigera och ta bort recept, byggd med <strong>Node.js</strong>, <strong>MongoDB</strong> samt <strong>Express</strong> + <strong>Handlebars</strong>.",
    description: "En webbapplikation för att skapa, visa, redigera och ta bort recept. Applikationen är byggd med <strong>Node.js</strong> och <strong>Express</strong> för att hantera serverlogik, <strong>Handlebars</strong> för serverrendering av dynamiska HTML-sidor, och <strong>MongoDB</strong> för datalagring. Fokus ligger på enkelhet och funktionell CRUD-hantering av recept.",
    images: [require("@/assets/images/image10.png"), require("@/assets/images/image11.png")],
    repoLink: "https://github.com/tomsvensson/Recipe-Exphbs"
  },
  {
    id: 5,
    title: "Träningsdagbok",
    summary: "En webbapplikation för att logga träningstillfällen, byggd med <strong>ASP.NET Core MVC</strong> och <strong>SQL Server</strong>.",
    description: "En webbapplikation för att logga och hantera träningstillfällen. Applikationen är byggd med <strong>ASP.NET Core MVC</strong> och använder <strong>SQL Server</strong> för datalagring. Användare kan registrera nya pass, se historik samt redigera eller ta bort tidigare inlägg. Gränssnittet är utformat med fokus på enkelhet och struktur.",
    images: [require("@/assets/images/image12.png"), require("@/assets/images/image13.png")],
    repoLink: "https://github.com/tomsvensson/TrainingApp"
  },
  {
    id: 8,
    title: "Webbutik",
    summary: "En enkel webbutik, byggd med <strong>Vue.js</strong>. Applikationen inkluderar en produktkatalog och en kassa, utan backend.",
    description: "En enkel webbutik byggd med <strong>Vue.js</strong>. Applikationen inkluderar en produktkatalog och en kassa, där användare kan välja produkt och genomföra köp. Applikationen är frontend only.",
    images: [
      require("@/assets/images/image18.png"),
      require("@/assets/images/image19.png"),
      require("@/assets/images/image20.png")
    ],
    repoLink: "https://github.com/tomsvensson/WebstoreVue"
  },
  {
    id: 10,
    title: "Företagshemsida",
    summary: "Enkel företagshemsida byggd med <strong>ASP.NET Core MVC</strong>.",
    description: "En enkel företagshemsida byggd med <strong>ASP.NET Core MVC</strong>. Sidan innehåller en startsida, en <q>Om oss</q>-sida, samt en <q>Meet the Team</q>-sektion med bilder, namn, rollbenämningar och rollbeskrivningar. Det finns även en <q>Kontakta oss</q>-sida med ett kontaktformulär och en integrerad karta.",
    images: [
      require("@/assets/images/image23.png"),
      require("@/assets/images/image24.png"),
      require("@/assets/images/image25.png")
    ],
    repoLink: "https://github.com/tomsvensson/BusinessPage"
  },
  {
    id: 7,
    title: "Receptlista",
    summary: "En sida för att visa recept från en <strong>SQL-databas</strong>, byggd med <strong>ASP.NET Core MVC</strong>.",
    description: "En webbapplikation byggd med <strong>ASP.NET Core MVC</strong> för att visa recept från en <strong>SQL-databas</strong>. Applikationen visar en lista med alla recept, där varje recept kan visas i en detaljvy. <br><br>Om ingen databas finns, skapas den automatiskt vid första körning. Om databasen är tom, genereras exempelrecept med tillhörande bilder för att ge användaren en upplevelse direkt.",
    images: [require("@/assets/images/image16.png"), require("@/assets/images/image17.png")],
    repoLink: "https://github.com/tomsvensson/RecipeApp"
  },
  {
    id: 9,
    title: "Portfolio",
    summary: "En enkel portfolio-sida byggd med <strong>Node.js</strong>, <strong>Express</strong> & <strong>Handlebars</strong>.",
    description: "En simpel portfolio-sida byggd med <strong>Node.js</strong>, <strong>Express</strong> och <strong>Handlebars</strong>. Sidan innehåller en startsida, en 'Om mig'-sektion, en presentation av tidigare projekt samt kontaktuppgifter.",
    images: [require("@/assets/images/image21.png"), require("@/assets/images/image22.png")],
    repoLink: "https://github.com/tomsvensson/Portfolio-exphbs"
  },
  {
    id: 6,
    title: "Luffarschack",
    summary: "Ett konsolbaserat spel av luffarschack (tic-tac-toe), utvecklat i <strong>C#</strong> med spelmekanik för två spelare.",
    description: "Ett konsolbaserat spel av luffarschack (tic-tac-toe), utvecklat i <strong>C#</strong>. Spelet erbjuder spelmekanik för två spelare, där spelarna turas om att placera sina symboler (X eller O) på ett 3x3-rutnät. <br><br>Spelet innehåller funktioner för skriva in namn på spelarna, slumpmässigt välja vem som går först, att avgöra vinnaren, samt möjligheten att spela om. Poängsystemet håller reda på hur många matcher varje spelare har vunnit.",
    images: [require("@/assets/images/image14.png"), require("@/assets/images/image15.png")],
    repoLink: "https://github.com/tomsvensson/TicTacToe"
  }
];