#!/usr/bin/env node
/**
 * Seed the VPN Architecture diagram into the backend database via CRUD API.
 * - Run once with --reset to delete the DB (then start backend and run again without --reset).
 * - Or ensure backend/bitnitex.db is deleted manually, start backend, then run this script.
 */

const fs = require('fs')
const path = require('path')

const API_BASE = process.env.API_BASE_URL || 'http://localhost:3001'
const DB_PATH = path.join(__dirname, 'backend', 'bitnitex.db')

const VPN_DIAGRAM = {
  diagramId: 'everything',
  title: 'VPN Architecture (User → Iran VPS → Starlink → Germany → Internet)',
  description: 'User in Iran connects via Reality to Iran VPS, then through Starlink PC to Germany VPS and out to the internet. Auth and key management in control plane.',
  mermaidCode: `%%{init: {'theme': 'dark', 'flowchart': {'curve': 'basis'}}}%%
flowchart TD
    subgraph Iran_VPS["🇮🇷 Iran VPS (ParsPack)"]
        direction TB
        Web["🌐 Decoy Shop Website<br/>(Nginx, HTTPS, valid cert)"]
        XrayIn["📡 Xray Inbound (Reality)<br/>• Port 443 (same as website)<br/>• VLESS + Reality<br/>• Dest: cloudflare.com:443<br/>• TLS fingerprint mimicry"]
        XrayOut["📤 Xray Outbound (to Starlink PC)<br/>• VLESS + WebSocket + TLS<br/>• WSS on port 443<br/>• Points to Starlink PC public IP"]
        RouterIran["🔄 Routing Rules<br/>• If dest is website → serve Web<br/>• If dest is proxy → XrayOut"]
    end

    subgraph User_Space["🧑 User Environment (Iran)"]
        Client["📱 Client Device<br/>(Phone/PC)"]
        ClientApp["🛜 Hiddify/Xray Client<br/>• Reality protocol<br/>• TLS 1.3<br/>• Fake SNI: cloudflare.com"]
        AuthClient["🔑 Auth Module<br/>• Login to Auth Server<br/>• Receives WireGuard keys"]
    end

    subgraph Starlink_PC["🛰️ Starlink PC (Hidden in Iran)"]
        direction TB
        StarlinkDish["📡 Starlink Dish (Gen 2/Mini)<br/>• Modified: inside solar panel<br/>• 12V DC conversion kit<br/>• Bypass mode enabled"]
        XrayStarlinkIn["📥 Xray Inbound (from Iran VPS)<br/>• VLESS + WebSocket + TLS<br/>• Port 443 (listens on Starlink IP)"]
        WireGuardOut["🔐 WireGuard Tunnel (to Germany)<br/>• Encrypted UDP tunnel<br/>• Connects to Germany VPS<br/>• Routes all traffic"]
        RouterStarlink["🔄 Routing Rules<br/>• Inbound from Iran VPS → WireGuard<br/>• Outbound from WireGuard → Internet"]
    end

    subgraph Control_Plane["🛂 Control & Management"]
        AuthDB[(Auth Database<br/>• User credentials<br/>• Active sessions)]
        KeyGen["🔑 Key Generator<br/>• Unique WireGuard keys<br/>• UUIDs for Xray"]
    end

    subgraph Germany_VPS["🇩🇪 Germany VPS (Hetzner/Contabo)"]
        direction TB
        WireGuardIn["🔐 WireGuard Server<br/>• Accepts tunnel from Starlink PC<br/>• Assigns internal IP"]
        XrayExit["🌍 Xray Outbound (to Internet)<br/>• Freedom protocol<br/>• NAT to internet"]
        AuthServer["🔑 Auth Server<br/>• User accounts<br/>• One‑connection enforcement<br/>• Issues WireGuard/Xray configs"]
        RouterGermany["🔄 Routing & NAT<br/>• Forwards traffic to/from Internet"]
    end

    subgraph Internet["🌐 Global Internet"]
        Instagram["📸 Instagram/Facebook"]
        Google["🔍 Google"]
        Others["📦 Other Services"]
    end

    %% Control plane on top of Germany VPS
    AuthDB --> AuthServer
    KeyGen --> AuthServer

    %% Auth goes through same Xray path: Client → Iran VPS (Xray) → Starlink → Germany → AuthServer
    AuthClient -->|"1. Login via Xray/Reality"| XrayIn
    AuthServer -->|"2. Config + Keys"| RouterGermany

    ClientApp -->|"3. VPN Connection"| XrayIn

    XrayIn -->|"4. Inspect & Route"| RouterIran
    RouterIran -->|"5. Proxy traffic"| XrayOut
    RouterIran -.->|"6. Legit browsing"| Web
    Web -->|Decoy / HTTPS| Client

    XrayOut -->|"7. VLESS+WS+TLS Port 443"| XrayStarlinkIn

    XrayStarlinkIn -->|"8. Decapsulate"| RouterStarlink
    RouterStarlink -->|"9. All traffic"| WireGuardOut
    StarlinkDish -->|"10. Raw IP"| RouterStarlink

    WireGuardOut -->|"11. Encrypted UDP Tunnel"| WireGuardIn
    WireGuardIn -->|"12. Decrypt & Route"| RouterGermany
    RouterGermany -->|"13. NAT to Internet"| XrayExit
    XrayExit -->|"14. HTTP/HTTPS"| Instagram & Google & Others

    %% Return path (simplified)
    Instagram -->|Response| RouterGermany
    RouterGermany -->|"Encapsulate in WireGuard"| WireGuardIn
    WireGuardIn -->|"Tunnel back"| WireGuardOut
    WireGuardOut -->|"To XrayStarlinkIn"| RouterStarlink
    RouterStarlink -->|"Via Xray outbound"| XrayStarlinkIn
    XrayStarlinkIn -->|VLESS+WS+TLS| XrayOut
    XrayOut -->|"Via Iran VPS inbound"| XrayIn
    XrayIn -->|Reality| ClientApp
    XrayIn -->|"Config + Keys"| AuthClient

    %% Styling for clarity
    classDef red fill:#8B0000,stroke:#333,stroke-width:2px;
    classDef green fill:#006400,stroke:#333,stroke-width:2px;
    classDef blue fill:#00008B,stroke:#333,stroke-width:2px;
    classDef orange fill:#B8860B,stroke:#333,stroke-width:2px;
    classDef purple fill:#4B0082,stroke:#333,stroke-width:2px;

    class Client,ClientApp,AuthClient red;
    class Web,XrayIn,XrayOut,RouterIran green;
    class StarlinkDish,XrayStarlinkIn,WireGuardOut,RouterStarlink blue;
    class WireGuardIn,XrayExit,AuthServer,RouterGermany orange;
    class AuthDB,KeyGen purple;

    %% Notes on specific links (control=purple, auth path=green, proxy=orange, tunnel=cyan, internet=white)
    linkStyle 0 stroke:#9370DB,stroke-width:2px;
    linkStyle 1 stroke:#9370DB,stroke-width:2px;
    linkStyle 2 stroke:#00FF00,stroke-width:2px;
    linkStyle 3 stroke:#00FF00,stroke-width:2px;
    linkStyle 4 stroke:#FFA500,stroke-width:3px;
    linkStyle 5 stroke:#FFA500,stroke-width:3px;
    linkStyle 6 stroke:#FFA500,stroke-width:3px;
    linkStyle 7 stroke:#FFA500,stroke-width:3px;
    linkStyle 8 stroke:#FFA500,stroke-width:2px;
    linkStyle 9 stroke:#00FFFF,stroke-width:3px;
    linkStyle 10 stroke:#00FFFF,stroke-width:3px;
    linkStyle 11 stroke:#00FFFF,stroke-width:3px;
    linkStyle 12 stroke:#00FFFF,stroke-width:3px;
    linkStyle 13 stroke:#00FFFF,stroke-width:3px;
    linkStyle 14 stroke:#00FFFF,stroke-width:3px;
    linkStyle 15 stroke:#00FFFF,stroke-width:3px;
    linkStyle 16 stroke:#FFFFFF,stroke-width:2px;
    linkStyle 17 stroke:#FFFFFF,stroke-width:2px;
    linkStyle 18 stroke:#FFFFFF,stroke-width:2px;
    linkStyle 19 stroke:#FFFFFF,stroke-width:2px;
    linkStyle 20 stroke:#FFFFFF,stroke-width:2px;
    linkStyle 21 stroke:#FFFFFF,stroke-width:2px;
    linkStyle 22 stroke:#FFFFFF,stroke-width:2px;
    linkStyle 23 stroke:#FFFFFF,stroke-width:2px;
    linkStyle 24 stroke:#FFFFFF,stroke-width:2px;
    linkStyle 25 stroke:#00FF00,stroke-width:2px;
`,
  metadata: { type: 'detail', icon: '🌐' }
}

async function deleteDbIfRequested() {
  const reset = process.argv.includes('--reset')
  if (!reset) return false
  try {
    if (fs.existsSync(DB_PATH)) {
      fs.unlinkSync(DB_PATH)
      console.log('✅ Deleted backend/bitnitex.db')
      return true
    }
    console.log('ℹ️  No backend/bitnitex.db found (already removed or not created yet)')
    return true
  } catch (e) {
    console.error('❌ Failed to delete database:', e.message)
    process.exit(1)
  }
}

async function seedDiagram() {
  const url = `${API_BASE}/api/diagrams`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(VPN_DIAGRAM)
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`POST ${url} failed: ${res.status} ${res.statusText}\n${text}`)
  }
  const data = await res.json()
  console.log('✅ Diagram created:', data.diagramId, '(id:', data.id + ')')
  return data
}

async function main() {
  const didReset = await deleteDbIfRequested()
  if (didReset) {
    console.log('')
    console.log('Next: start the backend (cd backend && npm run start:dev), wait until it is ready,')
    console.log('then run this script again without --reset:')
    console.log('  node seed-vpn-diagram.js')
    console.log('')
    process.exit(0)
    return
  }

  try {
    await seedDiagram()
  } catch (e) {
    console.error('❌', e.message)
    console.log('')
    console.log('Ensure the backend is running: cd backend && npm run start:dev')
    console.log('If you just deleted the DB, start the backend first, then run: node seed-vpn-diagram.js')
    process.exit(1)
  }
}

main()
