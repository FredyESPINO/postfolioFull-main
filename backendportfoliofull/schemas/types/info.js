export default {
  name: 'info',
  title: 'Info',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Information section',
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
