#!/bin/bash

# Task Master 0.24.0 Portable Deployment - Installation Script
# Universal installer that works with any project

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PACKAGE_NAME="@claude-007/task-master-portable"
MIN_NODE_VERSION="18"

echo -e "${BLUE}🚀 Task Master 0.24.0 Portable Deployment Installer${NC}"
echo ""

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is required but not installed${NC}"
        echo -e "${YELLOW}📥 Please install Node.js ${MIN_NODE_VERSION}+ from https://nodejs.org${NC}"
        exit 1
    fi
    
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt "$MIN_NODE_VERSION" ]; then
        echo -e "${RED}❌ Node.js ${MIN_NODE_VERSION}+ is required (found v${NODE_VERSION})${NC}"
        echo -e "${YELLOW}📥 Please upgrade Node.js from https://nodejs.org${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Node.js v$(node --version) detected${NC}"
}

# Check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        echo -e "${RED}❌ npm is required but not installed${NC}"
        echo -e "${YELLOW}📥 npm usually comes with Node.js. Please reinstall Node.js${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ npm v$(npm --version) detected${NC}"
}

# Install the package
install_package() {
    echo -e "${BLUE}📦 Installing ${PACKAGE_NAME}...${NC}"
    
    if npm list -g "${PACKAGE_NAME}" &> /dev/null; then
        echo -e "${YELLOW}⚠️ Package already installed. Updating...${NC}"
        npm update -g "${PACKAGE_NAME}"
    else
        npm install -g "${PACKAGE_NAME}"
    fi
    
    echo -e "${GREEN}✅ Package installed successfully${NC}"
}

# Verify installation
verify_installation() {
    echo -e "${BLUE}🔍 Verifying installation...${NC}"
    
    if command -v tm-deploy &> /dev/null; then
        echo -e "${GREEN}✅ tm-deploy command available${NC}"
        tm-deploy --version
    else
        echo -e "${RED}❌ Installation verification failed${NC}"
        exit 1
    fi
}

# Show usage examples
show_usage() {
    echo ""
    echo -e "${GREEN}🎉 Installation completed successfully!${NC}"
    echo ""
    echo -e "${BLUE}📋 Usage Examples:${NC}"
    echo ""
    echo -e "${YELLOW}# Deploy to current directory${NC}"
    echo "tm-deploy"
    echo ""
    echo -e "${YELLOW}# Deploy to specific project${NC}"
    echo "tm-deploy /path/to/my-project"
    echo ""
    echo -e "${YELLOW}# Deploy with specific mode${NC}"
    echo "tm-deploy --mode=standalone"
    echo ""
    echo -e "${YELLOW}# Deploy with PRD processing${NC}"
    echo "tm-deploy --prd=./requirements.txt"
    echo ""
    echo -e "${YELLOW}# See all options${NC}"
    echo "tm-deploy --help"
    echo ""
    echo -e "${BLUE}🔗 More Information:${NC}"
    echo "• Documentation: https://github.com/avivl/claude-007-agents"
    echo "• Issues: https://github.com/avivl/claude-007-agents/issues"
    echo ""
}

# Parse command line options
SKIP_CHECKS=false
QUIET=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --skip-checks)
            SKIP_CHECKS=true
            shift
            ;;
        --quiet)
            QUIET=true
            shift
            ;;
        --help|-h)
            echo "Task Master 0.24.0 Portable Deployment Installer"
            echo ""
            echo "Usage: $0 [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --skip-checks    Skip Node.js/npm version checks"
            echo "  --quiet          Minimize output"
            echo "  --help, -h       Show this help message"
            echo ""
            exit 0
            ;;
        *)
            echo -e "${RED}❌ Unknown option: $1${NC}"
            exit 1
            ;;
    esac
done

# Main installation process
main() {
    if [ "$SKIP_CHECKS" = false ]; then
        check_node
        check_npm
    fi
    
    install_package
    verify_installation
    
    if [ "$QUIET" = false ]; then
        show_usage
    fi
}

# Handle errors
trap 'echo -e "${RED}❌ Installation failed. Please check the error messages above.${NC}"; exit 1' ERR

# Run installation
main

echo -e "${GREEN}✨ Ready to deploy Task Master 0.24.0 to any project!${NC}"