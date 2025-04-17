<template>
  <div id="app" :class="{ dark: isDarkMode }">
    <nav class="banner" @click="navigateHome">
      <div class="banner-container">
        <router-link to="/" class="banner-title">Tom Svensson</router-link>
        <button @click.stop="toggleDarkMode" class="toggle-button">
          {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
        </button>
      </div>
    </nav>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false 
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    navigateHome(event) {
      if (event.target.closest(".toggle-button")) {
        return;
      }
      this.$router.push("/");
    }
  },
  provide() {
    return {
      isDarkMode: () => this.isDarkMode,
      toggleDarkMode: this.toggleDarkMode
    };
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif; /* Updated font-family */
  height: 100%; 
}

#app {
  min-height: 100%; 
  display: flex;
  flex-direction: column; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9f9f9;
  transition: background-color 0.3s, color 0.3s;
}

#app.dark {
  background-color: #151e27;
  color: #d8e9fc; 
}

nav.banner {
  top: 0;
  left: 0;
  width: 100%; 
  z-index: 1000; 
  background-color: #f8f9fa;
  padding: 20px 0;
  transition: background-color 0.3s, box-shadow 0.3s;
  cursor: pointer; 
}

nav.banner .banner-container {
  max-width: 1000px; 
  margin: 0 auto; 
  padding: 0 20px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav.banner .banner-title {
  font-weight: bold;
  color: #5d87b1;
  text-decoration: none;
  font-size: 1.5rem;
}

nav.banner .toggle-button {
  background-color: #5d87b1;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

nav.banner .toggle-button:hover {
  background-color: #3b6a91;
}

#app.dark nav.banner {
  background-color: #10151a;
}

#app.dark nav.banner .banner-title {
  color: #6fa8dc; 
}

#app.dark nav.banner .toggle-button {
  background-color: #6fa8dc; 
  color: #2c3e50;
}

#app.dark nav.banner .toggle-button:hover {
  background-color: #468ed1; 
  color: #2c3e50; 
}


</style>
