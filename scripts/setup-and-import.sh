#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔═══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║     Advance Appliance - Sanity CMS Setup & Import        ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo -e "${YELLOW}📋 Checking prerequisites...${NC}"
if ! command_exists node; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Node.js found${NC}"

if ! command_exists npm; then
    echo -e "${RED}❌ npm is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ npm found${NC}"
echo ""

# Check if .env.local exists
if [ -f .env.local ]; then
    echo -e "${YELLOW}⚠️  .env.local already exists${NC}"
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${BLUE}Using existing .env.local${NC}"
    else
        SETUP_ENV=true
    fi
else
    SETUP_ENV=true
fi

# Setup environment if needed
if [ "$SETUP_ENV" = true ]; then
    echo ""
    echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
    echo -e "${YELLOW}📝 Sanity CMS Configuration${NC}"
    echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
    echo ""
    echo "To get your Sanity credentials:"
    echo "1. Visit: https://www.sanity.io/manage"
    echo "2. Find your project (or create a new one)"
    echo "3. Copy the Project ID"
    echo "4. Go to API → Tokens → Add API Token"
    echo "5. Name: 'Import Script', Permissions: Editor"
    echo "6. Copy the token"
    echo ""

    # Get Sanity Project ID
    read -p "Enter your Sanity Project ID: " SANITY_PROJECT_ID
    if [ -z "$SANITY_PROJECT_ID" ]; then
        echo -e "${RED}❌ Project ID is required${NC}"
        exit 1
    fi

    # Get Sanity API Token
    read -p "Enter your Sanity API Token: " SANITY_TOKEN
    if [ -z "$SANITY_TOKEN" ]; then
        echo -e "${RED}❌ API Token is required${NC}"
        exit 1
    fi

    # Get dataset
    read -p "Enter Sanity Dataset (default: production): " SANITY_DATASET
    SANITY_DATASET=${SANITY_DATASET:-production}

    # Create .env.local
    echo -e "\n${YELLOW}Creating .env.local...${NC}"
    cat > .env.local << EOF
# ====================================
# Sanity CMS Configuration
# ====================================
NEXT_PUBLIC_SANITY_PROJECT_ID="$SANITY_PROJECT_ID"
NEXT_PUBLIC_SANITY_DATASET="$SANITY_DATASET"
NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"
SANITY_API_TOKEN="$SANITY_TOKEN"

# ====================================
# Application Configuration
# ====================================
NEXT_PUBLIC_SERVER_URL="http://localhost:3001"
NODE_ENV="development"
PREVIEW_SECRET="dev-preview-secret"
REVALIDATION_SECRET="dev-revalidation-secret"
EOF

    echo -e "${GREEN}✅ .env.local created${NC}"
fi

echo ""
echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
echo -e "${YELLOW}📦 Running Data Import${NC}"
echo -e "${BLUE}════════════════════════════════════════════════════════════${NC}"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing dependencies...${NC}"
    npm install
    echo ""
fi

# Run the import script
echo -e "${YELLOW}Starting import...${NC}"
npm run seed:sanity

# Check exit code
if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║              🎉 Import Completed Successfully!            ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${YELLOW}📊 What was imported:${NC}"
    echo "  • 9 Services (including Ice Maker Repair)"
    echo "  • 38 Service Areas"
    echo "  • 4 Blog Posts"
    echo "  • 9 Testimonials"
    echo ""
    echo -e "${YELLOW}📝 Next Steps:${NC}"
    echo "1. Start dev server: ${GREEN}npm run dev${NC}"
    echo "2. Open Sanity Studio: ${BLUE}http://localhost:3001/studio${NC}"
    echo "3. Upload images for services and blog posts"
    echo "4. Check your services page: ${BLUE}http://localhost:3001/services${NC}"
    echo "5. Verify Ice Maker Repair: ${BLUE}http://localhost:3001/services/ice-maker-repair${NC}"
    echo ""
else
    echo ""
    echo -e "${RED}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║                 ❌ Import Failed                          ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${YELLOW}🔍 Troubleshooting:${NC}"
    echo "1. Check that your Sanity credentials are correct"
    echo "2. Verify your API token has Editor permissions"
    echo "3. Make sure your internet connection is working"
    echo "4. Try running manually: ${GREEN}npm run seed:sanity${NC}"
    echo ""
    echo "For help, see: ${BLUE}SETUP_GUIDE.md${NC}"
    exit 1
fi
