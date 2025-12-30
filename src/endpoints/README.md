# Blog API Documentation

## Overview

The Blog API provides external access to manage blog posts programmatically. All endpoints require API key authentication.

## Authentication

Include your API key in the request header:

```
X-API-Key: your-api-key-here
```

API keys are configured in the `.env` file using the `BLOG_API_KEYS` environment variable (comma-separated for multiple keys).

## Base URL

```
http://localhost:3000/api
```

In production:
```
https://yourdomain.com/api
```

## Endpoints

### 1. Create Blog Post

Create a new blog post.

**Endpoint:** `POST /api/blog`

**Authentication:** Required

**Request Body:**

```json
{
  "title": "How to Maintain Your Luxury Refrigerator",
  "slug": "maintain-luxury-refrigerator",
  "content": {
    "root": {
      "type": "root",
      "children": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "Your blog content here..."
            }
          ]
        }
      ]
    }
  },
  "excerpt": "Learn essential maintenance tips for your high-end refrigerator",
  "status": "published",
  "author": "John Smith",
  "featuredImage": 123,
  "categories": [
    { "category": "Maintenance Tips" },
    { "category": "Refrigerators" }
  ],
  "tags": [
    { "tag": "refrigerator" },
    { "tag": "maintenance" },
    { "tag": "luxury appliances" }
  ],
  "publishedDate": "2024-01-15T10:00:00Z"
}
```

**Response (201 Created):**

```json
{
  "data": {
    "id": "abc123",
    "title": "How to Maintain Your Luxury Refrigerator",
    "slug": "maintain-luxury-refrigerator",
    "status": "published",
    "createdAt": "2024-01-15T10:00:00Z",
    "updatedAt": "2024-01-15T10:00:00Z"
  },
  "meta": {
    "message": "Blog post created successfully"
  }
}
```

**Note:** The `slug` field is optional. If not provided, it will be auto-generated from the title.

---

### 2. List Blog Posts

Retrieve a paginated list of blog posts.

**Endpoint:** `GET /api/blog`

**Authentication:** Optional (unauthenticated requests only see published posts)

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | number | 1 | Page number |
| `limit` | number | 10 | Posts per page (max: 100) |
| `status` | string | - | Filter by status: `draft` or `published` |

**Examples:**

```bash
# Get first page of published posts (no auth required)
GET /api/blog?page=1&limit=10

# Get all posts including drafts (auth required)
GET /api/blog?page=1&limit=20
X-API-Key: your-api-key

# Get only draft posts (auth required)
GET /api/blog?status=draft
X-API-Key: your-api-key
```

**Response (200 OK):**

```json
{
  "data": [
    {
      "id": "abc123",
      "title": "Blog Post Title",
      "slug": "blog-post-title",
      "excerpt": "Post excerpt...",
      "status": "published",
      "publishedDate": "2024-01-15T10:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "totalPages": 5,
    "totalDocs": 47,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

---

### 3. Get Single Blog Post

Retrieve a specific blog post by slug.

**Endpoint:** `GET /api/blog/:slug`

**Authentication:** Optional (unauthenticated requests only see published posts)

**Example:**

```bash
GET /api/blog/maintain-luxury-refrigerator
```

**Response (200 OK):**

```json
{
  "data": {
    "id": "abc123",
    "title": "How to Maintain Your Luxury Refrigerator",
    "slug": "maintain-luxury-refrigerator",
    "content": { ... },
    "excerpt": "Learn essential maintenance tips...",
    "status": "published",
    "author": "John Smith",
    "featuredImage": { ... },
    "categories": [ ... ],
    "tags": [ ... ],
    "publishedDate": "2024-01-15T10:00:00Z",
    "createdAt": "2024-01-15T10:00:00Z",
    "updatedAt": "2024-01-15T10:00:00Z"
  }
}
```

**Response (404 Not Found):**

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Blog post not found"
  }
}
```

---

### 4. Update Blog Post

Update an existing blog post.

**Endpoint:** `PUT /api/blog/:slug`

**Authentication:** Required

**Request Body:** (all fields optional)

```json
{
  "title": "Updated Title",
  "content": { ... },
  "status": "published",
  "excerpt": "Updated excerpt",
  "categories": [
    { "category": "New Category" }
  ]
}
```

**Response (200 OK):**

```json
{
  "data": {
    "id": "abc123",
    "title": "Updated Title",
    "slug": "maintain-luxury-refrigerator",
    "updatedAt": "2024-01-16T10:00:00Z"
  },
  "meta": {
    "message": "Blog post updated successfully"
  }
}
```

---

### 5. Delete Blog Post

Delete a blog post.

**Endpoint:** `DELETE /api/blog/:slug`

**Authentication:** Required

**Example:**

```bash
DELETE /api/blog/maintain-luxury-refrigerator
X-API-Key: your-api-key
```

**Response (204 No Content):**

```json
{
  "meta": {
    "message": "Blog post deleted successfully"
  }
}
```

---

## Error Responses

### 400 Bad Request

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Missing required fields",
    "details": [
      {
        "field": "title",
        "message": "Title is required"
      }
    ]
  }
}
```

### 401 Unauthorized

```json
{
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing API key"
  }
}
```

### 404 Not Found

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Blog post not found"
  }
}
```

### 500 Internal Server Error

```json
{
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "Failed to create blog post"
  }
}
```

---

## Content Format

Blog post content uses Lexical editor format. Here are common patterns:

### Simple Text

```json
{
  "content": {
    "root": {
      "type": "root",
      "children": [
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "Your paragraph text here"
            }
          ]
        }
      ]
    }
  }
}
```

### Heading

```json
{
  "type": "heading",
  "tag": "h2",
  "children": [
    {
      "type": "text",
      "text": "Your Heading"
    }
  ]
}
```

### Bold/Italic Text

```json
{
  "type": "text",
  "text": "Bold and italic text",
  "format": 3
}
```

Format codes:
- `1` = Bold
- `2` = Italic
- `3` = Bold + Italic

### List

```json
{
  "type": "list",
  "listType": "bullet",
  "children": [
    {
      "type": "listitem",
      "children": [
        {
          "type": "text",
          "text": "First item"
        }
      ]
    }
  ]
}
```

---

## Code Examples

### cURL

```bash
# Create a blog post
curl -X POST https://yourdomain.com/api/blog \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key" \
  -d '{
    "title": "Blog Post Title",
    "content": {...},
    "status": "published"
  }'

# List blog posts
curl https://yourdomain.com/api/blog?page=1&limit=10

# Get single post
curl https://yourdomain.com/api/blog/your-post-slug

# Update post
curl -X PUT https://yourdomain.com/api/blog/your-post-slug \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key" \
  -d '{"title": "Updated Title"}'

# Delete post
curl -X DELETE https://yourdomain.com/api/blog/your-post-slug \
  -H "X-API-Key: your-api-key"
```

### JavaScript/Node.js

```javascript
const API_KEY = 'your-api-key';
const BASE_URL = 'https://yourdomain.com/api';

// Create blog post
async function createBlogPost(data) {
  const response = await fetch(`${BASE_URL}/blog`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY,
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

// List blog posts
async function listBlogPosts(page = 1, limit = 10) {
  const response = await fetch(
    `${BASE_URL}/blog?page=${page}&limit=${limit}`
  );

  return response.json();
}

// Get single post
async function getBlogPost(slug) {
  const response = await fetch(`${BASE_URL}/blog/${slug}`);
  return response.json();
}

// Update post
async function updateBlogPost(slug, data) {
  const response = await fetch(`${BASE_URL}/blog/${slug}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': API_KEY,
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

// Delete post
async function deleteBlogPost(slug) {
  const response = await fetch(`${BASE_URL}/blog/${slug}`, {
    method: 'DELETE',
    headers: {
      'X-API-Key': API_KEY,
    },
  });

  return response.json();
}
```

### Python

```python
import requests

API_KEY = 'your-api-key'
BASE_URL = 'https://yourdomain.com/api'

headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
}

# Create blog post
def create_blog_post(data):
    response = requests.post(
        f'{BASE_URL}/blog',
        json=data,
        headers=headers
    )
    return response.json()

# List blog posts
def list_blog_posts(page=1, limit=10):
    response = requests.get(
        f'{BASE_URL}/blog',
        params={'page': page, 'limit': limit}
    )
    return response.json()

# Get single post
def get_blog_post(slug):
    response = requests.get(f'{BASE_URL}/blog/{slug}')
    return response.json()

# Update post
def update_blog_post(slug, data):
    response = requests.put(
        f'{BASE_URL}/blog/{slug}',
        json=data,
        headers=headers
    )
    return response.json()

# Delete post
def delete_blog_post(slug):
    response = requests.delete(
        f'{BASE_URL}/blog/{slug}',
        headers=headers
    )
    return response.json()
```

---

## Rate Limiting

Currently, there are no rate limits enforced. However, please be considerate with API usage:

- Maximum 100 posts per page
- Recommended: Cache responses when possible
- Batch operations when creating multiple posts

---

## Best Practices

1. **Always validate data** before sending to the API
2. **Use slugs wisely** - they become part of the URL and shouldn't change frequently
3. **Set appropriate status** - use 'draft' for unpublished content
4. **Include excerpts** - helps with SEO and post previews
5. **Use categories and tags** - improves content organization and discoverability
6. **Store API keys securely** - never commit them to version control

---

## Support

For API issues or questions, please contact your development team or create an issue in the project repository.
