<script setup lang="ts">

  import { watch } from 'vue';
  import { theme, toggleTheme, getButtonClass } from '../utils/theme';
  const sidebarOpened = useState('sidebarOpened', () => false);
  const toggleSidebar = () => {
    sidebarOpened.value = !sidebarOpened.value
  }

  function handleThemeToggle() {
    toggleTheme();
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      sidebarOpened.value = false;
    }
  }

  // Prevent body scroll on mobile when sidebar is open
  watch(sidebarOpened, (opened) => {
    if (opened && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  const sidebarPages = [
    {
      href: "/",
      icon: "material-symbols:home-outline",
      title: "Home",
    },
    {
      href: "/about",
      icon: "material-symbols:account-circle",
      title: "About",
    },
    {
      href: "/projects",
      icon: "material-symbols:work-outline",
      title: "Projects",
    },
  ]

  const sidebarLinks = [
    {
      href: "https://github.com/megvargian",
      icon: "mdi:github",
      title: "Github",
    },
    {
      href: "https://www.linkedin.com/in/mike-kouyoumdjian-b6b428189/",
      icon: "mdi:linkedin",
      title: "LinkedIn",
    },
    {
      href: "mailto:kouyoumdjianmike@gmail.com",
      icon: "material-symbols:mail",
      title: "E-Mail",
    },
  ]

</script>

<template>

  <!-- mobile -->
  <button
    @click="toggleSidebar"
    class="flex fixed md:hidden z-40 items-center gap-2 text-white bg-zinc-900 border border-zinc-800 rounded-xl p-3 hover:brightness-125 transition-all bottom-4 left-4"
  >
    <Icon
      name="ic:outline-keyboard-command-key"
      color="white"
    />
  </button>

  <!-- mobile -->
  <nav
    class="flex flex-col items-center justify-center space-y-2 fixed md:hidden h-screen w-4/5 p-4 text-xl transition-all ease-in-out duration-300 z-30 overflow-auto"
    :class="[sidebarOpened ? 'translate-x-0' : '-translate-x-full', theme === 'light' ? 'bg-white text-black' : 'bg-zinc-950 text-white']"
  >
    <h1 class="text-xl w-full text-center">Mike Kouyoumdjian</h1>
    <ul class="flex flex-col items-center space-y-2 mt-4 w-full" :class="theme === 'light' ? 'text-zinc-700' : 'text-zinc-400'">
      <h3 class="text-base w-full text-center">Navigation</h3>
      <SidebarMobileLink
        v-for="page in sidebarPages"
        :href="page.href"
        :icon="page.icon"
        :title="page.title"
        @click="toggleSidebar"
        class="w-full flex justify-center"
      />
      <li class="mt-4 w-full flex justify-center">
        <button @click="handleThemeToggle" :class="'flex items-center gap-2 px-3 py-2 rounded-lg border justify-center ' + getButtonClass()" :aria-label="'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'">
          <Icon :name="theme === 'dark' ? 'material-symbols:dark-mode' : 'material-symbols:light-mode'" />
        </button>
      </li>
    </ul>
    <ul class="flex flex-col items-center space-y-2 mt-4 w-full" :class="theme === 'light' ? 'text-zinc-700' : 'text-zinc-400'">
      <h3 class="text-base w-full text-center">Social</h3>
      <SidebarMobileSocialMediaLink
        v-for="link in sidebarLinks"
        :href="link.href"
        :icon="link.icon"
        :title="link.title"
        @click="toggleSidebar"
        class="w-full flex justify-center"
      />
    </ul>
  </nav>

  <!-- desktop -->
  <nav
    class="hidden md:flex fixed h-screen shadow-xl border-r text-xl z-20 transition-all duration-300 p-4 items-center justify-center"
    :class="[sidebarOpened ? 'w-72' : 'w-24', theme === 'light' ? 'bg-white text-black border-zinc-300' : 'bg-zinc-950 text-white border-zinc-900']"
  >
    <button
      @click="toggleSidebar"
      class="hidden md:flex absolute bg-zinc-900 border border-zinc-800 rounded-full -right-[15px] top-[calc(50vh-15px)] items-center justify-center p-1 transition-all duration-200 hover:brightness-150"
      :aria-label="sidebarOpened ? 'Close navigation sidebar' : 'Open navigation sidebar'"
    >
      <Icon v-if="sidebarOpened" name="ic:round-keyboard-arrow-left" color="white"/>
      <Icon v-else="sidebarOpened" name="ic:round-keyboard-arrow-right" color="white"/>
    </button>

    <div
      :class="[sidebarOpened ? 'flex flex-col items-start justify-start' : 'flex flex-col items-center justify-center', 'space-y-2 mt-4 w-full', theme === 'light' ? 'text-zinc-700' : 'text-zinc-400']"
    >
      <h3 v-if="sidebarOpened" class="text-base anim-fade w-full text-left">Navigation</h3>
      <ul :class="[sidebarOpened ? 'flex flex-col items-start justify-start' : 'flex flex-col items-center justify-center', 'space-y-2 w-full']">
        <SidebarDesktopLink
          v-for="page in sidebarPages"
          :href="page.href"
          :icon="page.icon"
          :title="page.title"
          :opened="sidebarOpened"
          @click="toggleSidebar"
          :class="sidebarOpened ? 'w-full flex justify-start' : 'w-full flex justify-center'"
        />
        <li :class="sidebarOpened ? 'mt-4 w-full flex justify-start' : 'mt-4 w-full flex justify-center'">
          <button @click="toggleTheme" :class="'flex items-center gap-2 px-3 py-2 rounded-lg border ' + getButtonClass()" :aria-label="'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'">
            <Icon :name="theme === 'dark' ? 'material-symbols:dark-mode' : 'material-symbols:light-mode'" />
          </button>
        </li>
      </ul>
      <h3 v-if="sidebarOpened" class="text-base anim-fade w-full text-left">Social</h3>
      <hr v-else class="w-full border-zinc-800">
      <ul :class="[sidebarOpened ? 'flex flex-col items-start justify-start' : 'flex flex-col items-center justify-center', 'space-y-2 w-full']">
        <SidebarDesktopSocialMediaLink
          v-for="link in sidebarLinks"
          :href="link.href"
          :icon="link.icon"
          :title="link.title"
          :opened="sidebarOpened"
          @click="toggleSidebar"
          :class="sidebarOpened ? 'w-full flex justify-start' : 'w-full flex justify-center'"
        />
      </ul>
    </div>
  </nav>
</template>

<style lang="css">
  .anim-fade {
    animation: opacity-fade 300ms forwards linear;
  }

  @keyframes opacity-fade {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
</style>