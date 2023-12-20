export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project name',
      type: 'string',
    },
    {
      title: 'Lenguage',
      name: 'lenguage',
      type: 'string',
      options: {
        list: [
          {title: 'EN', value: 'en'},
          {title: 'ES', value: 'es'},
        ],
      },
    },
    {
      name: 'title',
      title: 'Title name',
      type: 'string',
    },
  ],
}
