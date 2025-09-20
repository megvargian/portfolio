import { ref } from 'vue';

export const theme = ref<'light' | 'dark'>('dark');

export function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
}

export function setTheme(newTheme: 'light' | 'dark') {
  theme.value = newTheme;
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
}
