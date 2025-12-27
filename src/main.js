import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import './styles/main.scss';
import App from './App.vue';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'pmTheme',
    themes: {
      pmTheme: {
        dark: true,
        colors: {
          primary: '#d72638',
          secondary: '#f4c430',
          accent: '#7a43ff',
          background: '#0f1115',
          surface: '#141925',
        },
      },
    },
  },
});

createApp(App).use(vuetify).mount('#app');
