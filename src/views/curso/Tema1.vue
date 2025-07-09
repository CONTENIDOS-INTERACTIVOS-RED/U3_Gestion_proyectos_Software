<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Generación de informes finales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/5.png", data-aos="zoom-in") 

      .col-lg-8
        p(data-aos="fade-down") La generación de informes finales representa un componente esencial en el cierre de todo proyecto de #[i software], actuando como un registro formal con los detalles de los resultados obtenidos incluidas las actividades realizadas. Este proceso no solo permite documentar el estado final del proyecto, sino que también proporciona información valiosa para la organización y constituye una herramienta de comunicación efectiva con los interesados.

        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/6.svg")
            .col-lg
              p.mb-0 Los informes finales condensan la historia completa del proyecto, abarcando desde los objetivos iniciales, el alcance definido hasta los desafíos enfrentados y las soluciones implementadas durante su desarrollo. La elaboración meticulosa de estos documentos facilita la transferencia de conocimiento dentro de la organización, establece un precedente para la planificación de proyectos futuros, convirtiéndose en un activo organizacional de gran valor que puede ser consultado y analizado para mejorar continuamente los procesos de gestión de proyectos.


    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") A continuación, se explorarán cinco aspectos fundamentales relacionados con la generación de informes finales: la estructura de un informe final de un proyecto de #[i software], los informes de calidad y desempeño, las lecciones aprendidas, la documentación técnica final y la preparación de la entrega final del #[i software]. 

        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Cada uno de estos elementos contribuye significativamente, a la formalización del cierre del proyecto y al establecimiento de las bases para futuras iniciativas en el ámbito de la ingeniería de #[i software].

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/7.png", data-aos="zoom-in") 

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Estructura de un informe final de un proyecto de #[i software]

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/8.png", data-aos="zoom-in") 

      .col-lg-8
        p(data-aos="fade-down") La estructura de un informe final de un proyecto de #[i software] debe organizarse de manera coherente y exhaustiva, permitiendo que cualquier persona interesada pueda comprender rápidamente los aspectos más relevantes del proyecto realizado. Este documento constituye el registro histórico oficial del proyecto, por lo que debe incluir secciones claramente diferenciadas como: resumen ejecutivo, introducción, descripción del proyecto, objetivos y alcance, metodología empleada, cronograma ejecutado versus planificado, resultados obtenidos, análisis de desviaciones, evaluación presupuestaria, equipo del proyecto, riesgos identificados y mitigados, y conclusiones generales.

        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Según Sarmiento Rojas et al. (2020), un informe final efectivo debe estar alineado con los estándares de la organización y adaptarse a las necesidades específicas de los interesados, manteniendo un equilibrio entre el detalle técnico y la comprensión general. La guía PMBOK sugiere que este documento debe ser conciso pero completo, evitando redundancias, centrándose en proporcionar información objetiva y verificable que permita evaluar adecuadamente el desempeño del proyecto en relación con las líneas base establecidas inicialmente de alcance, tiempo y costo.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") En un proyecto de desarrollo de un sistema de gestión académica para una universidad, el informe final podría estructurarse comenzando con un resumen ejecutivo que sintetice los logros principales, seguido por las secciones técnicas que detallen la arquitectura implementada, los módulos desarrollados y las pruebas realizadas. 

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/9.svg")
            .col-lg
              p.mb-0 Las secciones de gestión incluirían el #[b análisis comparativo] entre lo planificado y lo ejecutado, mientras que la sección final presentaría los #[b resultados de la satisfacción] de los usuarios y las recomendaciones para el mantenimiento futuro del sistema.
        p(data-aos="fade-down") Para elaborar un informe final completo y efectivo, puede seguirse este proceso: 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/10.png", data-aos="zoom-in") 

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/11.png", alt="")     
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Primer paso")
            p Recopilar toda la documentación generada durante el proyecto, incluyendo actas, informes de avance y registros de cambios.
          .div(titulo="Segundo paso")
            p Analizar las métricas de desempeño y compararlas con las estimaciones iniciales.
          .div(titulo="Tercer paso")
            p Estructurar el documento siguiendo la plantilla organizacional o los estándares de la industria.
          .div(titulo="Cuarto paso")
            p Validar el contenido del informe con los miembros claves del equipo para garantizar su precisión y exhaustividad.     


    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/12.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") El resultado será un documento integral que servirá como referencia histórica y fuente de conocimiento para la organización.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Informes de calidad y desempeño

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") Los informes de calidad y desempeño constituyen componentes críticos dentro del conjunto de documentación final de un proyecto de #[i software], proporcionando una evaluación objetiva y cuantificable de los resultados obtenidos. 

        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Estos documentos presentan métricas específicas que permiten determinar si el producto entregado cumple con los estándares establecidos inicialmente, abarcando aspectos como la funcionalidad, usabilidad, eficiencia, mantenibilidad, portabilidad y seguridad del #[i software] desarrollado, así como el análisis del rendimiento del equipo y los procesos implementados. 
        p(data-aos="fade-down") De acuerdo con Gómez Ruedas (2014):
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/13.png", data-aos="zoom-in")   

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Los informes de calidad
              p Deben basarse en datos concretos recopilados durante todo el ciclo de vida del proyecto, utilizando herramientas y metodologías de medición reconocidas en la industria. El autor enfatiza que estos informes no solo deben identificar las desviaciones respecto a los estándares de calidad preestablecidos, sino también analizar sus causas y proponer mejoras para futuros proyectos, contribuyendo así al proceso de avance continuo de la organización.  
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/14.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 La evaluación del desempeño
              p Debe reflejar la eficiencia y efectividad con que se utilizaron los recursos asignados al proyecto.  
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/15.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              h5 Ejemplo
              p En un proyecto de desarrollo de una aplicación móvil para servicios bancarios, el informe de calidad podría incluir los resultados de las pruebas de seguridad que verificaron la protección de datos sensibles, las métricas de rendimiento que evidenciaron tiempos de respuesta óptimos en diferentes condiciones de red, y los resultados de usabilidad que confirmaron una experiencia de usuario satisfactoria. El informe de desempeño complementaría esta información con datos sobre la productividad del equipo, el cumplimiento de los hitos establecidos y la gestión eficiente del presupuesto asignado. 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/16.png")

    p(data-aos="fade-down") Para elaborar informes de calidad y desempeño efectivos, puede seguirse esta metodología: 

    div.row.justify-content-center.align-items-stretch.text-center
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/15.svg" alt="" style="width: 90px")
          h5 Primer paso
          p.mb-0 Definir claramente los parámetros y métricas que se evaluarán, alineándolos con los objetivos del proyecto.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/16.svg" alt="" style="width: 90px")
          h5 Segundo paso
          p.mb-0 Recopilar sistemáticamente los datos relevantes utilizando herramientas automatizadas cuando sea posible.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/17.svg" alt="" style="width: 90px")
          h5 Tercer paso
          p.mb-0 Analizar los resultados identificando patrones o tendencias.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/18.svg" alt="" style="width: 90px")
          h5 Cuarto paso
          p.mb-0 Presentar la información de manera clara y visual, utilizando gráficos o tablas comparativas que faciliten su interpretación.  

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/19.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") El producto final será un conjunto de informes que no solo evidencian el nivel de calidad alcanzado, sino que también proporcionan una base sólida para la toma de decisiones futuras.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Lecciones aprendidas del proyecto
    p(data-aos="fade-down") La reflexión sistemática sobre las experiencias vividas en un proyecto es clave para fortalecer la gestión organizacional del conocimiento.

    .bg-full-width.bg-color-10.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/20.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Lecciones aprendidas del proyecto 
            p.mb-4(data-aos="fade-right") En el PDF Lecciones aprendidas del proyecto, se exploran prácticas efectivas para identificar, documentar y aprovechar el conocimiento adquirido durante la ejecución de iniciativas de #[i software], con el fin de replicar aciertos, evitar errores y consolidar una cultura de mejora continua. Este enfoque proporciona herramientas para transformar vivencias individuales en aprendizajes colectivos, aplicables a futuros proyectos.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Lecciones aprendidas del proyecto 
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Documentación técnica final 
    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/21.svg")
            .col-lg
              p.mb-0 La documentación técnica final constituye el conjunto de materiales que describen detalladamente los aspectos técnicos del producto de #[i software] desarrollado, siendo indispensable para su mantenimiento, evolución y soporte a largo plazo. 
        p(data-aos="fade-down") Este tipo de documentación debe ser exhaustiva, precisa, cubriendo elementos como la arquitectura del sistema, los modelos de datos, los diagramas de componentes, las interfaces, los algoritmos implementados, los protocolos de comunicación utilizados, además de cualquier otro aspecto técnico relevante que permita comprender completamente cómo está construido y cómo funciona el #[i software].

        h5(data-aos="fade-down") Según:
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/22.png", data-aos="zoom-in") 

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/23.png")          
            .col-lg-7
              p José Antonio Gutiérrez de Mesa (2009), la documentación técnica de calidad debe seguir estándares específicos de la industria, adaptarse a las necesidades particulares del proyecto y la organización. El autor enfatiza la importancia de mantener actualizada esta documentación durante todo el ciclo de vida del desarrollo, asegurando que refleje fielmente el estado final del producto entregado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/24.png")          
            .col-lg-7
              p Boero (2020), complementa esta visión indicando que la documentación debe estar escrita pensando en sus futuros usuarios, principalmente otros desarrolladores, utilizando un lenguaje claro y uniforme, e incluyendo ejemplos ilustrativos cuando sea pertinente.

    .bg-full-width-2.bg-fondo-1(data-aos="fade-right")
      .px-4.p-md-3
        .row.px-4.mb-5
          .col-lg-8.mb-3.mb-lg-0
            .bg-color-4.p-4.mb-4(data-aos="fade-left")
              p.mb-0 En un proyecto de desarrollo de un sistema de gestión hospitalaria, la documentación técnica final podría incluir el diagrama completo de la base de datos con descripciones detalladas de cada entidad, su relación, los documentos de arquitectura que muestran la distribución de componentes en capas, los diagramas de secuencia para los flujos críticos como la gestión de citas médicas, el manual de API para la integración con sistemas externos como laboratorios y farmacias. También incluiría los registros de las pruebas realizadas, los requisitos técnicos para el despliegue y operación del sistema.
            p(data-aos="fade-down") Para crear una documentación técnica completa y efectiva, se recomienda seguir estos pasos: 
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/25.png", data-aos="zoom-in")   

        div.row.justify-content-center.align-items-stretch.text-center.px-4
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/26.svg" alt="" style="width: 90px")
              h5 Primer paso
              p.mb-0 Identificar a los distintos perfiles de usuarios que consultarán la documentación y sus necesidades específicas.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/27.svg" alt="" style="width: 90px")
              h5 Segundo paso
              p.mb-0 Establecer una estructura clara y consistente para todos los documentos técnicos.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/28.svg" alt="" style="width: 90px")
              h5 Tercer paso
              p.mb-0 Utilizar herramientas especializadas para la generación automática de documentación cuando sea posible.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/29.svg" alt="" style="width: 90px")
              h5 Cuarto paso
              p.mb-0 Implementar un proceso de revisión riguroso para verificar la exactitud y completitud de toda la documentación generada.
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/30.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") El resultado será un conjunto de documentos que garantizarán la continuidad y evolución del #[i software] más allá del ciclo de vida inicial del proyecto.

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Preparación de la entrega final del #[i software]

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-8.p-4.mb-4(data-aos="fade-left")
          p.mb-0 La preparación de la entrega final del #[i software] representa el conjunto de actividades orientadas a asegurar que el producto desarrollado sea transferido técnicamente a sus usuarios finales o al equipo de operaciones que se encargará de su mantenimiento y soporte. 
        p(data-aos="fade-down") Este proceso implica verificar meticulosamente que todos los componentes del sistema funcionan correctamente en el entorno de producción, que la documentación está completa, actualizada, que se han cumplido todos los requisitos contractuales y legales asociados a la entrega del producto.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/31.png", data-aos="zoom-in")  

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              p De acuerdo con De Zunzunegui (2023), la entrega final debe planificarse como un proceso estructurado que considere aspectos técnicos, logísticos y humanos. El autor destaca la importancia de establecer listas de verificación exhaustivas que permitan confirmar que no se está omitiendo ningún elemento crítico durante la transición.   
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/32.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              p Gómez Ruedas (2014), añade que esta fase debe incluir un periodo de soporte postimplementación, durante el cual el equipo de desarrollo permanece disponible para resolver cualquier incidencia que pueda surgir tras la puesta en producción del sistema. 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/33.png")

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p.mb-0 En un proyecto de implementación de un sistema ERP para una empresa manufacturera, la preparación de la entrega final podría incluir actividades como la migración definitiva de los datos desde los sistemas antiguos, la configuración final de los servidores de producción, la capacitación intensiva a los usuarios finales, la realización de pruebas de aceptación con casos reales de negocio, y la firma formal del acta de entrega por parte del cliente. También se establecería un cronograma de soporte post-implementación con niveles de servicio claramente definidos para atender posibles incidencias durante la estabilización del sistema.
        p(data-aos="fade-down") Para realizar una entrega final exitosa, puede seguirse esta metodología: 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/34.png", data-aos="zoom-in")  

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/35.png", alt="")     
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Primer paso")
            p Desarrollar un plan detallado de transición identificando todas las actividades necesarias con sus responsables.
          .div(titulo="Segundo paso")
            p Ejecutar una verificación final de calidad que incluya pruebas de regresión completas.
          .div(titulo="Tercer paso")
            p Preparar y organizar todos los entregables físicos o digitales, según lo acordado contractualmente.
          .div(titulo="Cuarto paso")
            p Coordinar una reunión formal de entrega con todos los interesados claves para transferir oficialmente la responsabilidad del producto.    


    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/36.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") El resultado será una transición ordenada y profesional que maximiza las probabilidades de éxito en la adopción y operación del nuevo sistema de #[i software].



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.ganttpro.com/es/informe-de-proyecto-ejemplo-tipos-pasos/Gantt Chart GanttPRO Blog" target="_blank" rel="noopener noreferrer") Stepanets, A. (2023). Cómo hacer un informe de proyecto para seguir su estado y avance. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.projectmanager.com/es/informes-de-proyectos-ejemplos" target="_blank" rel="noopener noreferrer") Landau, P. (2025). ¿Qué es un Informe de Proyecto? 12 Ejemplos de Informes de Proyectos.              

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://musely.ai/es/tools/project-report-generator " target="_blank" rel="noopener noreferrer") Musely.ai. (2025). Generador gratuito de informes de proyectos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.zoho.com/es-xl/projects/project-reports.html " target="_blank" rel="noopener noreferrer") Zoho Projects. (2025). Informes de proyecto | Software de generación de informes de proyectos.    

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Lc5w5c62zds" target="_blank" rel="noopener noreferrer") Software Guru. (2014). Cierre efectivo de proyectos de Software y resultados [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/RolcW-8Xso0" target="_blank" rel="noopener noreferrer") Keisen Consultores. (2025). 203 - Dialogue with Experts: Quality Management Systems | Essential Tips [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/CvEaIqLrYew" target="_blank" rel="noopener noreferrer") OpenWebinars. (2020). Qué es el análisis de riesgos [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/Y0HwwNDXzwA" target="_blank" rel="noopener noreferrer") Software Guru. (2016). ¿Gestión de Riesgos: cómo manejar las incertidumbres del proyecto? [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/dRkSjXbDPXU" target="_blank" rel="noopener noreferrer") OpenExpo Europe by Metaworld Congress. (2020). La importancia de la gestión documental en los desarrollos de software [video].                                                                    

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
