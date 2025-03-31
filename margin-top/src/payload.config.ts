// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb' // database-adapter-import
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Journal } from './collections/Journal'
import { Pages } from './collections/Pages'
import { Case } from './collections/Case'
import  { Hero } from './collections/Hero'
import { About } from './collections/About'
import { en } from '@payloadcms/translations/languages/en'
import { nl } from '@payloadcms/translations/languages/nl'
import { Service } from './collections/Services'
import { Branding } from './collections/Branding'
import { Development } from './collections/Development'
import { Ux } from './collections/Ux'
import { Hosting } from './collections/Hosting'
import { Ai } from './collections/Ai'
import { Cookies } from './collections/Cookies'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Journal, Pages, Hero, Service, Case, About, Branding, Development, Ux, Hosting, Ai, Cookies],
  i18n: {
    fallbackLanguage: 'en',
    supportedLanguages: {en, nl},
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  // database-adapter-config-end
  sharp,
})
