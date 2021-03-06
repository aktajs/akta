import { defineConfig } from 'vite';
import { AktaPlugin } from '@akta/plugin';
import { MarkdownPlugin } from '@akta/plugin-markdown';
import remarkShikiTwoslash from 'remark-shiki-twoslash';
import theme from './theme.json';

export default defineConfig({
  plugins: [
    AktaPlugin(),
    MarkdownPlugin({
      remarkPlugins: [
        [remarkShikiTwoslash.default, { theme }]
      ]
    })
  ],
  server: {
    watch: {
      ignored: ['!**/node_modules/@akta/**']
    }
  },
  optimizeDeps: {
    include: [
      '@vueuse/head',
      'vue',
      'vue-router'
    ],
    exclude: [
      '@akta/app',
      '@akta/plugin',
      '@akta/plugin-markdown',
      '@akta/server'
    ]
  }
});
