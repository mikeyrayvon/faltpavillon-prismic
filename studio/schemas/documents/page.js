export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'content',
      type: 'portableText',
      title: 'Body content',
    },
    {
      name: 'seoMeta',
      title: 'SEO & Metadata',
      type: 'seoMeta'
    },
  ],

  initialValue: {
    seoMeta: {
      _type: 'seoMeta',
      includeInSitemap: true,
      disallowRobots: false
    }
  },

  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'seoMeta.openGraphImage',
    }
  }
}
