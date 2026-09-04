import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gabrielmenezesc.github.io/RBDIGITAL'

  const routes = [
    '',
    '/solucoes',
    '/projetos',
    '/rblab',
    '/sobre',
    '/empresa',
    '/contato',
    '/privacidade',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}
