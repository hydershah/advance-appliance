/**
 * Blog API Client Example
 *
 * This is a TypeScript client for the Blog API.
 * Use this as a reference for integrating with external applications.
 */

interface BlogPostCreate {
  title: string
  slug?: string
  content: any
  excerpt?: string
  status?: 'draft' | 'published'
  author?: string
  featuredImage?: string | number
  categories?: Array<{ category: string }>
  tags?: Array<{ tag: string }>
  publishedDate?: string
}

interface BlogPost extends BlogPostCreate {
  id: string
  createdAt: string
  updatedAt: string
}

interface PaginatedResponse<T> {
  data: T[]
  meta: {
    page: number
    limit: number
    totalPages: number
    totalDocs: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}

interface SingleResponse<T> {
  data: T
  meta?: {
    message?: string
  }
}

interface ErrorResponse {
  error: {
    code: string
    message: string
    details?: Array<{
      field: string
      message: string
    }>
  }
}

class BlogAPIClient {
  private baseURL: string
  private apiKey: string

  constructor(baseURL: string, apiKey: string) {
    this.baseURL = baseURL.replace(/\/$/, '') // Remove trailing slash
    this.apiKey = apiKey
  }

  /**
   * Get headers for authenticated requests
   */
  private getHeaders(includeContentType = true): HeadersInit {
    const headers: HeadersInit = {
      'X-API-Key': this.apiKey,
    }
    if (includeContentType) {
      headers['Content-Type'] = 'application/json'
    }
    return headers
  }

  /**
   * Handle API response
   */
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error: ErrorResponse = await response.json()
      throw new Error(
        `API Error (${response.status}): ${error.error.message || 'Unknown error'}`
      )
    }

    if (response.status === 204) {
      return {} as T
    }

    return response.json()
  }

  /**
   * Create a new blog post
   */
  async createPost(data: BlogPostCreate): Promise<SingleResponse<BlogPost>> {
    const response = await fetch(`${this.baseURL}/api/blog`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    })

    return this.handleResponse<SingleResponse<BlogPost>>(response)
  }

  /**
   * List blog posts with pagination
   */
  async listPosts(params?: {
    page?: number
    limit?: number
    status?: 'draft' | 'published'
  }): Promise<PaginatedResponse<BlogPost>> {
    const searchParams = new URLSearchParams()
    if (params?.page) searchParams.set('page', params.page.toString())
    if (params?.limit) searchParams.set('limit', params.limit.toString())
    if (params?.status) searchParams.set('status', params.status)

    const url = `${this.baseURL}/api/blog${searchParams.toString() ? '?' + searchParams.toString() : ''}`

    const response = await fetch(url, {
      headers: this.getHeaders(false),
    })

    return this.handleResponse<PaginatedResponse<BlogPost>>(response)
  }

  /**
   * Get a single blog post by slug
   */
  async getPost(slug: string): Promise<SingleResponse<BlogPost>> {
    const response = await fetch(`${this.baseURL}/api/blog/${slug}`, {
      headers: this.getHeaders(false),
    })

    return this.handleResponse<SingleResponse<BlogPost>>(response)
  }

  /**
   * Update an existing blog post
   */
  async updatePost(
    slug: string,
    data: Partial<BlogPostCreate>
  ): Promise<SingleResponse<BlogPost>> {
    const response = await fetch(`${this.baseURL}/api/blog/${slug}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    })

    return this.handleResponse<SingleResponse<BlogPost>>(response)
  }

  /**
   * Delete a blog post
   */
  async deletePost(slug: string): Promise<{ meta: { message: string } }> {
    const response = await fetch(`${this.baseURL}/api/blog/${slug}`, {
      method: 'DELETE',
      headers: this.getHeaders(false),
    })

    return this.handleResponse<{ meta: { message: string } }>(response)
  }

  /**
   * Helper: Create simple text content
   */
  static createSimpleContent(text: string): any {
    return {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text,
              },
            ],
          },
        ],
      },
    }
  }

  /**
   * Helper: Create content with multiple paragraphs
   */
  static createMultiParagraphContent(paragraphs: string[]): any {
    return {
      root: {
        type: 'root',
        children: paragraphs.map((text) => ({
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text,
            },
          ],
        })),
      },
    }
  }

  /**
   * Helper: Create content with heading and paragraphs
   */
  static createArticleContent(
    heading: string,
    paragraphs: string[]
  ): any {
    return {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            tag: 'h2',
            children: [
              {
                type: 'text',
                text: heading,
              },
            ],
          },
          ...paragraphs.map((text) => ({
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text,
              },
            ],
          })),
        ],
      },
    }
  }
}

// ============================================================================
// Usage Examples
// ============================================================================

async function _examples() {
  // Initialize the client
  const client = new BlogAPIClient(
    'https://yourdomain.com', // Your site URL
    'your-api-key-here' // Your API key
  )

  try {
    // Example 1: Create a simple blog post
    const simplePost = await client.createPost({
      title: 'How to Maintain Your Premier Refrigerator',
      content: BlogAPIClient.createSimpleContent(
        'Regular maintenance is key to keeping your premier refrigerator running smoothly...'
      ),
      excerpt: 'Learn essential maintenance tips for your premier refrigerator',
      status: 'published',
      author: 'John Smith',
      categories: [
        { category: 'Maintenance Tips' },
        { category: 'Refrigerators' },
      ],
      tags: [
        { tag: 'refrigerator' },
        { tag: 'maintenance' },
        { tag: 'premier appliances' },
      ],
    })
    console.log('Created post:', simplePost.data.slug)

    // Example 2: Create a post with multiple paragraphs
    const articlePost = await client.createPost({
      title: 'Top 5 Signs Your Dishwasher Needs Repair',
      content: BlogAPIClient.createMultiParagraphContent([
        'Your dishwasher is an essential kitchen appliance. Here are the warning signs...',
        'Sign 1: Unusual noises during operation.',
        'Sign 2: Water not draining properly.',
        'Sign 3: Dishes coming out dirty.',
        'Sign 4: Leaking water.',
        'Sign 5: Error codes on display.',
      ]),
      excerpt: 'Identify these warning signs before they become major problems',
      status: 'draft', // Save as draft first
      author: 'Jane Doe',
    })
    console.log('Created draft:', articlePost.data.id)

    // Example 3: List all published posts
    const posts = await client.listPosts({
      page: 1,
      limit: 10,
      status: 'published',
    })
    console.log(`Found ${posts.meta.totalDocs} published posts`)
    posts.data.forEach((post) => {
      console.log(`- ${post.title} (${post.slug})`)
    })

    // Example 4: Get a specific post
    const post = await client.getPost('maintain-premier-refrigerator')
    console.log('Post details:', post.data.title)

    // Example 5: Update a post
    const updatedPost = await client.updatePost('maintain-premier-refrigerator', {
      excerpt: 'Updated excerpt with more details...',
      tags: [
        { tag: 'refrigerator' },
        { tag: 'maintenance' },
        { tag: 'tips' },
        { tag: 'premier' },
      ],
    })
    console.log('Updated post:', updatedPost.data.slug)

    // Example 6: Publish a draft
    await client.updatePost('top-5-signs-dishwasher-needs-repair', {
      status: 'published',
      publishedDate: new Date().toISOString(),
    })
    console.log('Published draft post')

    // Example 7: Delete a post
    await client.deletePost('old-post-slug')
    console.log('Deleted post')
  } catch (error) {
    console.error('API Error:', error)
  }
}

// ============================================================================
// Advanced Usage: Batch Operations
// ============================================================================

async function batchCreatePosts(
  client: BlogAPIClient,
  posts: BlogPostCreate[]
) {
  const results = []

  for (const postData of posts) {
    try {
      const result = await client.createPost(postData)
      results.push({ success: true, post: result.data })
      console.log(`✓ Created: ${result.data.title}`)
    } catch (error) {
      results.push({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        title: postData.title,
      })
      console.error(`✗ Failed: ${postData.title}`)
    }
  }

  return results
}

// ============================================================================
// Integration Example: Import from External Source
// ============================================================================

async function importFromExternalSource() {
  const client = new BlogAPIClient(
    process.env.SITE_URL || 'http://localhost:3000',
    process.env.BLOG_API_KEY || ''
  )

  // Example: Import posts from a JSON file or external API
  const externalPosts = [
    {
      title: 'Post 1',
      content: 'Content 1',
      categories: ['Category A'],
      tags: ['tag1', 'tag2'],
    },
    {
      title: 'Post 2',
      content: 'Content 2',
      categories: ['Category B'],
      tags: ['tag3', 'tag4'],
    },
  ]

  const convertedPosts: BlogPostCreate[] = externalPosts.map((post) => ({
    title: post.title,
    content: BlogAPIClient.createSimpleContent(post.content),
    categories: post.categories.map((cat) => ({ category: cat })),
    tags: post.tags.map((tag) => ({ tag })),
    status: 'draft', // Import as drafts for review
  }))

  const results = await batchCreatePosts(client, convertedPosts)

  console.log(`Imported ${results.filter((r) => r.success).length} posts`)
  console.log(`Failed ${results.filter((r) => !r.success).length} posts`)

  return results
}

// Export for use in other modules
export { BlogAPIClient, type BlogPostCreate, type BlogPost }

// Uncomment to run examples
// examples()
// importFromExternalSource()
