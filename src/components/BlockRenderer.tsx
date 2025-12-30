/**
 * Block Renderer Component
 * Renders PayloadCMS blocks using the appropriate design components
 */

import type {
  HeroBlock,
  ContentBlock,
  CTABlock,
  FeaturedServicesBlock,
  TestimonialsBlock,
  FAQBlock,
  Service,
  Testimonial,
  Media,
} from '@/payload-types'
import { getDesignComponents, getCurrentDesignTheme } from '@/lib/getDesignComponents'
import { RichText } from '@/components/RichText'

type PageBlock =
  | HeroBlock
  | ContentBlock
  | CTABlock
  | FeaturedServicesBlock
  | TestimonialsBlock
  | FAQBlock

interface BlockRendererProps {
  blocks: PageBlock[] | null | undefined
  designTheme?: '1' | '2' | '3'
}

/**
 * Renders an array of page blocks
 */
export function BlockRenderer({ blocks, designTheme }: BlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null
  }

  const theme = designTheme || getCurrentDesignTheme()
  const components = getDesignComponents(theme)

  return (
    <>
      {blocks.map((block, index) => (
        <Block key={block.id || index} block={block} components={components} />
      ))}
    </>
  )
}

/**
 * Renders a single block based on its type
 */
function Block({
  block,
  components,
}: {
  block: PageBlock
  components: ReturnType<typeof getDesignComponents>
}) {
  switch (block.blockType) {
    case 'hero':
      return <HeroBlockRenderer block={block} components={components} />

    case 'content':
      return <ContentBlockRenderer block={block} />

    case 'cta':
      return <CTABlockRenderer block={block} components={components} />

    case 'featuredServices':
      return <FeaturedServicesBlockRenderer block={block} components={components} />

    case 'testimonials':
      return <TestimonialsBlockRenderer block={block} components={components} />

    case 'faq':
      return <FAQBlockRenderer block={block} components={components} />

    default:
      console.warn('Unknown block type:', (block as any).blockType)
      return null
  }
}

/**
 * Hero Block Renderer
 */
function HeroBlockRenderer({
  block,
  components,
}: {
  block: HeroBlock
  components: ReturnType<typeof getDesignComponents>
}) {
  const { Hero } = components

  if (!Hero) {
    return (
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{block.heading}</h1>
          {block.subheading && (
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {block.subheading}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {block.ctaText && block.ctaLink && (
              <a
                href={block.ctaLink}
                className="inline-block bg-gold-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
              >
                {block.ctaText}
              </a>
            )}
            {block.secondaryCtaText && block.secondaryCtaLink && (
              <a
                href={block.secondaryCtaLink}
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
              >
                {block.secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }

  const backgroundImage =
    typeof block.backgroundImage === 'object' && block.backgroundImage !== null
      ? (block.backgroundImage as Media).url
      : block.backgroundImage

  return (
    <Hero
      heading={block.heading}
      subheading={block.subheading}
      backgroundImage={backgroundImage || undefined}
      ctaText={block.ctaText}
      ctaLink={block.ctaLink}
      secondaryCtaText={block.secondaryCtaText}
      secondaryCtaLink={block.secondaryCtaLink}
    />
  )
}

/**
 * Content Block Renderer
 */
function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  const columnClass = {
    one: 'max-w-4xl mx-auto',
    two: 'grid md:grid-cols-2 gap-8',
    three: 'grid md:grid-cols-3 gap-8',
  }[block.columns || 'one']

  return (
    <section className="py-16 px-4">
      <div className={`container mx-auto ${columnClass}`}>
        {block.content && <RichText content={block.content} />}
      </div>
    </section>
  )
}

/**
 * CTA Block Renderer
 */
function CTABlockRenderer({
  block,
  components,
}: {
  block: CTABlock
  components: ReturnType<typeof getDesignComponents>
}) {
  const { CTAButton } = components
  const isPrimary = block.style === 'primary' || !block.style

  return (
    <section className={`py-20 px-4 ${isPrimary ? 'bg-gold-500 text-black' : 'bg-gray-100'}`}>
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{block.heading}</h2>
        {block.description && (
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {block.description}
          </p>
        )}
        {CTAButton ? (
          <CTAButton href={block.buttonLink} variant={block.style || 'primary'}>
            {block.buttonText}
          </CTAButton>
        ) : (
          <a
            href={block.buttonLink}
            className={`inline-block px-8 py-4 rounded-lg font-semibold transition-colors ${
              isPrimary
                ? 'bg-black text-white hover:bg-gray-800'
                : 'bg-gold-500 text-black hover:bg-gold-400'
            }`}
          >
            {block.buttonText}
          </a>
        )}
      </div>
    </section>
  )
}

/**
 * Featured Services Block Renderer
 */
function FeaturedServicesBlockRenderer({
  block,
  components,
}: {
  block: FeaturedServicesBlock
  components: ReturnType<typeof getDesignComponents>
}) {
  const { ServiceCard, SectionHeading } = components

  const services =
    block.services
      ?.map((s) => (typeof s === 'object' ? (s as Service) : null))
      .filter(Boolean) || []

  if (services.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {block.heading &&
          (SectionHeading ? (
            <SectionHeading>{block.heading}</SectionHeading>
          ) : (
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {block.heading}
            </h2>
          ))}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            if (!service) return null

            const serviceImage =
              typeof service.image === 'object' && service.image !== null
                ? (service.image as Media).url
                : service.image

            return ServiceCard ? (
              <ServiceCard
                key={service.id}
                title={service.name}
                description={service.excerpt || ''}
                image={serviceImage || undefined}
                href={`/services/${service.slug}`}
                icon={service.icon}
              />
            ) : (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {serviceImage && (
                  <img
                    src={serviceImage}
                    alt={service.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  {service.excerpt && (
                    <p className="text-gray-600 mb-4">{service.excerpt}</p>
                  )}
                  <a
                    href={`/services/${service.slug}`}
                    className="text-gold-500 hover:text-gold-600 font-semibold"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/**
 * Testimonials Block Renderer
 */
function TestimonialsBlockRenderer({
  block,
  components,
}: {
  block: TestimonialsBlock
  components: ReturnType<typeof getDesignComponents>
}) {
  const { TestimonialCard, SectionHeading } = components

  const testimonials =
    block.testimonials
      ?.map((t) => (typeof t === 'object' ? (t as Testimonial) : null))
      .filter(Boolean) || []

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {block.heading &&
          (SectionHeading ? (
            <SectionHeading>{block.heading}</SectionHeading>
          ) : (
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {block.heading}
            </h2>
          ))}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            if (!testimonial) return null

            return TestimonialCard ? (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.customerName}
                content={testimonial.content}
                rating={testimonial.rating}
                location={testimonial.location}
                date={testimonial.date}
              />
            ) : (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < testimonial.rating
                          ? 'text-gold-500'
                          : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.customerName}</p>
                  {testimonial.location && (
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/**
 * FAQ Block Renderer
 */
function FAQBlockRenderer({
  block,
  components,
}: {
  block: FAQBlock
  components: ReturnType<typeof getDesignComponents>
}) {
  const { FAQAccordion, SectionHeading } = components

  if (!block.faqs || block.faqs.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {block.heading &&
          (SectionHeading ? (
            <SectionHeading>{block.heading}</SectionHeading>
          ) : (
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {block.heading}
            </h2>
          ))}
        {FAQAccordion ? (
          <FAQAccordion faqs={block.faqs} />
        ) : (
          <div className="space-y-4">
            {block.faqs.map((faq, index) => (
              <details
                key={faq.id || index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <summary className="px-6 py-4 font-semibold cursor-pointer hover:bg-gray-50 transition-colors">
                  {faq.question}
                </summary>
                <div className="px-6 py-4 border-t bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
