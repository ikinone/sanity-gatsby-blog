export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d9b1873e879ec072887e892',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-f7ifiuai',
                  apiId: '3b0dc60e-708c-4c78-be61-e7c914cbdefd'
                },
                {
                  buildHookId: '5d9b1873f2d05ba9e4db02b4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-g77dn69w',
                  apiId: '49c39741-fecf-4b18-9fce-9f6a422a8714'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ikinone/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-g77dn69w.netlify.com', category: 'apps'}
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
