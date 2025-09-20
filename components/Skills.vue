<script setup lang="ts">
  const mainSkills = [
    { icon: "tabler:brand-vue", title: "Vue.js" },
    { icon: "tabler:brand-nuxt", title: "Nuxt" },
    { icon: "mdi:wordpress", title: "WordPress" },
    { icon: "mdi:language-php", title: "PHP" },
    { icon: "tabler:brand-typescript", title: "TypeScript" },
    { icon: "tabler:brand-javascript", title: "JavaScript" },
    { icon: "mdi:language-go", title: "Go" },
    { icon: "mdi:nodejs", title: "Node.js" },
    { icon: "tabler:brand-vite", title: "Vite" },
    { icon: "mdi:tailwind", title: "TailwindCSS" },
    { icon: "mdi:sass", title: "SASS" },
    { icon: "", title: "Strapi" },
    { icon: "", title: "Nodemon" },
    { icon: "mdi:jquery", title: "jQuery" },
    { icon: "", title: "JWT" },
    { icon: "", title: "Gutenberg" },
    { icon: "simple-icons:express", title: "Express.js" },
    { icon: "", title: "EJS" },
    { icon: "", title: "Apache" },
    { icon: "", title: "Nginx" },
    { icon: "", title: "MySQL" },
    { icon: "", title: "MongoDB" },
    { icon: "", title: "Firebase" },
    { icon: "", title: "Postgres" },
    { icon: "", title: "Heroku" },
    { icon: "", title: "Netlify" },
    { icon: "mdi:google-cloud", title: "Google Cloud" },
    { icon: "mdi:git", title: "Git" },
    { icon: "mdi:github", title: "GitHub" },
    { icon: "mdi:gitlab", title: "GitLab" },
    { icon: "mdi:bitbucket", title: "Bitbucket" },
    { icon: "", title: "Adobe XD" },
    { icon: "", title: "Figma" },
    { icon: "", title: "Twilio" },
    { icon: "mdi:trello", title: "Trello" },
    { icon: "mdi:docker", title: "Docker" },
  ];
</script>

<template>
  <ul class="mt-2 grid grid-cols-2 lg:grid-cols-3 gap-1 rounded-xl overflow-hidden">
    <li
      v-for="skill in mainSkills"
      class="w-full bg-zinc-900 p-5 space-x-2 flex items-center first:rounded-tl-xl last:rounded-br-xl border border-transparent hover:border-zinc-800"
    >
      <Icon
        :name="skill.icon"
        class="text-4xl text-zinc-500"
      />
      <span>
        {{ skill.title }}
      </span>
    </li>
  </ul>
</template>