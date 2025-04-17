<template>
  <div class="project-detail" :class="{ dark: isDarkMode() }">
    <div class = "container">
    <h1>{{ project.title }}</h1>
    <div class="text-container">
      <p v-html="project.description"></p>
    </div>

    <div class="images-container">
      <div class="images">
        <img
          v-for="image in project.images"
          :src="image"
          :alt="project.title"
          :key="image"
          class="thumbnail"
          @click="openImage(image)"
        />
      </div>
    </div>

    <div class="repo-link" v-if="project.repoLink">
      <a :href="project.repoLink" target="_blank" rel="noopener noreferrer">
        Gå till GitHub-repo
      </a>
    </div>
  </div>

    <div class="go-back">
      <button @click="goBack" class="back-button">Tillbaka</button>
    </div>

    <div v-if="selectedImage" class="modal" @click="closeImage">
      <div class="modal-content" @click.stop>
        <img
          :src="selectedImage"
          :alt="project.title"
          class="large-image"
          @click="closeImage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import projects from "@/data/projects";

export default {
  name: "ProjectView",
  data() {
    return {
      project: null,
      selectedImage: null 
    };
  },
  created() {
    const projectId = parseInt(this.$route.params.id, 10);
    this.project = projects.find((p) => p.id === projectId);
  },
  setup() {
    const isDarkMode = inject("isDarkMode");
    return { isDarkMode };
  },
  methods: {
    openImage(image) {
      this.selectedImage = image; 
    },
    closeImage() {
      this.selectedImage = null; 
    },
    goBack() {
      this.$router.go(-1); 
    }
  }
};
</script>

<style>
.project-detail {
  min-height: 100vh; 
  padding: 20px;
  background-color: #e4e3e3;
  color: #2c3e50;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.project-detail .container {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 5px 20px;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.project-detail.dark {
  background-color: #000000;
  color: #f9f9f9;
}

.project-detail.dark .container {
  background-color: #10151a;
  color: #d8e9fc; 
}


.text-container {
  max-width: 1000px;
  margin: 0 auto; 
  padding: 0 20px; 
  text-align: justify; 
}

.text-container h1 {
  margin-bottom: 20px;
  font-size: 2rem;
}

.text-container p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.images-container {
  max-width: 1000px;
  margin: 0 auto; 
  padding: 10px; 
  margin-bottom: 10px;
}

.images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); 
  gap: 10px;
  margin-top: 20px;
}

.thumbnail {
  width: 100%;
  height: 150px; 
  object-fit: cover; 
  border-radius: 8px;
  object-position: 50% 20%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.thumbnail:hover {
  transform: scale(1.05);
}

.repo-link {
  padding: 20px;
  text-align: center;
}

.repo-link a {
  color: #5d87b1;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.repo-link a:hover {
  color: #3b6a91;
}

.project-detail.dark .repo-link a {
  color: #6b95c2; 
}

.project-detail.dark .repo-link a:hover {
  color: #4a9edb;
}

.go-back {
  margin-top: 20px;
  text-align: center;
}

.back-button {
  background-color: #5d87b1;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #3b6a91;
}

.project-detail.dark .back-button {
  background-color: #6fa8dc;
  color: #2c3e50;
}

.project-detail.dark .back-button:hover {
  background-color: #4a9edb;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.project-detail.dark .modal-content {
  background-color: #151e27; 
  color: #f9f9f9; 
}

.modal-content img.large-image {
  max-width: 100%; 
  max-height: 95vh; 
  border-radius: 8px;
  cursor: pointer; 
}
</style>