import {
    FiCast,
    FiLayers,
    FiUsers,
    FiMonitor,
  } from "react-icons/fi";

  
import serviceImg from "../assets/images/service/service-01.png";
import serviceImg2 from "../assets/images/service/service-02.png";  
  
  export const servicesData = [
    { image1: serviceImg,
      image2: serviceImg2,
      category: "IT",
      slug: "it-consulting",
      title: "IT Consulting",
      description:
        "Expert advisory to align technology strategies with your business objectives.",
      fullDescription: `
        Our IT Consulting service provides strategic guidance to ensure your technology investments
        align with your business goals. We identify gaps, optimize workflows, and deliver
        innovative IT solutions that drive efficiency and reduce costs. Our team of experienced consultants
        works closely with your organization to understand your unique challenges and opportunities,
        enabling us to tailor our recommendations to your specific needs. We leverage industry best practices
        and cutting-edge technologies to help you navigate the complexities of the digital landscape,
        ensuring that your IT strategy not only supports but enhances your overall business strategy.
        Additionally, we conduct thorough assessments of your current IT infrastructure, providing insights
        that empower you to make informed decisions. Our commitment to continuous improvement means we
        stay updated with the latest trends and technologies, ensuring that your organization remains competitive
        in an ever-evolving market. By fostering a collaborative partnership, we aim to build a sustainable
        IT framework that not only meets immediate needs but also positions your business for future growth.
      `,
      icon: <FiCast />,
      process: [
        "Analyze existing IT infrastructure",
        "Identify gaps and opportunities",
        "Develop strategic IT roadmap",
        "Implement optimized solutions",
        "Monitor and continuously improve"
      ]
    },
    {
      image1: serviceImg,
      image2: serviceImg2,
      category: "IT",
      slug: "custom-software-development",
      title: "Custom Software Development",
      description:
        "Tailored software solutions to streamline operations and improve efficiency.",
      fullDescription: `
        We develop custom software applications designed to fit your business processes perfectly.
        Our solutions enhance productivity, integrate seamlessly with your systems, and provide
        a secure, scalable platform for growth. By collaborating closely with your team, we ensure
        that the software we create not only meets your current requirements but is also adaptable
        for future needs. Our development process emphasizes quality and user experience, resulting
        in applications that are not only functional but also intuitive and easy to use. We utilize
        agile methodologies to ensure flexibility and responsiveness throughout the development cycle,
        allowing for iterative feedback and continuous enhancements. Our commitment to post-launch support
        ensures that your software remains up-to-date and evolves with your business, providing ongoing
        value and efficiency improvements.
      `,
      icon: <FiLayers />,
      process: [
        "Requirement gathering and analysis",
        "UI/UX design and prototyping",
        "Custom development and coding",
        "Quality assurance and testing",
        "Deployment and post-launch support"
      ]
    },
    {
      image1: serviceImg,
      image2: serviceImg2,
      category: "IT",
      slug: "digital-marketing-solutions",
      title: "Digital Marketing Solutions",
      description:
        "Data-driven marketing strategies that enhance brand visibility and growth.",
      fullDescription: `
        Our Digital Marketing solutions include SEO, social media campaigns, and targeted advertising
        strategies. We help you build an online presence that connects with customers and drives conversions.
        Our approach is rooted in data analysis, allowing us to continuously refine our strategies
        for maximum impact. We focus on creating engaging content that resonates with your target audience,
        while also optimizing your online visibility to ensure that your brand stands out in a crowded marketplace.
        By leveraging analytics and performance metrics, we provide insights that inform your marketing decisions,
        enabling you to allocate resources effectively and achieve your business objectives. Our team stays
        ahead of industry trends, ensuring that your marketing strategies are innovative and effective,
        ultimately driving sustainable growth for your brand.
      `,
      icon: <FiUsers />,
      process: [
        "Market and competitor analysis",
        "Develop tailored marketing strategy",
        "Execute campaigns across channels",
        "Track and analyze performance metrics",
        "Continuous optimization for better ROI"
      ]
    },
    { image1: serviceImg,
      image2: serviceImg2,
      category: "IT",
      slug: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications built for seamless user experiences.",
      fullDescription: `
        We create mobile apps with responsive designs and robust functionality for both iOS and Android.
        Our apps are designed for high performance and excellent user experience. We prioritize user-centric
        design principles, ensuring that every interaction is intuitive and engaging. Our development process
        includes rigorous testing and quality assurance to deliver a polished final product. We also provide
        ongoing maintenance and updates to keep your app relevant and functional in a rapidly changing
        technological landscape. By integrating the latest features and technologies, we ensure that your
        mobile app not only meets current user expectations but also anticipates future needs, positioning
        your business as a leader in the mobile space.
      `,
      icon: <FiMonitor />,
      process: [
        "Conceptualization and wireframing",
        "UI/UX design",
        "Native and cross-platform development",
        "Testing on multiple devices",
        "App deployment and updates"
      ]
    },
    { image1: serviceImg,
      image2: serviceImg2,
      category: "IT",
      slug: "cloud-solutions",
      title: "Cloud Solutions",
      description:
        "Secure and scalable cloud services to optimize infrastructure and costs.",
      fullDescription: `
        Our cloud solutions allow businesses to scale quickly while maintaining security and performance.
        We specialize in cloud migrations, infrastructure optimization, and cost management. Our experts
        assess your current infrastructure and provide tailored solutions that enhance flexibility and
        reduce operational costs. We ensure that your cloud environment is secure, compliant, and
        optimized for performance, enabling you to focus on your core business activities. Our team
        provides comprehensive support throughout the migration process, ensuring minimal disruption
        to your operations. We also offer training and resources to help your team adapt to the new
        cloud environment, maximizing the benefits of cloud technology. By implementing best practices
        in cloud management, we help you achieve a robust and resilient infrastructure that supports
        your business goals.
      `,
      icon: <FiCast />,
      process: [
        "Cloud readiness assessment",
        "Select optimal cloud architecture",
        "Migrate data and applications",
        "Optimize performance and costs",
        "Ongoing monitoring and support"
      ]
    },
    { image1: serviceImg,
      image2: serviceImg2,
      category: "IT",
      slug: "cybersecurity-services",
      title: "Cybersecurity Services",
      description:
        "Advanced security frameworks to protect digital assets and maintain compliance.",
      fullDescription: `
        Protect your organization from cyber threats with our advanced cybersecurity solutions.
        We provide risk assessments, threat detection, and compliance-focused security implementations.
        Our team of cybersecurity experts works diligently to identify vulnerabilities and implement
        robust security measures tailored to your specific needs. We stay ahead of emerging threats
        and ensure that your organization is equipped with the latest security technologies and practices
        to safeguard your digital assets. Our proactive approach includes regular security audits and
        updates to your security protocols, ensuring that your defenses are always up-to-date. We also
        offer training for your staff to recognize and respond to potential threats, fostering a culture
        of security awareness within your organization. By partnering with us, you can focus on your
        core business activities, knowing that your cybersecurity needs are in expert hands.
      `,
      icon: <FiMonitor />,
      process: [
        "Conduct security risk assessment",
        "Identify vulnerabilities and threats",
        "Deploy security frameworks",
        "Monitor and respond to threats",
        "Regular audits and compliance checks"
      ]
    },
  
    // ---------------- Engineering Services ----------------
    { image1: serviceImg,
      image2: serviceImg2,
      category: "Engineering",
      slug: "mechanical-engineering",
      title: "Mechanical Engineering",
      description:
        "Comprehensive design and analysis of mechanical systems for optimal performance.",
      fullDescription: `
        Our mechanical engineering services cover everything from concept design to detailed analysis
        of components and systems. We ensure durability, efficiency, and compliance with global standards.
        Our team utilizes advanced simulation tools and methodologies to optimize designs and validate
        performance under various conditions. We are committed to delivering innovative solutions that
        meet the highest standards of quality and reliability, ensuring that your projects are successful
        from inception to completion. Our engineers collaborate closely with clients to understand their
        specific requirements, providing tailored solutions that enhance functionality and performance.
        We also focus on sustainability, integrating eco-friendly practices into our designs to minimize
        environmental impact. By leveraging our expertise, you can achieve superior results that drive
        your projects forward.
      `,
      icon: <FiLayers />,
      process: [
        "Analyze requirements and constraints",
        "Create conceptual designs",
        "Simulate and optimize performance",
        "Develop detailed engineering drawings",
        "Prototype and final implementation"
      ]
    },
    { image1: serviceImg,
      image2: serviceImg2,
      category: "Engineering",
      slug: "electrical-engineering",
      title: "Electrical Engineering",
      description:
        "Power systems, automation, and electrical design solutions for diverse industries.",
      fullDescription: `
        We provide complete electrical engineering solutions including power distribution systems,
        automation, and control systems for industrial and commercial applications. Our engineers
        are skilled in designing systems that are not only efficient but also safe and compliant with
        industry regulations. We focus on delivering solutions that enhance operational efficiency
        and reduce energy consumption, helping your organization achieve its sustainability goals. Our
        approach includes thorough analysis and testing to ensure that all systems function optimally
        under various conditions. We also offer ongoing support and maintenance services to ensure
        that your electrical systems remain reliable and efficient over time. By choosing our services,
        you gain access to cutting-edge technology and expertise that drives innovation in your projects.
      `,
      icon: <FiUsers />,
      process: [
        "Evaluate electrical requirements",
        "Design power and control systems",
        "Implement automation frameworks",
        "Testing and safety compliance checks",
        "Final commissioning and support"
      ]
    },
    { image1: serviceImg,
      image2: serviceImg2,
      category: "Engineering",
      slug: "civil-structural-engineering",
      title: "Civil & Structural Engineering",
      description:
        "Infrastructure planning, structural design, and sustainable construction solutions.",
      fullDescription: `
        From planning to execution, our civil and structural engineering services focus on safety,
        sustainability, and cost-efficiency for infrastructure and construction projects. We employ
        innovative design techniques and materials to ensure that our projects are not only functional
        but also environmentally responsible. Our team collaborates with stakeholders to deliver
        projects that meet community needs while adhering to strict timelines and budgets. We conduct
        comprehensive feasibility studies and risk assessments to ensure that every project is viable
        and sustainable. Our commitment to quality assurance means that we implement rigorous testing
        and inspection processes throughout the construction phase, ensuring that all structures meet
        the highest standards of safety and durability. By partnering with us, you can be confident that
        your infrastructure projects will stand the test of time.
      `,
      icon: <FiMonitor />,
      process: [
        "Feasibility and site analysis",
        "Design structural framework",
        "Create detailed construction plans",
        "Oversee construction execution",
        "Perform inspections and quality checks"
      ]
    },
    { image1: serviceImg,
      image2: serviceImg2,
      category: "Engineering",
      slug: "product-design-prototyping",
      title: "Product Design & Prototyping",
      description:
        "Innovative product development from concept to prototype for market readiness.",
      fullDescription: `
        We specialize in product design and prototyping, helping clients transform ideas into
        market-ready products. Our team focuses on functionality, aesthetics, and manufacturability.
        We utilize rapid prototyping techniques to bring concepts to life quickly, allowing for
        iterative testing and refinement. Our goal is to ensure that your product not only meets
        market demands but also stands out in terms of design and usability. We conduct thorough market
        research to understand user needs and preferences, ensuring that our designs are aligned with
        consumer expectations. Our collaborative approach involves working closely with clients throughout
        the development process, providing regular updates and incorporating feedback to achieve the best
        possible outcome. By leveraging our expertise in design and engineering, we help you launch
        successful products that resonate with your target audience.
      `,
      icon: <FiCast />,
      process: [
        "Gather product requirements",
        "Design initial concept models",
        "Develop prototypes using CAD tools",
        "Test and refine functionality",
        "Finalize design for manufacturing"
      ]
    },
    { image1: serviceImg,
      image2: serviceImg2,
      category: "Engineering",
      slug: "automation-control-systems",
      title: "Automation & Control Systems",
      description:
        "Intelligent automation systems to enhance operational efficiency and reduce costs.",
      fullDescription: `
        Our automation solutions integrate advanced control systems to streamline processes,
        reduce human error, and improve operational efficiency across industries. We assess your
        current workflows and identify opportunities for automation, implementing solutions that
        enhance productivity and accuracy. Our team is dedicated to providing ongoing support and
        optimization to ensure that your automation systems continue to deliver value over time.
        We utilize state-of-the-art technologies and methodologies to design systems that are not only
        effective but also scalable, allowing your organization to adapt to changing demands. Our
        commitment to training and support ensures that your staff is equipped to manage and maintain
        these systems, maximizing their potential. By choosing our automation solutions, you can
        achieve significant cost savings and operational improvements that drive your business forward.
      `,
      icon: <FiLayers />,
      process: [
        "Process analysis and automation planning",
        "Design control system architecture",
        "Implement automation solutions",
        "Conduct system testing and training",
        "Ongoing monitoring and optimization"
      ]
    },
    { image1: serviceImg,
      image2: serviceImg2,
      category: "Engineering",
      slug: "project-management-consultancy",
      title: "Project Management & Consultancy",
      description:
        "Expert engineering consultancy to ensure successful project execution and delivery.",
      fullDescription: `
        We offer comprehensive project management services, including planning, execution,
        and monitoring to ensure projects are delivered on time, within budget, and to the highest standards.
        Our experienced project managers utilize proven methodologies to oversee all aspects of your projects,
        ensuring effective communication and collaboration among stakeholders. We are committed to
        delivering results that exceed expectations and drive project success. Our approach includes
        detailed project planning, risk management, and resource allocation to ensure that every aspect
        of your project is meticulously managed. We also provide regular progress reports and updates,
        keeping all stakeholders informed and engaged throughout the project lifecycle. By partnering with us,
        you gain access to a wealth of expertise and resources that enhance your project's chances of success.
      `,
      icon: <FiUsers />,
      process: [
        "Define project objectives and scope",
        "Develop detailed project plan",
        "Allocate resources and assign tasks",
        "Monitor progress and manage risks",
        "Deliver final project report and closure"
      ]
    },
  ];
  