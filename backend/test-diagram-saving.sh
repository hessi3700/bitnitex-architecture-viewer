#!/bin/bash

# Test Diagram Saving with Connections
BASE_URL="http://localhost:3001"
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🧪 Testing Diagram Saving with Connections"
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
    
    response=$(curl -s -w "\n%{http_code}" -X $method "$url" -H "Content-Type: application/json" -d "$data")
    http_code=$(echo "$response" | tail -n1)
    body=$(echo "$response" | sed '$d')
    
    if [ "$http_code" = "$expected_status" ]; then
        echo -e "${GREEN}✅ PASS${NC}: $description"
        echo "   Status: $http_code"
        if [ ! -z "$body" ] && [ "$body" != "null" ] && [ "$body" != "[]" ]; then
            echo "   Response: $(echo $body | head -c 150)..."
        fi
        ((PASSED++))
        return 0
    else
        echo -e "${RED}❌ FAIL${NC}: $description"
        echo "   Expected: $expected_status, Got: $http_code"
        echo "   Response: $body"
        ((FAILED++))
        return 1
    fi
    echo ""
}

# Test 1: Save diagram with nodes only (no connections)
echo "📋 Test 1: Save diagram with nodes only"
echo "----------------------------------------"
test_data='{
  "diagramId": "test-connections-1",
  "title": "Test Diagram - Nodes Only",
  "description": "Testing nodes without connections",
  "mermaidCode": "graph TB\n  A[Node A] --> B[Node B]",
  "nodes": [
    {"id": "node-A", "label": "Node A", "x": 100, "y": 100, "width": 150, "height": 80, "type": "default"},
    {"id": "node-B", "label": "Node B", "x": 300, "y": 100, "width": 150, "height": 80, "type": "default"}
  ],
  "edges": [],
  "metadata": {"zoom": 1, "pan": {"x": 0, "y": 0}}
}'
test_endpoint "PATCH" "$BASE_URL/api/diagrams/diagram-id/test-connections-1" "$test_data" "200" "Save diagram with nodes only"
echo ""

# Test 2: Save diagram with nodes and valid connections
echo "📋 Test 2: Save diagram with nodes and valid connections"
echo "--------------------------------------------------------"
test_data='{
  "diagramId": "test-connections-2",
  "title": "Test Diagram - With Connections",
  "description": "Testing nodes with valid connections",
  "mermaidCode": "graph TB\n  A[Node A] --> B[Node B]\n  B --> C[Node C]",
  "nodes": [
    {"id": "node-A", "label": "Node A", "x": 100, "y": 100, "width": 150, "height": 80, "type": "default"},
    {"id": "node-B", "label": "Node B", "x": 300, "y": 100, "width": 150, "height": 80, "type": "service"},
    {"id": "node-C", "label": "Node C", "x": 500, "y": 100, "width": 150, "height": 80, "type": "database"}
  ],
  "edges": [
    {"id": "edge-1", "source": "node-A", "target": "node-B"},
    {"id": "edge-2", "source": "node-B", "target": "node-C"}
  ],
  "metadata": {"zoom": 1, "pan": {"x": 0, "y": 0}}
}'
if test_endpoint "PATCH" "$BASE_URL/api/diagrams/diagram-id/test-connections-2" "$test_data" "200" "Save diagram with valid connections"; then
    DIAGRAM_ID=$(echo "$body" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
    echo "   Diagram ID: $DIAGRAM_ID"
fi
echo ""

# Test 3: Verify saved data
echo "📋 Test 3: Verify saved diagram data"
echo "-------------------------------------"
response=$(curl -s "$BASE_URL/api/diagrams/diagram-id/test-connections-2")
nodes_count=$(echo "$response" | grep -o '"nodes":\[.*\]' | grep -o '{"id"' | wc -l)
edges_count=$(echo "$response" | grep -o '"edges":\[.*\]' | grep -o '{"id"' | wc -l)

if [ "$nodes_count" -ge 3 ] && [ "$edges_count" -ge 2 ]; then
    echo -e "${GREEN}✅ PASS${NC}: Verify saved diagram data"
    echo "   Nodes saved: $nodes_count"
    echo "   Edges saved: $edges_count"
    ((PASSED++))
else
    echo -e "${RED}❌ FAIL${NC}: Verify saved diagram data"
    echo "   Expected: 3+ nodes, 2+ edges"
    echo "   Got: $nodes_count nodes, $edges_count edges"
    ((FAILED++))
fi
echo ""

# Test 4: Save diagram with invalid edge (references non-existent node)
echo "📋 Test 4: Save diagram with invalid edge (should be filtered)"
echo "--------------------------------------------------------------"
test_data='{
  "diagramId": "test-connections-3",
  "title": "Test Diagram - Invalid Edge",
  "description": "Testing with edge to non-existent node",
  "mermaidCode": "graph TB\n  A[Node A]",
  "nodes": [
    {"id": "node-A", "label": "Node A", "x": 100, "y": 100, "width": 150, "height": 80, "type": "default"}
  ],
  "edges": [
    {"id": "edge-invalid", "source": "node-A", "target": "non-existent-node"}
  ],
  "metadata": {"zoom": 1, "pan": {"x": 0, "y": 0}}
}'
test_endpoint "PATCH" "$BASE_URL/api/diagrams/diagram-id/test-connections-3" "$test_data" "200" "Save diagram with invalid edge (backend should handle)"
echo ""

# Test 5: Update existing diagram with new connections
echo "📋 Test 5: Update existing diagram with new connections"
echo "--------------------------------------------------------"
test_data='{
  "nodes": [
    {"id": "node-A", "label": "Node A", "x": 100, "y": 100, "width": 150, "height": 80, "type": "default"},
    {"id": "node-B", "label": "Node B", "x": 300, "y": 100, "width": 150, "height": 80, "type": "service"},
    {"id": "node-C", "label": "Node C", "x": 500, "y": 100, "width": 150, "height": 80, "type": "database"},
    {"id": "node-D", "label": "Node D", "x": 300, "y": 250, "width": 150, "height": 80, "type": "external"}
  ],
  "edges": [
    {"id": "edge-1", "source": "node-A", "target": "node-B"},
    {"id": "edge-2", "source": "node-B", "target": "node-C"},
    {"id": "edge-3", "source": "node-B", "target": "node-D"},
    {"id": "edge-4", "source": "node-C", "target": "node-D"}
  ]
}'
test_endpoint "PATCH" "$BASE_URL/api/diagrams/diagram-id/test-connections-2" "$test_data" "200" "Update diagram with new connections"
echo ""

# Test 6: Complex diagram with multiple node types and connections
echo "📋 Test 6: Complex diagram with multiple connections"
echo "-----------------------------------------------------"
test_data='{
  "diagramId": "test-connections-complex",
  "title": "Complex Diagram Test",
  "description": "Testing complex diagram with many connections",
  "mermaidCode": "graph TB\n  A[Client] --> B[API]\n  B --> C[Service]\n  C --> D[Database]",
  "nodes": [
    {"id": "client", "label": "Client", "x": 50, "y": 50, "width": 120, "height": 60, "type": "default"},
    {"id": "api", "label": "API Gateway", "x": 250, "y": 50, "width": 150, "height": 60, "type": "controller"},
    {"id": "service", "label": "Service", "x": 450, "y": 50, "width": 120, "height": 60, "type": "service"},
    {"id": "db", "label": "Database", "x": 450, "y": 200, "width": 120, "height": 60, "type": "database"}
  ],
  "edges": [
    {"id": "e1", "source": "client", "target": "api"},
    {"id": "e2", "source": "api", "target": "service"},
    {"id": "e3", "source": "service", "target": "db"}
  ],
  "metadata": {"zoom": 1, "pan": {"x": 0, "y": 0}}
}'
test_endpoint "PATCH" "$BASE_URL/api/diagrams/diagram-id/test-connections-complex" "$test_data" "200" "Save complex diagram with multiple connections"
echo ""

# Test 7: Verify complex diagram was saved correctly
echo "📋 Test 7: Verify complex diagram data"
echo "---------------------------------------"
response=$(curl -s "$BASE_URL/api/diagrams/diagram-id/test-connections-complex")
has_nodes=$(echo "$response" | grep -q '"nodes"' && echo "yes" || echo "no")
has_edges=$(echo "$response" | grep -q '"edges"' && echo "yes" || echo "no")
node_count=$(echo "$response" | python3 -c "import sys, json; data=json.load(sys.stdin); print(len(data.get('nodes', [])))" 2>/dev/null || echo "0")
edge_count=$(echo "$response" | python3 -c "import sys, json; data=json.load(sys.stdin); print(len(data.get('edges', [])))" 2>/dev/null || echo "0")

if [ "$has_nodes" = "yes" ] && [ "$has_edges" = "yes" ] && [ "$node_count" -ge 4 ] && [ "$edge_count" -ge 3 ]; then
    echo -e "${GREEN}✅ PASS${NC}: Verify complex diagram data"
    echo "   Nodes: $node_count"
    echo "   Edges: $edge_count"
    ((PASSED++))
else
    echo -e "${RED}❌ FAIL${NC}: Verify complex diagram data"
    echo "   Has nodes: $has_nodes, Has edges: $has_edges"
    echo "   Node count: $node_count, Edge count: $edge_count"
    ((FAILED++))
fi
echo ""

# Summary
echo "=========================================="
echo "📊 Test Summary"
echo "=========================================="
echo -e "${GREEN}✅ Passed: $PASSED${NC}"
echo -e "${RED}❌ Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed! Diagram saving with connections works correctly!${NC}"
    exit 0
else
    echo -e "${RED}⚠️  Some tests failed${NC}"
    exit 1
fi

