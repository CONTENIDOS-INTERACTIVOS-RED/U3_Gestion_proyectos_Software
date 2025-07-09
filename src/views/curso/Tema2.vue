<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Análisis postmortem'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") El análisis postmortem constituye una evaluación retrospectiva exhaustiva que se realiza una vez finalizado el proyecto de #[i software], con el objetivo de examinar crítica y objetivamente todos los aspectos de su desarrollo. Esta práctica permite identificar, tanto los elementos exitosos que deberían replicarse como los problemas enfrentados que podrían evitarse en iniciativas futuras, proporcionando así una base sólida para el aprendizaje organizacional.
        .bg-color-4.p-4.j1(data-aos="fade-left")
          .row.align-items-start.mb-4
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/37.svg")
            .col-lg
              p.mb-0 El valor principal del análisis postmortem radica en su capacidad para convertir las experiencias vividas durante el proyecto en conocimiento estructurado, aplicable, trascendiendo las percepciones individuales para construir una visión colectiva consensuada.	  
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/38.svg")
            .col-lg
              p.mb-0 Este proceso implica la participación de todos los miembros del equipo, preferentemente, de los interesados claves, fomentando una cultura de transparencia y mejora continua que resulta fundamental para la madurez de las organizaciones dedicadas al desarrollo de #[i software].

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/39.png", data-aos="zoom-in")        

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Evaluación del desempeño del proyecto: ¿se cumplieron los objetivos?

    p(data-aos="fade-down") La evaluación del desempeño del proyecto centrada en el cumplimiento de objetivos constituye un proceso sistemático y riguroso mediante el cual se determina el grado en que se alcanzaron las metas establecidas inicialmente. Esta valoración debe realizarse considerando múltiples dimensiones que incluyen: 

    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .px-4.pb-0.py-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/41.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="2.9%" y="83.6%" numero="+")
                  h5 Alcance 
                  p Funcionalidades entregadas versus planificadas.
                .bg-color-white.box-shadow.p-3(x="2.9%" y="60.8%" numero="+")
                  h5 Calidad 
                  p Cumplimiento de los requisitos no funcionales.
                .bg-color-white.box-shadow.p-3(x="33.4%" y="4.9%" numero="+")
                  h5 Satisfacción de los interesados  
                  p Percepción de valor del producto entregado.
                .bg-color-white.box-shadow.p-3(x="97.2%" y="60.7%" numero="+")
                  h5 Tiempo
                  p Adherencia al cronograma establecido.
                .bg-color-white.box-shadow.p-3(x="97.2%" y="83.5%" numero="+")
                  h5 Costo  
                  p Ajuste al presupuesto asignado.

    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") Boero (2020), enfatiza que esta evaluación debe sustentarse en evidencias objetivas y métricas previamente establecidas, evitando basarse exclusivamente en impresiones subjetivas que podrían distorsionar la realidad del proyecto. El autor propone la utilización de la técnica del valor ganado (EVM) como una herramienta efectiva para cuantificar objetivamente el desempeño del proyecto en términos de alcance, tiempo y costo. Complementariamente, Sarmiento Rojas et al. (2020), sugieren la importancia de evaluar también el cumplimiento de los beneficios esperados del proyecto, considerando aspectos como el retorno de la inversión y los impactos positivos generados para la organización.
        .bg-color-1.p-4.j1(data-aos="fade-left")
          .row.align-items-start.mb-4
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/42.svg")
            .col-lg
              p.mb-0 En un proyecto de desarrollo e implementación de un sistema de gestión documental para una entidad gubernamental, la evaluación del cumplimiento de objetivos podría revelar que, si bien se entregaron todas las funcionalidades críticas acordadas y se mantuvo el presupuesto dentro de los límites establecidos, se produjo un retraso de dos meses respecto al cronograma original debido a cambios regulatorios imprevistos.
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/43.svg")
            .col-lg
              p.mb-0 El análisis de satisfacción podría mostrar que los usuarios finales valoran positivamente la usabilidad del sistema, pero que los directivos esperaban un mayor grado de integración con otras plataformas institucionales.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/44.png", data-aos="zoom-in")                                                                                               

    p(data-aos="fade-down") Para realizar una evaluación efectiva del cumplimiento de objetivos, puede seguirse este procedimiento: 

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/45.png", alt="")     
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Primer paso")
            p Recopilar la documentación inicial que establece los objetivos y alcance del proyecto.
          .div(titulo="Segundo paso")
            p Reunir los datos de desempeño real obtenidos durante la ejecución.
          .div(titulo="Tercer paso")
            p Calcular las desviaciones utilizando métricas cuantitativas como índices de desempeño del cronograma (SPI) y del costo (CPI).
          .div(titulo="Cuarto paso")
            p Analizar las causas fundamentales de las desviaciones identificadas, determinando si fueron producto de factores internos controlables o de circunstancias externas. 

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/46.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") El resultado será un diagnóstico preciso que permitirá establecer si el proyecto puede considerarse exitoso, según los parámetros establecidos inicialmente.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Identificación de problemas técnicos y de gestión

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-3.mb-lg-0 
        p(data-aos="fade-left").mb-4 Para estudiar la temática, lo invitamos a escuchar el siguiente pódcast.
        
        TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
          texto="Identificación de problemas técnicos y de gestión"
          tiempo
          :audio="require('../../assets/curso/podcast/podcast1.mp3')"
        )    
      .col-lg-6.p-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/47.svg", data-aos="zoom-in")    

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Evaluación de la comunicación dentro del equipo de desarrollo
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/48.png", data-aos="zoom-in")     
      .col-lg-8
        p(data-aos="fade-down") La evaluación de la comunicación dentro del equipo de desarrollo constituye un componente crítico del análisis postmortem, dado que la calidad de las interacciones entre los miembros del equipo impacta directamente en la eficiencia del trabajo colaborativo y en los resultados finales del proyecto. Este análisis debe examinar los canales de comunicación utilizados, la frecuencia o efectividad de las reuniones realizadas, la claridad en la transmisión de requisitos, decisiones, la gestión de conflictos, y la comunicación con otros interesados externos al equipo como clientes, usuarios y proveedores.

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/49.svg")
            .col-lg
              p.mb-0 De acuerdo con Gómez Ruedas (2014), la comunicación efectiva en proyectos de #[i software] debe evaluarse, considerando aspectos tanto formales como informales, analizando no solo los mecanismos establecidos oficialmente sino también las redes de comunicación espontáneas que surgen durante el desarrollo. El autor destaca la importancia de identificar barreras comunicacionales como la distancia geográfica, las diferencias culturales o lingüísticas, y las estructuras jerárquicas rígidas que pueden obstaculizar el flujo de información. De Zunzunegui (2023), complementa esta visión enfatizando que, en entornos ágiles, la calidad de la comunicación cara a cara y la transparencia en la visualización del trabajo son factores determinantes para el éxito del proyecto.

    .bg-full-width-2.bg-fondo-3(data-aos="fade-right")
      .px-4.p-md-3
        .row.px-4.mb-5
          .col-lg-8.mb-3.mb-lg-0
            p(data-aos="fade-down") En un proyecto de desarrollo de un sistema de gestión hospitalaria distribuido entre equipos en diferentes países, el análisis de la comunicación podría revelar que las reuniones diarias remotas resultaron efectivas para la coordinación operativa, pero que la falta de sesiones periódicas dedicadas a la arquitectura generó inconsistencias en la implementación de componentes críticos. 

            .bg-color-1.p-4.mb-4(data-aos="fade-left")
              p.mb-0 También podría identificarse que la documentación de requisitos no capturó adecuadamente las necesidades de los especialistas médicos debido a barreras terminológicas entre el lenguaje técnico y el clínico, o que los canales asíncronos como el correo electrónico resultaron ineficientes para resolver dudas urgentes comparados con las herramientas de mensajería instantánea.
            p(data-aos="fade-down") Para realizar una evaluación completa de la comunicación, puede seguirse este enfoque: 
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/50.png", data-aos="zoom-in")   

        div.row.justify-content-center.align-items-stretch.text-center.px-4
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/51.svg" alt="" style="width: 90px")
              h5 Primer paso
              p.mb-0 Analizar los registros de comunicaciones formales como actas de reuniones, correos y documentación compartida.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/52.svg" alt="" style="width: 90px")
              h5 Segundo paso
              p.mb-0 Realizar encuestas anónimas a los miembros del equipo sobre su percepción de la efectividad comunicacional.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/53.svg" alt="" style="width: 90px")
              h5 Tercer paso
              p.mb-0 Identificar incidentes críticos donde problemas de comunicación impactaron negativamente en el proyecto.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.p-3.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/54.svg" alt="" style="width: 90px")
              h5 Cuarto paso
              p.mb-0 Mapear las redes de comunicación reales versus las planificadas para detectar brechas o ineficiencias.
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/55.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") El resultado será un diagnóstico preciso de las fortalezas y debilidades en la comunicación que permitirá implementar mejoras específicas en futuros proyectos.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Lecciones sobre la metodología utilizada
    p(data-aos="fade-down") La evaluación de las metodologías utilizadas en proyectos de #[i software] permite identificar qué prácticas han contribuido al éxito o han limitado los resultados esperados.

    .bg-full-width.bg-color-10.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/56.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Lecciones sobre la metodología utilizada  
            p.mb-4(data-aos="fade-right") En el PDF Lecciones sobre la metodología utilizada, se analizan experiencias reales para reflexionar sobre la pertinencia de enfoques de gestión aplicados, sus fortalezas, limitaciones y posibles mejoras. Este análisis crítico es fundamental para adaptar y perfeccionar los métodos en futuras iniciativas, alineándolos con las necesidades específicas de cada contexto.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Lecciones sobre la metodología utilizada  

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Recomendaciones para futuros proyectos de #[i software]
    p(data-aos="fade-down") Las recomendaciones para futuros proyectos de #[i software] representan la culminación del análisis postmortem, transformando los hallazgos y lecciones identificadas en directrices concretas aplicables que permitirán mejorar el desempeño organizacional. Estas recomendaciones deben ser específicas, accionables y priorizadas, abarcando diferentes dimensiones del proyecto como aspectos técnicos, de gestión, metodológicos, de comunicación y relativos a la gestión del talento humano, estableciendo así una hoja de ruta para la mejora continua. 

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              p De acuerdo con Sarmiento Rojas et al. (2020), las recomendaciones efectivas deben formularse considerando el contexto organizacional y sus limitaciones reales, evitando propuestas idealizadas que difícilmente podrán implementarse. Los autores sugieren vincular cada recomendación con problemas concretos identificados, estableciendo claramente el beneficio esperado de su implementación.   
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/57.png")

          .row.align-items-center.p-4.p-md-5
            .col-lg-7
              p Complementariamente, Boero (2020), enfatiza la importancia de asignar responsables para el seguimiento de las recomendaciones principales y establecer mecanismos para evaluar su efectividad en proyectos subsiguientes, garantizando así que el conocimiento generado se traduzca en acciones concretas. 
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/58.png")

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/59.png", data-aos="zoom-in")           
      .col-lg-8
        p(data-aos="fade-down") En un proyecto de desarrollo de una plataforma educativa virtual, las recomendaciones podrían incluir: establecer un proceso formal de validación de requisitos con prototipos funcionales para mejorar la comprensión de las necesidades de los docentes; implementar pruebas automatizadas de rendimiento desde etapas tempranas para identificar potenciales cuellos de botella antes de la etapa de integración; adoptar una estrategia de DevOps con despliegues continuos para reducir los problemas de integración; implementar sesiones quincenales de revisión arquitectónica para mantener la coherencia técnica; y establecer un programa de mentoría para desarrolladores junior que reduzca la dependencia de recursos claves. 

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          p.mb-0 También podría identificarse que la documentación de requisitos no capturó adecuadamente las necesidades de los especialistas médicos debido a barreras terminológicas entre el lenguaje técnico y el clínico, o que los canales asíncronos como el correo electrónico resultaron ineficientes para resolver dudas urgentes comparados con las herramientas de mensajería instantánea.
        p(data-aos="fade-down") Para formular recomendaciones verdaderamente útiles, puede seguirse este enfoque: 

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/60.png", alt="")     
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Primer paso")
            p Consolidar todos los hallazgos del análisis postmortem identificando patrones y relaciones entre ellos.
          .div(titulo="Segundo paso")
            p Formular recomendaciones específicas para cada problema significativo, asegurando que sean realizables en el contexto organizacional.
          .div(titulo="Tercer paso")
            p Validar las recomendaciones con los miembros del equipo y otros expertos relevantes para evaluar su viabilidad.
          .div(titulo="Cuarto paso")
            p Priorizar las recomendaciones, según su impacto potencial y factibilidad de implementación, distinguiendo entre acciones inmediatas o mejoras a largo plazo.

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/61.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") El resultado será un catálogo priorizado de recomendaciones que, implementadas sistemáticamente, contribuirán significativamente a la madurez de la organización en la gestión de proyectos de #[i software].

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://keepcoding.io/blog/que-es-el-post-mortem-en-software/KeepCoding Bootcamps" target="_blank" rel="noopener noreferrer") Mallón, X. (2024). ¿Qué es el Post Mortem en el software?. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.domestika.org/es/blog/3941-analisis-post-mortem-de-proyectos-que-es-y-como-hacerlo" target="_blank" rel="noopener noreferrer") Martínez L. (2023). Análisis post mortem de proyectos: ¿qué es y cómo hacerlo?.             

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.obsbusiness.school/blog/herramientas-utiles-para-el-project-management-el-post-mortem" target="_blank" rel="noopener noreferrer") OBS Business School. (2021). Herramientas útiles para el Project Management: el Post mortem. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://openwebinars.net/blog/que-es-y-como-se-hace-un-post-mortem/" target="_blank" rel="noopener noreferrer") OpenWebinars. (2021). Qué es y cómo se hace un Post Mortem. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/BOFizaAFB0k" target="_blank" rel="noopener noreferrer") Software Guru. (2016). Valor ganado en un proyecto de desarrollo de software [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/0R9WFMBXWuA" target="_blank" rel="noopener noreferrer") MOOCUnican. (2021). Técnicas de Creatividad: Módulo 4 - Los cinco porqués de Toyota [video] .
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/aMfILV0oICs" target="_blank" rel="noopener noreferrer") Placencia, M. (2023). COMUNICACIÓN EFECTIVA - Como LOGRAR TENER MEJOR Comunicación para el éxito - Episodio #50 [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/cOWEnpuOv6E" target="_blank" rel="noopener noreferrer") InfoTecno: Informática Tecnología. (2024). Gestión de Proyectos de Software - Ingeniería de Software [video].                                         

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
