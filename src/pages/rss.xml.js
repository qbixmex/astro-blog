import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export const GET = async (context) => {
  return rss({
    title: 'Alumno de Astro | Blog',
    description: 'Mi viaje de aprendizaje de Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es-mx</language>`,
  });
};
