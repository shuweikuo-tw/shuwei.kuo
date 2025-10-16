<template>
  <div>
    <table class="nav-table">
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
    </table>

    <br />

    <section class="about">
      <h2>A little about me</h2>
      <p>
        3 years experience as a front-end developer for the Nuclias team with D-Link.
        Developing web applications with D-Link switch to present real-time device status.
        Finished Google Foobar challenge 4th level with Python.
      </p>
      
      <p>
        Self-taught and highly self-motivated on programming languages, love learning new things and try new things.
      </p>
      
      <p>
        Work for my freelance clients for SEO services.
      </p>
    </section>

    <br />

    <section class="education">
      <h2>Education</h2>
      <p>
        <strong>National Kaohsiung University of Science and Technology</strong><br>
        BS, Microelectronic Engineering 2012 - 2016<br>
        Studied with semiconductor and SoC fields.
      </p>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Summary - This is ShuWei'
})
</script>