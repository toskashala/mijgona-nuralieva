import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'tt2ed1zq',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema,
  },
})
