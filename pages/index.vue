<template>
  <div class="container flex flex-col">
    <!-- <table class="nav-table">
      <tbody>
        <tr>
          <td>
            <h2>Summary</h2>
          </td>
          <td>
            <h2>
              <NuxtLink to="/experience">Experience</NuxtLink>
            </h2>
          </td>
        </tr>
      </tbody>
    </table> -->

    <section class="about flex flex-col">
      <h2 class="text-lg">A little about me</h2>
      <p>
        Results-driven Software Developer with over 6 years of experience in creating scalable web applications using React, Vue.js, and FastAPI. Skilled in database optimization, cloud integration (AWS, GCP), and RESTful API development. Adept at improving system efficiency and delivering user-focused solutions.
      </p>
    </section>

    <section class="experience flex flex-col">
      <h2 class="text-lg">Experience</h2>
      <div>
        <p class="text-sm flex flex-col">
          <span>Full Stack Developer</span>
          <canvas id="trnsgbl" class="w-sm h-sm"></canvas>
          <span>TransGlobalUS Holding · Oct 2021- Present</span>
        </p>
      </div>
      <div>
        <p class="text-sm flex flex-col">
          <span>Frontend Developer</span>
          <span>D-Link Corporation · Sep 2018 - July 2021</span>
        </p>
      </div>
    </section>

    <section class="education flex flex-col">
      <h2 class="text-lg">Education</h2>
      <p>
        Bachelor of Science in Semiconductor Engineering 
        Kaohsiung University of Science And Technology
        June 2017
      </p>
    </section>
  </div>
</template>

<script setup>
  // const canvas = document.getElementById('trnsgbl');
  // const ctx = canvas.getContext('2d');

  // const img = new Image();
  // img.onload = () => {
  //   ctx.drawImage(img, 0, 0)
  // }
  useHead({
    title: 'Summary - This is ShuWei'
  })
</script>