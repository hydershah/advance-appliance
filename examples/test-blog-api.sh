#!/bin/bash

# ============================================================================
# Blog API Test Script
# ============================================================================
# This script tests all Blog API endpoints
# Usage: ./test-blog-api.sh
# Make sure to set your API_KEY and BASE_URL first
# ============================================================================

# Configuration
API_KEY="${BLOG_API_KEY:-your-api-key-here}"
BASE_URL="${API_BASE_URL:-http://localhost:3000}"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counters
TESTS_RUN=0
TESTS_PASSED=0
TESTS_FAILED=0

# ============================================================================
# Helper Functions
# ============================================================================

print_header() {
    echo ""
    echo "=========================================="
    echo "$1"
    echo "=========================================="
    echo ""
}

print_test() {
    echo -e "${YELLOW}TEST:${NC} $1"
}

print_pass() {
    echo -e "${GREEN}✓ PASS${NC}"
    ((TESTS_PASSED++))
}

print_fail() {
    echo -e "${RED}✗ FAIL:${NC} $1"
    ((TESTS_FAILED++))
}

run_test() {
    ((TESTS_RUN++))
}

# ============================================================================
# Test Functions
# ============================================================================

test_create_post() {
    print_test "Create a new blog post"
    run_test

    RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "${BASE_URL}/api/blog" \
        -H "Content-Type: application/json" \
        -H "X-API-Key: ${API_KEY}" \
        -d '{
            "title": "Test Blog Post via API",
            "slug": "test-blog-post-api",
            "content": {
                "root": {
                    "type": "root",
                    "children": [
                        {
                            "type": "paragraph",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "This is a test blog post created via the API."
                                }
                            ]
                        }
                    ]
                }
            },
            "excerpt": "A test blog post for API testing",
            "status": "published",
            "author": "API Test Script",
            "categories": [
                {"category": "Testing"},
                {"category": "API"}
            ],
            "tags": [
                {"tag": "test"},
                {"tag": "api"},
                {"tag": "automation"}
            ]
        }')

    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    BODY=$(echo "$RESPONSE" | head -n -1)

    if [ "$HTTP_CODE" = "201" ]; then
        print_pass
        echo "Response: $BODY" | jq '.' 2>/dev/null || echo "$BODY"
    else
        print_fail "Expected 201, got $HTTP_CODE"
        echo "Response: $BODY"
    fi
}

test_list_posts() {
    print_test "List all blog posts"
    run_test

    RESPONSE=$(curl -s -w "\n%{http_code}" "${BASE_URL}/api/blog?page=1&limit=10")

    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    BODY=$(echo "$RESPONSE" | head -n -1)

    if [ "$HTTP_CODE" = "200" ]; then
        print_pass
        echo "Response: $BODY" | jq '.' 2>/dev/null || echo "$BODY"
    else
        print_fail "Expected 200, got $HTTP_CODE"
        echo "Response: $BODY"
    fi
}

test_get_post() {
    print_test "Get single blog post by slug"
    run_test

    RESPONSE=$(curl -s -w "\n%{http_code}" "${BASE_URL}/api/blog/test-blog-post-api")

    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    BODY=$(echo "$RESPONSE" | head -n -1)

    if [ "$HTTP_CODE" = "200" ]; then
        print_pass
        echo "Response: $BODY" | jq '.' 2>/dev/null || echo "$BODY"
    else
        print_fail "Expected 200, got $HTTP_CODE"
        echo "Response: $BODY"
    fi
}

test_update_post() {
    print_test "Update blog post"
    run_test

    RESPONSE=$(curl -s -w "\n%{http_code}" -X PUT "${BASE_URL}/api/blog/test-blog-post-api" \
        -H "Content-Type: application/json" \
        -H "X-API-Key: ${API_KEY}" \
        -d '{
            "excerpt": "Updated excerpt for testing purposes",
            "tags": [
                {"tag": "test"},
                {"tag": "api"},
                {"tag": "automation"},
                {"tag": "updated"}
            ]
        }')

    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
    BODY=$(echo "$RESPONSE" | head -n -1)

    if [ "$HTTP_CODE" = "200" ]; then
        print_pass
        echo "Response: $BODY" | jq '.' 2>/dev/null || echo "$BODY"
    else
        print_fail "Expected 200, got $HTTP_CODE"
        echo "Response: $BODY"
    fi
}

test_unauthorized_create() {
    print_test "Create post without API key (should fail)"
    run_test

    RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "${BASE_URL}/api/blog" \
        -H "Content-Type: application/json" \
        -d '{
            "title": "Unauthorized Post",
            "content": {"root": {"type": "root", "children": []}}
        }')

    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)

    if [ "$HTTP_CODE" = "401" ]; then
        print_pass
    else
        print_fail "Expected 401, got $HTTP_CODE"
    fi
}

test_invalid_api_key() {
    print_test "Create post with invalid API key (should fail)"
    run_test

    RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "${BASE_URL}/api/blog" \
        -H "Content-Type: application/json" \
        -H "X-API-Key: invalid-key-123" \
        -d '{
            "title": "Unauthorized Post",
            "content": {"root": {"type": "root", "children": []}}
        }')

    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)

    if [ "$HTTP_CODE" = "401" ]; then
        print_pass
    else
        print_fail "Expected 401, got $HTTP_CODE"
    fi
}

test_validation_error() {
    print_test "Create post without required fields (should fail)"
    run_test

    RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "${BASE_URL}/api/blog" \
        -H "Content-Type: application/json" \
        -H "X-API-Key: ${API_KEY}" \
        -d '{}')

    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)

    if [ "$HTTP_CODE" = "400" ]; then
        print_pass
    else
        print_fail "Expected 400, got $HTTP_CODE"
    fi
}

test_not_found() {
    print_test "Get non-existent post (should fail)"
    run_test

    RESPONSE=$(curl -s -w "\n%{http_code}" "${BASE_URL}/api/blog/non-existent-post-123")

    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)

    if [ "$HTTP_CODE" = "404" ]; then
        print_pass
    else
        print_fail "Expected 404, got $HTTP_CODE"
    fi
}

test_delete_post() {
    print_test "Delete blog post"
    run_test

    RESPONSE=$(curl -s -w "\n%{http_code}" -X DELETE "${BASE_URL}/api/blog/test-blog-post-api" \
        -H "X-API-Key: ${API_KEY}")

    HTTP_CODE=$(echo "$RESPONSE" | tail -n1)

    if [ "$HTTP_CODE" = "204" ]; then
        print_pass
    else
        print_fail "Expected 204, got $HTTP_CODE"
    fi
}

# ============================================================================
# Main Test Runner
# ============================================================================

print_header "Blog API Test Suite"

echo "Configuration:"
echo "  Base URL: $BASE_URL"
echo "  API Key: ${API_KEY:0:10}..."
echo ""

# Run tests
print_header "Testing Authentication"
test_unauthorized_create
test_invalid_api_key

print_header "Testing CRUD Operations"
test_create_post
sleep 1
test_list_posts
sleep 1
test_get_post
sleep 1
test_update_post
sleep 1

print_header "Testing Error Handling"
test_validation_error
test_not_found

print_header "Testing Delete"
test_delete_post

# Print summary
print_header "Test Summary"
echo "Tests Run:    $TESTS_RUN"
echo -e "Tests Passed: ${GREEN}$TESTS_PASSED${NC}"
echo -e "Tests Failed: ${RED}$TESTS_FAILED${NC}"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}✓ All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}✗ Some tests failed${NC}"
    exit 1
fi
