<template>
  <div class="wrapper">
    <header class="header">
      <h1>
        <NuxtLink to="/">{{ config.title }}</NuxtLink>
      </h1>
      
      <img v-if="config.logo" :src="config.logo" alt="Logo" class="logo" />
      
      <p class="description">{{ config.description }}</p>
      <p class="additional-info" v-html="config.additionalInfo"></p>
      
      <div class="social-links">
        <a :href="config.igUrl" target="_blank" rel="noopener">
          <img :src="config.instagram" alt="Instagram" />
        </a>
        <a :href="config.linkedinUrl" target="_blank" rel="noopener">
          <img :src="config.linkedin" alt="LinkedIn" />
        </a>
      </div>
    </header>
    
    <section class="content">
      <slot />
    </section>
    
    <footer class="footer">
      <p>
        <small>
          Hosted on GitHub Pages &mdash; 
          Theme by <a href="https://github.com/orderedlist">orderedlist</a>
        </small>
      </p>
    </footer>
  </div>
</template>

<script setup>
const config = {
  title: 'This is ShuWei',
  description: 'Open to work.',
  additionalInfo: 'Key skills<br>#Javascript,&nbsp;#Angular,&nbsp;#PHP,&nbsp;#Python,&nbsp;#CSS,&nbsp;#SCSS,&nbsp;#RESTful API',
  logo: '/logo.png',
  instagram: '/icons8-instagram.svg',
  linkedin: '/icons8-linkedin.svg',
  igUrl: 'https://www.instagram.com/theonlyshuwei/',
  linkedinUrl: 'https://www.linkedin.com/in/shuwei-kuo/'
}

// Theme control logic
onMounted(() => {
  const date = new Date()
  console.log('its ', date.getHours(), ' oclock')
  if (date.getHours() >= 18 || date.getHours() < 6) {
    document.documentElement.setAttribute("nighteye", "active")
  } else {
    document.documentElement.setAttribute("nighteye", "active")
  }
})
</script>