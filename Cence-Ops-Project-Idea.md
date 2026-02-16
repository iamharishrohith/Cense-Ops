CENCE-OPS
AI-Native SaaS Cost Optimization Platform
Tamil Nadu National Level Government Hackathon — Innovation Document


================================================================================
1. THE PROBLEM
================================================================================

1.1 The SaaS Waste Crisis in Numbers

The enterprise world is drowning in software subscriptions it doesn't fully use.

Average SaaS apps per organization: 305
License utilization rate: ~54% (nearly half wasted)
Average annual SaaS waste per enterprise: $18 million
Licenses that go unused within 30 days: 40%
Software that goes completely unused: 49%
Employees using unsanctioned AI tools: 50%
Global annual cost of unused licenses: $28+ billion
Average annual SaaS price increase: 8.7%, up to 25% for AI features


1.2 The 2026 "SaaS-pocalypse"

The software industry is undergoing a structural reset:

$1 trillion in SaaS market cap erased in one week (Feb 2026). The per-seat pricing model is dying — usage-based pricing (UBP) is replacing it. AI agents are now the invisible workers, replacing 20-30% of SaaS UI interactions. Costs are silently shifting from payroll budgets to software budgets. The era of unchecked SaaS sprawl is over, but spending keeps rising (8% annually).


1.3 Root Causes

1. Decentralized procurement — departments buy tools independently, creating overlaps
2. Auto-renewals — contracts renew silently without usage review
3. No visibility — decision-makers can't distinguish essential tools from waste
4. Employee turnover — leavers' licenses remain active for months
5. Shadow IT/AI — employees adopt tools using personal cards, bypassing IT governance
6. AI agent opacity — organizations have no visibility into AI tool consumption costs


1.4 The Indian Enterprise Context

India has 1,500+ GCCs (Global Capability Centers) managing global software operations. Indian IT giants (TCS: 600K employees, Infosys: 330K, Wipro: 250K) face massive license sprawl. The DPDP Act 2023 (Digital Personal Data Protection) creates new compliance obligations for usage monitoring. Government departments lack SaaS governance entirely — no standardized approach exists.


================================================================================
2. WHY EXISTING SOLUTIONS FALL SHORT
================================================================================

2.1 Current Market Leaders

BetterCloud: SaaS operations, workflow automation. Misses predictive analytics, AI agent tracking.
Zylo: Spend management, renewal optimization. Misses shadow AI detection, scenario planning.
Torii: Discovery, spend tracking, lifecycle. Misses government compliance, department-specific logic.
Productiv: Deep usage analytics, adoption metrics. Misses what-if simulator, Indian compliance.
Zluri: Discovery, lifecycle management. Misses AI governance, cost prediction.


2.2 The 6 Critical Gaps

1. No AI agent governance — AI is the new employee, silently burning budget, and nobody tracks it.
2. No predictive engine — Current tools are reactive; they show waste AFTER it happens.
3. No shadow AI detection — 50% of employees use unapproved AI tools, completely invisible.
4. No scenario simulator — Can't answer "what happens if we consolidate X into Y?"
5. No India/Gov compliance — No DPDP Act, no GFR alignment, no TNeGA integration.
6. No department-specific logic — Same generic dashboard for engineering, HR, marketing — fundamentally wrong.


================================================================================
3. THE SOLUTION: CENCE-OPS
================================================================================

3.1 The Name

Cence-Ops = Licence + Operations meets Sense + Ops.
Intelligent license operations that make sense of your SaaS chaos.


3.2 The One-Liner

"The first platform that governs both human SaaS usage AND AI agent consumption through a single intelligent control plane — built on a Virtual DB architecture for India's regulatory reality."


3.3 Core Proposition

Cence-Ops is not just a cost tracker. It is an intelligent SaaS governance engine that:

1. Sees everything — human users, AI agents, shadow apps, across all departments
2. Predicts waste — before it happens, not after
3. Simulates decisions — what-if scenarios with risk + savings projections
4. Acts autonomously — auto-reclaims unused licenses through a self-healing pipeline
5. Complies natively — DPDP Act, GFR, TNeGA built into the core, not bolted on


================================================================================
4. THE 10 INNOVATIONS
================================================================================


INNOVATION 1: Virtual DB Architecture (Redis <> PostgreSQL Reconciler)
----------------------------------------------------------------------

What: A database pattern inspired by React's Virtual DOM.

How it works:
Redis acts as the "Virtual DB" — holds the current in-memory state of all metrics, KPIs, usage data. PostgreSQL acts as the "Real DB" — persistent source of truth for history, contracts, compliance. A Reconciler engine runs every 5 seconds:

  1. Reads "dirty keys" from Redis (what changed)
  2. Diffs the changes against the last-synced state
  3. Batch-writes only the delta to Postgres
  4. Clears dirty flags
  5. Emits sync events via Redis pub/sub

Why it's innovative:
Sub-millisecond dashboard reads (everything from Redis). High-frequency write handling (usage events stream into Redis without DB pressure). Eventual consistency with audit-grade persistence. Nobody applies the Virtual DOM pattern to database architecture — this is cross-domain innovation.

Architecture:

    Incoming Events (SSO, APIs, Webhooks)
             |
             v
    +-------------------------+
    |   REDIS (Virtual DB)    | <-- Dashboard Reads (sub-ms)
    |                         | <-- WebSocket Live Updates
    |  . Live state snapshots |
    |  . Dirty-key tracker    |
    |  . Pub/Sub channels     |
    |  . Cached aggregations  |
    +--------+----------------+
             |  Reconciler (every 5s)
             |  diff > batch-write > clear
             v
    +-------------------------+
    |  POSTGRESQL (Real DB)   |
    |                         |
    |  . Historical time-series|
    |  . Contracts & licenses |
    |  . Audit trail (append) |
    |  . Compliance records   |
    +-------------------------+


INNOVATION 2: AI Agent Cost Governance — "The Invisible Worker Tax"
-------------------------------------------------------------------

The problem nobody else is solving:
AI agents (GitHub Copilot, ChatGPT Enterprise, Microsoft Copilot, Salesforce Einstein) are the new employees. They consume tokens, rack up inference costs, and often overlap in function. No existing platform tracks this.

What Cence-Ops does:
Monitors per-agent API token consumption and inference costs. Calculates ROI per AI agent (tokens consumed vs. productivity gained). Detects AI tool redundancy (e.g., Copilot + Tabnine + Cursor doing the same job). Shows the "AI Tax" dashboard: total monthly AI spend, per-department breakdown, overlap warnings.

Example insight:
"Your organization spent Rs.73.3L this month on 10 AI agents. 4 agents overlap in the Code Generation category. Consolidating to GitHub Copilot alone would save Rs.8.9L/month (Rs.1.07Cr/year)."


INNOVATION 3: Department DNA Fingerprinting
-------------------------------------------

The problem: Current platforms show the same dashboard to engineering, HR, marketing, and finance. But SaaS waste patterns are fundamentally different across departments.

Engineering & DevOps:
  Waste DNA: Zombie dev environments, unused GitHub seats, CI/CD credit waste
  Optimization: 14-day no-commit > flag seat; auto-shutdown idle environments post-sprint

Human Resources:
  Waste DNA: Orphaned licenses from leavers, contractor expirations, privilege creep
  Optimization: JML lifecycle automation: auto-revoke on exit, role-based provisioning on join

Marketing & Sales:
  Waste DNA: MarTech overlap (HubSpot + Marketo + Mailchimp), ABM sprawl, unused email credits
  Optimization: Consolidation scoring: identify duplicate email/CRM/analytics tools

Finance:
  Waste DNA: Redundant ERPs, payment gateway duplication, unused analytics seats
  Optimization: ERP consolidation + gateway rationalization > 5-10% annual savings

Design & Creative:
  Waste DNA: Creative cloud hoarding, Figma + Adobe overlap, unused Pro seats
  Optimization: Usage-hours right-sizing; consolidate to primary design platform

IT Infrastructure:
  Waste DNA: Monitoring duplication (Datadog + Splunk + New Relic), security tool overlap
  Optimization: Stack rationalization: consolidate monitoring + alerting layers

Each department head sees their waste pattern, benchmarked against industry norms.


INNOVATION 4: The Savings Simulator (What-If Engine)
----------------------------------------------------

The problem: Current tools say "you're wasting Rs.2Cr." But decision-makers need to answer:
"What if we move everyone from Slack + Teams to just Teams?"
"What if we downgrade 40% of Salesforce Enterprise licenses to Professional?"
"What happens to productivity if we cut Figma and keep only Adobe CC?"

How it works:
Interactive scenarios with drag-and-drop tool consolidation. Projected savings with confidence intervals (not just a single number). Risk assessment: "Consolidating to Teams saves Rs.45L/yr but 23% of engineers prefer Slack — migration friction: HIGH." Side-by-side comparison: keep current state vs. consolidated state. AI-generated negotiation brief: vendor-specific talking points, target price, leverage data.

Pre-built scenarios (from research data):

  Consolidate Slack + Teams + Webex > Teams
    Current: Rs.8.92Cr | Projected: Rs.5.20Cr | Savings: Rs.3.72Cr (42%) | Risk: HIGH

  Unify Jira + Asana + Monday > Jira
    Current: Rs.6.45Cr | Projected: Rs.3.80Cr | Savings: Rs.2.65Cr (41%) | Risk: MEDIUM

  Consolidate CRM: Salesforce + HubSpot + Zoho > Salesforce
    Current: Rs.12.40Cr | Projected: Rs.8.90Cr | Savings: Rs.3.50Cr (28%) | Risk: HIGH

  AI Code Tools: Copilot + Tabnine + Cursor > Copilot
    Current: Rs.2.31Cr | Projected: Rs.1.42Cr | Savings: Rs.0.89Cr (39%) | Risk: LOW

  Design: Figma + Adobe + Sketch > Figma
    Current: Rs.1.85Cr | Projected: Rs.0.95Cr | Savings: Rs.0.90Cr (49%) | Risk: MEDIUM

  Right-size Salesforce licenses (40% Enterprise > Professional)
    Current: Rs.5.40Cr | Projected: Rs.3.24Cr | Savings: Rs.2.16Cr (40%) | Risk: LOW

  Monitoring: Datadog + Splunk + New Relic > Datadog
    Current: Rs.4.20Cr | Projected: Rs.2.60Cr | Savings: Rs.1.60Cr (38%) | Risk: MEDIUM

  AI Assistants: ChatGPT + Claude + Jasper > ChatGPT Enterprise
    Current: Rs.1.81Cr | Projected: Rs.1.15Cr | Savings: Rs.0.66Cr (36%) | Risk: LOW


INNOVATION 5: Shadow AI Radar
------------------------------

The problem: 50% of employees use unapproved AI tools. This creates security risk (sensitive company data pasted into personal AI accounts), budget leak (expense reports hide AI subscriptions in miscellaneous categories), and compliance violation (DPDP Act requires data processing awareness).

Detection methods:
  Expense report scanning — catches AI tool subscriptions on personal cards (ChatGPT Plus, Claude Pro, Perplexity)
  Browser extension analysis — catches AI browser extensions and OAuth tokens connecting to unsanctioned services
  SSO anomaly detection — catches OAuth grants to unknown applications through corporate identity
  Network analysis — catches API calls to AI inference endpoints from corporate devices

Risk classification:
  CRITICAL — Data-handling AI tools without corporate data agreements (ChatGPT personal, DeepSeek)
  HIGH — Productivity tools with data leakage potential (Notion unmanaged, Otter.ai)
  MEDIUM — Creative/utility tools with low data risk (Canva, Grammarly personal)
  LOW — Tools with minimal data exposure (Loom, browser-only tools)

Visualization: Risk Heatmap grid (Departments x AI Tool Categories) showing approved vs. shadow vs. unknown.


INNOVATION 6: License Autopilot (Self-Healing Governance)
---------------------------------------------------------

Beyond flagging — autonomous action:

  User inactive 14 days
    |
    v
  Automated Slack/Teams DM: "Are you still using [Tool]?"
    |
    +-- User responds "Yes" > Reset monitoring timer
    |
    +-- User responds "No" > Auto-reclaim license > Notify manager
    |
    +-- No response for 48 hours > Auto-reclaim > Notify manager > Add to reclamation report

JML (Joiner-Mover-Leaver) Lifecycle:

  Joiner (New hire): Role-based provisioning from approved SaaS catalog. No over-licensing guesswork.
  Mover (Role change): Deprovision old department apps, provision new. No privilege creep.
  Leaver (Departure): Instant revocation of all access, tokens, OAuth grants. Zero orphaned licenses; Rs.5.17M avg breach cost avoided.


INNOVATION 7: India-First Compliance Engine
-------------------------------------------

No western platform offers this. We do.

  DPDP Act 2023: Automated consent management, PII masking in usage logs, 72hr breach notification templates, data retention policies tied to employee exit dates, SDF designation support.

  GFR (Government Financial Rules): Pre-configured procurement approval workflows, budget cycle integration with government fiscal years.

  TNeGA: Integration with Tamil Nadu e-Governance Agency for state-level SaaS visibility, SimpleGov initiative alignment.

  Digital India: OAuth 2.0/OIDC authentication, encryption at-rest & in-transit, comprehensive audit logging.

  Data Localization: Jurisdiction-aware hosting; ensures sensitive government data remains within Indian data centers.

Event-sourced audit trail — every action is an immutable, append-only record:

    {
      timestamp: "2026-02-15T10:30:00Z",
      actor: "IT_ADMIN",
      action: "LICENSE_RECLAIMED",
      entity: "Jira Enterprise Seat",
      user_affected: "user_4521",
      reason: "48hr no-response to reclamation notice",
      before_state: { license: "active", tier: "Enterprise" },
      after_state: { license: "reclaimed", tier: null },
      compliance_tags: ["DPDP_DATA_MINIMIZATION", "GFR_COMPLIANT"]
    }


INNOVATION 8: GeM Price Benchmarking — The "Atmanirbhar" Module
----------------------------------------------------------------

The India-First power move for government contexts.

In India, government procurement happens through the GeM (Government e-Marketplace). No SaaS optimization platform connects to it.

How it works:
When Cence-Ops detects a department is paying Rs.5,000/seat for a foreign SaaS tool, it cross-references the GeM catalog to check: Is there a local Indian alternative available at Rs.3,000/seat? (e.g., Zoho for CRM, JioMeet for Video). Is there a bulk government rate negotiated on GeM? Does the alternative meet DPDP compliance requirements?

Example insight:
"Department of Higher Education pays Rs.8,400/seat/year for Microsoft Teams Premium. GeM shows JioMeet (Government Plan) at Rs.2,100/seat/year — 75% savings, fully data-localized, TNeGA compliant."

GeM Benchmarking Examples:

  Microsoft Teams Premium: Rs.8,400/yr > JioMeet Gov: Rs.2,100/yr (75% savings, data localized)
  Salesforce Enterprise: Rs.24,000/yr > Zoho CRM: Rs.6,000/yr (75% savings, data localized)
  Slack Business+: Rs.7,200/yr > Rocket.Chat Self-hosted: Rs.1,800/yr (75% savings, data localized)
  Adobe Creative Cloud: Rs.36,000/yr > Canva Enterprise: Rs.12,000/yr (67% savings, data localized)
  Zoom Enterprise: Rs.18,000/yr > Cisco Webex GovCloud: Rs.9,000/yr (50% savings, data localized)

Why this wins: Aligns with Atmanirbhar Bharat (self-reliant India) initiative. Judges at a TN government hackathon will love this. It's not just cost optimization; it's digital sovereignty.


INNOVATION 9: Zero-Knowledge Privacy Discovery — The "Anti-Spyware" Agent
--------------------------------------------------------------------------

The biggest enterprise objection to SaaS monitoring: "Isn't this spyware?"

Cence-Ops answers this with a mathematically provable privacy-first architecture.

The Zero-Knowledge Discovery Agent:

Instead of sending every URL an employee visits to the server (privacy nightmare), we use a Local Browser Scrubber:

  1. Discovery occurs on the client-side (employee's machine/browser extension)
  2. The extension checks URLs against a local SaaS signature database
  3. It only sends a "Match" signal if the URL matches a known SaaS pattern
  4. Non-matching URLs are instantly discarded at the edge — they never leave the device

Privacy Scoring Function:

  If U is the set of all URLs visited and S is the set of known SaaS signatures:

    P(u) = 1 if u is in S    > Send match signal to Cence-Ops
    P(u) = 0 if u is not in S > Discard immediately at edge (never transmitted)

  Any URL where P(u) = 0 is instantly destroyed at the edge, ensuring PII never hits the Redis Virtual DB.

Architecture:

    +----------------------------------------------+
    |  Employee Device (Browser Extension)          |
    |                                              |
    |  All URLs > Local SaaS Signature Match       |
    |              |                    |           |
    |         Match (P=1)         No Match (P=0)   |
    |              |                    |           |
    |         Send signal         DESTROY locally   |
    |              |                    X           |
    +--------------+-------------------------------+
                   |
                   v
    +----------------------------------------------+
    |  Cence-Ops Server                            |
    |  Only receives: { app: "Slack", active: true }|
    |  Never receives: personal URLs, browsing data |
    +----------------------------------------------+

Why this wins: Solves the number one adoption blocker in government and enterprise. Proves compliance by architecture, not by policy. The DPDP Act mandates data minimization — this is data minimization taken to its mathematical extreme.


INNOVATION 10: Carbon-Ops — The Sustainability Score
-----------------------------------------------------

SaaS waste isn't just a financial leak — it's a carbon leak.

The insight: Every underutilized SaaS license represents server compute cycles burning energy for nobody, data center cooling for unused capacity, and network bandwidth for idle connections.

What Cence-Ops adds — a Sustainability Dashboard that translates license waste into environmental impact:

  Wasted Compute Hours: Unused licenses x avg server hours/license = 12,400 hrs/month
  CO2 Emissions Avoided: Reclaimed licenses x 0.5 kg CO2/license/month = 2,340 kg CO2/year saved
  Equivalent Trees: CO2 saved / 22 kg CO2/tree/year = 106 trees equivalent
  Energy Saved: Reclaimed licenses x 0.8 kWh/license/month = 9,600 kWh/year

Dashboard example:

    By reclaiming 1,000 unused licenses this quarter:
      > Reduced digital carbon footprint by 2,340 kg CO2
      > Equivalent to planting 106 trees
      > Saved 9,600 kWh of energy
      > Aligned with India's Green IT Roadmap 2026-2030

Why this wins: Green IT is a massive priority for the 2026-2030 government roadmap. ESG reporting is mandatory for listed companies. This gives Cence-Ops a triple bottom line: saves money, improves security, AND reduces carbon footprint.


================================================================================
5. HOW IT CONNECTS — THE INTEGRATION STRATEGY
================================================================================

The biggest question: "How does Cence-Ops actually plug into an organization's existing systems without creating more chaos?"

Answer: Progressive onboarding. Not "connect everything at once." Five layers, each independently valuable.


5.1 The 5 Connection Methods (Easiest to Hardest)

  Layer 1: SSO / Identity Provider (Easiest — 1 connection unlocks 80%)

    Connect to the company's Azure AD, Google Workspace, or Okta. This single API key reveals every SaaS app that employees log into via corporate SSO. One connection = visibility into 80% of the SaaS stack. This is how BetterCloud and Zylo start too. No per-app setup needed.

    What it reveals: Which apps exist, who has access, login frequency, last active date.

  Layer 2: Browser Extension (Zero-Knowledge Agent — catches the remaining 20%)

    Install a lightweight extension on employee browsers. It uses the Zero-Knowledge architecture from Innovation 9 — checks URLs against a local SaaS signature database on the device, only sends match signals, never sends personal browsing data.

    What it reveals: Shadow apps, personal AI tools, unapproved SaaS usage that SSO can't see.

  Layer 3: Finance / Expense API (finds hidden spend)

    Connect to the company's expense management system (SAP Concur, Zoho Expense, QuickBooks). Scans expense reports for SaaS subscriptions buried under "Software," "Subscriptions," or "Miscellaneous" categories.

    What it reveals: Shadow spend on personal credit cards, duplicate subscriptions, AI tool purchases expensed individually.

  Layer 4: Direct SaaS APIs — Plugin Architecture (deep usage data)

    For detailed feature-level usage (not just "who logged in" but "who used which feature how often"), we connect directly to individual SaaS APIs. Each plugin implements three standard methods:

      fetchUsage() — pulls usage metrics from the SaaS tool
      fetchLicenses() — reads current license count and tier
      reclaimSeat() — programmatically deactivates an unused seat

    Priority plugins (first 20): Slack, Microsoft 365, Jira, GitHub, Salesforce, Zoom, HubSpot, Google Workspace, Notion, Figma, AWS, Azure, Datadog, Confluence, Asana, Monday.com, Adobe CC, ChatGPT Enterprise, GitHub Copilot, ServiceNow.

    What it reveals: Feature-level adoption, per-user active usage hours, license tier vs actual need.

  Layer 5: Network / Proxy Analysis (enterprise-grade — optional)

    For large enterprises with existing network monitoring (proxy logs, DNS logs, firewall data), Cence-Ops can ingest these logs to detect API calls to AI inference endpoints (OpenAI, Anthropic, etc.) from corporate networks.

    What it reveals: AI tool usage from corporate devices even without browser extension, API-level shadow AI activity.


5.2 Progressive Onboarding Timeline — Not "Big Bang"

The key insight: you don't need ALL connections on day one. Each step adds value independently.

  Day 1:   Connect SSO (Azure AD or Google)      >  See 80% of SaaS stack instantly
  Day 3:   Deploy browser extension               >  Catch shadow apps and AI tools
  Day 7:   Connect expense/finance system          >  Find hidden SaaS spend
  Day 14:  Add deep plugins (Slack, Jira, GitHub)  >  Get feature-level usage insights
  Day 30:  Full visibility achieved                >  License Autopilot mode engaged

No chaos. No "integrate 50 tools before you see value." Value from hour one.


5.3 For The Hackathon Demo — Simulated Data Layer

Practical truth: we don't connect to real systems in the demo. And that's perfectly fine — this is standard for hackathons.

What we do instead:
  Our companies.ts data layer has 77 real Indian companies with realistic metrics.
  We pre-populate Redis with simulated live data (usage events, shadow detections, AI agent costs).
  The dashboard reads from Redis as if real connectors are feeding it.
  The Reconciler writes to PostgreSQL as if real events are flowing.
  The architecture is identical to production — only the data source differs.

When a judge asks "how does this connect?", we show the Plugin Architecture and Progressive Onboarding timeline, then say:

  "In production, each SaaS tool gets a connector plugin that takes 5 minutes to configure. For this demo, we're running against our research dataset of 77 Indian IT companies. The architecture is the same — the data source is the only difference. And that's the point: the platform works regardless of where the data comes from."


================================================================================
6. TECHNICAL ARCHITECTURE
================================================================================

6.1 System Architecture

    DISCOVERY LAYER
      SSO/IdP, Expense Reports, SaaS APIs, Browser Extensions, Network Analysis
        |
        v
      Connector Registry (Plugin Architecture)
        Slack Plugin, Jira Plugin, GitHub Plugin, Custom Plugin
        Each implements: fetchUsage(), fetchLicenses(), reclaimSeat()
        |
        v
    VIRTUAL DB ENGINE (Redis <> Postgres)
      Redis (Hot)              Reconciler          Postgres (Cold)
        Live KPIs               Dirty-key diff      History
        Usage snapshots         Batch upsert        Contracts
        Shadow detections       5s interval         Audit log
        AI agent counters       Sync events         Compliance
        Pub/Sub channels                            Decisions
        |
        v
    INTELLIGENCE ENGINE
      Anomaly Detection (Z-score on usage sliding windows)
      Renewal Risk Prediction (contract + usage pattern model)
      Consolidation Scorer (overlap detection + affinity)
      Savings Projector (scenario modeling with confidence)
      AI Agent ROI Calculator (tokens vs productivity)
      GeM Price Benchmarker (Indian alternative matcher)
      Carbon Impact Calculator (sustainability scoring)
        |
        v
    ACTION LAYER
      Savings Simulator (what-if engine)
      License Autopilot (reclamation workflow)
      Shadow AI Radar (detection + remediation)
      Negotiate Mode (AI vendor brief generator)
      GeM Benchmarking (Indian alternative recommendations)
      Carbon-Ops (sustainability impact calculator)
      Compliance Engine (DPDP, GFR, TNeGA)
        |
        v
    PRESENTATION LAYER
      Executive Dashboard (Cost Heartbeat, KPIs, trends)
      SaaS Genome Map (visual tool-strip per company)
      Department DNA View (role-specific waste profiles)
      Savings Simulator UI (drag-drop consolidation)
      AI Agent Monitor (token consumption, overlap graph)
      Shadow Radar (risk heatmap, detected apps table)
      License Autopilot (reclamation timeline)
      GeM Benchmarking Portal (Indian alternatives + pricing)
      Carbon-Ops Dashboard (sustainability impact metrics)
      Compliance Portal (DPDP/GFR status, audit log)

      Real-time: WebSocket <-- Redis Pub/Sub


6.2 Tech Stack

  Runtime: Bun.js — 4x faster than Node.js, native TypeScript, built-in test runner
  Backend: Elysia.js — End-to-end type safety, <1ms overhead, native WebSocket support
  Frontend: Next.js 15 + React 18 — SSR for fast initial load, App Router for nested layouts
  Styling: Vanilla CSS (CSS Modules) — Full design control, no framework dependency
  Charts: Recharts — Composable React charting library
  Animations: Framer Motion — Smooth micro-interactions and page transitions
  Virtual DB (Hot): Redis — In-memory state engine, pub/sub for live updates
  Persistent DB: PostgreSQL — Source of truth, ACID compliance, JSONB for flexible schemas
  ORM: Drizzle ORM — Lightweight, type-safe, Bun-compatible


6.3 API Design (Elysia.js Backend)

  /api/dashboard
    GET  /kpis              > Aggregate KPIs (from Redis)
    GET  /burn-rate         > Live Rs./minute cost ticker
    WS   /live              > WebSocket for real-time dashboard updates

  /api/companies
    GET  /                  > Companies list (filterable, sortable)
    GET  /:id               > Company detail + SaaS genome
    GET  /:id/optimization  > Company-specific recommendations

  /api/departments
    GET  /                  > All department DNA profiles
    GET  /:name/metrics     > Department waste data + benchmarks

  /api/simulator
    GET  /scenarios         > Pre-built what-if scenarios
    POST /custom            > User-defined scenario calculation
    POST /compare           > Side-by-side comparison

  /api/ai-agents
    GET  /                  > All AI agents with costs & ROI
    GET  /overlaps          > Overlapping agent pairs
    GET  /invisible-tax     > Total hidden AI cost summary

  /api/shadow
    GET  /radar             > Detected shadow apps
    GET  /heatmap           > Department x Category risk grid
    POST /:id/action        > Approve / block / flag action

  /api/compliance
    GET  /status            > Overall compliance dashboard
    GET  /audit-log         > Event-sourced audit trail
    GET  /dpdp              > DPDP-specific compliance items

  /api/autopilot
    GET  /reclamations      > Active reclamation workflows
    POST /trigger           > Manually trigger reclamation check
    GET  /jml-status        > Joiner-Mover-Leaver pipeline status

  /api/gem
    GET  /benchmark/:toolId > GeM price comparison for a SaaS tool
    GET  /alternatives      > All Indian alternatives with pricing
    GET  /savings-report    > Government procurement savings report

  /api/carbon
    GET  /score             > Current sustainability score
    GET  /impact            > CO2 savings from reclamation actions
    GET  /report            > ESG-ready sustainability report

  /api/sync
    GET  /status            > Virtual DB sync health
    POST /force             > Force Redis > Postgres reconciliation


6.4 Database Schema (PostgreSQL)

  Core Entities:
    companies — master company data (from CSV research + enrichment)
    saas_applications — catalog of SaaS tools with categories, pricing tiers
    licenses — individual license records per company per tool
    departments — department profiles mapped to companies

  Usage Tracking:
    usage_events — timestamped usage records (login, feature use, API call)
    feature_usage — per-feature adoption tracking
    utilization_scores — calculated utilization rates (daily snapshots)

  AI Governance:
    ai_agents — registered AI tools with pricing models
    agent_usage_logs — token consumption logs per agent per user
    agent_cost_entries — monthly cost aggregation per agent

  Shadow Detection:
    shadow_detections — detected unapproved apps with evidence
    shadow_actions — remediation actions taken (approve/block/flag)

  Governance:
    optimization_recs — generated recommendations with savings estimates
    simulator_results — saved what-if scenario outcomes
    approval_workflows — procurement approval chain records
    reclamation_logs — license autopilot action history

  Compliance:
    compliance_items — DPDP/GFR/TNeGA compliance checklist items
    audit_events — immutable, append-only event log (event-sourced)
    consent_records — DPDP consent management records


6.5 Redis Key Structure

  State Snapshots:
    kpi:total_spend — aggregate spend number
    kpi:total_waste — aggregate waste number
    kpi:utilization_avg — average utilization %
    company:{id}:live — live metrics for a company
    dept:{name}:metrics — department aggregation
    agent:{id}:cost — current month AI cost
    shadow:radar:live — current shadow detection list

  Dirty Tracking:
    dirty:keys — SET of keys changed since last sync

  Pub/Sub Channels:
    dashboard:updates — pushed to WebSocket clients
    alerts:shadow — new shadow app detected
    alerts:waste — waste threshold exceeded
    sync:complete — reconciliation finished

  Caching:
    cache:companies:list — cached company list query (TTL: 60s)
    cache:simulator:{hash} — cached scenario result (TTL: 300s)


================================================================================
7. KEY VISUALS & UI CONCEPTS
================================================================================

7.1 Cost Heartbeat (Executive Dashboard)

A live-pulsing ticker showing money flow in real-time:

    Saved Today: Rs.14,230  |  Burning: Rs.847/min  |  Wasted: Rs.312/min

Powered by WebSocket + Redis pub/sub. Updates every second.


7.2 SaaS Genome Map — Before & After Prototype

Each company's SaaS stack visualized as a horizontal genome strip. Each tool = a colored band (color = category: blue for collab, green for dev, orange for CRM, etc.). Band width = relative cost proportion. Pulsing/glowing bands = tools with overlap detected. Click any band for utilization details + alternatives.

Demo Prototype: Department of Higher Education

  BEFORE (Current State):
    Microsoft 365  |  Zoom  |  Webex  |  JioMeet  |  Google Meet
    Salesforce  |  Zoho  |  HubSpot
    SAP  |  Tally  |  QuickBooks
    Jira  |  Asana  |  Monday  |  Trello  |  Notion
    [Dark]  |  [Dark]  |  [Dark]  |  [Dark]     <-- Unknown/Shadow

  Messy, overlapping colors (redundancy), many dark bands (unused/shadow)

  AFTER (Cence-Ops Optimized):
    Microsoft 365 (consolidated communications)
    Zoho CRM (GeM-approved, data-localized)
    SAP (right-sized licenses)
    Jira (consolidated PM)

  Clean, streamlined strip. Distinct colors. Zero dark bands. Rs.2.4Cr saved.

Companies with similar "genomes" cluster together, revealing industry patterns.


7.3 Shadow AI Risk Heatmap

A grid where rows = departments (Engineering, HR, Marketing, Finance, Design, IT) and columns = AI tool categories (Code Gen, Writing, Design, Analytics, Productivity). Cells are color-coded: Green = Approved, Yellow = Underused, Red = Shadow, Black = Unknown Risk. Click any cell for users affected, spend estimate, one-click approve/block.


7.4 Savings Simulator

Split-screen interface. Left panel: Current state (tools, costs, users). Right panel: Proposed state (consolidated tool, projected cost). Center: Animated savings arrow with confidence interval. Bottom: Risk assessment bar, migration timeline, friction notes.


7.5 Carbon-Ops Sustainability Dashboard

    SUSTAINABILITY IMPACT

    CO2 Reduced: 2,340 kg        Energy Saved: 9,600 kWh
    Equivalent: 106 trees        ESG Score: A+

    [Monthly Trend Graph showing 34% improvement]

    Aligned: India Green IT Roadmap 2026-2030


================================================================================
8. DATA ADVANTAGE
================================================================================

Our CSV dataset of 77 real Indian IT companies provides the demo's backbone. Real company names, real employee counts, real SaaS tool stacks. Real optimization challenges documented from industry research. Not hypothetical data — grounded in 500+ company research with 30+ cited sources.

Demo examples:

  "TCS has 600K employees with license sprawl across 55+ countries — Cence-Ops detects 12 redundant collaboration tools and projects Rs.180Cr annual savings"

  "Razorpay: 8 unapproved AI tools detected across 3 departments, Rs.42L/month shadow spend"

  "Infosys: AI agent overlap — Copilot + Tabnine active for same 890 developers, Rs.69.6L/year duplicate cost"


================================================================================
9. COMPETITIVE POSITIONING
================================================================================

9.1 Feature Matrix

  Feature                    BetterCloud   Zylo      Torii     Cence-Ops
  Auto Discovery             Yes           Yes       Yes       Yes + Shadow AI
  Usage Analytics            Yes           Yes       Yes       Yes + Dept DNA
  AI Recommendations         Basic         Basic     Basic     Advanced + Contextual
  Shadow SaaS Detection      No            Partial   No        Full Radar
  AI Agent Governance        No            No        No        Invisible Worker Tax
  Predictive Analytics       No            No        No        Renewal Risk Model
  What-If Simulator          No            Basic     No        Interactive Engine
  Gov Compliance (India)     No            No        No        DPDP + GFR + TNeGA
  Virtual DB Architecture    No            No        No        Redis<>Postgres Reconciler
  License Autopilot          Partial       No        Partial   Self-Healing JML
  Negotiate Mode             No            No        No        AI Vendor Briefs
  GeM Price Benchmarking     No            No        No        Atmanirbhar SaaS
  Zero-Knowledge Privacy     No            No        No        Edge-only PII
  Carbon/Sustainability      No            No        No        Green IT Score


9.2 The "Why Not Excel/Zylo?" Kill Table

When judges ask "Why not just use an Excel sheet or Zylo?":

  Data Freshness:    Old Way: Monthly/quarterly CSV uploads     Cence-Ops: Real-time (5s sync) via Redis Reconciler
  AI Governance:     Old Way: Only tracks human seats           Cence-Ops: Tracks token burn & AI agent overlap
  Compliance:        Old Way: Generic GDPR/SOC2                Cence-Ops: Native DPDP Act & GFR (Indian Gov Rules)
  Action:            Old Way: "Read-only" reports               Cence-Ops: Autopilot (self-healing seat reclamation)
  Privacy:           Old Way: Full URL telemetry (spyware risk) Cence-Ops: Zero-Knowledge edge-only discovery
  Sustainability:    Old Way: Not measured                      Cence-Ops: Carbon-Ops ESG-ready sustainability score
  Procurement:       Old Way: Manual vendor research            Cence-Ops: GeM API auto-benchmarking with Indian alternatives


================================================================================
10. TARGET USERS & IMPACT
================================================================================

10.1 User Roles

  IT Admin: Sees full discovery dashboard, shadow radar, autopilot status. Approves/blocks shadow apps, triggers reclamation.

  CFO / Finance: Sees cost heartbeat, savings simulator, renewal calendar. Runs what-if scenarios, approves consolidation.

  Department Head: Sees their department DNA profile, team utilization. Acts on department-specific recommendations.

  CISO: Sees shadow AI heatmap, compliance portal, audit trail. Reviews security risks, enforces data policies.

  Government CIO: Sees multi-department rollup, compliance status, audit reports. Makes state-level SaaS governance decisions.


10.2 Projected Impact

  SaaS spend reduction: 25-40% waste eliminated within 12 months
  License utilization improvement: From ~54% to 80%+
  Shadow SaaS detection coverage: 95%+ of unauthorized apps identified within 30 days
  Renewal optimization: 100% of renewals reviewed before auto-renewal deadline
  Time saved for IT teams: 15-20 hours/week in automated admin tasks
  Government department example: Rs.10Cr annual SaaS > Rs.2.5-4Cr savings/year


================================================================================
11. HACKATHON STRATEGY
================================================================================

What to demo (prioritized):

  P0 (Must Demo):
    Virtual DB engine (Redis <> Postgres live sync) — shows architectural innovation
    Executive Dashboard with Cost Heartbeat — immediate visual impact
    Savings Simulator — interactive, judges can play with it
    Shadow AI Radar + heatmap — unique, security-focused

  P1 (Should Demo):
    AI Agent Monitor with overlap detection — forward-looking, timely
    Department DNA views — shows domain depth
    Compliance Portal — government hackathon alignment

  P2 (If Time Permits):
    SaaS Genome Map — visual wow factor
    License Autopilot workflow — operational depth
    Negotiate Mode — last-mile innovation


================================================================================
12. WHY THIS WINS
================================================================================

  Innovation: Virtual DB architecture + AI agent governance + Zero-Knowledge privacy — none exist in any product
  Technical Depth: Redis<>Postgres reconciler, event sourcing, WebSocket live updates, edge-computed privacy, plugin architecture
  Feasibility: Built on Bun (fastest runtime) + Elysia (type-safe) + proven stack; real data from 500+ companies
  Impact: Addresses Rs.28B+ global waste; specific to Indian enterprise + government context
  Research: 500+ company dataset, 30+ academic/industry citations, DPDP Act legal analysis
  Government Relevance: TNeGA alignment, GFR compliance, GeM benchmarking, Atmanirbhar Bharat alignment
  Scalability: Plugin connector architecture; works for 1K-employee startup to 600K-employee TCS
  UX: Cost Heartbeat, SaaS Genome Map, interactive simulator — not another boring dashboard
  Sustainability: Carbon-Ops aligns with India's Green IT Roadmap 2026-2030 and ESG mandates
  Privacy: Zero-Knowledge architecture proves DPDP compliance by design, not by policy


================================================================================
13. THE PITCH CLOSER — "100x ROI"
================================================================================

"In a government department with a Rs.10 Crore annual SaaS budget, Cence-Ops doesn't just 'track' money. It acts as an automated auditor. By reclaiming just 20% of wasted licenses, we return Rs.2 Crore to the public treasury — paying for itself 100 times over in the first year.

Every rupee saved is a rupee redirected to education, healthcare, or infrastructure.

That's not optimization. That's governance."

The Math:

  Rs.10 Cr annual SaaS budget
  x  46% average waste (industry benchmark)
  =  Rs.4.6 Cr wasted annually

  Cence-Ops reclaims 50% of detectable waste:
  =  Rs.2.3 Cr saved/year

  Cence-Ops annual license cost:
  ~  Rs.2-5 Lakhs

  ROI = Rs.2.3 Cr / Rs.5 L = 46x (conservative)
  ROI = Rs.2.3 Cr / Rs.2 L = 115x (optimistic)

One line for the judges: "For every Rs.1 spent on Cence-Ops, Rs.46-115 is returned to the public treasury."
