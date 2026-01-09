import React, { Component } from "react";

// Import all technology icons
import reactLogo from "../assets/images/technologies/react.png";
import nodeLogo from "../assets/images/technologies/node.png";
import laravelLogo from "../assets/images/technologies/laravel.png";
import pythonLogo from "../assets/images/technologies/python.png";
import awsLogo from "../assets/images/technologies/aws.png";
import dockerLogo from "../assets/images/technologies/docker.png";
import mongoLogo from "../assets/images/technologies/mongodb.png";
import mysqlLogo from "../assets/images/technologies/mysql-database.png";
import azure from "../assets/images/technologies/azure.png";
import android from "../assets/images/technologies/android.png";
import apple from "../assets/images/technologies/Apple.png";
import vuejs from "../assets/images/technologies/vuejs.png";
import figma from "../assets/images/technologies/figma.png";

// Additional imports for new icons
import astro from "../assets/images/technologies/astro.png";
import bootstrap from "../assets/images/technologies/bootstrap.png";
import css from "../assets/images/technologies/css.png";
import cypress from "../assets/images/technologies/cypress.png";
import django from "../assets/images/technologies/django.png";
import dotnet from "../assets/images/technologies/dot_net.png";
import expressjs from "../assets/images/technologies/express-js.png";
import fastapi from "../assets/images/technologies/fastapi.png";
import firebase from "../assets/images/technologies/firebase.png";
import githubActions from "../assets/images/technologies/github-actions.png";
import terraform from "../assets/images/technologies/terraform.png";
import jasmine from "../assets/images/technologies/jasmine.png";
import java from "../assets/images/technologies/java.png";
import javascript from "../assets/images/technologies/javascript.png";
import langchain from "../assets/images/technologies/langchain.png";
import Pandas from "../assets/images/technologies/Pandas.png";
import Numpy from "../assets/images/technologies/NumPy.png";
import Anaconda from "../assets/images/technologies/Anaconda.png";
import liquibase from "../assets/images/technologies/liquibase.png";
import nextjs from "../assets/images/technologies/nextjs.png";
import pinecode from "../assets/images/technologies/pinecode.png";
import postcss from "../assets/images/technologies/postcss.png";
import powerbi from "../assets/images/technologies/powerbi.png";
import redux from "../assets/images/technologies/redux-js.png";
import sass from "../assets/images/technologies/sass.png";
import spring from "../assets/images/technologies/spring.png";
import tableau from "../assets/images/technologies/tablau.png";
import tailwindcss from "../assets/images/technologies/tailwindcss.png";
import wordpress from "../assets/images/technologies/wordpress.svg";
import shopify from "../assets/images/technologies/shopify.svg";
import wix from "../assets/images/technologies/wix.svg";
import yarn from "../assets/images/technologies/yarn.png";
import postgresSQL from "../assets/images/technologies/PostgresSQL.png";

class Technologies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'all'
    };
  }

  technologies = [
    // Frontend Technologies
    { 
      src: reactLogo, 
      alt: "React Logo", 
      title: "React", 
      category: "frontend",
      color: "group-hover:shadow-[0_0_20px_rgba(97,218,251,0.15)]",
      bgColor: "group-hover:bg-cyan-50/50 dark:group-hover:bg-cyan-900/10"
    },
    { 
      src: vuejs, 
      alt: "Vue.js Logo", 
      title: "Vue.js", 
      category: "frontend",
      color: "group-hover:shadow-[0_0_20px_rgba(65,184,131,0.15)]",
      bgColor: "group-hover:bg-emerald-50/50 dark:group-hover:bg-emerald-900/10"
    },
    { 
      src: nextjs, 
      alt: "Next.js Logo", 
      title: "Next.js", 
      category: "frontend",
      color: "group-hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]",
      bgColor: "group-hover:bg-gray-50/50 dark:group-hover:bg-gray-900/10"
    },
    { 
      src: astro, 
      alt: "Astro Logo", 
      title: "Astro", 
      category: "frontend",
      color: "group-hover:shadow-[0_0_20px_rgba(255,62,77,0.15)]",
      bgColor: "group-hover:bg-red-50/50 dark:group-hover:bg-red-900/10"
    },
    { 
      src: redux, 
      alt: "Redux Logo", 
      title: "Redux", 
      category: "frontend",
      color: "group-hover:shadow-[0_0_20px_rgba(118,74,188,0.15)]",
      bgColor: "group-hover:bg-purple-50/50 dark:group-hover:bg-purple-900/10"
    },
    { 
      src: bootstrap, 
      alt: "Bootstrap Logo", 
      title: "Bootstrap", 
      category: "frontend",
      color: "group-hover:shadow-[0_0_20px_rgba(86,61,124,0.15)]",
      bgColor: "group-hover:bg-purple-50/50 dark:group-hover:bg-purple-900/10"
    },
    { 
      src: tailwindcss, 
      alt: "Tailwind CSS Logo", 
      title: "Tailwind CSS", 
      category: "frontend",
      color: "group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
      bgColor: "group-hover:bg-cyan-50/50 dark:group-hover:bg-cyan-900/10"
    },
    { 
      src: css, 
      alt: "CSS Logo", 
      title: "CSS", 
      category: "frontend",
      color: "group-hover:shadow-[0_0_20px_rgba(21,114,182,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    { 
      src: sass, 
      alt: "Sass Logo", 
      title: "Sass", 
      category: "frontend",
      color: "group-hover:shadow-[0_0_20px_rgba(204,102,153,0.15)]",
      bgColor: "group-hover:bg-pink-50/50 dark:group-hover:bg-pink-900/10"
    },
    { 
      src: postcss, 
      alt: "PostCSS Logo", 
      title: "PostCSS", 
      category: "frontend",
      color: "group-hover:shadow-[0_0_20px_rgba(220,74,86,0.15)]",
      bgColor: "group-hover:bg-red-50/50 dark:group-hover:bg-red-900/10"
    },
    { 
      src: javascript, 
      alt: "JavaScript Logo", 
      title: "JavaScript", 
      category: "frontend",
      color: "group-hover:shadow-[0_0_20px_rgba(247,223,30,0.15)]",
      bgColor: "group-hover:bg-yellow-50/50 dark:group-hover:bg-yellow-900/10"
    },

    // Backend Technologies
    { 
      src: nodeLogo, 
      alt: "Node.js Logo", 
      title: "Node.js", 
      category: "backend",
      color: "group-hover:shadow-[0_0_20px_rgba(51,153,51,0.15)]",
      bgColor: "group-hover:bg-green-50/50 dark:group-hover:bg-green-900/10"
    },
    { 
      src: laravelLogo, 
      alt: "Laravel Logo", 
      title: "Laravel", 
      category: "backend",
      color: "group-hover:shadow-[0_0_20px_rgba(255,45,32,0.15)]",
      bgColor: "group-hover:bg-red-50/50 dark:group-hover:bg-red-900/10"
    },
    { 
      src: pythonLogo, 
      alt: "Python Logo", 
      title: "Python", 
      category: "backend",
      color: "group-hover:shadow-[0_0_20px_rgba(55,118,171,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    { 
      src: django, 
      alt: "Django Logo", 
      title: "Django", 
      category: "backend",
      color: "group-hover:shadow-[0_0_20px_rgba(9,45,39,0.15)]",
      bgColor: "group-hover:bg-green-50/50 dark:group-hover:bg-green-900/10"
    },
    { 
      src: dotnet, 
      alt: ".NET Logo", 
      title: ".NET", 
      category: "backend",
      color: "group-hover:shadow-[0_0_20px_rgba(81,43,212,0.15)]",
      bgColor: "group-hover:bg-purple-50/50 dark:group-hover:bg-purple-900/10"
    },
    { 
      src: expressjs, 
      alt: "Express.js Logo", 
      title: "Express.js", 
      category: "backend",
      color: "group-hover:shadow-[0_0_20px_rgba(64,64,64,0.15)]",
      bgColor: "group-hover:bg-gray-50/50 dark:group-hover:bg-gray-900/10"
    },
    { 
      src: fastapi, 
      alt: "FastAPI Logo", 
      title: "FastAPI", 
      category: "backend",
      color: "group-hover:shadow-[0_0_20px_rgba(0,153,153,0.15)]",
      bgColor: "group-hover:bg-teal-50/50 dark:group-hover:bg-teal-900/10"
    },
    { 
      src: java, 
      alt: "Java Logo", 
      title: "Java", 
      category: "backend",
      color: "group-hover:shadow-[0_0_20px_rgba(0,119,181,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    { 
      src: spring, 
      alt: "Spring Logo", 
      title: "Spring", 
      category: "backend",
      color: "group-hover:shadow-[0_0_20px_rgba(108,179,63,0.15)]",
      bgColor: "group-hover:bg-green-50/50 dark:group-hover:bg-green-900/10"
    },

    // Database Technologies
    { 
      src: mongoLogo, 
      alt: "MongoDB Logo", 
      title: "MongoDB", 
      category: "database",
      color: "group-hover:shadow-[0_0_20px_rgba(71,162,72,0.15)]",
      bgColor: "group-hover:bg-green-50/50 dark:group-hover:bg-green-900/10"
    },
    { 
      src: postgresSQL, 
      alt: "PostgressSQL Logo", 
      title: "PostgresSQL", 
      category: "database",
      color: "group-hover:shadow-[0_0_20px_rgba(71,162,72,0.15)]",
      bgColor: "group-hover:bg-green-50/50 dark:group-hover:bg-green-900/10"
    },
    { 
      src: mysqlLogo, 
      alt: "MySQL Logo", 
      title: "MySQL", 
      category: "database",
      color: "group-hover:shadow-[0_0_20px_rgba(0,117,143,0.15)]",
      bgColor: "group-hover:bg-teal-50/50 dark:group-hover:bg-teal-900/10"
    },
    { 
      src: firebase, 
      alt: "Firebase Logo", 
      title: "Firebase", 
      category: "database",
      color: "group-hover:shadow-[0_0_20px_rgba(255,167,36,0.15)]",
      bgColor: "group-hover:bg-orange-50/50 dark:group-hover:bg-orange-900/10"
    },
    { 
      src: pinecode, 
      alt: "Pinecone Logo", 
      title: "Pinecone", 
      category: "database",
      color: "group-hover:shadow-[0_0_20px_rgba(17,109,180,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    { 
      src: liquibase, 
      alt: "Liquibase Logo", 
      title: "Liquibase", 
      category: "database",
      color: "group-hover:shadow-[0_0_20px_rgba(1,122,205,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },

    // Cloud Technologies
    { 
      src: awsLogo, 
      alt: "AWS Logo", 
      title: "Amazon Web Services", 
      category: "cloud",
      color: "group-hover:shadow-[0_0_20px_rgba(255,153,0,0.15)]",
      bgColor: "group-hover:bg-orange-50/50 dark:group-hover:bg-orange-900/10"
    },
    { 
      src: azure, 
      alt: "Azure Logo", 
      title: "Azure", 
      category: "cloud",
      color: "group-hover:shadow-[0_0_20px_rgba(0,120,212,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },

    // DevOps Technologies
    { 
      src: dockerLogo, 
      alt: "Docker Logo", 
      title: "Docker", 
      category: "devops",
      color: "group-hover:shadow-[0_0_20px_rgba(36,150,237,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    { 
      src: githubActions, 
      alt: "GitHub Actions Logo", 
      title: "GitHub Actions", 
      category: "devops",
      color: "group-hover:shadow-[0_0_20px_rgba(36,41,46,0.15)]",
      bgColor: "group-hover:bg-gray-50/50 dark:group-hover:bg-gray-900/10"
    },
    { 
      src: terraform, 
      alt: "Terraform Logo", 
      title: "Terraform", 
      category: "devops",
      color: "group-hover:shadow-[0_0_20px_rgba(92,107,192,0.15)]",
      bgColor: "group-hover:bg-indigo-50/50 dark:group-hover:bg-indigo-900/10"
    },
    { 
      src: yarn, 
      alt: "Yarn Logo", 
      title: "Yarn", 
      category: "devops",
      color: "group-hover:shadow-[0_0_20px_rgba(44,140,233,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },

    // Mobile Technologies
    { 
      src: android, 
      alt: "Android Logo", 
      title: "Android", 
      category: "mobile",
      color: "group-hover:shadow-[0_0_20px_rgba(61,220,132,0.15)]",
      bgColor: "group-hover:bg-green-50/50 dark:group-hover:bg-green-900/10"
    },
    { 
      src: apple, 
      alt: "Android Logo", 
      title: "Apple", 
      category: "mobile",
      color: "group-hover:shadow-[0_0_20px_rgba(61,220,132,0.15)]",
      bgColor: "group-hover:bg-green-50/50 dark:group-hover:bg-green-900/10"
    },

    // Design Technologies
    { 
      src: figma, 
      alt: "Figma Logo", 
      title: "Figma", 
      category: "design",
      color: "group-hover:shadow-[0_0_20px_rgba(162,89,255,0.15)]",
      bgColor: "group-hover:bg-purple-50/50 dark:group-hover:bg-purple-900/10"
    },

    // Testing Technologies
    { 
      src: cypress, 
      alt: "Cypress Logo", 
      title: "Cypress", 
      category: "testing",
      color: "group-hover:shadow-[0_0_20px_rgba(68,68,68,0.15)]",
      bgColor: "group-hover:bg-gray-50/50 dark:group-hover:bg-gray-900/10"
    },
    { 
      src: jasmine, 
      alt: "Jasmine Logo", 
      title: "Jasmine", 
      category: "testing",
      color: "group-hover:shadow-[0_0_20px_rgba(138,43,226,0.15)]",
      bgColor: "group-hover:bg-purple-50/50 dark:group-hover:bg-purple-900/10"
    },

    // AI/ML Technologies
    { 
      src: langchain, 
      alt: "LangChain Logo", 
      title: "LangChain", 
      category: "ai_ml",
      color: "group-hover:shadow-[0_0_20px_rgba(0,163,224,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    { 
      src: Pandas, 
      alt: "Pandas Logo", 
      title: "Pandas", 
      category: "ai_ml",
      color: "group-hover:shadow-[0_0_20px_rgba(0,163,224,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    { 
      src: Numpy, 
      alt: "Numpy Logo", 
      title: "Numpy", 
      category: "ai_ml",
      color: "group-hover:shadow-[0_0_20px_rgba(0,163,224,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    { 
      src: Anaconda, 
      alt: "Anaconda Logo", 
      title: "Anaconda", 
      category: "ai_ml",
      color: "group-hover:shadow-[0_0_20px_rgba(0,163,224,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },

    // CMS Technologies
    { 
      src: wordpress, 
      alt: "WordPress Logo", 
      title: "WordPress", 
      category: "cms",
      color: "group-hover:shadow-[0_0_20px_rgba(33,117,155,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    { 
      src: shopify, 
      alt: "Shopify Logo", 
      title: "Shopify", 
      category: "cms",
      color: "group-hover:shadow-[0_0_20px_rgba(33,117,155,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },
    { 
      src: wix, 
      alt: "Wix Logo", 
      title: "WIX", 
      category: "cms",
      color: "group-hover:shadow-[0_0_20px_rgba(33,117,155,0.15)]",
      bgColor: "group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/10"
    },

    // BI/Data Visualization
    { 
      src: powerbi, 
      alt: "Power BI Logo", 
      title: "Power BI", 
      category: "bi",
      color: "group-hover:shadow-[0_0_20px_rgba(242,101,34,0.15)]",
      bgColor: "group-hover:bg-orange-50/50 dark:group-hover:bg-orange-900/10"
    },
    { 
      src: tableau, 
      alt: "Tableau Logo", 
      title: "Tableau", 
      category: "bi",
      color: "group-hover:shadow-[0_0_20px_rgba(224,62,45,0.15)]",
      bgColor: "group-hover:bg-red-50/50 dark:group-hover:bg-red-900/10"
    }
  ];

  tabs = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'devops', label: 'DevOps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' },
    { id: 'testing', label: 'Testing' },
    { id: 'ai_ml', label: 'AI/ML' },
    { id: 'cms', label: 'CMS' },
    { id: 'bi', label: 'BI/Analytics' }
  ];

  handleTabClick = (tabId) => {
    this.setState({ activeTab: tabId });
  };

  getFilteredTechnologies = () => {
    if (this.state.activeTab === 'all') {
      return this.technologies;
    }
    return this.technologies.filter(tech => tech.category === this.state.activeTab);
  };

  getTabCount = (tabId) => {
    if (tabId === 'all') {
      return this.technologies.length;
    }
    return this.technologies.filter(tech => tech.category === tabId).length;
  };

  render() {
    const filteredTechnologies = this.getFilteredTechnologies();
    const { activeTab } = this.state;

    return (
      <div className="w-full sm:py-8">
        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-10 px-2 sm:px-4">
          {this.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => this.handleTabClick(tab.id)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Grid Structure */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 px-2 sm:px-4 md:px-6 max-w-7xl mx-auto">
          {filteredTechnologies.map((tech, index) => (
            <div 
              key={index}
              className={`group relative flex flex-col items-center p-3 sm:p-4 rounded-xl transition-all duration-300 ease-out hover:scale-105 cursor-pointer`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tech.color}`}></div>
              
              {/* Icon container */}
              <div className="relative w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mb-2 sm:mb-3">
                <img 
                  src={tech.src} 
                  alt={tech.alt} 
                  className="relative w-full h-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                  title={tech.title}
                />
              </div>
              
              {/* Technology name */}
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white line-clamp-2">
                {tech.title}
              </span>
            </div>
          ))}
        </div>

        {/* Count indicator */}
        {/* <div className="text-center mt-8 sm:mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              Showing <span className="font-bold text-blue-600 dark:text-blue-400">{filteredTechnologies.length}</span> technologies
            </span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              Total: <span className="font-bold text-purple-600 dark:text-purple-400">{this.technologies.length}</span>
            </span>
          </div>
        </div> */}

        {/* Empty State */}
        {filteredTechnologies.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No technologies found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try selecting a different category
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Technologies;