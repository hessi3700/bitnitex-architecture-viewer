#!/bin/bash

# Backend API Endpoint Testing Script
BASE_URL="http://localhost:3001"
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🧪 Testing BitniTex Backend API Endpoints"
echo "=========================================="
echo ""

# Test counter
PASSED=0
FAILED=0

# Function to test endpoint
test_endpoint() {
    local method=$1
    local url=$2
    local data=$3
    local expected_status=$4
    local description=$5
    
    if [ -z "$data" ]; then
        if [ "$method" = "GET" ] || [ "$method" = "DELETE" ]; then
            response=$(curl -s -w "\n%{http_code}" -X $method "$url")
        else
            response=$(curl -s -w "\n%{http_code}" -X $method "$url" -H "Content-Type: application/json" -d '{}')
        fi
    else
        response=$(curl -s -w "\n%{http_code}" -X $method "$url" -H "Content-Type: application/json" -d "$data")
    fi
    
    http_code=$(echo "$response" | tail -n1)
    body=$(echo "$response" | sed '$d')
    
    if [ "$http_code" = "$expected_status" ]; then
        echo -e "${GREEN}✅ PASS${NC}: $description"
        echo "   Status: $http_code"
        if [ ! -z "$body" ] && [ "$body" != "null" ] && [ "$body" != "[]" ]; then
            echo "   Response: $(echo $body | head -c 100)..."
        fi
        ((PASSED++))
    else
        echo -e "${RED}❌ FAIL${NC}: $description"
        echo "   Expected: $expected_status, Got: $http_code"
        echo "   Response: $body"
        ((FAILED++))
    fi
    echo ""
}

# ============================================
# TASKS ENDPOINTS
# ============================================
echo "📋 Testing TASKS Endpoints"
echo "-------------------------"

# POST /api/tasks - Create task
test_data='{
  "nodeId": "TestNode123",
  "title": "Test Task",
  "description": "This is a test task",
  "status": "not_started",
  "estimatedHours": 5,
  "actualHours": 0
}'
test_endpoint "POST" "$BASE_URL/api/tasks" "$test_data" "201" "POST /api/tasks - Create new task"
TASK_ID=$(echo "$body" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

# GET /api/tasks - Get all tasks
test_endpoint "GET" "$BASE_URL/api/tasks" "" "200" "GET /api/tasks - Get all tasks"

# GET /api/tasks/progress - Get progress
test_endpoint "GET" "$BASE_URL/api/tasks/progress" "" "200" "GET /api/tasks/progress - Get task progress"

# GET /api/tasks/node/:nodeId - Find by node ID
test_endpoint "GET" "$BASE_URL/api/tasks/node/TestNode123" "" "200" "GET /api/tasks/node/:nodeId - Find task by node ID"

# GET /api/tasks/:id - Get single task
if [ ! -z "$TASK_ID" ]; then
    test_endpoint "GET" "$BASE_URL/api/tasks/$TASK_ID" "" "200" "GET /api/tasks/:id - Get single task by ID"
else
    echo -e "${YELLOW}⚠️  SKIP${NC}: GET /api/tasks/:id - No task ID available"
    echo ""
fi

# PATCH /api/tasks/:id - Update task
if [ ! -z "$TASK_ID" ]; then
    update_data='{
      "status": "in_progress",
      "actualHours": 2
    }'
    test_endpoint "PATCH" "$BASE_URL/api/tasks/$TASK_ID" "$update_data" "200" "PATCH /api/tasks/:id - Update task"
else
    echo -e "${YELLOW}⚠️  SKIP${NC}: PATCH /api/tasks/:id - No task ID available"
    echo ""
fi

# DELETE /api/tasks/:id - Delete task
if [ ! -z "$TASK_ID" ]; then
    test_endpoint "DELETE" "$BASE_URL/api/tasks/$TASK_ID" "" "204" "DELETE /api/tasks/:id - Delete task"
else
    echo -e "${YELLOW}⚠️  SKIP${NC}: DELETE /api/tasks/:id - No task ID available"
    echo ""
fi

# ============================================
# DIAGRAMS ENDPOINTS
# ============================================
echo "📐 Testing DIAGRAMS Endpoints"
echo "----------------------------"

# POST /api/diagrams - Create diagram (without nodes/edges first to test basic creation)
diagram_data='{
  "diagramId": "test-diagram-new",
  "title": "Test Diagram New",
  "description": "This is a test diagram",
  "mermaidCode": "graph TB\n  A[Node A] --> B[Node B]"
}'
test_endpoint "POST" "$BASE_URL/api/diagrams" "$diagram_data" "201" "POST /api/diagrams - Create new diagram"
DIAGRAM_ID=$(echo "$body" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
# Also try to get diagram ID from the response if available
if [ -z "$DIAGRAM_ID" ]; then
    DIAGRAM_ID=$(echo "$body" | python3 -c "import sys, json; print(json.load(sys.stdin).get('id', ''))" 2>/dev/null || echo "")
fi

# GET /api/diagrams - Get all diagrams
test_endpoint "GET" "$BASE_URL/api/diagrams" "" "200" "GET /api/diagrams - Get all diagrams"

# GET /api/diagrams/diagram-id/:diagramId - Find by diagram ID
test_endpoint "GET" "$BASE_URL/api/diagrams/diagram-id/test-diagram" "" "200" "GET /api/diagrams/diagram-id/:diagramId - Find diagram by diagram ID"

# GET /api/diagrams/:id - Get single diagram
if [ ! -z "$DIAGRAM_ID" ]; then
    test_endpoint "GET" "$BASE_URL/api/diagrams/$DIAGRAM_ID" "" "200" "GET /api/diagrams/:id - Get single diagram by ID"
else
    echo -e "${YELLOW}⚠️  SKIP${NC}: GET /api/diagrams/:id - No diagram ID available"
    echo ""
fi

# PATCH /api/diagrams/diagram-id/:diagramId - Update by diagram ID
update_diagram_data='{
  "title": "Updated Test Diagram",
  "customMermaidCode": "graph TB\n  A[Updated Node A] --> B[Node B]"
}'
test_endpoint "PATCH" "$BASE_URL/api/diagrams/diagram-id/test-diagram" "$update_diagram_data" "200" "PATCH /api/diagrams/diagram-id/:diagramId - Update diagram by diagram ID"

# PATCH /api/diagrams/:id - Update diagram
if [ ! -z "$DIAGRAM_ID" ]; then
    test_endpoint "PATCH" "$BASE_URL/api/diagrams/$DIAGRAM_ID" "$update_diagram_data" "200" "PATCH /api/diagrams/:id - Update diagram by ID"
else
    echo -e "${YELLOW}⚠️  SKIP${NC}: PATCH /api/diagrams/:id - No diagram ID available"
    echo ""
fi

# DELETE /api/diagrams/:id - Delete diagram
if [ ! -z "$DIAGRAM_ID" ]; then
    test_endpoint "DELETE" "$BASE_URL/api/diagrams/$DIAGRAM_ID" "" "204" "DELETE /api/diagrams/:id - Delete diagram"
else
    echo -e "${YELLOW}⚠️  SKIP${NC}: DELETE /api/diagrams/:id - No diagram ID available"
    echo ""
fi

# ============================================
# SUMMARY
# ============================================
echo "=========================================="
echo "📊 Test Summary"
echo "=========================================="
echo -e "${GREEN}✅ Passed: $PASSED${NC}"
echo -e "${RED}❌ Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}⚠️  Some tests failed${NC}"
    exit 1
fi

