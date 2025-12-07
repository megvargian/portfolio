<template>
  <div class="w-full flex flex-col p-8 md:p-28 xl:p-36 2xl:p-48 !py-12">
    <section class="w-full sm:w-2/3 z-10">
      <h1 :class="['text-2xl lg:text-3xl', theme === 'light' ? 'text-zinc-700' : 'text-zinc-400']">
        <span :class="theme === 'light' ? 'text-black' : 'text-white'">Hello!</span> My name is
        <span :class="theme === 'light' ? 'text-black' : 'text-white'">Mike Kouyoumdjian</span>. I am a
        <span :class="theme === 'light' ? 'text-black' : 'text-white'">Software Developer</span>.
      </h1>
      <div class="flex flex-row mt-4 space-x-3">
        <a
          href="/Mike_Kouyoumdjian_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          :class="['px-3 py-2 rounded-lg text-xl border border-zinc-800 transition-all duration-500 space-x-2 flex items-center', theme === 'light' ? 'bg-white text-black hover:bg-zinc-100 hover:text-black' : 'bg-zinc-900 text-white hover:bg-transparent hover:text-white']"
        >
          <Icon name="mdi:file-code" />
          <span class="font-semibold text-base"> Resume </span>
          <Icon name="ic:round-keyboard-arrow-right" />
        </a>
        <a
          href="mailto:kouyoumdjianmike@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          :class="['px-3 py-2 rounded-lg text-xl border border-zinc-800 transition-all duration-200 space-x-2 flex items-center', theme === 'light' ? 'bg-white text-black hover:bg-zinc-100 hover:text-black' : 'bg-zinc-900 text-white hover:brightness-150']"
        >
          <Icon name="mdi:file-code" />
          <span class="font-semibold text-base"> E-Mail </span>
          <Icon name="ic:round-keyboard-arrow-right" />
        </a>
      </div>
    </section>
    <section class="w-full z-10 mt-12">
      <div class="flex flex-row items-center justify-between">
  <h2 :class="['text-xl sm:text-2xl', theme === 'light' ? 'text-black' : 'text-white']">Featured Projects</h2>
        <NuxtLink
          to="/projects"
          aria-label="View all projects - See Mike Kouyoumdjian's complete portfolio of web development projects"
          title="View all projects"
          :class="['px-2 sm:px-3 py-1 rounded-lg text-xl border border-zinc-800 transition-all duration-200 space-x-1 flex items-center', theme === 'light' ? 'bg-white text-black hover:bg-zinc-100 hover:text-black' : 'bg-zinc-900 text-white hover:brightness-150']"
        >
          <span :class="['font-normal sm:font-semibold text-base', theme === 'light' ? 'text-black' : 'text-white']">View All Projects</span>
          <Icon name="ic:round-keyboard-arrow-right" />
        </NuxtLink>
      </div>
      <HighlightedProjects />
    </section>
  </div>
</template>
