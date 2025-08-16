import { NextResponse } from "next/server"

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || "https://boomkarts.com"}/sitemap.xml`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
