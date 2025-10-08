import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.vbadecoded.com',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/vba',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/vba/vba-editor-dark-mode',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/ms-access-vba',
            lastModified: new Date(),
        },
    ]
}