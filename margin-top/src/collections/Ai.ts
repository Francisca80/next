import type { CollectionConfig } from 'payload'
export const Ai: CollectionConfig = {
    slug: 'ai',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },          
        {
            name: 'slug',
            type: 'text',
            required: true,
        },                      
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },     
        {
            name: 'content',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
            } ]   },                                                                                                                            
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },  
        {
            name: 'status',
            type: 'select',
            options: ['draft', 'published'],
            required: true,
        },  
        {
            name: 'createdAt',
            type: 'date',
            required: true,
        },  
        {
            name: 'updatedAt',
            type: 'date',
            required: true,
        },  
        
        
        
    ]
}
