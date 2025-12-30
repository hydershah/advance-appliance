# Blog API Examples

This directory contains example code and test scripts for the Blog API.

## Files

### 1. blog-api-client.ts

A complete TypeScript client for the Blog API with helper functions and usage examples.

**Features:**
- Full TypeScript types
- All CRUD operations
- Helper functions for content creation
- Error handling
- Batch operations
- Import examples

**Usage:**

```typescript
import { BlogAPIClient } from './blog-api-client'

const client = new BlogAPIClient(
  'https://yourdomain.com',
  'your-api-key'
)

// Create a post
const post = await client.createPost({
  title: 'My Blog Post',
  content: BlogAPIClient.createSimpleContent('Content here'),
  status: 'published'
})

// List posts
const posts = await client.listPosts({ page: 1, limit: 10 })

// Get single post
const singlePost = await client.getPost('my-blog-post')

// Update post
await client.updatePost('my-blog-post', {
  title: 'Updated Title'
})

// Delete post
await client.deletePost('my-blog-post')
```

### 2. test-blog-api.sh

A bash script that tests all Blog API endpoints.

**Features:**
- Tests all 5 API endpoints
- Authentication tests
- Error handling tests
- Colored output
- Test summary

**Usage:**

```bash
# Set your API key
export BLOG_API_KEY="your-api-key-here"

# Optionally set base URL (defaults to localhost:3000)
export API_BASE_URL="https://yourdomain.com"

# Run the tests
./test-blog-api.sh
```

**Example Output:**

```
==========================================
Blog API Test Suite
==========================================

Configuration:
  Base URL: http://localhost:3000
  API Key: abc123def4...

==========================================
Testing Authentication
==========================================

TEST: Create post without API key (should fail)
✓ PASS

TEST: Create post with invalid API key (should fail)
✓ PASS

==========================================
Test Summary
==========================================

Tests Run:    9
Tests Passed: 9
Tests Failed: 0

✓ All tests passed!
```

## Quick Start

### 1. Using the TypeScript Client

```bash
# Install dependencies (if running separately)
npm install

# Import and use in your code
import { BlogAPIClient } from './examples/blog-api-client'
```

### 2. Running the Test Script

```bash
# Make executable (already done)
chmod +x examples/test-blog-api.sh

# Set your API key
export BLOG_API_KEY="your-api-key"

# Run tests
./examples/test-blog-api.sh
```

## API Key Setup

### Generate an API Key

```bash
openssl rand -hex 32
```

### Add to .env

```env
BLOG_API_KEYS=your-generated-key-here
```

### Use Multiple Keys

```env
BLOG_API_KEYS=key1,key2,key3
```

## Content Format Examples

### Simple Text

```javascript
const content = {
  root: {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            text: 'Your paragraph text here'
          }
        ]
      }
    ]
  }
}
```

### Multiple Paragraphs

```javascript
const content = {
  root: {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [{ type: 'text', text: 'Paragraph 1' }]
      },
      {
        type: 'paragraph',
        children: [{ type: 'text', text: 'Paragraph 2' }]
      }
    ]
  }
}
```

### With Heading

```javascript
const content = {
  root: {
    type: 'root',
    children: [
      {
        type: 'heading',
        tag: 'h2',
        children: [{ type: 'text', text: 'Heading' }]
      },
      {
        type: 'paragraph',
        children: [{ type: 'text', text: 'Content...' }]
      }
    ]
  }
}
```

### Bold/Italic Text

```javascript
// Bold (format: 1)
{ type: 'text', text: 'Bold text', format: 1 }

// Italic (format: 2)
{ type: 'text', text: 'Italic text', format: 2 }

// Bold + Italic (format: 3)
{ type: 'text', text: 'Bold italic text', format: 3 }
```

### List

```javascript
{
  type: 'list',
  listType: 'bullet',
  children: [
    {
      type: 'listitem',
      children: [{ type: 'text', text: 'Item 1' }]
    },
    {
      type: 'listitem',
      children: [{ type: 'text', text: 'Item 2' }]
    }
  ]
}
```

## Integration Examples

### WordPress Import

```typescript
import { BlogAPIClient } from './blog-api-client'

async function importFromWordPress(wpPosts: any[]) {
  const client = new BlogAPIClient(
    'https://yourdomain.com',
    process.env.BLOG_API_KEY
  )

  for (const wpPost of wpPosts) {
    await client.createPost({
      title: wpPost.title.rendered,
      content: convertWPContent(wpPost.content.rendered),
      excerpt: wpPost.excerpt.rendered,
      status: 'draft',
      categories: wpPost.categories.map(cat => ({ category: cat })),
      publishedDate: wpPost.date
    })
  }
}
```

### Markdown Import

```typescript
import { BlogAPIClient } from './blog-api-client'
import { marked } from 'marked'

async function importMarkdown(mdFiles: string[]) {
  const client = new BlogAPIClient(
    'https://yourdomain.com',
    process.env.BLOG_API_KEY
  )

  for (const mdFile of mdFiles) {
    const content = fs.readFileSync(mdFile, 'utf8')
    const { data, content: body } = parseFrontMatter(content)

    await client.createPost({
      title: data.title,
      content: convertMarkdownToLexical(body),
      status: 'draft',
      tags: data.tags?.map(tag => ({ tag }))
    })
  }
}
```

### Scheduled Publishing

```typescript
import { BlogAPIClient } from './blog-api-client'
import cron from 'node-cron'

const client = new BlogAPIClient(
  'https://yourdomain.com',
  process.env.BLOG_API_KEY
)

// Publish scheduled posts every hour
cron.schedule('0 * * * *', async () => {
  const posts = await client.listPosts({ status: 'draft' })

  for (const post of posts.data) {
    if (shouldPublishNow(post.scheduledDate)) {
      await client.updatePost(post.slug, {
        status: 'published',
        publishedDate: new Date().toISOString()
      })
    }
  }
})
```

## Error Handling

### TypeScript Client

```typescript
try {
  const post = await client.createPost(data)
  console.log('Success:', post.data.id)
} catch (error) {
  if (error.message.includes('401')) {
    console.error('Invalid API key')
  } else if (error.message.includes('400')) {
    console.error('Validation error')
  } else {
    console.error('Unexpected error:', error)
  }
}
```

### Bash Script

```bash
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST ...)
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | head -n -1)

if [ "$HTTP_CODE" != "201" ]; then
  echo "Error: $BODY"
  exit 1
fi
```

## Best Practices

1. **Always use HTTPS** in production
2. **Store API keys securely** (never in code)
3. **Validate data** before sending
4. **Handle errors gracefully**
5. **Use appropriate status** (draft vs published)
6. **Set meaningful slugs**
7. **Include SEO metadata**
8. **Add categories and tags**
9. **Test in development first**
10. **Monitor API usage**

## Troubleshooting

### Invalid API Key

```
Error: API Error (401): Invalid or missing API key
```

**Solution:** Check that `BLOG_API_KEYS` is set in `.env` and you're using the correct key.

### Validation Error

```
Error: API Error (400): Missing required fields
```

**Solution:** Ensure `title` and `content` are provided.

### Post Not Found

```
Error: API Error (404): Blog post not found
```

**Solution:** Check the slug is correct and the post exists.

### Network Error

```
Error: fetch failed
```

**Solution:** Check that the server is running and the URL is correct.

## Further Reading

- **API Documentation:** `/home/hyder/Advance Applaince/src/endpoints/README.md`
- **Quick Start Guide:** `/home/hyder/Advance Applaince/QUICKSTART.md`
- **Setup Documentation:** `/home/hyder/Advance Applaince/PAYLOAD_SETUP.md`

## Support

For issues or questions:
1. Check the API documentation
2. Review the examples
3. Test with the test script
4. Check server logs
