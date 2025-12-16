import React, { createContext, useContext, useState } from 'react';
import type { PortfolioData } from '../types';

type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getPortfolioData: () => PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('pl');

  const translations: Record<Language, Record<string, string>> = {
    pl: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'O mnie',
      'nav.skills': 'Umiejętności',
      'nav.experience': 'Doświadczenie',
      'nav.projects': 'Projekty',
      'nav.education': 'Edukacja',
      'nav.contact': 'Kontakt',
      // Hero
      'hero.getInTouch': 'Skontaktuj się',
      'hero.viewProjects': 'Zobacz projekty',
      // About
      'about.title': 'O mnie',
      'about.languages': 'Języki',
      'about.lang.polish': 'Polski',
      'about.lang.polish.level': 'Pełna biegłość zawodowa',
      'about.lang.english': 'Angielski',
      'about.lang.english.level': 'Biegłość zawodowa',
      'about.lang.ukrainian': 'Ukraiński',
      'about.lang.ukrainian.level': 'Język ojczysty',
      'about.lang.russian': 'Rosyjski',
      'about.lang.russian.level': 'Język ojczysty',
      // Skills
      'skills.title': 'Umiejętności',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      'skills.databases': 'Bazy danych',
      'skills.tools': 'Narzędzia',
      'skills.other': 'Inne',
      // Experience
      'experience.title': 'Doświadczenie',
      'experience.present': 'Obecnie',
      // Projects
      'projects.title': 'Projekty',
      'projects.liveDemo': 'Live Demo',
      'projects.github': 'GitHub',
      // Education
      'education.title': 'Edukacja',
      // Contact
      'contact.title': 'Skontaktuj się',
      'contact.information': 'Informacje kontaktowe',
      'contact.sendMessage': 'Wyślij wiadomość',
      'contact.name': 'Imię',
      'contact.email': 'Email',
      'contact.message': 'Wiadomość',
      'contact.send': 'Wyślij',
      // Footer
      'footer.rights': 'Wszystkie prawa zastrzeżone',
      // Portfolio Content
      'bio': 'Zmotywowany i skrupulatny Python Developer z silnym doświadczeniem full-stack w budowaniu i wdrażaniu skalowalnych aplikacji webowych. Biegły w Django (REST Framework), Celery, RabbitMQ oraz React.js z Material UI. Umiejętny w integracji systemów front-end i back-end, rozwijaniu narzędzi 3D z Blender Python API oraz zarządzaniu wdrożeniami na IIS z Windows Authentication. Pasjonat optymalizacji wydajności, automatyzacji i ciągłego uczenia się.',
      'bio.about.extra': 'Jestem pasjonatem tworzenia innowacyjnych rozwiązań i ciągłego uczenia się nowych technologii. Moim celem jest budowanie aplikacji, które mają pozytywny wpływ i zapewniają doskonałe doświadczenia użytkownika.',
      // Experience
      'exp.1.position': 'Python Developer | Specjalista 3D Modeling',
      'exp.1.desc.1': 'Zaprojektowałem i wdrożyłem pełnoprawną wewnętrzną platformę webową z frontendem React.js i backendem Django',
      'exp.1.desc.2': 'Zaimplementowałem Celery do zadań w tle i RabbitMQ do komunikacji między serwisami',
      'exp.1.desc.3': 'Rozwinąłem narzędzia do przetwarzania i wizualizacji danych używając Pandas, NumPy i Matplotlib',
      'exp.1.desc.4': 'Zautomatyzowałem przepływy pracy 3D oparte na Blenderze używając Pythona i subprocess do wykonywania skryptów',
      'exp.1.desc.5': 'Zbudowałem wewnętrzne narzędzia do zarządzania plikami na dysku, serwerach i magazynie AWS',
      'exp.1.desc.6': 'Współtworzyłem decyzje dotyczące skalowalnej architektury i optymalizacji wydajności',
      'exp.1.desc.7': 'Utrzymywałem czysty, modularny i testowalny kod w całym stosie',
      'exp.1.desc.8': 'Zarządzałem wdrożeniami na IIS z Windows Authentication',
      'exp.2.position': 'Specjalista 3D Modeling',
      'exp.2.desc.1': 'Modelowałem i renderowałem projekty mebli kuchennych używając Blender',
      'exp.2.desc.2': 'Tworzyłem animacje do prezentacji projektów',
      'exp.2.desc.3': 'Rozwinąłem niestandardowe rozszerzenie Blender używając Blender Python API',
      'exp.2.desc.4': 'Pomagałem w zadaniach front-endowych i przygotowaniu zasobów wizualnych',
      // Projects
      'project.1.title': 'GetMyCar - Wypożyczalnia Samochodowa',
      'project.1.desc': 'Full-stack aplikacja do zarządzania wypożyczalnią samochodów. System umożliwia przeglądanie dostępnych pojazdów, rezerwację, zarządzanie użytkownikami i administrację flotą pojazdów. Zbudowana z Django REST Framework backend i nowoczesnym frontendem React.js z Material UI. Zawiera system autoryzacji, panel administracyjny i responsywny interfejs użytkownika.',
      'project.2.title': 'Wewnętrzna Platforma Webowa Full-Stack',
      'project.2.desc': 'Kompleksowa wewnętrzna platforma webowa z frontendem React.js i Material UI, backendem Django REST API, Celery do zadań w tle oraz RabbitMQ do komunikacji. Zawiera przetwarzanie danych, wizualizację i automatyzację przepływów pracy 3D.',
      'project.3.title': 'Automatyzacja Przepływów Pracy 3D w Blender',
      'project.3.desc': 'Zautomatyzowane przepływy pracy modelowania 3D używając Blender Python API i wykonywania subprocess. Zawiera niestandardowe rozszerzenia do projektowania mebli i automatyzacji renderowania.',
      'project.4.title': 'Strona Portfolio',
      'project.4.desc': 'Nowoczesna, responsywna strona portfolio zbudowana z React, TypeScript i Material UI prezentująca moje projekty i doświadczenie.',
      // Education
      'edu.1.degree': 'Stopień inżynierski',
      'edu.1.field': 'Informatyka',
      'edu.1.desc': 'Ukończony stopień inżynierski w dziedzinie Informatyki z naciskiem na rozwój oprogramowania i architekturę systemów.',
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.education': 'Education',
      'nav.contact': 'Contact',
      // Hero
      'hero.getInTouch': 'Get In Touch',
      'hero.viewProjects': 'View Projects',
      // About
      'about.title': 'About Me',
      'about.languages': 'Languages',
      'about.lang.polish': 'Polish',
      'about.lang.polish.level': 'Full Professional Proficiency',
      'about.lang.english': 'English',
      'about.lang.english.level': 'Professional Working Proficiency',
      'about.lang.ukrainian': 'Ukrainian',
      'about.lang.ukrainian.level': 'Native or Bilingual',
      'about.lang.russian': 'Russian',
      'about.lang.russian.level': 'Native or Bilingual',
      // Skills
      'skills.title': 'Skills',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      'skills.databases': 'Databases',
      'skills.tools': 'Tools',
      'skills.other': 'Other',
      // Experience
      'experience.title': 'Experience',
      'experience.present': 'Present',
      // Projects
      'projects.title': 'Projects',
      'projects.liveDemo': 'Live Demo',
      'projects.github': 'GitHub',
      // Education
      'education.title': 'Education',
      // Contact
      'contact.title': 'Get In Touch',
      'contact.information': 'Contact Information',
      'contact.sendMessage': 'Send a Message',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send Message',
      // Footer
      'footer.rights': 'All rights reserved',
      // Portfolio Content
      'bio': 'Motivated and detail-oriented Python Developer with strong full-stack experience in building and deploying scalable web applications. Proficient in Django (REST Framework), Celery, RabbitMQ, and React.js with Material UI. Skilled in integrating front-end and back-end systems, developing 3D tools with Blender Python API, and managing deployments on IIS with Windows Authentication. Passionate about performance optimization, automation, and continuous learning.',
      'bio.about.extra': 'I am passionate about creating innovative solutions and continuously learning new technologies. My goal is to build applications that make a positive impact and provide excellent user experiences.',
      // Experience
      'exp.1.position': 'Python Developer | 3D Modeling Specialist',
      'exp.1.desc.1': 'Designed and deployed a full-stack internal web platform with React.js frontend and Django backend',
      'exp.1.desc.2': 'Implemented Celery for background tasks and RabbitMQ for inter-service communication',
      'exp.1.desc.3': 'Developed data processing and visualization tools using Pandas, NumPy, and Matplotlib',
      'exp.1.desc.4': 'Automated Blender-based 3D workflows using Python and subprocess for script execution',
      'exp.1.desc.5': 'Built internal tools for managing files across disk, servers, and AWS storage',
      'exp.1.desc.6': 'Contributed to scalable architecture decisions and performance tuning',
      'exp.1.desc.7': 'Maintained clean, modular, and testable code across the stack',
      'exp.1.desc.8': 'Managed deployments on IIS with Windows Authentication',
      'exp.2.position': '3D Modeling Specialist',
      'exp.2.desc.1': 'Modeled and rendered cabinet furniture designs using Blender',
      'exp.2.desc.2': 'Created animations for design presentations',
      'exp.2.desc.3': 'Developed a custom Blender add-on using the Blender Python API',
      'exp.2.desc.4': 'Assisted in front-end tasks and visual asset preparation',
      // Projects
      'project.1.title': 'GetMyCar - Car Rental',
      'project.1.desc': 'Full-stack car rental management application. The system enables browsing available vehicles, reservations, user management, and fleet administration. Built with Django REST Framework backend and modern React.js frontend with Material UI. Features authentication system, admin panel, and responsive user interface.',
      'project.2.title': 'Full-Stack Internal Web Platform',
      'project.2.desc': 'A comprehensive internal web platform featuring React.js frontend with Material UI, Django REST API backend, Celery for background tasks, and RabbitMQ for messaging. Includes data processing, visualization, and 3D workflow automation.',
      'project.3.title': 'Blender 3D Workflow Automation',
      'project.3.desc': 'Automated 3D modeling workflows using Blender Python API and subprocess execution. Includes custom add-ons for furniture design and rendering automation.',
      'project.4.title': 'Portfolio Website',
      'project.4.desc': 'A modern, responsive portfolio website built with React, TypeScript, and Material UI showcasing my projects and experience.',
      // Education
      'edu.1.degree': "Engineer's degree",
      'edu.1.field': 'Computer Science',
      'edu.1.desc': 'Completed engineering degree in Computer Science with focus on software development and system architecture.',
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const getPortfolioData = (): PortfolioData => {
    const baseData = {
      skills: [
        { name: 'React.js', category: 'frontend' as const, level: 'advanced' as const },
        { name: 'Next.js', category: 'frontend' as const, level: 'advanced' as const },
        { name: 'TypeScript', category: 'frontend' as const, level: 'advanced' as const },
        { name: 'JavaScript', category: 'frontend' as const, level: 'advanced' as const },
        { name: 'Material UI', category: 'frontend' as const, level: 'advanced' as const },
        { name: 'MUI X Charts', category: 'frontend' as const, level: 'advanced' as const },
        { name: 'Firebase', category: 'frontend' as const, level: 'intermediate' as const },
        { name: 'Python', category: 'backend' as const, level: 'advanced' as const },
        { name: 'Django', category: 'backend' as const, level: 'advanced' as const },
        { name: 'Django REST Framework', category: 'backend' as const, level: 'advanced' as const },
        { name: 'Celery', category: 'backend' as const, level: 'advanced' as const },
        { name: 'Pandas', category: 'backend' as const, level: 'advanced' as const },
        { name: 'NumPy', category: 'backend' as const, level: 'advanced' as const },
        { name: 'Matplotlib', category: 'backend' as const, level: 'advanced' as const },
        { name: 'Kubeflow', category: 'backend' as const, level: 'intermediate' as const },
        { name: 'Microsoft SQL Server', category: 'databases' as const, level: 'advanced' as const },
        { name: 'MySQL', category: 'databases' as const, level: 'advanced' as const },
        { name: 'PostgreSQL', category: 'databases' as const, level: 'advanced' as const },
        { name: 'MongoDB', category: 'databases' as const, level: 'intermediate' as const },
        { name: 'RabbitMQ', category: 'tools' as const, level: 'advanced' as const },
        { name: 'Docker', category: 'tools' as const, level: 'advanced' as const },
        { name: 'Git', category: 'tools' as const, level: 'advanced' as const },
        { name: 'AWS', category: 'tools' as const, level: 'intermediate' as const },
        { name: 'IIS', category: 'tools' as const, level: 'advanced' as const },
        { name: 'Nginx', category: 'tools' as const, level: 'intermediate' as const },
        { name: 'Linux', category: 'tools' as const, level: 'advanced' as const },
        { name: 'Blender Python API', category: 'tools' as const, level: 'advanced' as const },
        { name: 'Selenium', category: 'tools' as const, level: 'intermediate' as const },
        { name: 'Jest', category: 'tools' as const, level: 'intermediate' as const },
        { name: 'Cypress', category: 'tools' as const, level: 'intermediate' as const },
        { name: 'REST APIs', category: 'other' as const, level: 'advanced' as const },
        { name: 'WebSockets', category: 'other' as const, level: 'intermediate' as const },
        { name: 'CI/CD', category: 'other' as const, level: 'intermediate' as const },
        { name: 'Data Analysis', category: 'other' as const, level: 'advanced' as const },
        { name: 'Machine Learning', category: 'other' as const, level: 'intermediate' as const },
      ],
      contact: {
        email: 'vadym.yarmoshuk.02@gmail.com',
        phone: '+48733774660',
        location: language === 'pl' ? 'Lublin, Polska' : 'Lublin, Poland',
        linkedin: 'https://www.linkedin.com/in/vadym-yarmoshuk-9b4364305',
        github: 'https://github.com/VadymYarmoshuk',
        website: undefined,
      },
    };

    return {
      personalInfo: {
        name: 'Vadym Yarmoshuk',
        title: 'Python Developer | Full-Stack Engineer',
        bio: t('bio'),
        imageUrl: undefined,
      },
      ...baseData,
      experience: [
        {
          id: '1',
          company: 'Asseco Business Solutions',
          position: t('exp.1.position'),
          startDate: '2022-08',
          endDate: 'Present',
          description: [
            t('exp.1.desc.1'),
            t('exp.1.desc.2'),
            t('exp.1.desc.3'),
            t('exp.1.desc.4'),
            t('exp.1.desc.5'),
            t('exp.1.desc.6'),
            t('exp.1.desc.7'),
            t('exp.1.desc.8'),
          ],
          technologies: [
            'React.js',
            'Material UI',
            'MUI X Charts',
            'Firebase',
            'Django',
            'Django REST Framework',
            'Celery',
            'RabbitMQ',
            'Microsoft SQL Server',
            'Pandas',
            'NumPy',
            'Matplotlib',
            'Blender Python API',
            'IIS',
            'AWS',
          ],
        },
        {
          id: '2',
          company: '"Gerbor" Holding',
          position: t('exp.2.position'),
          startDate: '2021-07',
          endDate: '2021-09',
          description: [
            t('exp.2.desc.1'),
            t('exp.2.desc.2'),
            t('exp.2.desc.3'),
            t('exp.2.desc.4'),
          ],
          technologies: ['Blender', 'Blender Python API', 'Python'],
        },
      ],
      projects: [
        {
          id: '1',
          title: t('project.1.title'),
          description: t('project.1.desc'),
          technologies: [
            'Django',
            'Django REST Framework',
            'React.js',
            'Material UI',
            'PostgreSQL',
            'Python',
          ],
          liveUrl: 'https://getmycar.onrender.com/',
        },
        {
          id: '2',
          title: t('project.2.title'),
          description: t('project.2.desc'),
          technologies: [
            'React.js',
            'Material UI',
            'Django',
            'Django REST Framework',
            'Celery',
            'RabbitMQ',
            'Microsoft SQL Server',
            'Pandas',
            'NumPy',
            'Matplotlib',
          ],
        },
        {
          id: '3',
          title: t('project.3.title'),
          description: t('project.3.desc'),
          technologies: ['Python', 'Blender Python API', 'Subprocess'],
        },
        {
          id: '4',
          title: t('project.4.title'),
          description: t('project.4.desc'),
          technologies: ['React', 'TypeScript', 'Material UI', 'Vite'],
        },
      ],
      education: [
        {
          id: '1',
          institution: 'Lublin University of Technology',
          degree: t('edu.1.degree'),
          field: t('edu.1.field'),
          startDate: '2018-10',
          endDate: '2022-02',
          description: t('edu.1.desc'),
        },
      ],
    };
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getPortfolioData }}>
      {children}
    </LanguageContext.Provider>
  );
};

