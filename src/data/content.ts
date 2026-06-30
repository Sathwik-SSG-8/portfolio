export const content = {
  meta: {
    name: "Sathwik Gangapatnam",
    title: "Sathwik — Automation & QA",
    description: "n8n Automation Specialist and Manual QA Tester passionate about building reliable systems.",
    email: "sathwiks222@gmail.com",
    github: "https://github.com/Sathwik-SSG-8",
    linkedin: "https://www.linkedin.com/in/sai-sathwik-gangapatnam-485525250/",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Sathwik.",
    roles: [
      "n8n Automation Specialist",
      "Manual QA Tester",
      "API Testing Enthusiast",
      "Process Improvement Explorer",
    ],
    bio: "I build workflow automations, test applications end-to-end, and continuously explore new tools — currently diving into AI automation.",
  },
  about: {
    bio: [
      "I'm a fresher passionate about automation and software quality. Currently working as an n8n Automation Specialist and Manual QA Tester, I focus on building reliable workflows and catching bugs before they reach users.",
      "I enjoy solving repetitive problems through automation, learning new tools, and improving how teams work. Right now I'm exploring AI integration and advanced automation patterns.",
    ],
  },
  contact: {
    subheading: "Open to opportunities, collaborations, and conversations.",
  },
  services: [
    {
      title: "Workflow Automation",
      description: "Building n8n workflows that connect apps and automate repetitive tasks end-to-end.",
      icon: "Zap" as const,
    },
    {
      title: "Manual Testing",
      description: "Thorough functional and regression testing to catch bugs before production.",
      icon: "CheckCircle" as const,
    },
    {
      title: "API Testing",
      description: "Testing REST APIs with Postman — endpoints, authentication, and data validation.",
      icon: "Globe" as const,
    },
    {
      title: "Process Improvement",
      description: "Identifying bottlenecks and streamlining workflows for better team efficiency.",
      icon: "TrendingUp" as const,
    },
    {
      title: "Continuous Learning",
      description: "Actively exploring cloud platforms, Python scripting, and AI automation tools.",
      icon: "BookOpen" as const,
    },
  ],
  skills: [
    "n8n",
    "Git",
    "GitHub",
    "Postman",
    "Linux",
    "Python",
    "AWS",
    "GCP",
    "Google Workspace",
    "Manual Testing",
    "API Testing",
    "Jira",
  ],
  projects: [
    {
      title: "Web Application QA Audit",
      description: "Full regression testing cycle for a client web application. Documented 30+ test cases, tracked bugs through resolution, and delivered a QA report with severity classification.",
      role: "Manual QA Tester",
      tools: ["Jira", "Postman", "Chrome DevTools"],
    },
    {
      title: "API Health Check Automation",
      description: "Built an n8n workflow to automate API endpoint health checks on a schedule and route failure alerts to Slack with details on the failing request.",
      role: "n8n Automation Specialist",
      tools: ["n8n", "REST APIs", "Slack"],
    },
    {
      title: "Google Workspace Automation",
      description: "Automated document creation, email routing, and calendar event workflows for an internal operations team — reducing manual admin work by hours per week.",
      role: "n8n Automation Specialist",
      tools: ["n8n", "Google Workspace", "Gmail API"],
    },
  ],
  timeline: [
    {
      year: "2022",
      title: "Started Learning Programming",
      description: "First steps with Python basics, command line, and developer tooling.",
      current: false,
    },
    {
      year: "2023",
      title: "Manual QA Testing",
      description: "Started professional QA — writing test cases, filing bug reports, running regression cycles.",
      current: false,
    },
    {
      year: "2023",
      title: "API Testing",
      description: "Learned Postman and REST API testing. Validated endpoints, auth flows, and response schemas.",
      current: false,
    },
    {
      year: "2024",
      title: "Automation with n8n",
      description: "Built first production workflow automations connecting business apps and APIs.",
      current: false,
    },
    {
      year: "2024",
      title: "Cloud Basics",
      description: "Explored AWS and GCP — S3, compute instances, IAM, and basic infrastructure.",
      current: false,
    },
    {
      year: "2025 →",
      title: "AI & Advanced Automation",
      description: "Currently exploring LLM APIs, AI agents, and advanced n8n automation patterns.",
      current: true,
    },
  ],
}

export type Content = typeof content
export type Service = Content["services"][number]
export type Project = Content["projects"][number]
export type TimelineItem = Content["timeline"][number]
