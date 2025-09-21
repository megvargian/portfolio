<template>
  <div class="w-full flex flex-col p-8 md:p-28 xl:p-36 2xl:p-48">
    <section class="w-full sm:w-3/4 z-10 flex flex-col space-y-5">
  <h1 :class="['text-4xl lg:text-5xl font-bold', theme === 'light' ? 'text-black' : 'text-white']">About Me</h1>
  <p :class="['text-xl', theme === 'light' ? 'text-zinc-700' : 'text-zinc-400']">Hi, I'm <span :class="theme === 'light' ? 'text-black' : 'text-white'">Mike Kouyoumdjian</span>, a passionate Full-Stack Software Engineer with 5 years of experience. My tech stack includes Vue.js, Nuxt, WordPress, PHP, TypeScript, JavaScript, Go, Node.js, Vite, TailwindCSS, SASS, Strapi, Nx, Nodemon, jQuery, JWT, Gutenberg, Express.js, EJS, Apache, Nginx, MySQL, MongoDB, Supabase, Firebase, Postgres, Heroku, Netlify, Vercel, Google Cloud, Git, GitHub, GitLab, Bitbucket, Adobe XD, Figma, Twilio, Trello, Docker, and more.</p>
  <p :class="['text-xl', theme === 'light' ? 'text-zinc-700' : 'text-zinc-400']">I am proficient in unit testing using Jest and Vitest, and I love building seamless, intuitive user interfaces. My focus is on delivering clean, efficient code and solving complex challenges. I am a proactive problem-solver with a collaborative mindset, always striving to create user-friendly solutions.</p>
  <p :class="['text-xl', theme === 'light' ? 'text-zinc-700' : 'text-zinc-400']">Feel free to connect with me on <a href="https://www.linkedin.com/in/mike-kouyoumdjian-b6b428189/" target="_blank" :class="theme === 'light' ? 'text-blue-700 underline' : 'text-blue-400 underline'">LinkedIn</a> or <a href="mailto:kouyoumdjianmike@gmail.com" :class="theme === 'light' ? 'text-red-700 underline' : 'text-red-400 underline'">Email</a>.</p>
    </section>
    <section class="w-full z-10 mt-10">
  <h2 class="text-2xl"
      :class="theme === 'light' ? 'text-black' : 'text-white'">Skills</h2>
      <Skills/>
    </section>
  </div>
</template>