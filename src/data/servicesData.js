
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

import serviceImg from "../assets/images/service/img1.jpg";
import serviceImg2 from "../assets/images/service/img2.jpg";
import serviceImg3 from "../assets/images/service/img3.jpg";
import serviceImg4 from "../assets/images/service/img4.jpg";
import serviceImg5 from "../assets/images/service/img2.jpg";
import serviceImg6 from "../assets/images/service/img2.jpg";

export const servicesData = [
  {
    image1: serviceImg,
    image2: serviceImg2,
    category: "IT",
    slug: "it-consulting",
    title: "IT Consulting",
    description:
      "Strategic advisory to align your technology roadmap with business goals, budget, and delivery timelines.",
    fullDescription: `
      Our IT Consulting service helps organizations make confident technology decisions that support real
      business outcomes. We begin by understanding your goals, team structure, current systems, and pain
      points, then translate that into a practical roadmap that your team can actually execute. We review
      your infrastructure, applications, security posture, and operational workflows to identify risks,
      bottlenecks, and quick wins. From choosing the right architecture to defining governance and
      improving delivery processes, we focus on clarity and measurable impact.
      
      You’ll receive a prioritized plan with clear phases, effort estimates, and recommendations that fit
      your budget and timelines. When needed, we support vendor selection, cloud strategy, modernization,
      and project rescue—without forcing unnecessary tools or rebuilds. We also work with your internal
      stakeholders to ensure adoption, knowledge transfer, and sustainable operations. Our goal is simple:
      help you reduce technical debt, improve reliability, and create an IT foundation that scales as your
      organization grows. Throughout the engagement, we provide transparent communication, documentation,
      and actionable guidance to keep every decision aligned with your strategy.
    `,
    icon: <FiCast />,
    process: [
      "Analyze existing IT infrastructure",
      "Identify gaps and opportunities",
      "Develop strategic IT roadmap",
      "Implement optimized solutions",
      "Monitor and continuously improve",
    ],
  },

  {
    image1: serviceImg3,
    image2: serviceImg4,
    category: "IT",
    slug: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Build reliable software tailored to your workflows—secure, scalable, and ready for long-term growth.",
    fullDescription: `
      We design and develop custom software that fits your business processes instead of forcing your team
      to adapt to generic tools. Our approach starts with discovery and clear requirements, followed by
      UI/UX design that keeps user experience simple and efficient. We then build with modern, maintainable
      architecture, clean code practices, and a focus on performance and security. Whether you need an
      internal system, a customer portal, an ERP/CRM extension, or an end-to-end SaaS platform, we deliver
      software that is stable, testable, and easy to evolve.
      
      We work in iterative cycles so you can see progress early and provide feedback continuously. This
      reduces risk and ensures the final product matches real-world needs. We implement robust APIs,
      integrations, authentication, role-based access, logging, and analytics where required. Quality
      assurance is included throughout the lifecycle, with automated checks and manual testing to prevent
      regressions. After launch, we provide support, monitoring, and enhancements so your platform stays
      aligned with changing requirements. The result is a dependable product that improves operations,
      increases productivity, and delivers measurable value.
    `,
    icon: <FiLayers />,
    process: [
      "Requirement gathering and analysis",
      "UI/UX design and prototyping",
      "Custom development and coding",
      "Quality assurance and testing",
      "Deployment and post-launch support",
    ],
  },

  {
    image1: serviceImg5,
    image2: serviceImg6,
    category: "IT",
    slug: "digital-marketing-solutions",
    title: "Digital Marketing Solutions",
    description:
      "Performance-focused marketing that improves visibility, generates leads, and strengthens your brand online.",
    fullDescription: `
      Our Digital Marketing Solutions are designed to produce measurable growth—not just impressions. We
      combine strategy, creative execution, and performance tracking to build campaigns that attract the
      right audience and convert them into customers. We start with research: your market, competitors,
      customer personas, and current funnel performance. Based on insights, we create a tailored plan that
      includes SEO, content strategy, paid advertising, social media campaigns, and conversion optimization.
      
      We focus on high-quality messaging that matches your brand voice and speaks to real customer needs.
      Our SEO work improves technical health, on-page relevance, and authority through content and ethical
      outreach. For paid campaigns, we build structured ad sets, landing pages, and tracking so every click
      is accountable. We monitor performance continuously and iterate weekly to improve ROI and lower
      acquisition costs. Reporting is clear and business-focused: leads, conversions, revenue impact, and
      next actions. Whether you’re launching a new service or scaling an established brand, we help you
      grow sustainably with a marketing system you can trust.
    `,
    icon: <FiUsers />,
    process: [
      "Market and competitor analysis",
      "Develop tailored marketing strategy",
      "Execute campaigns across channels",
      "Track and analyze performance metrics",
      "Continuous optimization for better ROI",
    ],
  },

  {
    image1: serviceImg,
    image2: serviceImg2,
    category: "IT",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Modern iOS and Android apps with smooth UX, scalable architecture, and secure backend integrations.",
    fullDescription: `
      We build mobile applications that feel fast, look polished, and stay reliable as your user base
      grows. Our process begins with feature planning and user journeys, then moves into UI/UX design that
      prioritizes clarity, accessibility, and consistency. We develop cross-platform or native solutions
      depending on your product goals, performance needs, and budget. From authentication and user profiles
      to payments, location, push notifications, and real-time updates, we implement features with a focus
      on stability and maintainability.
      
      We pay close attention to app performance, offline behavior, error handling, and device compatibility.
      Testing is done across multiple screen sizes and OS versions to reduce production issues. We also set
      up analytics and crash reporting so you can understand how users interact with the app and quickly
      address problems. If your app needs backend services, we build or integrate secure APIs with proper
      access control and monitoring. After release, we provide updates, improvements, and ongoing support
      to keep your app competitive. The outcome is a mobile experience that users enjoy and businesses
      can scale with confidence.
    `,
    icon: <FiMonitor />,
    process: [
      "Conceptualization and wireframing",
      "UI/UX design",
      "Native and cross-platform development",
      "Testing on multiple devices",
      "App deployment and updates",
    ],
  },

  {
    image1: serviceImg,
    image2: serviceImg2,
    category: "IT",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description:
      "Cloud migration and optimization to improve reliability, reduce cost, and strengthen security and compliance.",
    fullDescription: `
      Our Cloud Solutions help you move to the cloud safely and operate efficiently once you’re there.
      We support cloud adoption for AWS, Azure, and Google Cloud, including architecture planning,
      migration, modernization, and ongoing optimization. We begin with a readiness assessment to review
      workloads, dependencies, data sensitivity, and performance requirements. Then we recommend an
      architecture that balances cost, security, and scalability—whether that’s lift-and-shift, re-platform,
      or refactor.
      
      During migration, we focus on minimizing downtime, protecting data, and validating performance.
      We implement best practices for networking, identity and access management, backup strategies, and
      observability. After deployment, we optimize resources and implement cost controls, alerts, and
      right-sizing practices to prevent budget surprises. For teams that need it, we provide documentation,
      handover training, and operational runbooks. The goal is a cloud environment that is stable, secure,
      and easy to manage—so your business can scale quickly without sacrificing control or reliability.
    `,
    icon: <FiCast />,
    process: [
      "Cloud readiness assessment",
      "Select optimal cloud architecture",
      "Migrate data and applications",
      "Optimize performance and costs",
      "Ongoing monitoring and support",
    ],
  },

  {
    image1: serviceImg,
    image2: serviceImg2,
    category: "IT",
    slug: "cybersecurity-services",
    title: "Cybersecurity Services",
    description:
      "End-to-end protection with assessments, controls, monitoring, and compliance support to reduce cyber risk.",
    fullDescription: `
      Cybersecurity is not a one-time project—it’s an ongoing capability. Our Cybersecurity Services help
      protect your organization’s systems, data, and users through practical controls and continuous
      improvement. We start with a security assessment that reviews infrastructure, applications, access
      control, configuration, and incident readiness. We identify vulnerabilities, prioritize remediation,
      and design a security plan that matches your risk profile and regulatory requirements.
      
      We implement security controls such as MFA, least-privilege access, secure network segmentation,
      endpoint protection, logging, and monitoring. For application security, we support secure coding
      practices, dependency reviews, and testing. We can also help with policies, procedures, security
      awareness training, and compliance preparation where required. Our goal is to improve your security
      posture without creating unnecessary complexity. With clear reporting and actionable recommendations,
      you’ll know what matters most and what to do next. The result is stronger defenses, better visibility,
      and improved resilience against modern threats.
    `,
    icon: <FiMonitor />,
    process: [
      "Conduct security risk assessment",
      "Identify vulnerabilities and threats",
      "Deploy security frameworks",
      "Monitor and respond to threats",
      "Regular audits and compliance checks",
    ],
  },

  // ---------------- Engineering Services ----------------

  {
    image1: serviceImg,
    image2: serviceImg2,
    category: "Engineering",
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    description:
      "Mechanical design, analysis, and optimization to improve performance, reliability, and manufacturability.",
    fullDescription: `
      Our Mechanical Engineering services support product and industrial projects from concept through
      detailed design and validation. We help clients turn requirements into manufacturable solutions by
      combining engineering fundamentals with practical production constraints. Our team performs design,
      modeling, simulation, and documentation for mechanical systems and components, focusing on durability,
      efficiency, and safety. We can support assemblies, mechanisms, housings, fixtures, tooling concepts,
      and system layouts depending on your project scope.
      
      We use structured design reviews and analysis to validate performance under expected loads and
      operating conditions. When required, we assess materials, tolerances, and manufacturing methods to
      reduce cost and improve reliability. We also generate technical drawings and BOMs aligned with common
      standards so your fabrication and procurement teams can move forward confidently. Throughout the
      engagement, we communicate clearly, document decisions, and collaborate with your stakeholders to
      ensure the solution matches both technical and business objectives. The outcome is an engineered
      deliverable that is practical, testable, and ready for implementation.
    `,
    icon: <FiLayers />,
    process: [
      "Analyze requirements and constraints",
      "Create conceptual designs",
      "Simulate and optimize performance",
      "Develop detailed engineering drawings",
      "Prototype and final implementation",
    ],
  },

  {
    image1: serviceImg,
    image2: serviceImg2,
    category: "Engineering",
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    description:
      "Electrical design and automation support for industrial and commercial systems, with safety and compliance in mind.",
    fullDescription: `
      We deliver Electrical Engineering solutions for power distribution, control systems, and industrial
      automation projects. Our team supports design, documentation, and implementation planning for systems
      that must be safe, reliable, and compliant with applicable standards. We work with clients to define
      electrical requirements, select appropriate components, and create clear schematics and layouts that
      can be executed in the field.
      
      For automation, we help design control architectures, IO mapping, and integration with sensors,
      actuators, and PLC/SCADA environments where needed. We focus on operational reliability, maintainability,
      and clear documentation so your technicians can troubleshoot and operate systems efficiently. When
      required, we support testing plans, commissioning checklists, and handover documentation to reduce
      risk during deployment. Our goal is to provide electrical designs that improve uptime, reduce energy
      waste, and support long-term system performance. Whether it’s a new installation or an upgrade, we
      help you deliver with confidence and clarity.
    `,
    icon: <FiUsers />,
    process: [
      "Evaluate electrical requirements",
      "Design power and control systems",
      "Implement automation frameworks",
      "Testing and safety compliance checks",
      "Final commissioning and support",
    ],
  },

  {
    image1: serviceImg,
    image2: serviceImg2,
    category: "Engineering",
    slug: "civil-structural-engineering",
    title: "Civil & Structural Engineering",
    description:
      "Structural planning and design support for safe, efficient, and durable infrastructure and building projects.",
    fullDescription: `
      Our Civil & Structural Engineering services help clients plan and deliver safe, efficient, and
      buildable structures. We support projects from early feasibility through detailed design, focusing
      on structural integrity, constructability, and long-term performance. We collaborate with stakeholders
      to understand site conditions, functional requirements, and budget constraints, then develop design
      outputs that meet those needs responsibly.
      
      Our work can include preliminary layout guidance, structural analysis, coordination with other
      disciplines, and documentation suitable for construction execution. We emphasize clarity in drawings
      and specifications so contractors can build accurately and efficiently. We also prioritize safety,
      considering load paths, stability, durability, and relevant building codes. Where required, we support
      design reviews and quality checks to reduce risk during construction. The outcome is a structural
      solution that balances safety, cost, and schedule—helping your project move forward with confidence.
    `,
    icon: <FiMonitor />,
    process: [
      "Feasibility and site analysis",
      "Design structural framework",
      "Create detailed construction plans",
      "Oversee construction execution",
      "Perform inspections and quality checks",
    ],
  },

  {
    image1: serviceImg,
    image2: serviceImg2,
    category: "Engineering",
    slug: "product-design-prototyping",
    title: "Product Design & Prototyping",
    description:
      "From concept to prototype—industrial design, CAD, and validation to prepare your product for manufacturing.",
    fullDescription: `
      We help businesses transform ideas into tangible, testable products through structured design and
      prototyping. Our Product Design & Prototyping service covers concept development, CAD modeling,
      usability considerations, and iterative refinement. We focus on building products that are not only
      visually appealing, but also functional, manufacturable, and aligned with real user needs.
      
      We start by clarifying requirements and defining success criteria, then produce concepts that balance
      performance, cost, materials, and production constraints. Using CAD tools, we develop prototypes or
      prototype-ready models that can be tested for fit, function, and assembly. We also support design
      refinement based on feedback, helping you move from early iterations to a version suitable for
      manufacturing handoff. Our goal is to reduce uncertainty before production by validating key decisions
      early. The result is a clearer path to launch, fewer costly revisions, and a product experience that
      customers trust.
    `,
    icon: <FiCast />,
    process: [
      "Gather product requirements",
      "Design initial concept models",
      "Develop prototypes using CAD tools",
      "Test and refine functionality",
      "Finalize design for manufacturing",
    ],
  },

  {
    image1: serviceImg,
    image2: serviceImg2,
    category: "Engineering",
    slug: "automation-control-systems",
    title: "Automation & Control Systems",
    description:
      "Automation planning and control design to improve productivity, reduce errors, and increase operational visibility.",
    fullDescription: `
      Our Automation & Control Systems service helps organizations streamline operations by implementing
      reliable automation strategies and control system designs. We analyze current workflows to identify
      repetitive tasks, error-prone steps, and opportunities for improved throughput. Then we define an
      automation approach that fits your environment—whether industrial processes, building systems, or
      operational workflows that require monitoring and control.
      
      We support control architecture design, integration planning, and documentation to ensure your team
      can implement and maintain the system effectively. Our focus is practical delivery: safety, reliability,
      and maintainability come first. We can also help define testing and commissioning checklists, as well
      as operator training and handover materials to reduce downtime during adoption. By introducing the
      right controls and visibility, you can reduce operating cost, improve consistency, and scale production
      with fewer disruptions. The result is a smarter, more predictable system that supports long-term growth.
    `,
    icon: <FiLayers />,
    process: [
      "Process analysis and automation planning",
      "Design control system architecture",
      "Implement automation solutions",
      "Conduct system testing and training",
      "Ongoing monitoring and optimization",
    ],
  },

  {
    image1: serviceImg,
    image2: serviceImg2,
    category: "Engineering",
    slug: "project-management-consultancy",
    title: "Project Management & Consultancy",
    description:
      "Structured project delivery support—planning, coordination, and reporting to keep engineering projects on track.",
    fullDescription: `
      We provide Project Management & Consultancy services to help engineering and technology projects
      stay aligned, controlled, and deliverable. Many projects fail not due to effort, but due to unclear
      scope, shifting priorities, and weak coordination. We address those gaps by establishing clear
      objectives, timelines, responsibilities, and communication rhythms that keep stakeholders aligned.
      
      Our team supports planning, scheduling, risk management, and progress reporting so leaders can make
      informed decisions early—before small issues become expensive delays. We help define scope boundaries,
      manage dependencies, coordinate vendors and internal teams, and implement practical governance suited
      to your organization. When needed, we provide recovery support for projects that have slipped, including
      re-scoping, re-planning, and delivery stabilization. The outcome is a more predictable delivery process,
      better accountability, and higher confidence in results. We focus on execution that respects budget,
      schedule, and quality—so projects close successfully and stakeholders remain satisfied.
    `,
    icon: <FiUsers />,
    process: [
      "Define project objectives and scope",
      "Develop detailed project plan",
      "Allocate resources and assign tasks",
      "Monitor progress and manage risks",
      "Deliver final project report and closure",
    ],
  },
];

