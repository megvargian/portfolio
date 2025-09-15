<template>
  <div class="w-full flex flex-col p-8 md:p-28 xl:p-36 2xl:p-48">
    <section class="w-full sm:w-3/4 z-10 flex flex-col space-y-5">
  <h1 class="text-4xl lg:text-5xl font-bold">About Me</h1>
  <p class="text-zinc-400 text-xl">My name is <span class="text-white">Mike Kouyoumdjian</span>, I am <span class="text-white">{{ getAge() }} years old</span> <Tooltip><template #trigger="{ attrs }"><button class="p-1 hidden lg:inline-block" v-bind="attrs"><Icon name="lucide:info"/></button></template><span>This value is updated automatically according to my date of birth</span></Tooltip> and I am a <span class="text-white">Full-Stack</span> developer focused on <span class="text-white">Back-end</span>! I live in <span class="text-white">Curitiba - PR</span> and since I was a child I have always loved <span class="text-white">technology</span> and always wanted it to be part of my life.</p>
  <p class="text-zinc-400 text-xl">I started programming at the age of <span class="text-white">12</span>, when I created my <span class="text-white">first website</span>. At <span class="text-white">14</span>, I took a <span class="text-white">programming course</span> that kickstarted my <span class="text-white">career</span>. Since then, I <span class="text-white">fell in love</span> with the field and knew I wanted to make it my profession.</p>
  <p class="text-zinc-400 text-xl">I have worked with <span class="text-white">numerous technologies</span> from <span class="text-white">back-end</span> to <span class="text-white">front-end</span>. The languages I use the most today are <span class="text-white">JavaScript</span>, <span class="text-white">C#</span>, and <span class="text-white">Rust</span>.</p>
  <p class="text-zinc-400 text-xl">Feel free to explore my <span class="text-white">portfolio</span> and learn a bit more about my <span class="text-white">work</span> and <span class="text-white">experience</span>. I am always looking for <span class="text-white">challenges</span> that make me <span class="text-white">grow</span> and <span class="text-white">evolve</span> as a professional.</p>
    </section>
    <section class="w-full z-10 mt-10">
  <h2 class="text-2xl">Skills</h2>
      <Skills/>
    </section>
  </div>
</template>