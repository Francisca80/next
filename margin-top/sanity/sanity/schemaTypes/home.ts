import { Rule } from '@sanity/types';

export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
      {
        name: 'language',
        title: 'Language',
        type: 'string',
        options: {
          list: [
            { title: 'English', value: 'en' },
            { title: 'Dutch', value: 'nl' }
          ]
        },
        validation: (rule: Rule) => rule.required()
      },
      {
        name: 'hero',
        title: 'Hero Section',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Main hero title (e.g., "Creating space for bolder designs")',
            validation: (rule:Rule) => rule.required()
          },
          {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: 'Subtitle text (e.g., "Margin_top")',
            validation: (rule:Rule) => rule.required()
          },
          {
            name: 'image',
            title: 'Hero Image',
            type: 'image',
            options: {
              hotspot: true
            },
            description: 'Background image for the hero section',
            validation: (rule:Rule) => rule.required()
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'hero.title',
        language: 'language'
      },
      prepare({ title, language }: { title: string | undefined; language: string }) {
        return {
          title: title || 'No title',
          subtitle: `Language: ${language}`
        }
      }
    }
  }