import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

/**
 * Dynamic OG Image Generator
 * Generates Open Graph images with custom text
 *
 * Usage: /api/og?title=Your+Title&subtitle=Your+Subtitle&category=Service
 */

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get('title') || 'Advanced Appliance Repair Service'
    const subtitle = searchParams.get('subtitle') || 'Expert Repair in Monmouth & Middlesex Counties, NJ'
    const category = searchParams.get('category') || ''

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            backgroundImage: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
            padding: '80px',
          }}
        >
          {/* Category Badge */}
          {category && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                color: '#000',
                padding: '12px 32px',
                borderRadius: '999px',
                fontSize: '24px',
                fontWeight: '600',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '32px',
              }}
            >
              {category}
            </div>
          )}

          {/* Main Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: title.length > 40 ? '56px' : '72px',
                fontWeight: '800',
                color: '#fff',
                lineHeight: 1.2,
                margin: '0 0 24px 0',
                maxWidth: '1000px',
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                style={{
                  fontSize: '32px',
                  color: '#a0a0a0',
                  margin: '0 0 48px 0',
                  maxWidth: '900px',
                  lineHeight: 1.4,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Brand Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '60px',
              left: '80px',
              right: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '2px solid #333',
              paddingTop: '32px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#fff',
                  letterSpacing: '-0.02em',
                }}
              >
                ADVANCED APPLIANCE REPAIR
              </div>
              <div
                style={{
                  fontSize: '20px',
                  color: '#888',
                  marginTop: '8px',
                }}
              >
                Professional Premier Appliance Service
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '24px',
                color: '#fff',
                fontWeight: '600',
              }}
            >
              (732) 416-7430
            </div>
          </div>

          {/* Decorative Elements */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)',
              borderRadius: '50%',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}
