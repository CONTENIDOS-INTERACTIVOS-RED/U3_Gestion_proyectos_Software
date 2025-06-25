export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Evaluación y cierre de proyectos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generación de informes finales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Estructura de un informe final de un proyecto de <i>software</i>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Informes de calidad y desempeño',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Lecciones aprendidas del proyecto',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Documentación técnica final',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Preparación de la entrega final del <i>software</i>',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis postmortem',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Evaluación del desempeño del proyecto: ¿se cumplieron los objetivos?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Identificación de problemas técnicos y de gestión',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Evaluación de la comunicación dentro del equipo de desarrollo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Lecciones sobre la metodología utilizada',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Recomendaciones para futuros proyectos de <i>software</i>',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Lecciones aprendidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Importancia de las lecciones aprendidas en proyectos de <i>software</i>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Análisis de los problemas recurrentes en proyectos anteriores',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Identificación de mejores prácticas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Aplicación de mejoras en el ciclo de vida de los proyectos futuros',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Documentación y socialización de las lecciones aprendidas',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Boero, C. (2020). <i>Evaluación de proyectos</i>. Jorge Sarmiento Editor - Universitas. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/172500',
    },
    {
      referencia:
        'De Zunzunegui, A. (2023). <i>Gestión de proyectos en AGILE: cómo utilizar las metodologías ágiles para mejorar tu capacidad de respuesta y lanzar proyectos de éxito</i>. LID Editorial España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/270594?page=1',
    },
    {
      referencia:
        'Gómez Ruedas, J. (2014). <i>Dirección y gestión de proyectos de tecnologías de la información en la empresa</i>. FC Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/114078?page=1',
    },
    {
      referencia:
        'Gutiérrez de Mesa, J. A. (2009). <i>Planificación y gestión de proyectos informáticos</i>. Editorial Universidad de Alcalá. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/53487?page=1',
    },
    {
      referencia:
        'López, D., Rodríguez, J. R., & González, J. J. (2019). <i>Gestión de programas de proyectos informáticos (y no informáticos)</i>. Editorial UOC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/113334?page=1',
    },
    {
      referencia:
        'Maigua, G. (2017). <i>Buenas prácticas en la dirección y gestión de proyectos informáticos</i>. D - Editorial de la Universidad Tecnológica Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/76993?page=1',
    },
    {
      referencia:
        'Sarmiento Rojas, J. A., Correa Candamil, C. H., & Jiménez Roa, D. E. (2020).<i> Gestión de proyectos aplicada al PMBOK 6ED</i>. Editorial UPTC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/193943?page=1',
    },
    {
      referencia:
        'Boero, C. (2020). <i>Evaluación de proyectos</i>. Jorge Sarmiento Editor - Universitas. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/172500',
    },
    {
      referencia:
        'De Zunzunegui, A. (2023). <i>Gestión de proyectos en AGILE: cómo utilizar las metodologías ágiles para mejorar tu capacidad de respuesta y lanzar proyectos de éxito</i>. LID Editorial España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/270594?page=1',
    },
    {
      referencia:
        'Gómez Ruedas, J. (2014). <i>Dirección y gestión de proyectos de tecnologías de la información en la empresa</i>. FC Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/114078?page=1',
    },
    {
      referencia:
        'López, D., Rodríguez, J. R. & González, J. J. (2019). <i>Gestión de programas de proyectos informáticos (y no informáticos)</i>. Editorial UOC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/113334?page=1',
    },
    {
      referencia:
        'Maigua, G. (2017). <i>Buenas prácticas en la dirección y gestión de proyectos informáticos</i>. D - Editorial de la Universidad Tecnológica Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/76993?page=1',
    },
    {
      referencia:
        'Sarmiento Rojas, J. A., Correa Candamil, C. H. & Jiménez Roa, D. E. (2020). <i>Gestión de proyectos aplicada al PMBOK 6ED</i>. Editorial UPTC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/193943?page=1',
    },
    {
      referencia:
        'Boero, C. (2020). <i>Evaluación de proyectos</i>. Jorge Sarmiento Editor - Universitas. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/172500',
    },
    {
      referencia:
        'De Zunzunegui, A. (2023). <i>Gestión de proyectos en AGILE: cómo utilizar las metodologías ágiles para mejorar tu capacidad de respuesta y lanzar proyectos de éxito</i>. LID Editorial España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/270594?page=1',
    },
    {
      referencia:
        'Gómez Ruedas, J. (2014). <i>Dirección y gestión de proyectos de tecnologías de la información en la empresa</i>. FC Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/114078?page=1',
    },
    {
      referencia:
        'Gutiérrez de Mesa, J. A. (2009). <i>Planificación y gestión de proyectos informáticos</i>. Editorial Universidad de Alcalá. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/53487?page=1',
    },
    {
      referencia:
        'López, D., Rodríguez, J. R., & González, J. J. (2019). <i>Gestión de programas de proyectos informáticos (y no informáticos)</i>. Editorial UOC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/113334?page=1',
    },
    {
      referencia:
        'Maigua, G. (2017). <i>Buenas prácticas en la dirección y gestión de proyectos informáticos</i>. D - Editorial de la Universidad Tecnológica Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/76993?page=1',
    },
    {
      referencia:
        'Sarmiento Rojas, J. A., Correa Candamil, C. H., & Jiménez Roa, D. E. (2020). <i>Gestión de proyectos aplicada al PMBOK 6ED</i>. Editorial UPTC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/193943?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Acta de entrega',
      significado:
        'Documento formal que oficializa la transferencia de la responsabilidad del producto <i>software</i> desarrollado al cliente o al equipo de operaciones.',
    },
    {
      termino: 'Análisis causa-efecto',
      significado:
        'Metodología que permite identificar las relaciones entre un problema específico y sus posibles causas, comúnmente representada mediante diagramas de Ishikawa o "espina de pescado".',
    },
    {
      termino: 'Análisis de desviaciones',
      significado:
        'Proceso de evaluación que determina las diferencias entre lo planificado y lo ejecutado en un proyecto, identificando las causas de estas variaciones.',
    },
    {
      termino: 'Análisis postmortem',
      significado:
        'Evaluación retrospectiva y exhaustiva que se realiza después de finalizar un proyecto para examinar sus resultados, procesos y eventos significativos.',
    },
    {
      termino: 'Arquitectura del sistema',
      significado:
        'Estructura fundamental de un sistema de <i>software</i> que define sus componentes, las relaciones entre ellos y los principios que guían su diseño y evolución.',
    },
    {
      termino: '<i>Best practices</i> (Mejores prácticas)',
      significado:
        'Conjunto de técnicas, métodos o procedimientos que han demostrado consistentemente resultados superiores a los obtenidos con otros medios y que son utilizados como referencia.',
    },
    {
      termino: 'Ciclo PDCA',
      significado:
        'Metodología iterativa de gestión conocida como PHVA "Planificar-Hacer-Verificar-Actuar" (<i>Plan-Do-Check-Act</i>), utilizada para la mejora continua de procesos.',
    },
    {
      termino: 'Ciclo de vida del proyecto',
      significado:
        'Conjunto de fases secuenciales que atraviesa un proyecto desde su inicio hasta su finalización.',
    },
    {
      termino: 'Cierre de proyecto',
      significado:
        'Fase final del ciclo de vida de un proyecto, donde se formalizan y documentan los resultados obtenidos, se liberan los recursos y se transfiere el producto finalizado.',
    },
    {
      termino: 'Cinco porqués',
      significado:
        'Técnica iterativa de interrogación utilizada para explorar las relaciones de causa y efecto subyacentes a un problema particular, buscando la causa raíz.',
    },
    {
      termino: 'CPI (<i>Cost Performance Index</i>)',
      significado:
        'Índice de desempeño del costo, métrica que mide la eficiencia en el uso del presupuesto en relación con el trabajo realizado.',
    },
    {
      termino: 'Curva de aprendizaje',
      significado:
        'Representación gráfica que muestra la relación entre el tiempo transcurrido y la adquisición de nuevas habilidades o conocimientos por parte de un individuo o equipo.',
    },
    {
      termino: 'Despliegue continuo',
      significado:
        'Práctica de ingeniería de <i>software</i> donde los cambios en el código pasan automáticamente a producción, minimizando la intervención humana.',
    },
    {
      termino: 'DevOps',
      significado:
        'Conjunto de prácticas que combina el desarrollo de <i>software</i> (Dev) y las operaciones de IT (Ops) para acortar el ciclo de vida del desarrollo de sistemas.',
    },
    {
      termino: 'Documentación técnica',
      significado:
        'Conjunto de materiales que describen detalladamente los aspectos técnicos del producto <i>software</i> desarrollado, necesarios para su mantenimiento y evolución.',
    },
    {
      termino: 'ERP (<i>Enterprise Resource Planning</i>)',
      significado:
        'Sistema de información que integra y maneja muchos de los negocios asociados con las operaciones de producción y distribución de una empresa.',
    },
    {
      termino: 'EVM (<i>Earned Value Management</i>)',
      significado:
        'Técnica de gestión de proyectos que permite medir el desempeño y avance de un proyecto comparando la cantidad de trabajo planificado con lo realmente completado.',
    },
    {
      termino: 'Gestión de dependencias',
      significado:
        'Proceso de identificación, evaluación y manejo de los componentes externos de los cuales depende un proyecto de <i>software</i>.',
    },
    {
      termino: 'Hito (<i>Milestone</i>)',
      significado:
        'Punto de referencia que marca un evento importante en el proyecto y se utiliza para supervisar su progreso.',
    },
    {
      termino: 'Informe de calidad',
      significado:
        'Documento que proporciona una evaluación objetiva sobre el cumplimiento de los estándares establecidos para el producto <i>software</i>.',
    },
    {
      termino: 'Informe de desempeño',
      significado:
        'Documento que evalúa la eficiencia y efectividad con que se utilizaron los recursos asignados al proyecto para lograr los objetivos establecidos.',
    },
    {
      termino: 'Informe final',
      significado:
        'Documento comprensivo que registra formalmente los resultados, logros, desafíos y aprendizajes de un proyecto concluido.',
    },
    {
      termino: 'Lecciones aprendidas',
      significado:
        'Conocimiento adquirido durante un proyecto a través de la experiencia, que puede ser positivo (buenas prácticas) o negativo (problemas enfrentados).',
    },
    {
      termino: '<i>Legacy</i> (Sistemas <i>legacy</i>)',
      significado:
        'Sistemas informáticos, tecnologías o aplicaciones antiguas que continúan siendo utilizadas por una organización a pesar de existir alternativas más modernas.',
    },
    {
      termino: 'Línea base',
      significado:
        'Referencia aprobada de un producto de trabajo que solo puede cambiarse mediante procedimientos formales de control de cambios y que sirve como base para comparación.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Filosofía que busca optimizar y aumentar la calidad de un producto, proceso o servicio de manera progresiva a lo largo del tiempo.',
    },
    {
      termino: 'Memoria institucional',
      significado:
        'Acumulación de conocimiento, experiencias y aprendizajes de una organización que se preserva a través de documentación estructurada y transferencia de conocimientos.',
    },
    {
      termino: 'Métricas de desempeño',
      significado:
        'Indicadores cuantitativos que permiten evaluar el rendimiento de un proyecto o equipo en relación con objetivos predefinidos.',
    },
    {
      termino: 'PMBOK (<i>Project Management Body of Knowledge</i>)',
      significado:
        'Guía estándar para la gestión de proyectos desarrollada por el <i>Project Management Institute</i> (PMI).',
    },
    {
      termino: 'Prototipos funcionales',
      significado:
        'Versiones preliminares del <i>software</i> que implementan funcionalidades específicas para validar requisitos o conceptos antes del desarrollo completo.',
    },
    {
      termino: 'Retrospectiva',
      significado:
        'Reunión que se realiza al final de una iteración o proyecto para reflexionar sobre lo que funcionó, lo que no funcionó y cómo mejorar en el futuro.',
    },
    {
      termino: 'Revisión de <i>sprint</i>',
      significado:
        'Ceremonia de la metodología Scrum donde se presenta el incremento completado al final de un <i>sprint</i> a los interesados para obtener retroalimentación.',
    },
    {
      termino: 'Scrum',
      significado:
        'Marco de trabajo para desarrollo ágil que se estructura en ciclos de trabajo llamados <i>sprints</i>, generalmente de dos a cuatro semanas de duración.',
    },
    {
      termino: 'SPI (<i>Schedule Performance Index</i>)',
      significado:
        'Índice de desempeño del cronograma, métrica que mide la eficiencia en el cumplimiento del cronograma en relación con el trabajo realizado.',
    },
    {
      termino: '<i>Sprint</i>',
      significado:
        'Período de tiempo fijo (generalmente de dos a cuatro semanas) durante el cual se completa un incremento de producto potencialmente entregable.',
    },
    {
      termino: '<i>Stakeholders</i> (Interesados)',
      significado:
        'Individuos, grupos u organizaciones que pueden afectar, verse afectados o percibirse a sí mismos como afectados por una decisión, actividad o resultado de un proyecto.',
    },
    {
      termino: 'Transición del producto',
      significado:
        'Proceso mediante el cual el producto <i>software</i> desarrollado se transfiere formalmente al cliente o al equipo de operaciones y soporte.',
    },
    {
      termino: 'Valor ganado',
      significado:
        'Técnica de gestión de proyectos que permite a los gerentes medir la cantidad de trabajo realmente realizado en un proyecto más allá de la simple revisión de los costos incurridos hasta la fecha.',
    },
  ],
}
