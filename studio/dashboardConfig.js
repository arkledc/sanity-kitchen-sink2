export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '637949e71645e02ba58bee95',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-bs8saggz',
                  apiId: '91fb72f0-001c-451d-bcc6-9c8b46bdf843'
                },
                {
                  buildHookId: '637949e71645e02ba58bee96',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-1datmtvr',
                  apiId: '683314d0-35f1-4685-a90d-9f61f24204ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arkledc/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-1datmtvr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
