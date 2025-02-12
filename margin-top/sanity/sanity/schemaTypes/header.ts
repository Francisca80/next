export default {
    name: 'header',
    title: 'Header',
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
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'companyName',
        title: 'Company Name',
        type: 'string'
      },
      {
        name: 'navigation',
        title: 'Navigation',
        type: 'object',
        fields: [
          {
            name: 'about',
            title: 'About Link Text',
            type: 'string'
          },
          {
            name: 'services',
            title: 'Services Link Text',
            type: 'string'
          },
          {
            name: 'cases',
            title: 'Cases Link Text',
            type: 'string'
          },
          {
            name: 'contact',
            title: 'Contact Link Text',
            type: 'string'
          },
          {
            name: 'schedule',
            title: 'Schedule Button Text',
            type: 'string'
          }
        ]
      }
    ]
  }