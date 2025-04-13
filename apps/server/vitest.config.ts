import path from 'node:path';
import { defineWorkersProject } from '@cloudflare/vitest-pool-workers/config'

export default defineWorkersProject(() => {
  return {
    test: {
      globals: true,
      alias: {
        '@server': path.resolve(__dirname, './src'),
      },
      poolOptions: {
        workers: { wrangler: { configPath: './wrangler.jsonc', environment: 'test' } },
      },
    },
  }
})