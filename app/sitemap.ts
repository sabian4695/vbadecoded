import type { MetadataRoute } from 'next'
import { allArticles as accessArticles } from './ms-access-vba/page'
import { allArticles as vbaArticles } from './vba/page'

const BASE_URL = 'https://www.vbadecoded.com'

export default function sitemap(): MetadataRoute.Sitemap {
    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/vba`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/ms-access-vba`,
            lastModified: new Date(),
        },
    ]

    // Auto-generate from article data
    const allArticles = [...accessArticles, ...vbaArticles]
    const articlePages: MetadataRoute.Sitemap = allArticles.map((article) => ({
        url: `${BASE_URL}${article.header.url}`,
        lastModified: new Date(article.header.publishDate),
    }))

    return [...staticPages, ...articlePages]
}
