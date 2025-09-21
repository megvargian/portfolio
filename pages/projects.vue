<template>
  <div class="w-full flex flex-col p-8 md:p-28 xl:p-36 2xl:p-48">
    <section class="w-full z-10 flex flex-col space-y-5">
  <h1 :class="['text-4xl lg:text-5xl font-bold', theme === 'light' ? 'text-black' : 'text-white']">Projects</h1>
      <div class="hidden md:flex w-full p-4 rounded-lg"
        :class="theme === 'light' ? 'bg-zinc-100 border border-zinc-300 text-zinc-700' : 'bg-neutral-400/10 border border-neutral-400 text-neutral-300'">
  <p>💡 Hover over the project to see more interaction options.</p>
      </div>
      <ProjectContainer/>
    </section>
  </div>
</template>