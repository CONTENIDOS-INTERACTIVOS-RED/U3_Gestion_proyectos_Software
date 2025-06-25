<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Lecciones aprendidas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/62.png", data-aos="zoom-in") 

      .col-lg-8
        p(data-aos="fade-down") Las lecciones aprendidas constituyen un elemento fundamental en la gestión de proyectos de #[i software], actuando como un mecanismo de transferencia de conocimiento que permite capitalizar las experiencias adquiridas durante la ejecución. 

        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/63.svg")
            .col-lg
              p.mb-0 Este proceso sistemático de identificación, documentación y socialización del conocimiento experiencial #[b representa un pilar esencial] para la construcción de una cultura de mejora continua dentro de las organizaciones dedicadas al desarrollo de #[i software].

        p(data-aos="fade-down") La implementación efectiva de un sistema de gestión de lecciones aprendidas proporciona múltiples beneficios organizacionales, incluyendo la reducción de errores recurrentes, la optimización de procesos, el aprovechamiento de prácticas exitosas y la aceleración de la curva de aprendizaje para equipos nuevos.

    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Este enfoque transforma las experiencias individuales en conocimiento colectivo, contribuyendo significativamente a la madurez organizacional, a la generación de ventajas competitivas sostenibles en un entorno donde la capacidad de adaptación y evolución resulta crítica.      
        p(data-aos="fade-down") A continuación, se examinarán cinco aspectos fundamentales relacionados con las lecciones aprendidas: su importancia en proyectos de #[i software], el análisis de problemas recurrentes, la identificación de mejores prácticas, la aplicación de mejoras en futuros proyectos, la documentación y socialización de este conocimiento. 

        p(data-aos="fade-down") Cada uno de estos elementos contribuye a consolidar un sistema integral de gestión del conocimiento que permite maximizar el valor derivado de las experiencias acumuladas en la organización.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/64.png", data-aos="zoom-in") 

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Importancia de las lecciones aprendidas en proyectos de #[i software]
    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          p.mb-0 La importancia de las lecciones aprendidas en proyectos de #[i software] radica fundamentalmente en su capacidad para transformar las experiencias adquiridas en conocimiento organizacional aplicable, facilitando la evolución, madurez de los equipos y procesos de desarrollo. Este mecanismo de aprendizaje sistemático permite romper el ciclo de repetición de errores que frecuentemente afecta a las organizaciones, creando una memoria institucional que trasciende las limitaciones de la experiencia individual y sustenta la toma de decisiones basada en evidencias históricas concretas.    
        p(data-aos="fade-down") Según Gómez Ruedas (2014), la implementación efectiva de un sistema de lecciones aprendidas constituye uno de los principales diferenciadores entre organizaciones maduras e inmaduras en la gestión de proyectos de #[i software]. El autor señala que las organizaciones que invierten en estos procesos experimentan mejoras progresivas en sus métricas de desempeño, incluyendo reducciones en el tiempo de desarrollo, disminución de defectos y mayor satisfacción del cliente. Maigua (2017), complementa esta visión enfatizando que las lecciones aprendidas tienen un impacto directo en la competitividad organizacional, permitiendo respuestas más ágiles y precisas ante los desafíos del mercado.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/65.png", data-aos="zoom-in") 

    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/66.png", data-aos="zoom-in") 

      .col-lg-8
        .bg-color-8.p-4.mb-4(data-aos="fade-left")
          p En una empresa desarrolladora de #[i software] para el sector salud, la implementación de un sistema de lecciones aprendidas, permitió identificar que los proyectos que involucraban integración con equipos médicos presentaban consistentemente problemas de compatibilidad que generaban retrasos significativos.

          p Al documentar estas experiencias y establecer protocolos de verificación temprana, los proyectos subsiguientes lograron reducir en un 40 % los incidentes relacionados con integraciones, mejorando considerablemente los tiempos de entrega y la satisfacción de los clientes.

          p.mb-0 Este caso ilustra cómo la formalización del conocimiento experiencial puede transformarse en ventajas operativas concretas.

        p(data-aos="fade-down") Para implementar un sistema efectivo de lecciones aprendidas, puede seguirse esta metodología: 

    .bg-full-width-2.bg-fondo-3(data-aos="fade-right")
      .px-4.p-md-3
        div.row.justify-content-center.align-items-stretch.text-center.px-4
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/67.svg" alt="" style="width: 90px")
              h5 Primer paso
              p.mb-0 Crear un ambiente organizacional que valore el aprendizaje continuo y no penalice el reconocimiento de errores.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/68.svg" alt="" style="width: 90px")
              h5 Segundo paso
              p.mb-0 Establecer procesos formales para la captura y documentación de experiencias significativas durante todo el ciclo de vida del proyecto.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/69.svg" alt="" style="width: 90px")
              h5 Tercer paso
              p.mb-0 Desarrollar un repositorio centralizado accesible donde se almacenen las lecciones identificadas.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/70.svg" alt="" style="width: 90px")
              h5 Cuarto paso
              p.mb-0 Integrar la consulta de este repositorio como un paso obligatorio en la planificación de nuevos proyectos.
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/71.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") El resultado será un ciclo virtuoso de mejora continua que incrementará progresivamente la probabilidad de éxito en los proyectos de #[i software] de la organización. 


    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Análisis de los problemas recurrentes en proyectos anteriores
    p(data-aos="fade-down") El reconocimiento de patrones problemáticos en proyectos anteriores es esencial para prevenir la repetición de errores y fortalecer la gestión organizacional.

    .bg-full-width.bg-color-10.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/72.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Análisis de los problemas recurrentes en proyectos anteriores 
            p.mb-4(data-aos="fade-right") En el PDF Análisis de los problemas recurrentes en proyectos anteriores, se presentan estrategias para identificar y comprender dificultades persistentes que afectan el rendimiento de los proyectos, utilizando enfoques estructurados y herramientas analíticas. Este ejercicio permite diseñar intervenciones eficaces que aborden las causas raíz y promuevan mejoras sostenibles en futuras iniciativas.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Análisis de los problemas recurrentes en proyectos anteriores 

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Identificación de mejores prácticas

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/73.png", data-aos="zoom-in")           
      .col-lg-8
        p(data-aos="fade-down") La identificación de mejores prácticas representa el proceso complementario al análisis de problemas recurrentes, centrándose en reconocer y documentar aquellos enfoques, técnicas, métodos o procedimientos que han demostrado consistentemente resultados superiores en diversos contextos dentro de la organización. Este ejercicio permite capitalizar los aciertos y experiencias positivas, estableciendo estándares de excelencia que pueden replicarse sistemáticamente en proyectos futuros, maximizando así las probabilidades de éxito.

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Según De Zunzunegui (2023), la identificación efectiva de mejores prácticas debe sustentarse en evidencias objetivas y criterios de evaluación claramente definidos, evitando basarse exclusivamente en percepciones subjetivas o casos aislados de aparente éxito. El autor sugiere establecer métricas específicas para cada área de gestión (como desarrollo, pruebas, o gestión de requisitos) que permitan comparar objetivamente diferentes aproximaciones y determinar cuáles producen mejores resultados. Boero (2020), complementa esta visión señalando que las mejores prácticas deben validarse en diferentes contextos antes de generalizarse, dado que soluciones efectivas en ciertos escenarios pueden no ser transferibles a otros entornos.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") En una compañía de desarrollo de #[i software] para el sector educativo, el proceso de identificación de mejores prácticas podría revelar que los proyectos que implementaron prototipado temprano con participación directa de docentes experimentaron un 35 % menos de solicitudes de cambio durante las fases avanzadas con una mayor satisfacción de los usuarios finales. 

        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Analizando estos casos exitosos, se podría determinar que la clave no estaba solo en la creación de prototipos, sino en la metodología específica utilizada para las sesiones de validación, donde se combinaban escenarios reales de uso con técnicas de pensamiento en voz alta que permitían capturar necesidades implícitas que los usuarios no expresaban directamente en los requerimientos iniciales.
        p(data-aos="fade-down") Para conducir un proceso efectivo de identificación de mejores prácticas, puede aplicarse esta metodología: 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/74.png", data-aos="zoom-in")   

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/75.png", alt="")     
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Primer paso")
            p Revisar proyectos históricos para identificar aquellos que sobresalieron positivamente en dimensiones específicas como calidad, adherencia al cronograma o satisfacción del cliente.
          .div(titulo="Segundo paso")
            p Analizar detalladamente los procesos implementados en estos proyectos destacados, identificando elementos distintivos.
          .div(titulo="Tercer paso")
            p Validar la correlación entre estas prácticas y los resultados positivos mediante análisis comparativos.
          .div(titulo="Cuarto paso")
            p Documentar no solo las prácticas en sí mismas sino también las condiciones contextuales necesarias para su implementación exitosa.

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/76.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") El resultado será un catálogo de mejores prácticas verificadas y contextualizadas que podrán incorporarse al acervo metodológico de la organización.

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Aplicación de mejoras en el ciclo de vida de los proyectos futuros

    p(data-aos="fade-down") La aplicación de mejoras en el ciclo de vida de los proyectos futuros constituye la materialización práctica del conocimiento generado a través del análisis de lecciones aprendidas, representando el puente entre la identificación de oportunidades de mejora y su implementación efectiva en la operación organizacional. Este proceso implica integrar sistemáticamente las recomendaciones derivadas de experiencias anteriores en todas las fases del ciclo de vida de nuevas iniciativas, desde la concepción y planificación hasta la ejecución, monitoreo y cierre.

    .bg-full-width-2.bg-fondo-3(data-aos="fade-right")
      .px-4.p-md-3
        .row.px-4.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/77.png", data-aos="zoom-in")          
          .col-lg-8
            .bg-color-1.p-4.mb-4(data-aos="fade-left")
              p.mb-0 De acuerdo con Maigua (2017), la implementación efectiva de mejoras requiere un enfoque estructurado que comprenda modificaciones en múltiples dimensiones organizacionales, incluyendo procesos, herramientas, formación, políticas y aspectos culturales. El autor enfatiza la importancia de evitar el enfoque superficial de simplemente documentar lecciones sin traducirlas en cambios concretos en la forma de trabajar. Gómez Ruedas (2014), complementa esta visión señalando que las mejoras deben implementarse siguiendo un ciclo PHVA (Planificar-Hacer-Verificar-Actuar), estableciendo mecanismos para medir su efectividad y realizar ajustes cuando sea necesario.
            p(data-aos="fade-down") En una empresa desarrolladora de aplicaciones móviles, la aplicación de mejoras derivadas de lecciones aprendidas podría manifestarse en la implementación de un nuevo proceso de gestión de dependencias externas, establecido tras identificar que los retrasos más significativos en proyectos anteriores estaban relacionados con integraciones de APIs de terceros. Este nuevo proceso incluiría: 
 

        div.row.justify-content-center.align-items-stretch.text-center.px-4
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/78.svg" alt="" style="width: 90px")
              h5 01
              p.mb-0 Una fase temprana de evaluación exhaustiva de todas las dependencias externas requeridas.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/79.svg" alt="" style="width: 90px")
              h5 02
              p.mb-0 El desarrollo de prototipos de integración durante la fase de diseño.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/80.svg" alt="" style="width: 90px")
              h5 03
              p.mb-0 La implementación de "contratos de API" internos que aislarían el código de negocio de los detalles de implementación externa.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/81.svg" alt="" style="width: 90px")
              h5 04
              p.mb-0 Un plan de contingencia predefinido para cada dependencia crítica. La implementación sistemática de estas prácticas en nuevos proyectos reduciría significativamente los riesgos asociados a componentes externos. 

    p(data-aos="fade-down") Para implementar efectivamente mejoras en proyectos futuros, puede seguirse este enfoque: 

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-8.mb-3.mb-lg-0  
        AcordionA(tipo="b")
          .div(titulo="Primer paso")
            p Seleccionar un conjunto prioritario de lecciones aprendidas y transformarlas en cambios específicos a nivel de procesos, herramientas o prácticas.
          .div(titulo="Segundo paso")
            p Desarrollar materiales de capacitación o soporte que faciliten la adopción de estos cambios.
          .div(titulo="Tercer paso")
            p Implementar las mejoras de manera incremental, comenzando con proyectos piloto que permitan validar o refinar los cambios.
          .div(titulo="Cuarto paso")
            p Establecer métricas específicas para evaluar el impacto de las mejoras implementadas.    
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/82.png", alt="")     


    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/83.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") El resultado será un ciclo virtuoso donde cada proyecto no solo se beneficia de las lecciones anteriores, sino que también contribuye a refinar y extender el conocimiento organizacional, elevando progresivamente el estándar de desempeño. 

    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Documentación y socialización de las lecciones aprendidas

    p(data-aos="fade-down") La documentación y socialización de las lecciones aprendidas constituye un proceso crítico que garantiza que el conocimiento adquirido a través de las experiencias de proyectos se capture técnicamente y se distribuya eficientemente a todos los miembros relevantes de la organización. Este proceso incluye el registro formal y estructurado de las lecciones identificadas, así como la implementación de mecanismos efectivos para compartir, diseminar y promover la asimilación de este conocimiento, asegurando que trascienda a los individuos que participaron directamente en las experiencias originales. 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/84.png", data-aos="zoom-in")           
      .col-lg-8
        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          p Según Gutiérrez de Mesa (2009), la documentación efectiva debe seguir un formato estandarizado que capture no solo qué sucedió, sino también por qué ocurrió y qué acciones resultaron efectivas o inefectivas, proporcionando suficiente contexto para que otros profesionales puedan aplicar el conocimiento en situaciones similares.

          p.mb-0 El autor enfatiza la importancia de documentar tanto los éxitos como los fracasos, evitando el sesgo común de registrar únicamente problemas. López et al. (2019) complementan esta visión destacando que la socialización debe ir más allá de la simple disponibilidad de documentos, implementando estrategias activas como comunidades de práctica, sesiones de intercambio de conocimientos y programas de mentoría.	 


    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p En una firma consultora especializada en implementaciones SAP, la documentación y socialización de lecciones aprendidas podría materializarse a través de una plataforma digital donde cada proyecto registra formalmente sus experiencias siguiendo una plantilla estructurada que incluye contexto, desafío enfrentado, aproximación adoptada, resultados obtenidos y recomendaciones específicas. Esta información se complementaría con sesiones mensuales denominadas "Historias de trinchera", donde líderes de proyecto comparten experiencias significativas con toda la organización, y un programa de reconocimiento que premia las contribuciones más valiosas al repositorio de conocimiento. Adicionalmente, la inducción de nuevos empleados incluiría un módulo específico dedicado a revisar las lecciones principales acumuladas por la organización.
        p(data-aos="fade-down") Para implementar un sistema efectivo de documentación y socialización, puede seguirse este procedimiento: 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/85.png", data-aos="zoom-in")   

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/86.png", alt="")     
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Primer paso")
            p Establecer un formato estandarizado obligatorio para documentar lecciones aprendidas al finalizar cada proyecto, asegurando su completitud y utilidad.
          .div(titulo="Segundo paso")
            p Crear un repositorio centralizado, fácilmente accesible y con capacidades de búsqueda avanzada.
          .div(titulo="Tercer paso")
            p Implementar mecanismos activos de difusión que lleven el conocimiento relevante a quienes lo necesitan en el momento oportuno.
          .div(titulo="Cuarto paso")
            p Integrar la revisión de lecciones similares como un paso formal en la fase de iniciación de nuevos proyectos.

    p(data-aos="fade-down") El resultado será un ecosistema de gestión del conocimiento que potencia las capacidades organizacionales, reduce la dependencia de individuos específicos y construye una memoria institucional robusta que sustenta la toma de decisiones informadas.

    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p La evaluación y cierre de proyectos representa mucho más que un simple trámite administrativo al final del ciclo de vida; constituye una oportunidad invaluable para transformar la experiencia en conocimiento organizacional y sentar las bases para la mejora continua. A lo largo de esta unidad, se ha evidenciado cómo un enfoque sistemático y riguroso durante esta fase permite no solo formalizar la conclusión de las actividades, sino también extraer el máximo valor de las experiencias vividas durante el desarrollo del #[i software].

          p.mb-0 En el competitivo entorno profesional actual, la capacidad para aprender y adaptarse continuamente distingue a las organizaciones exitosas de aquellas que se estancan. Los ingenieros de #[i software] que dominan las técnicas de evaluación y cierre presentadas en esta unidad aportan un valor diferencial significativo, contribuyendo no solo a la conclusión exitosa de sus proyectos inmediatos sino también a la madurez general de sus organizaciones. La documentación meticulosa, el análisis objetivo de resultados y la extracción sistemática de lecciones aprendidas constituyen herramientas fundamentales que todo profesional debe incorporar a su repertorio.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/87.png", data-aos="zoom-in") 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/88.png", data-aos="zoom-in")            
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p Se invita a reflexionar sobre cómo la implementación de estas prácticas puede transformar la cultura organizacional, evolucionando desde un enfoque reactivo centrado en la resolución de problemas inmediatos hacia una mentalidad proactiva orientada al aprendizaje y la mejora continua. 
        p(data-aos="fade-down") Los conocimientos adquiridos en esta unidad tienen aplicación directa en cualquier entorno profesional relacionado con el desarrollo de #[i software], su implementación consistente constituye un catalizador para la excelencia operativa y la generación de valor sostenible, tanto para los clientes como para la propia organización.
 


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://creately.com/blog/es/negocios/como-utilizar-las-lecciones-aprendidas-de-manera-eficaz-para-evitar-el-fracaso-del-proyecto/Creately+1FourWeekMBA+1" target="_blank" rel="noopener noreferrer") Creately. (2024). Lecciones aprendidas en la gestión de proyectos: Guía práctica. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.iadb.org/conocimiento-abierto/es/como-documentar-lecciones-aprendidas" target="_blank" rel="noopener noreferrer") Luna, E. &Rodríguez L. (2015). Cómo documentar lecciones aprendidas. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://es.smartsheet.com/content/lessons-learned" target="_blank" rel="noopener noreferrer") Smartsheet. (2021). Lecciones de gestión de proyectos aprendidas. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://asana.com/es/resources/lessons-learned" target="_blank" rel="noopener noreferrer") Asana. (2025). Cómo documentar las lecciones aprendidas en la gestión de proyectos.                             

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/NMuqgh5NHyY" target="_blank" rel="noopener noreferrer") Software Guru. (2018). Sistemas de recomendación: lecciones aprendidas y mejores prácticas [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Q6cYltCzDu8" target="_blank" rel="noopener noreferrer") Learning Express - Spanish. (2024). Diagrama de Causa y Efecto [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/9rsUCLmHwf4" target="_blank" rel="noopener noreferrer") Instituto Tecnológico de Las Américas (ITLA). (2024). Jornada Científica 2024 || Taller: Aseguramiento de Calidad de Software [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QenJVcNlFdY" target="_blank" rel="noopener noreferrer") Equone Equipamiento. (2025). Equone - "Gestión documental y ciberseguridad" [video].                                          

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Fundamentos de gestión de proyectos',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué se incluye en un informe final de proyecto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Datos personales del equipo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Resultados, lecciones aprendidas y cumplimiento de objetivos.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Listado de fallos únicamente.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Presupuesto de otros proyectos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué es el análisis postmortem en proyectos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evaluación financiera externa.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Revisión de lo que funcionó y lo que no al finalizar un proyecto.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Cancelación de tareas finales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Actualización de KPI.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué son las lecciones aprendidas en un proyecto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Frases inspiradoras.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Conocimientos adquiridos para mejorar futuros proyectos.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Evaluaciones personales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Requisitos legales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué fase sigue después del cierre de proyecto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Planificación.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'No hay fase; el proyecto termina oficialmente.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Inicio.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Producción.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué herramienta se puede usar para presentar resultados finales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Lista de tareas pendientes.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Informe estructurado con gráficos e indicadores.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Hoja de cálculo en bruto.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Grabación de voz informal.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
