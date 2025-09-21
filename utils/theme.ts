import { ref, watch } from 'vue';

export const theme = ref<'light' | 'dark'>('dark');

export function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
}

export function setTheme(newTheme: 'light' | 'dark') {
  theme.value = newTheme;
}

watch(theme, (val) => {
  if (val === 'light') {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  }
});

export function getButtonClass() {
  return theme.value === 'light'
    ? 'bg-white text-black border-zinc-300 hover:bg-zinc-100 hover:text-black'
    : 'bg-zinc-900 text-white border-zinc-800 hover:brightness-125';
}
