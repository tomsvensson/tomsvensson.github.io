<template>
  <div class="landing-page" :class="{ dark: isDarkMode() }">

    <section class="container about">
      <h1>Om mig</h1>
      <p>
    Hej! Mitt namn är Tom Svensson och jag är en passionerad utvecklare som gillar att skapa moderna och användarvänliga webbapplikationer. 
    Genom kod får jag möjlighet att lösa problem och omvandla idéer till fungerande lösningar - vilket är något jag verkligen brinner för.
    Jag har erfarenhet av både front- och backendutveckling. <br><br>

    Min bakgrund är inom Systemvetenskap från Umeå Universitet och två års arbete som applikationskonsult på Sopra Steria. 
    Där fick jag möjlighet att jobba med Microsoft Dynamics 365 CRM och bli certifierad PL-200: MS Power Platform Functional Consultant.<br><br>
    <strong>Språk:</strong> C#, Python, JavaScript, TypeScript, SQL<br>
    <strong>Backend:</strong> .NET, REST API, MVC, Node.js<br>
    <strong>Frontend:</strong> HTML, CSS, Vue.js, Express Handlebars <br>
    <strong>Databashantering:</strong> SQL Server, MongoDB, Entity Framework<br>
    <strong>Verktyg:</strong> Visual Studio, Visual Studio Code, Git, Testdriven utveckling (TDD)<br>

  </p>
      <button @click="scrollToBottom" class="scroll-button">Kontakta mig</button>
    </section>

    <section class="container projects">
      <h2>Mina Projekt</h2>
      <ul>
        <router-link
          v-for="(project, index) in projects"
          :key="project.id"
          :to="'/projekt/' + project.id"
          class="project-item-link"
        >
          <li :class="{ 'project-item': true, 'reverse-layout': index % 2 !== 0 }">
            <div class="project-image-wrapper">
              <img :src="project.images[0]" :alt="project.title" class="project-image" />
            </div>
            <div class="project-details">
              <h3>{{ project.title }}</h3>
              <p v-html="project.summary"></p>
            </div>
          </li>
        </router-link>
      </ul>
    </section>

    <section class="container contact">
      <h2>Kontakt</h2>
      <p>Har du frågor eller vill samarbeta? Kontakta mig gärna!</p>
      <ul>
        <li>
      LinkedIn: 
      <a href="https://www.linkedin.com/in/tomsv/" target="_blank" rel="noopener noreferrer">
        https://www.linkedin.com/in/tomsv/
      </a>
    </li>
        <li>E-mail: <a :href="'mailto:' + emailUser + '@' + emailDomain">
          {{ emailUser }}@{{ emailDomain }}</a></li>
        <li>Telefon: +46 76 283&nbsp;43&nbsp;83</li>
      </ul>
    </section>
  </div>
</template>

<script>
import { inject } from "vue";
import projects from "@/data/projects";

export default {
  name: "HomeView",
  data() {
    return {
      projects,
      emailUser: "tom_svensson",
      emailDomain: "outlook.com"
    };
  },
  setup() {
    const isDarkMode = inject("isDarkMode");
    return { isDarkMode };
  },
  methods: {
    scrollToBottom() {
      const contactSection = document.querySelector("section.container.contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
};
</script>

<style>
.landing-page {
  line-height: 1.6;
  padding: 20px;
  background-color: #e4e3e3;
}


.landing-page.dark {
  background-color: #000000;
  color: #6fa8dc; 
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 40px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.landing-page.dark .container {
  background-color: #10151a;
  color: #d8e9fc;
}

.about h1,
.projects h2,
.contact h2 {
  margin-top: 0px; 
  margin-bottom: 20px; 
  color: #2c3e50;
}

.landing-page.dark .about h1,
.landing-page.dark .projects h2,
.landing-page.dark .contact h2 {
  color: #d8e9fc; 
}

.about p{
  text-align: center;
}
.about h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.landing-page.dark .about h1 {
  color: #d8e9fc; 
}


.projects h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.landing-page.dark .projects h2 {
  color: #d8e9fc; 
}

.projects ul {
  list-style: none;
  padding: 0;
}

.project-item-link {
  text-decoration: none;
  color: inherit;
}

.project-item {
  display: flex;
  align-items: flex-start; 
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #c5c5c5;
  border-radius: 8px;
  transition: box-shadow 0.3s ease, transform 0.3s ease; 
  
}

.landing-page.dark .project-item {
  border: 1px solid #424242;
}

.project-item.reverse-layout {
  flex-direction: row-reverse; 
}

.project-item:hover { 
  transform: scale(1.02); 
}

.landing-page.dark .project-item:hover {

  transform: scale(1.02); 
}

.project-image-wrapper {
  flex: 1;
  text-align: center;
}

.project-image {
  max-width: 90%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}


.project-details {
  flex: 2;
  padding: 0 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
}

.project-item.reverse-layout .project-details {
  text-align: left; 
}

.project-item:not(.reverse-layout) .project-details {
  text-align: right; 
}

.project-details h3 {
  margin: 0 0 10px;
  color: #2c3e50;
}

.landing-page.dark .project-details h3 {
  color: #d8e9fc; 
}

.project-details p {
  margin: 0 0 10px;
  color: #2c3e50; 
}

.landing-page.dark .project-details h3 {
  color: #d8e9fc; 
}

.landing-page.dark .project-details p {
  color: #d8e9fc; 
}

.project-details .project-link {
  color: #5d87b1;
  text-decoration: none;
  font-weight: bold;
}

.project-details .project-link:hover {
  text-decoration: underline;
}

.contact h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.landing-page.dark .contact h2 {
  color: #c4e1ff;
}

.contact ul {
  list-style: none;
  padding: 0;
}

.contact a {
  color: #5d87b1;
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}

.landing-page.dark .contact a {
  color: #6b95c2; 
}

.scroll-button {
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: #5d87b1;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.scroll-button:hover {
  background-color: #3b6a91;
}

#app.dark .scroll-button {
  background-color: #6fa8dc;
  color: #2c3e50;
}

#app.dark .scroll-button:hover {
  background-color: #468ed1;
}
</style>
