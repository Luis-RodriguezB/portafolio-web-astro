import type { IExperience } from '../interfaces';

export interface DefaultLabels {
  en: LanguageContent;
  es: LanguageContent;
}

export interface LanguageContent {
  home: Section;
  experience: Section;
  education: Section;
  contact: Section;
}

interface Section {
  title: string;
  subtitle?: string;
  [key: string]: string | string[] | IExperience[] | undefined;
}

export const defaultLabels: DefaultLabels = {
  en: {
    home: {
      title: 'Luis Rodríguez Baltodano',
      aboutMe: [
        'Software Developer',
        "I'm appasionate Frontend Developer",
        "I'm appasionate Backend Developer",
      ],
    },
    experience: {
      title: 'Experience',
      experiences: [
        {
          title: 'Intership Software Developer at Accenture',
          date: 'Aug 2021 - Nov 2021',
          descripcion:
            'During my internship, I faced different challenges and technologies that I had no prior knowledge of, making it a challenge for me to develop professionally. I had to adapt to various circumstances and challenges that arose. I collaborated in a team to develop a project planning platform, where my role as a Software Developer involved developing and implementing new features according to requirements, maintaining and refactoring existing code. I was able to work on both the Front-End and the Back-End, which allowed me to gain valuable experience and skills.',
          responsabilities: [
            'Development and maintenance of a project planning platform',
            'Meeting requirements within established deadlines',
            'Development of new features and design using best practices and clean code',
            'Adaptation to new challenges and technologies, delivering value to the customer',
          ],
        },
        {
          title: 'Front-End Developer at Accenture',
          date: '2021 - Present',
          descripcion:
            'In my role as a Front-End Developer, I have had the opportunity to work on both sales and administrative platforms. I have worked directly with clients for project planning and implementing new features. I have encountered various challenges such as working in diverse areas and with different teams, in which I have been able to adapt successfully. Additionally, part of my role involves developing new projects, maintaining platforms, refactoring, and maintaining existing code.',
          responsabilities: [
            'Planning, development, and maintenance of a digital web Vehicles platform',
            'Understand and meet the requirements in the established times with high performance code',
            'Maintenance of web applications, applying code fixing and refactoring',
            'Efficient teamwork to deliver value to the customer',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      subtitle: 'My Skills',
    },
    contact: {
      title: 'Contact Me',
    },
  },
  es: {
    home: {
      title: 'Luis Rodríguez Baltodano',
      aboutMe: [
        'Desarrollador de software',
        'Soy un apasionado en el Desarrollo Frontend',
        'Soy un apasionado en el Desarrollo Backend',
      ],
    },
    experience: {
      title: 'Experiencia',
      experiences: [
        {
          title: 'Pasantía Desarrollador de Software en Accenture',
          date: 'Ago 2021 - Nov 2021',
          descripcion:
            'Durante mi pasantía, enfrenté diferentes desafíos y tecnologías de las que no tenía conocimiento previo, lo que representó un reto para mi desarrollo profesional. Tuve que adaptarme a diversas circunstancias y desafíos que surgieron. Colaboré en un equipo para desarrollar una plataforma de planificación de proyectos, donde mi rol como Desarrollador de Software implicaba desarrollar e implementar nuevas funcionalidades según los requisitos, además de mantener y refactorizar el código existente. Pude trabajar tanto en el Front-End como en el Back-End, lo que me permitió adquirir experiencia y habilidades valiosas.',
          responsabilities: [
            'Desarrollo y mantenimiento de una plataforma de planificación de proyectos',
            'Cumplimiento de requisitos dentro de los plazos establecidos',
            'Desarrollo de nuevas funcionalidades y diseño utilizando mejores prácticas y código limpio',
            'Adaptación a nuevos desafíos y tecnologías, entregando valor al cliente',
          ],
        },
        {
          title: 'Desarrollador Frontend en Accenture',
          date: '2021 - Presente',
          descripcion:
            'En mi rol como Desarrollador Front-End, he tenido la oportunidad de trabajar tanto en plataformas de ventas como en plataformas administrativas. He trabajado directamente con clientes en la planificación de proyectos e implementación de nuevas funcionalidades. He enfrentado diversos desafíos, como trabajar en diferentes áreas y con distintos equipos, en los cuales he podido adaptarme con éxito. Además, parte de mi rol implica desarrollar nuevos proyectos, mantener plataformas, refactorizar y mantener el código existente.',
          responsabilities: [
            'Planificación, desarrollo y mantenimiento de una plataforma digital web de vehículos',
            'Comprender y cumplir los requisitos en los tiempos establecidos con código de alto rendimiento',
            'Mantenimiento de aplicaciones web, aplicando corrección de código y refactorización',
            'Trabajo en equipo eficiente para entregar valor al cliente',
          ],
        },
      ],
    },
    education: {
      title: 'Educación',
      subtitle: 'Mis Habilidades',
    },
    contact: {
      title: 'Contáctame',
    },
  },
};
