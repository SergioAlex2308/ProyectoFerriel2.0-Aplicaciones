<template>
  <div id="scene-container" ref="sceneContainer">
    <transition name="fade">
      <Carga class="loadPage" v-show="!loaded"></Carga>
    </transition>
    <div v-show="!onViewFP" class="IconsDarkMode">
      <img src="../assets/Icons/Icons-Sun.png" alt="Sol" />
      <Toggle :mode="mode" @toggle="$emit('toggle')" />
      <img src="../assets/Icons/Icons-Moon.png" alt="Luna" />
    </div>
    <!-- <AeControls :View="onViewFP"></AeControls> -->
    <!-- <FpControls :ViewFp="onViewFP"></FpControls> -->

    <div v-show="!onViewFP" id="header">
      <div id="menuIcon" @click="ShowInfo()">
        <div class="hamburIcon">
          <div class="lineIcon"></div>
          <div class="lineIcon"></div>
          <div class="lineIcon"></div>
        </div>
      </div>
      <div id="menuHelp" @click="HelpMenu()">
        <img
          class="iconHelp"
          src="../assets/Icons/Icons-Help.png"
          alt="IconoAyuda"
        />
      </div>
      <div id="ModalHelp" class="ModalControls">
        <div class="contentHelp">
          <div class="headerModal">
            <div class="buttons">
              <div id="ZoomMenos" @click="ZoomMenos()" class="boton">
                <img
                  src="../assets/Icons/Icons-ZoomOut.png"
                  alt="Lupa disminucion"
                  class="Lens"
                />
              </div>
              <div id="ZoomMas" @click="ZoomMas()" class="boton">
                <img
                  src="../assets/Icons/Icons-ZoomIn.png"
                  alt="Lupa aumento"
                  class="Lens"
                />
              </div>
            </div>
            <span class="close">&times;</span>
          </div>
          <div class="contentModal">
            <div class="titleHelp">
              <h2 id="zoomtexto16" class="NameMenu">Ayuda</h2>
            </div>
            <div class="textHelp">
              <p id="zoomtexto17">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                qui commodi neque sequi hic, asperiores, mollitia placeat
                quisquam expedita pariatur impedit omnis. Quod consequatur
                repellendus illum quaerat enim molestiae sint?
              </p>
            </div>
            <h3 class="titleControls" id="zoomtexto18">
              Controles en la vista aérea
            </h3>
            <div class="PictureControls">
              <div class="InstControls">
                <div class="invert">
                  <img src="../assets/Icons/Icons-Clic.png" alt="Icono Mouse" />
                </div>
                <p id="zoomtexto19">
                  Haz clic izquierdo y arrastra para mover la vista.
                </p>
              </div>
            </div>
            <h3 class="titleControls" id="zoomtexto20">
              Controles en la vista de primera persona
            </h3>
            <div class="PictureControls">
              <div class="InstControls">
                <div class="invert">
                  <img
                    src="../assets/Icons/Icons-Keys.png"
                    alt="Teclas de movimiento"
                  />
                </div>
                <p id="zoomtexto21">
                  Con las teclas A, W, S y D, te podras desplazar a través de
                  entorno.
                </p>
              </div>
              <div class="InstControls">
                <div class="invert">
                  <img
                    class="MouseClic"
                    src="../assets/Icons/Icons-Clic.png"
                    alt="Icono Mouse"
                  />
                </div>
                <p id="zoomtexto22">
                  Haz clic derecho para poder mover la cámara y mirar a tu
                  alrededor.
                </p>
              </div>
              <div class="InstControls">
                <div class="invert">
                  <img
                    src="../assets/Icons/Icons-Escape.png"
                    alt="Icono tecla escape"
                  />
                </div>
                <p class="textControls" id="zoomtexto23">
                  Cuando tenga el cursor bloqueado dale a la tecla de Escape
                  para liberarlo.
                </p>
              </div>
              <div class="InstControls">
                <div class="invert">
                  <img
                    src="../assets/Icons/Icons-Space.png"
                    alt="Icono tecla espacio"
                  />
                </div>
                <p id="zoomtexto24">
                  Para moverte mas rápido por el entorno puedes saltar y tomar
                  velocidad.
                </p>
              </div>
            </div>
          </div>
          <div class="footerModal">
            <div class="audios">
              <audio controls muted>
                <source
                  src="../assets/audios/sonidotren.mp3"
                  type="audio/mpeg"
                />
                <source src="horse.ogv" type="audio/ogg" />
              </audio>
            </div>
          </div>
        </div>
      </div>
      <div id="MenuInfo">
        <Informacion />
      </div>
      <div id="TeamInfo">
        <div class="contentMenu darkmode">
          <div class="headerModal">
            <div class="buttons">
              <!-- <div id="ZoomMenos" @click="ZoomMenos()" class="boton">
                <img
                  src="../assets/Icons/Icons-ZoomOut.png"
                  alt="Lupa disminucion"
                  class="Lens"
                />
              </div>
              <div id="ZoomMas" @click="ZoomMas()" class="boton">
                <img
                  src="../assets/Icons/Icons-ZoomIn.png"
                  alt="Lupa aumento"
                  class="Lens"
                />
              </div> -->
            </div>
            <span class="closeTeam">&times;</span>
          </div>
          <div class="contentModal">
            <div class="titleTeam">
              <h1 id="zoomtexto6">Equipo Ferriel Web</h1>
            </div>
            <div class="teamMember">
              <div class="pictureTeam">
                <img
                  class="Member"
                  src="../assets/Images/SergioMartinez.jpg"
                  width="100px"
                  alt="IconUser"
                />
              </div>
              <div class="infoMember">
                <div class="nameMember">
                  <h2 id="zoomtexto7">Jhon Sebastian Martínez Orjuela</h2>
                </div>
                <div class="rolMember">
                  <h6 id="zoomtexto8">
                    Gerente de producto y desarrollador 3D
                  </h6>
                </div>
              </div>
            </div>
            <div class="teamMember">
              <div class="pictureTeam">
                <img
                  class="Member"
                  src="../assets/Images/SergioMartinez.jpg"
                  width="100px"
                  alt="IconUser"
                />
              </div>
              <div class="infoMember">
                <div class="nameMember">
                  <h2 id="zoomtexto9">Sergio Alexander Martínez Cardenas</h2>
                </div>
                <div class="rolMember">
                  <h6 id="zoomtexto10">Desarrollador BackEnd y FrontEnd</h6>
                </div>
              </div>
            </div>
            <div class="teamMember">
              <div class="pictureTeam">
                <img
                  class="Member"
                  src="../assets/Icons/Icons-User.png"
                  width="100px"
                  alt="IconUser"
                />
              </div>
              <div class="infoMember">
                <div class="nameMember">
                  <h2 id="zoomtexto11">David Ernesto Arguello Mosquera</h2>
                </div>
                <div class="rolMember">
                  <h6 id="zoomtexto12">Desarrollador 3D</h6>
                </div>
              </div>
            </div>
            <div class="teamMember">
              <div class="pictureTeam">
                <img
                  class="Member"
                  src="../assets/Icons/Icons-User.png"
                  width="100px"
                  alt="IconUser"
                />
              </div>
              <div class="infoMember">
                <div class="nameMember">
                  <h2 id="zoomtexto13">Guillermo Andres Diaz Moreno</h2>
                </div>
                <div class="rolMember">
                  <h6 id="zoomtexto14">Accesibilidad</h6>
                </div>
              </div>
            </div>
            <div class="universidad">
              <div id="zoomtexto5">
                <h3 id="zoomtexto15">
                  Universidad Militar Nueva Granada<br />
                  2022
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="btn-back">
      <button v-if="Fp" @click="mainView()" class="buttonView">
        Volver a la vista aérea
      </button>
    </div>
    <transition name="fade">
      <div v-show="!onViewFP" id="content">
        <div
          v-show="Fp == false"
          @click="FPEstacion1()"
          class="point MapView-1"
        >
          <div class="label">Estación de Zipaquirá</div>
          <div class="nom-estacion">Haz click para visitar la estación.</div>
        </div>
        <div
          v-show="Fp == false"
          @click="FPEstacion2()"
          class="point MapView-2"
        >
          <div class="label">Estación de Usaquén</div>
          <div class="nom-estacion">Haz click para visitar la estación.</div>
        </div>
        <div
          v-show="Fp == false"
          @click="FPEstacion3()"
          class="point MapView-3"
        >
          <div class="label">Estación de Cajicá</div>
          <div class="nom-estacion">Haz click para visitar la estación.</div>
        </div>
        <div
          v-show="Fp == false"
          @click="FPEstacion4()"
          class="point MapView-4"
        >
          <div class="label">Estación La Caro</div>
          <div class="nom-estacion">Haz click para visitar la estación.</div>
        </div>
      </div>
    </transition>
    <div id="contentObjs">
      <div class="pointer">
        <div v-show="onViewFP" id="cross"></div>
      </div>

      <!-- Info Obcject -->
      <!-- Máquina de escribir -->
      <div v-show="onViewFP" id="Modal-1" class="ModalObjects">
        <div class="contentObj">
          <div class="contentModal">
            <div class="imageObject">
              <img
                class="PictureHorizontal"
                src="../assets/Images/MaquinaRoyal.jpg"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleObj">
              <h1 class="NameObject">Máquina de escribir</h1>
            </div>
            <div class="historyObjtext">
              <p>
                Las máquinas de escribir se utilizaban en gran medida en las
                estaciones para evitar la documentación a mano y mantener un
                registro constante de los pasajeros y productos que circulaban
                por cada estación.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Télegrafo -->
      <div v-show="onViewFP" id="Modal-2" class="ModalObjects">
        <div class="contentObj">
          <div class="contentModal">
            <div class="imageObject">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Telegrafo.jpg"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleObj">
              <h1 class="NameObject">Télegrafo</h1>
            </div>
            <div class="historyObjtext">
              <p>
                Utilizado para mantener la comunicación a larga distancia entre
                estaciones y otras empresas relacionadas con la vía ferrovial,
                remplazado años más tarde por el teléfono.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Perforador -->
      <div v-show="onViewFP" id="Modal-3" class="ModalObjects">
        <div class="contentObj">
          <div class="contentModal">
            <div class="imageObject">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Perforador.jpg"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleObj">
              <h1 class="NameObject">Perforador de papel</h1>
            </div>
            <div class="historyObjtext">
              <p>
                Utilizado por los encargados de los pasajeros en los trenes para
                poder confirmar si un boleto fue utilizado previamente o no.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Vagoneta -->
      <div v-show="onViewFP" id="Modal-4" class="ModalObjects">
        <div class="contentObj">
          <div class="contentModal">
            <div class="imageObject">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Vagoneta.png"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleObj">
              <h1 class="NameObject">Vagoneta</h1>
            </div>
            <div class="historyObjtext">
              <p>
                Es un vagón pequeño que sirve para el transporte de mercancías,
                principalmente minerales, piedra, arena o materiales de
                construcción. También se usaba para transportar pequeños grupos
                de personas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Telefono -->
      <div v-show="onViewFP" id="Modal-5" class="ModalObjects">
        <div class="contentObj">
          <div class="contentModal">
            <div class="imageObject">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Telefono.png"
                alt="Fotografia Objeto"
              />
            </div>
            <div class="titleObj">
              <h1 class="NameObject">Télefono de campaña</h1>
            </div>
            <div class="historyObjtext">
              <p>
                Son teléfonos portátiles de uso militar, diseñados para soportar
                condiciones adversas.
                <br />
                Pueden alimentarse de su propia batería, desde una central
                telefónica o de una fuente de energía externa, estos eran
                utilizados por los operarios en las estaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Info Station -->
      <!-- Zipaquirá -->
      <div v-show="onViewFP" id="Modal-6" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Zipaquira01.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Zipaquirá</h1>
            </div>
            <div class="historyStation">
              <p>
                En 1926 mientras el General Pedro Nel Ospina era presidente de
                la República, comenzó la construcción con un estilo neoclásico
                francés de la edificación conocida como la estación Tres
                Esquinas, parte del trayecto hacia el norte del Ferrocarril de
                la Sabana.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-7" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Zipaquira02.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Texto Información</h1>
            </div>
            <div class="historyStation">
              <p>
                El 8 de diciembre de 1927, fue inaugurada la estación con la
                presencia de varios funcionarios del Gobierno, con bombos y
                platillos, pues marcaba el punto de partida para el progreso de
                la ciudad.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Usaquén -->
      <div v-show="onViewFP" id="Modal-8" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Usaquen01.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Usaquén</h1>
            </div>
            <div class="historyStation">
              <p>
                La estación del tren de Usaquén fue, con la estación de La
                Sabana, los principales centros de recepción de la Bogotá de
                antaño, cuando esta no tenía vías y el norte eran potreros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-9" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Usaquen02.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Usaquén</h1>
            </div>
            <div class="historyStation">
              <p>
                El ferrocarril del nordeste llegó a la estación de Usaquén hacia
                1926 con el fin de comunicar los departamentos de Cundinamarca y
                Boyacá.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-10" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Usaquen03.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Usaquén</h1>
            </div>
            <div class="historyStation">
              <p>
                El proyecto del tren de la Sabana, terminado en 1953, tuvo en
                Bogotá estaciones principales como la de Chapinero, Calle 100,
                Fontibón, Bosa, entre otras, que a la postre determinaron la
                dirección en la que la capital se desarrolló.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-11" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Usaquen04.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Usaquén</h1>
            </div>
            <div class="historyStation">
              <p>
                Las únicas estaciones “sobrevivientes” son Usaquén y Sabana, las
                cuales son patrimonio histórico de cómo la ciudad olvidó este
                sistema vial para enfocarse en la construcción de vías y la
                implementación de los buses urbanos, que eran la moda en los
                años 50.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Chía -->
      <div v-show="onViewFP" id="Modal-12" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Chia01.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación La Caro</h1>
            </div>
            <div class="historyStation">
              <p>
                La estación de La Caro fue una de las últimas líneas construidas
                en el año 1953. Se ubica en el municipio de Chía, a 33 KM de la
                ciudad de Bogotá, Cerca de una de las obras más importantes de
                la época colonial y que a la fecha sigue siendo un referente
                histórico y turístico, como lo es el Puente del Común y a 4.5 KM
                del Instituto Caro y Cuervo que es un centro colombiano de altos
                estudios en literatura, filología y lingüística del idioma
                castellano y las lenguas nativas del país, orientado a la
                investigación y a la divulgación de la cultura del libro y la
                lectura.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-13" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Chia02.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación La Caro</h1>
            </div>
            <div class="historyStation">
              <p>
                Su arquitectura es de estilo republicano, llamada así en memoria
                de Miguel Antonio Caro, político y escritor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-14" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Chia03.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación La Caro</h1>
            </div>
            <div class="historyStation">
              <p>
                El Ferrocarril de la Sabana sirvió como base para la expansión
                de las vías férreas hacia el resto del país las cuales
                posteriormente se unieron bajo la administración de los
                Ferrocarriles Nacionales de Colombia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Cajicá -->
      <div v-show="onViewFP" id="Modal-15" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Cajica01.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Cajicá</h1>
            </div>
            <div class="historyStation">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                neque, sint quas a sunt velit non consectetur debitis laboriosam
                voluptate! Nulla, nisi odit? Delectus eveniet nisi maiores
                recusandae alias numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-16" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureVertical"
                src="../assets/Images/Cajica02.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Cajicá</h1>
            </div>
            <div class="historyStation">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                neque, sint quas a sunt velit non consectetur debitis laboriosam
                voluptate! Nulla, nisi odit? Delectus eveniet nisi maiores
                recusandae alias numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-17" class="ModalStation">
        <div class="contentSta">
          <div class="contentModal">
            <div class="imageStation">
              <img
                class="PictureHorizontal"
                src="../assets/Images/Cajica03.jpg"
                alt="Fotografia"
              />
            </div>
            <div class="titleSta">
              <h1 class="NameStation">Estación de Cajicá</h1>
            </div>
            <div class="historyStation">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                neque, sint quas a sunt velit non consectetur debitis laboriosam
                voluptate! Nulla, nisi odit? Delectus eveniet nisi maiores
                recusandae alias numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Photo Station -->
      <!-- Zipaquirá -->
      <div v-show="onViewFP" id="Modal-18" class="ModalStation">
        <div class="contentSta">
          <div class="imageOwn">
            <img
              class="PictureSquare"
              src="../assets/Images/Zipaquira03.jpg"
              alt="Fotografia"
            />
          </div>
          <div class="historyStation">
            <p>Fotografía tomada el 20 de Marzo del 2022.</p>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-19" class="ModalStation">
        <div class="contentSta">
          <div class="imageOwn">
            <img
              class="PictureVertical"
              src="../assets/Images/Zipaquira04.jpg"
              alt="Fotografia"
            />
          </div>
          <div class="historyStation">
            <p>Fotografía tomada el 20 de Marzo del 2022.</p>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-20" class="ModalStation">
        <div class="contentSta">
          <div class="imageOwn">
            <img
              class="PictureVertical"
              src="../assets/Images/Zipaquira05.jpg"
              alt="Fotografia"
            />
          </div>
          <div class="historyStation">
            <p>Fotografía tomada el 20 de Marzo del 2022.</p>
          </div>
        </div>
      </div>
      <!-- Chía -->
      <div v-show="onViewFP" id="Modal-21" class="ModalStation">
        <div class="contentSta">
          <div class="imageOwn">
            <img
              class="PictureHorizontal"
              src="../assets/Images/Chia04.jpg"
              alt="Fotografia"
            />
          </div>
          <div class="historyStation">
            <p>Fotografía tomada el 20 de Marzo del 2022.</p>
          </div>
        </div>
      </div>
      <div v-show="onViewFP" id="Modal-22" class="ModalStation">
        <div class="contentSta">
          <div class="imageOwn">
            <img
              class="PictureHorizontal"
              src="../assets/Images/Chia05.jpg"
              alt="Fotografia"
            />
          </div>
          <div class="historyStation">
            <p>Fotografía tomada el 20 de Marzo del 2022.</p>
          </div>
        </div>
      </div>
      <!-- Cajicá -->
      <div v-show="onViewFP" id="Modal-23" class="ModalStation">
        <div class="contentSta">
          <div class="imageOwn">
            <img
              class="PictureHorizontal"
              src="../assets/Images/Cajica04.jpg"
              alt="Fotografia"
            />
          </div>
          <div class="historyStation">
            <p>Fotografía tomada el 20 de Marzo del 2022.</p>
          </div>
        </div>
      </div>
      <!-- Usaquén -->
      <div v-show="onViewFP" id="Modal-24" class="ModalStation">
        <div class="contentSta">
          <div class="imageOwn">
            <img
              class="PictureHorizontal"
              src="../assets/Images/Usaquen05.jpg"
              alt="Fotografia"
            />
          </div>
          <div class="historyStation">
            <p>Fotografía tomada el 20 de Marzo del 2022.</p>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div v-show="!onViewFP" id="footer01">
        <div class="instView">
          <img
            class="Mouse"
            src="../assets/Icons/Icons-Clic.png"
            alt="Icono Mouse"
          />
          <p>Haz click y arrastra el ratón para mover la vista</p>
        </div>
      </div>
    </transition>
    <div id="keyLock">
      <div id="lockCursor" class="instEsc">
        <img
          class="Escape"
          src="../assets/Icons/Icons-Escape.png"
          alt="Icono tecla escape"
        />
        <p>Presiona la tecla Escape para liberar el cursor.</p>
      </div>
    </div>
    <transition name="fade">
      <div v-show="onViewFP" id="footer02">
        <div class="instMove">
          <img
            class="Keys"
            src="../assets/Icons/Icons-Keys.png"
            alt="Teclas de movimiento"
          />
          <p>Presiona las teclas para desplazarte.</p>
        </div>
        <div class="instMoveCamera">
          <img
            class="Mouse MouseClic"
            src="../assets/Icons/Icons-Clic.png"
            alt="Icono Mouse"
          />
          <p>
            Oprime click derecho
            <br />
            para mirar a tu alrededor.
          </p>
        </div>
        <div class="instJump">
          <img
            class="Mouse"
            src="../assets/Icons/Icons-Space.png"
            alt="Icono Espace"
          />
          <p>
            Oprime o mantén la tecla Espacio
            <br />
            para saltar y moverte mas rápido.
          </p>
        </div>
      </div>
    </transition>

    <div v-show="!onViewFP" id="footer03">
      <div id="menuTeam" @click="ShowTeam()">
        <!-- <span class="tooltiptext">Equipo Ferriel</span> -->
        <img
          class="iconTeam"
          src="../assets/Icons/Icons-Team.png"
          alt="IconoEquipo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Stats from "stats.js";
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import { Octree } from "three/examples/jsm/math/Octree";
import { Capsule } from "three/examples/jsm/math/Capsule";

//import { OctreeHelper } from "three/examples/jsm/helpers/OctreeHelper";
//import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import Toggle from "./Toggle.vue";
import Informacion from "./InfoBoton.vue";
import Carga from "./EsperaUsuarios.vue";
//import AeControls from "./AerialControls.vue";
//import FpControls from "./FirstControls.vue";

export default {
  name: "MapaEstaciones",
  components: {
    Informacion,
    Carga,
    Toggle,
    //AeControls,
    //FpControls,
  },
  props: ["mode"],
  watch: {
    mode(modeApp) {
      //console.log("Modo paso %s a %s", anterior, nuevo);
      if (modeApp === "light") {
        this.scene.background = new THREE.Color(this.bgColorLight);

        this.MainLight01.color = new THREE.Color(this.MainColorLight);
        this.MainLight02.color = new THREE.Color(this.MainColorLight);
        this.MainLight03.color = new THREE.Color(this.MainColorLight);
        this.MainLight04.color = new THREE.Color(this.MainColorLight);

        this.MainLight01.intensity = this.LightIntensity;
        this.MainLight02.intensity = this.LightIntensity;
        this.MainLight03.intensity = this.LightIntensity;
        this.MainLight04.intensity = this.LightIntensity;

      } else {
        this.scene.background = new THREE.Color(this.bgColorDark);

        this.MainLight01.color = new THREE.Color(this.MainColorDark);
        this.MainLight02.color = new THREE.Color(this.MainColorDark);
        this.MainLight03.color = new THREE.Color(this.MainColorDark);
        this.MainLight04.color = new THREE.Color(this.MainColorDark);

        this.MainLight01.intensity = this.DarkIntensity;
        this.MainLight02.intensity = this.DarkIntensity;
        this.MainLight03.intensity = this.DarkIntensity;
        this.MainLight04.intensity = this.DarkIntensity;
      }
    },
  },
  data() {
    return {
      loaded: false, //Carga
      load01: false, //Cajicá load
      load02: false, //Zipaquirá load
      load03: false, //Parque load
      load04: false, //Puentes load
      load05: false, //Cajicá Letrero load
      load06: false, //Zipaquirá Letrero load
      load07: false, //Usaquen load
      load08: false, // UsaquenLetrero load
      load09: false, //Chia load
      load10: false, //ChiaLetrero load
      load11: false, //CajicaColisiones load
      load12: false, //ZipaquiraColisiones load
      load13: false, //PuentesColisiones load
      load14: false, //ParqueColisiones load
      load15: false, //UsaquenColisiones load
      load16: false, //ChiaColisiones load
      load17: false, //Vagoneta load
      load18: false, //Maquina escribir load
      load19: false, //Perforador load
      esperatime: true,
      mostrar: false,
      container: null,
      scene: null,
      camera: null,
      cameraFp: null,
      controls: null,
      renderer: null,
      stats: null,
      raycaster: null,
      raycaster2: null,
      MainTarget: null,
      MainPosition: null,
      MainRotation: null,
      MainLight01: null, //LightsStations
      MainLight02: null,
      MainLight03: null,
      MainLight04: null,
      LightIntensity: null,
      MainColorLight: null, 
      MainColorDark: null,
      DarkIntensity: null,
      ZipaLight: null,
      UsaLight: null,
      CaroLight: null,
      CajiLight: null,
      bgColorLight: null,
      bgColorDark: null,
      points: [], //PuntosEstaciones
      point: null,
      Fp: false,
      pointsObjects: [], //PuntosObjetos
      pointObject: null,
      modalObj: null,
      groupIndicator: null,
      Indicator: 24,
      intersects: null,
      pointer: new THREE.Vector2(),
      INTERSECTED: null,
      pControls: null, //FirstPerson
      onViewFP: false,
      onStation: false,
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      prevTime: performance.now(),
      velocity: new THREE.Vector3(),
      direction: new THREE.Vector3(),
      worldOctree: new Octree(), //Collition
      playerCollider: new Capsule(
        new THREE.Vector3(0, 0.35, 0),
        new THREE.Vector3(0, 1, 0),
        0.35
      ),
      playerVelocity: new THREE.Vector3(),
      playerDirection: new THREE.Vector3(),
      mouseTime: 0,
      keyStates: {},
      deltaTime: null,
      STEPS: 5,
      vector1: new THREE.Vector3(),
      vector2: new THREE.Vector3(),
      vector3: new THREE.Vector3(),
      clock: new THREE.Clock(),
      GRAVITY: 30,
      mixer: null, //Animations
    };
  },
  methods: {
    init() {
      // set container
      this.container = this.$refs.sceneContainer;

      // add stats
      this.stats = new Stats();
      this.container.appendChild(this.stats.dom);

      // add camera
      const fov = 80; // Field of view
      const aspect = this.container.clientWidth / this.container.clientHeight;
      const near = 0.1; // the near clipping plane
      var far = 150; // the far clipping plane
      this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      this.camera.position.x = 40;
      this.camera.position.y = 40;
      this.camera.position.z = 0;

      // add camera first person
      const fovFp = 80;
      var farFp = 40;
      this.cameraFp = new THREE.PerspectiveCamera(fovFp, aspect, near, farFp);

      this.MainPosition = new THREE.Vector3();
      this.MainPosition.copy(this.camera.position);

      this.MainRotation = new THREE.Vector3();
      this.MainRotation.copy(this.camera.rotation);

      this.camera.rotation.order = "YXZ";
      this.cameraFp.rotation.order = "YXZ";

      // create scene -- Light Mode Default
      const nearFog = 60;
      const farFog = 90;
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#6dd2dc");
      this.scene.fog = new THREE.Fog(0x4eacce, nearFog, farFog);

      //Add lights
      this.initLights();

      //Load Model
      const loader01 = new GLTFLoader().setPath("/Models/");
      const loader02 = new GLTFLoader().setPath("/Models/");
      const loader03 = new GLTFLoader().setPath("/Models/");
      const loader04 = new GLTFLoader().setPath("/Models/");
      const loader05 = new GLTFLoader().setPath("/Models/");
      const loader06 = new GLTFLoader().setPath("/Models/");
      const loader07 = new GLTFLoader().setPath("/Models/");
      const loader08 = new GLTFLoader().setPath("/Models/");
      const loader09 = new GLTFLoader().setPath("/Models/");
      const loader10 = new GLTFLoader().setPath("/Models/");
      const loader11 = new GLTFLoader().setPath("/Models/");
      const loader12 = new GLTFLoader().setPath("/Models/");
      const loader13 = new GLTFLoader().setPath("/Models/");
      const loader14 = new GLTFLoader().setPath("/Models/");
      const loader15 = new GLTFLoader().setPath("/Models/");
      const loader16 = new GLTFLoader().setPath("/Models/");
      const loader17 = new GLTFLoader().setPath("/Models/");
      const loader18 = new GLTFLoader().setPath("/Models/");
      const loader19 = new GLTFLoader().setPath("/Models/");

      //Models
      loader01.load(
        "Cajica01.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

          /* gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          }); */

          if (this.mesh) {
            this.load01 = true;
          }
        },
        undefined,
        undefined
      );
      loader02.load(
        "Zipaquira01.glb",
        (gltf) => {
          this.mesh = gltf;

         /*  gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          });
 */
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load02 = true;
          }
          //this.worldOctree.fromGraphNode(gltf.scene);
          //this.animate();
          /* this.Model1 = new THREE.Object3D();
          this.Model1.add(this.mesh.scene);
          this.scene.add(this.Model1); */
        },
        undefined,
        undefined
      );
      loader03.load(
        "Parque.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

         /*  gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          }); */

          if (this.mesh) {
            this.load03 = true;
          }
        },
        undefined,
        undefined
      );
      loader04.load(
        "Puentes.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

          /* gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          }); */

          if (this.mesh) {
            this.load04 = true;
          }
        },
        undefined,
        undefined
      );
      loader05.load(
        "CajicaLetrero.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

          /* gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          }); */

          if (this.mesh) {
            this.load05 = true;
          }
        },
        undefined,
        undefined
      );
      loader06.load(
        "ZipaquiraLetrero.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

          /* gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          });
 */
          if (this.mesh) {
            this.load06 = true;
          }
        },
        undefined,
        undefined
      );
      loader07.load(
        "Usaquen01.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

         /*  gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          }); */

          if (this.mesh) {
            this.load07 = true;
          }
        },
        undefined,
        undefined
      );
      loader08.load(
        "UsaquenLetrero.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

          /* gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          }); */

          if (this.mesh) {
            this.load08 = true;
          }
        },
        undefined,
        undefined
      );
      loader09.load(
        "Chia01.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

          /* gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          });
 */
          if (this.mesh) {
            this.load09 = true;
          }
        },
        undefined,
        undefined
      );
      loader10.load(
        "ChiaLetrero.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

         /*  gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          }); */

          if (this.mesh) {
            this.load10 = true;
          }
        },
        undefined,
        undefined
      );
      //Collitions
      loader11.load(
        "CajicaColisiones.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load11 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader12.load(
        "ZipaquiraColisiones.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load12 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader13.load(
        "PuentesColisiones.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load13 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader14.load(
        "ParqueColisiones.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load14 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader15.load(
        "UsaquenColisiones.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load15 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader16.load(
        "ChiaColisiones.glb",
        (gltf) => {
          this.mesh = gltf;
          this.mesh.castShadow = true;
          this.mesh.receiveShadow = true;
          this.scene.add(gltf.scene);
          if (this.mesh) {
            this.load16 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      //Objects
      loader17.load(
        "Obj1-Vagoneta.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

          /* gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          }); */

          if (this.mesh) {
            this.load17 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader18.load(
        "Obj2-MaquinaEscribir.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

          /* gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          }); */

          if (this.mesh) {
            this.load18 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );
      loader19.load(
        "Obj3-Perforadora.glb",
        (gltf) => {
          this.mesh = gltf;
          this.scene.add(gltf.scene);

          /* gltf.scene.receiveShadow = true;
          gltf.scene.castShadow = true;
          this.mesh.scene.traverse((object) => {
            if (object.isMesh) object.castShadow = true;
          });
          this.mesh.scene.traverse((node) => {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
          }); */

          if (this.mesh) {
            this.load19 = true;
          }
          this.worldOctree.fromGraphNode(gltf.scene);
        },
        undefined,
        undefined
      );

      this.pointObjs();

      // create renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.shadowMap.enabled = true;
      this.container.appendChild(this.renderer.domElement);

      // add Orbitcontrols
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      // add pointerControl
      this.pControls = new PointerLockControls(
        this.cameraFp,
        this.renderer.domElement
      );

      if (!this.onViewFP) {
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 1;
        this.controls.rotateSpeed = 0.3;
        this.controls.enableZoom = false;
        this.controls.enablePan = false;
        this.controls.maxPolarAngle = Math.PI / 3;
        this.controls.minPolarAngle = Math.PI / 6;
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.1;
        this.controls.screenSpacePanning = false;
        this.MainTarget = new THREE.Vector3(0, 0, 0);
        this.controls.target.copy(this.MainTarget);
        //controls.minAzimuthAngle = Math.PI/4;
        //controls.maxAzimuthAngle = Math.PI/4;
      }
      //Point Stations
      this.raycaster = new THREE.Raycaster();
      this.raycaster2 = new THREE.Raycaster();
      this.points = [
        {
          //Zipaquirá
          position: new THREE.Vector3(-50, 6, 0),
          element: document.querySelector(".MapView-1"),
        },
        {
          //Usaquén
          position: new THREE.Vector3(0, 6, -50),
          element: document.querySelector(".MapView-2"),
        },
        {
          //Cajicá
          position: new THREE.Vector3(50, 5, 0),
          element: document.querySelector(".MapView-3"),
        },
        {
          //Chía
          position: new THREE.Vector3(0, 5, 45),
          element: document.querySelector(".MapView-4"),
        },
      ];
      window.addEventListener("resize", this.onWindowResize);
    },
    initLights() {
      this.MainColorLight = 0xffffff;
      this.LightIntensity = 0.5;
      this.bgColorLight = 0x6dd2dc;

      this.MainColorDark = 0x3388cc;
      this.DarkIntensity = 0.1;
      this.bgColorDark = 0x3388cc;
      //Main Light Scene
      this.MainLight01 = new THREE.DirectionalLight(this.MainColorLight, this.LightIntensity);
      this.MainLight02 = new THREE.DirectionalLight(this.MainColorLight, this.LightIntensity);
      this.MainLight03 = new THREE.DirectionalLight(this.MainColorLight, this.LightIntensity);
      this.MainLight04 = new THREE.DirectionalLight(this.MainColorLight, this.LightIntensity);

      this.MainLight01.position.set(30, 30, 0);
      this.MainLight02.position.set(-30, 30, 0);
      this.MainLight03.position.set(0, 30, 30);
      this.MainLight04.position.set(30, 30, -30);

      //this.MainLight.position.multiplyScalar(30);
      this.scene.add(this.MainLight01);
      this.scene.add(this.MainLight02);
      this.scene.add(this.MainLight03);
      this.scene.add(this.MainLight04);

      /* this.MainLight01.castShadow = true;
      this.MainLight02.castShadow = true;
      this.MainLight03.castShadow = true;
      this.MainLight04.castShadow = true;

      this.MainLight01.shadow.mapSize.width = 2048;
      this.MainLight01.shadow.mapSize.height = 2048;

      this.MainLight02.shadow.mapSize.width = 2048;
      this.MainLight02.shadow.mapSize.height = 2048;

      this.MainLight03.shadow.mapSize.width = 2048;
      this.MainLight03.shadow.mapSize.height = 2048;

      this.MainLight04.shadow.mapSize.width = 2048;
      this.MainLight04.shadow.mapSize.height = 2048; */

      /* const d = 50;

      this.MainLight01.shadow.camera.left = -d;
      this.MainLight01.shadow.camera.right = d;
      this.MainLight01.shadow.camera.top = d;
      this.MainLight01.shadow.camera.bottom = -d;
      this.MainLight01.shadow.camera.far = 3500;
      this.MainLight01.shadow.bias = -0.0001;

      this.MainLight02.shadow.camera.left = -d;
      this.MainLight02.shadow.camera.right = d;
      this.MainLight02.shadow.camera.top = d;
      this.MainLight02.shadow.camera.bottom = -d;
      this.MainLight02.shadow.camera.far = 3500;
      this.MainLight02.shadow.bias = -0.0001;

      this.MainLight03.shadow.camera.left = -d;
      this.MainLight03.shadow.camera.right = d;
      this.MainLight03.shadow.camera.top = d;
      this.MainLight03.shadow.camera.bottom = -d;
      this.MainLight03.shadow.camera.far = 3500;
      this.MainLight03.shadow.bias = -0.0001;

      this.MainLight04.shadow.camera.left = -d;
      this.MainLight04.shadow.camera.right = d;
      this.MainLight04.shadow.camera.top = d;
      this.MainLight04.shadow.camera.bottom = -d;
      this.MainLight04.shadow.camera.far = 3500;
      this.MainLight04.shadow.bias = -0.0001; */

      /* GLOBAL LIGHT */
      /* const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.1);
      hemiLight.position.set(0, 0, 0);
      this.scene.add(hemiLight); */

      /* Stations Lights */
      //ZipaLight
      /* this.ZipaLight = new THREE.SpotLight(0xffffff);
      this.ZipaLight.position.set(0, 30, 0);
      this.ZipaLight.angle = Math.PI/2;
      const targetZipa = new THREE.Object3D();
      targetZipa.position.set(-50, 0, 0);
      this.scene.add(targetZipa);
      this.ZipaLight.target = targetZipa; */

      /* this.ZipaLight.castShadow = true;
      this.ZipaLight.shadow.mapSize.width = 1024;
      this.ZipaLight.shadow.mapSize.height = 1024;
      this.ZipaLight.shadow.camera.near = 500;
      this.ZipaLight.shadow.camera.far = 4000;
      this.ZipaLight.shadow.camera.fov = 30;

      this.scene.add(this.ZipaLight); */
    },
    pointObjs() {
      this.groupIndicator = new THREE.Group();
      this.scene.add(this.groupIndicator);

      this.color = new THREE.Color();
      this.white = new THREE.Color().setHex(0xffffff);
      //Add geometry
      var geometryInside = new THREE.SphereGeometry(0.1, 3, 2);
      var geometryOutside = new THREE.SphereGeometry(0.3, 3, 2);
      /* var material = new THREE.MeshLambertMaterial({
        color: Math.random() * 0xffffff,
      }); */
      const material = new THREE.MeshLambertMaterial({
        color: 0xf80346,
      });

      /* const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true,
        transparent: true,
      }); */

      /* const wireframe = new THREE.Mesh(geometryInside, wireframeMaterial); */

      /* *****************OBJECTS***************** */
      //Maquina de escribir
      var sphere1 = new THREE.Mesh(geometryInside, material);
      sphere1.position.x = 51.5;
      sphere1.position.y = 1.4;
      sphere1.position.z = 0;
      sphere1.nameId = "Label1";
      /* sphere1.add(wireframe); */
      this.scene.add(sphere1);
      this.groupIndicator.add(sphere1);

      //Telegrafo
      var sphere2 = new THREE.Mesh(geometryInside, material);
      sphere2.position.x = 0;
      sphere2.position.y = 2;
      sphere2.position.z = -5;
      sphere2.nameId = "Label2";
      this.scene.add(sphere2);
      this.groupIndicator.add(sphere2);

      //Perforador
      var sphere3 = new THREE.Mesh(geometryInside, material);
      sphere3.position.x = 51;
      sphere3.position.y = 1.3;
      sphere3.position.z = 8;
      sphere3.nameId = "Label3";
      this.scene.add(sphere3);
      this.groupIndicator.add(sphere3);

      //Vagoneta
      var sphere4 = new THREE.Mesh(geometryOutside, material);
      sphere4.position.x = 61.2;
      sphere4.position.y = 2;
      sphere4.position.z = 4.5;
      sphere4.nameId = "Label4";
      this.scene.add(sphere4);
      this.groupIndicator.add(sphere4);

      //Telefono
      var sphere5 = new THREE.Mesh(geometryInside, material);
      sphere5.position.x = 4;
      sphere5.position.y = 2;
      sphere5.position.z = 5;
      sphere5.nameId = "Label5";
      this.scene.add(sphere5);
      this.groupIndicator.add(sphere5);

      /* *****************NAME & INFO STATION***************** */
      //Zipaquirá
      var sphere6 = new THREE.Mesh(geometryOutside, material);
      sphere6.position.x = -44.7;
      sphere6.position.y = 2;
      sphere6.position.z = -3.8;
      sphere6.nameId = "Label6";
      this.scene.add(sphere6);
      this.groupIndicator.add(sphere6);

      var sphere7 = new THREE.Mesh(geometryOutside, material);
      sphere7.position.x = 0;
      sphere7.position.y = 2;
      sphere7.position.z = 0;
      sphere7.nameId = "Label7";
      this.scene.add(sphere7);
      this.groupIndicator.add(sphere7);

      //Usaquén
      var sphere8 = new THREE.Mesh(geometryOutside, material);
      sphere8.position.x = 2.6;
      sphere8.position.y = 2.2;
      sphere8.position.z = -41;
      sphere8.nameId = "Label8";
      this.scene.add(sphere8);
      this.groupIndicator.add(sphere8);

      var sphere9 = new THREE.Mesh(geometryOutside, material);
      sphere9.position.x = 1;
      sphere9.position.y = 2.2;
      sphere9.position.z = 0;
      sphere9.nameId = "Label9";
      this.scene.add(sphere9);
      this.groupIndicator.add(sphere9);

      var sphere10 = new THREE.Mesh(geometryOutside, material);
      sphere10.position.x = 2;
      sphere10.position.y = 2.2;
      sphere10.position.z = 0;
      sphere10.nameId = "Label10";
      this.scene.add(sphere10);
      this.groupIndicator.add(sphere10);

      var sphere11 = new THREE.Mesh(geometryOutside, material);
      sphere11.position.x = 3;
      sphere11.position.y = 2.2;
      sphere11.position.z = 0;
      sphere11.nameId = "Label11";
      this.scene.add(sphere11);
      this.groupIndicator.add(sphere11);

      //Chía
      var sphere12 = new THREE.Mesh(geometryOutside, material);
      sphere12.position.x = -2.5;
      sphere12.position.y = 2.2;
      sphere12.position.z = 39.5;
      sphere12.nameId = "Label12";
      this.scene.add(sphere12);
      this.groupIndicator.add(sphere12);

      var sphere13 = new THREE.Mesh(geometryOutside, material);
      sphere13.position.x = 4;
      sphere13.position.y = 2.2;
      sphere13.position.z = 0;
      sphere13.nameId = "Label13";
      this.scene.add(sphere13);
      this.groupIndicator.add(sphere13);

      var sphere14 = new THREE.Mesh(geometryOutside, material);
      sphere14.position.x = 5;
      sphere14.position.y = 2.2;
      sphere14.position.z = 0;
      sphere14.nameId = "Label14";
      this.scene.add(sphere14);
      this.groupIndicator.add(sphere14);

      //Cajicá
      var sphere15 = new THREE.Mesh(geometryOutside, material);
      sphere15.position.x = 45;
      sphere15.position.y = 2.2;
      sphere15.position.z = 2.6;
      sphere15.nameId = "Label15";
      this.scene.add(sphere15);
      this.groupIndicator.add(sphere15);

      var sphere16 = new THREE.Mesh(geometryOutside, material);
      sphere16.position.x = 6;
      sphere16.position.y = 2.2;
      sphere16.position.z = 0;
      sphere16.nameId = "Label16";
      this.scene.add(sphere16);
      this.groupIndicator.add(sphere16);

      var sphere17 = new THREE.Mesh(geometryOutside, material);
      sphere17.position.x = 7;
      sphere17.position.y = 2.2;
      sphere17.position.z = 0;
      sphere17.nameId = "Label17";
      this.scene.add(sphere17);
      this.groupIndicator.add(sphere17);

      /* *****************PHOTO STATION***************** */
      //Zipaquirá
      var sphere18 = new THREE.Mesh(geometryOutside, material);
      sphere18.position.x = 8;
      sphere18.position.y = 2.2;
      sphere18.position.z = 0;
      sphere18.nameId = "Label18";
      this.scene.add(sphere18);
      this.groupIndicator.add(sphere18);

      var sphere19 = new THREE.Mesh(geometryOutside, material);
      sphere19.position.x = 9;
      sphere19.position.y = 2.2;
      sphere19.position.z = 0;
      sphere19.nameId = "Label19";
      this.scene.add(sphere19);
      this.groupIndicator.add(sphere19);

      var sphere20 = new THREE.Mesh(geometryOutside, material);
      sphere20.position.x = 10;
      sphere20.position.y = 2.2;
      sphere20.position.z = 0;
      sphere20.nameId = "Label20";
      this.scene.add(sphere20);
      this.groupIndicator.add(sphere20);

      //Chía
      var sphere21 = new THREE.Mesh(geometryOutside, material);
      sphere21.position.x = 11;
      sphere21.position.y = 2.2;
      sphere21.position.z = 0;
      sphere21.nameId = "Label21";
      this.scene.add(sphere21);
      this.groupIndicator.add(sphere21);

      var sphere22 = new THREE.Mesh(geometryOutside, material);
      sphere22.position.x = 12;
      sphere22.position.y = 2.2;
      sphere22.position.z = 0;
      sphere22.nameId = "Label22";
      this.scene.add(sphere22);
      this.groupIndicator.add(sphere22);

      //Usaquén
      var sphere23 = new THREE.Mesh(geometryOutside, material);
      sphere23.position.x = 13;
      sphere23.position.y = 2.2;
      sphere23.position.z = 0;
      sphere23.nameId = "Label23";
      this.scene.add(sphere23);
      this.groupIndicator.add(sphere23);

      //Cajicá
      var sphere24 = new THREE.Mesh(geometryOutside, material);
      sphere24.position.x = 14;
      sphere24.position.y = 2.2;
      sphere24.position.z = 0;
      sphere24.nameId = "Label24";
      this.scene.add(sphere24);
      this.groupIndicator.add(sphere24);

      var sphere25 = new THREE.Mesh(geometryOutside, material);
      sphere25.position.x = 15;
      sphere25.position.y = 2.2;
      sphere25.position.z = 0;
      sphere25.nameId = "Label25";
      this.scene.add(sphere25);
      this.groupIndicator.add(sphere25);
    },
    ShowInfo() {
      var modal = document.getElementById("MenuInfo");
      var titleMenu = document.getElementById("menuIcon");
      var span = document.getElementsByClassName("closeMenu")[0];

      titleMenu.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
    ShowTeam() {
      var modal = document.getElementById("TeamInfo");
      var authorIcon = document.getElementById("menuTeam");
      var span = document.getElementsByClassName("closeTeam")[0];

      authorIcon.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
    HideWait() {
      if (
        this.load01 &&
        this.load02 &&
        this.load03 &&
        this.load04 &&
        this.load05 &&
        this.load06 &&
        this.load07 &&
        this.load08 &&
        this.load09 &&
        this.load10 &&
        this.load11 &&
        this.load12 &&
        this.load13 &&
        this.load14 &&
        this.load15 &&
        this.load16
      ) {
        this.loaded = true;
      }
    },
    HelpMenu() {
      var modal = document.getElementById("ModalHelp");
      var help = document.getElementById("menuHelp");
      var span = document.getElementsByClassName("close")[0];

      help.onclick = function () {
        modal.style.display = "block";
      };
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
    ZoomMas1: function () {
      document
        .getElementById("ZoomMas1")
        .addEventListener("click", function () {
          getfontsize("zoomtexto6", "+");
          getfontsize("zoomtexto7", "+");
          getfontsize("zoomtexto8", "+");
          getfontsize("zoomtexto9", "+");
          getfontsize("zoomtexto10", "+");
          getfontsize("zoomtexto11", "+");
          getfontsize("zoomtexto12", "+");
          getfontsize("zoomtexto13", "+");
          getfontsize("zoomtexto14", "+");
          getfontsize("zoomtexto15", "+");
        });
    },
    ZoomMenos1: function () {
      document
        .getElementById("ZoomMenos1")
        .addEventListener("click", function () {
          getfontsize("zoomtexto6", "-");
          getfontsize("zoomtexto7", "-");
          getfontsize("zoomtexto8", "-");
          getfontsize("zoomtexto9", "-");
          getfontsize("zoomtexto10", "-");
          getfontsize("zoomtexto11", "-");
          getfontsize("zoomtexto12", "-");
          getfontsize("zoomtexto13", "-");
          getfontsize("zoomtexto14", "-");
          getfontsize("zoomtexto15", "-");
          console.log("se logro");
        });
    },
    ZoomMas2: function () {
      document
        .getElementById("ZoomMas2")
        .addEventListener("click", function () {
          getfontsize("zoomtexto16", "+");
          getfontsize("zoomtexto17", "+");
          getfontsize("zoomtexto18", "+");
          getfontsize("zoomtexto19", "+");
          getfontsize("zoomtexto20", "+");
          getfontsize("zoomtexto21", "+");
          getfontsize("zoomtexto22", "+");
          getfontsize("zoomtexto23", "+");
          getfontsize("zoomtexto24", "+");
          getfontsize("zoomtexto25", "+");
        });
    },
    ZoomMenos2: function () {
      document
        .getElementById("ZoomMenos2")
        .addEventListener("click", function () {
          getfontsize("zoomtexto16", "-");
          getfontsize("zoomtexto17", "-");
          getfontsize("zoomtexto18", "-");
          getfontsize("zoomtexto19", "-");
          getfontsize("zoomtexto20", "-");
          getfontsize("zoomtexto21", "-");
          getfontsize("zoomtexto22", "-");
          getfontsize("zoomtexto23", "-");
          getfontsize("zoomtexto24", "-");
          getfontsize("zoomtexto25", "-");
          console.log("se logro");
        });
    },
    onPointerMove(event) {
      this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    },
    intersectPoint() {
      for (let id = 1; id < this.Indicator; id++) {
        if (this.intersects[0].object.nameId === `Label${id}`) {
          this.modal = document.getElementById(`Modal-${id}`);
          this.modal.style.display = "block";
        }
      }
    },
    hideModalPoint() {
      for (let id = 1; id < this.Indicator; id++) {
        this.modal = document.getElementById(`Modal-${id}`);
        this.modal.style.display = "none";
      }
    },
    rayPoints() {
      //Animation
      this.groupIndicator.traverse(function (object) {
        if (object.isMesh === true) {
          object.rotation.y += 0.05;
        }
      });

      this.raycaster.setFromCamera(this.pointer, this.cameraFp);
      this.intersects = this.raycaster.intersectObjects(
        this.groupIndicator.children,
        false
      );

      if (this.intersects.length > 0) {
        if (this.INTERSECTED != this.intersects[0].object) {
          if (this.INTERSECTED)
            this.INTERSECTED.material.emissive.setHex(
              this.INTERSECTED.currentHex
            );

          this.INTERSECTED = this.intersects[0].object;
          this.INTERSECTED.currentHex =
            this.INTERSECTED.material.emissive.getHex();
          this.INTERSECTED.material.emissive.setHex(0xff0000);
          this.intersectPoint();
        }
      } else {
        if (this.INTERSECTED)
          this.INTERSECTED.material.emissive.setHex(
            this.INTERSECTED.currentHex
          );
        this.INTERSECTED = null;
        this.hideModalPoint();
      }
    },
    contentPoints() {
      for (this.point of this.points) {
        const screenPosition = this.point.position.clone();
        screenPosition.project(this.camera);

        this.raycaster.setFromCamera(screenPosition, this.camera);
        this.intersects = this.raycaster.intersectObjects(
          this.scene.children,
          true
        );
        if (this.intersects.length === 0) {
          this.point.element.classList.add("visible");
        } else {
          const intersectionDistance = this.intersects[0].distance;
          const pointDistance = this.point.position.distanceTo(
            this.camera.position
          );
          if (intersectionDistance < pointDistance) {
            this.point.element.classList.remove("visible");
          } else {
            this.point.element.classList.add("visible");
          }
        }
        const translateX = screenPosition.x * this.container.clientWidth * 0.5;
        const translateY =
          -screenPosition.y * this.container.clientHeight * 0.5;
        this.point.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    },
    contentPointsObjects() {
      for (this.pointObject of this.pointsObjects) {
        const screenPosition = this.pointObject.position.clone();
        screenPosition.project(this.cameraFp);

        this.raycaster.setFromCamera(screenPosition, this.cameraFp);
        this.intersects = this.raycaster.intersectObjects(
          this.scene.children,
          true
        );
        if (this.intersects.length === 0) {
          this.pointObject.element.classList.add("visible");
        } else {
          const intersectionDistance = this.intersects[0].distance;
          const pointDistance = this.pointObject.position.distanceTo(
            this.cameraFp.position
          );
          if (intersectionDistance < pointDistance) {
            this.pointObject.element.classList.remove("visible");
          } else {
            this.pointObject.element.classList.add("visible");
          }
        }
        const translateX = screenPosition.x * this.container.clientWidth * 0.5;
        const translateY =
          -screenPosition.y * this.container.clientHeight * 0.5;
        this.pointObject.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    },
    FPEstacion1() {
      //Estacion de Zipaquirá
      this.MainPosition.copy(this.camera.position);
      this.MainRotation.copy(this.camera.rotation);

      const PosEst1 = new THREE.Vector3(-36, 1, 0);
      const RotEst1 = new THREE.Vector3(0, Math.PI / 2, 0);

      this.playerCollider.translate(PosEst1);

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst1, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.cameraFp.rotation.copy(this.camera.rotation);
        })
        .start();

      new TWEEN.Tween(this.camera.position)
        .to(PosEst1, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.onStation = true;
          this.cameraFp.position.copy(PosEst1);
          this.firstPerson();
        })
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
    },
    FPEstacion2() {
      //Estacion de Usaquén
      this.MainPosition.copy(this.camera.position);
      this.MainRotation.copy(this.camera.rotation);

      const PosEst2 = new THREE.Vector3(0, 1, -35);
      const RotEst2 = new THREE.Vector3(0, 0, 0);

      this.playerCollider.translate(PosEst2);

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst2, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.cameraFp.rotation.copy(this.camera.rotation);
        })
        .start();

      new TWEEN.Tween(this.camera.position)
        .to(PosEst2, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.onStation = true;
          this.cameraFp.position.copy(PosEst2);
        })
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
    },
    FPEstacion3() {
      //Estacion de Cajicá
      this.MainPosition.copy(this.camera.position);
      this.MainRotation.copy(this.camera.rotation);

      const PosEst3 = new THREE.Vector3(36, 1, 0);
      const RotEst3 = new THREE.Vector3(0, -Math.PI / 2, 0);

      this.playerCollider.translate(PosEst3);

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst3, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.cameraFp.rotation.copy(this.camera.rotation);
        })
        .start();

      new TWEEN.Tween(this.camera.position)
        .to(PosEst3, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.onStation = true;
          this.cameraFp.position.copy(PosEst3);
        })
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
    },
    FPEstacion4() {
      //Estacion de Chía
      this.MainPosition.copy(this.camera.position);
      this.MainRotation.copy(this.camera.rotation);

      const PosEst4 = new THREE.Vector3(0, 1, 35);
      const RotEst4 = new THREE.Vector3(0, Math.PI, 0);

      this.playerCollider.translate(PosEst4);

      new TWEEN.Tween(this.camera.rotation)
        .to(RotEst4, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.cameraFp.rotation.copy(this.camera.rotation);
        })
        .start();

      new TWEEN.Tween(this.camera.position)
        .to(PosEst4, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.onStation = true;
          this.cameraFp.position.copy(PosEst4);
        })
        .start();

      if (!this.onViewFP) {
        this.firstPerson();
      }
      this.Fp = true;
    },
    mainView() {
      this.controls.enabled = true;
      this.pControls.enabled = false;
      this.camera.position.copy(this.cameraFp.position);
      this.camera.rotation.copy(this.cameraFp.rotation);

      this.playerCollider.start.set(0, 0.35, 0);
      this.playerCollider.end.set(0, 1, 0);
      this.playerCollider.radius = 0.35;

      new TWEEN.Tween(this.camera.position)
        .to(this.MainPosition, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          this.onViewFP = false;
        })
        .start();

      new TWEEN.Tween(this.camera.rotation)
        .to(this.MainRotation, 3000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

      this.Fp = false;
      this.onStation = false;
    },
    firstPerson() {
      this.onViewFP = true;
      this.controls.enabled = false;
      this.pControls.enabled = true;

      this.changeFog();

      this.pControls.addEventListener("unlock", function () {
        var cursor = document.getElementById("lockCursor");
        var btn = document.getElementById("btn-back");

        cursor.style.display = "none";
        btn.style.display = "";
      });
      this.pControls.addEventListener("lock", function () {
        var cursor = document.getElementById("lockCursor");
        var btn = document.getElementById("btn-back");

        cursor.style.display = "block";
        btn.style.display = "none";
      });
      this.container.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        this.pControls.lock();
        this.pControls.connect();
      });
      /* this.pControls.addEventListener("unlock", function () {
        var cursor = document.getElementById("lockCursor");
        cursor.style.display = "none";
      });
      this.pControls.addEventListener("lock", function () {
        var cursor = document.getElementById("lockCursor");
        cursor.style.display = "block";
      }); */
      /* this.container.addEventListener("click", function () {
        this.pControls.connect();
        this.pControls.lock();
      }); */

      document.addEventListener("keydown", (event) => {
        this.keyStates[event.code] = true;
      });
      document.addEventListener("keyup", (event) => {
        this.keyStates[event.code] = false;
      });
    },
    changeFog() {
      if (this.onStation) {
        this.scene.fog.near = 5;
        this.scene.fog.far = 30;
      } else {
        this.scene.fog.near = 60;
        this.scene.fog.far = 120;
      }
    },
    playerCollisions() {
      const result = this.worldOctree.capsuleIntersect(this.playerCollider);

      this.playerOnFloor = false;

      if (result) {
        this.playerOnFloor = result.normal.y > 0;

        if (!this.playerOnFloor) {
          this.playerVelocity.addScaledVector(
            result.normal,
            -result.normal.dot(this.playerVelocity)
          );
        }

        this.playerCollider.translate(
          result.normal.multiplyScalar(result.depth)
        );
      }
    },
    updatePlayer(deltaTime) {
      let damping = Math.exp(-4 * deltaTime) - 1;

      if (!this.playerOnFloor) {
        this.playerVelocity.y -= this.GRAVITY * deltaTime;

        // small air resistance
        damping *= 0.3;
      }

      this.playerVelocity.addScaledVector(this.playerVelocity, damping);

      const deltaPosition = this.playerVelocity
        .clone()
        .multiplyScalar(deltaTime);
      this.playerCollider.translate(deltaPosition);

      this.playerCollisions();

      this.cameraFp.position.copy(this.playerCollider.end);
    },
    getForwardVector() {
      this.cameraFp.getWorldDirection(this.playerDirection);
      this.playerDirection.y = 0;
      this.playerDirection.normalize();

      return this.playerDirection;
    },
    getSideVector() {
      this.cameraFp.getWorldDirection(this.playerDirection);
      this.playerDirection.y = 0;
      this.playerDirection.normalize();
      this.playerDirection.cross(this.camera.up);

      return this.playerDirection;
    },
    controlsMove(deltaTime) {
      // gives a bit of air control
      //const speedDelta = deltaTime * ( this.playerOnFloor ? 25 : 8 );
      const speedDelta = deltaTime * 15;

      if (this.keyStates["KeyW"]) {
        //this.playerVelocity.add( this.getForwardVector().multiplyScalar( speedDelta ) );
        this.playerVelocity.add(
          this.getForwardVector().multiplyScalar(speedDelta)
        );
      }

      if (this.keyStates["KeyS"]) {
        this.playerVelocity.add(
          this.getForwardVector().multiplyScalar(-speedDelta)
        );
      }

      if (this.keyStates["KeyA"]) {
        this.playerVelocity.add(
          this.getSideVector().multiplyScalar(-speedDelta)
        );
      }

      if (this.keyStates["KeyD"]) {
        this.playerVelocity.add(
          this.getSideVector().multiplyScalar(speedDelta)
        );
      }

      if (this.playerOnFloor) {
        if (this.keyStates["Space"]) {
          this.playerVelocity.y = 10;
        }
      }
    },
    teleportPlayerIfOob() {
      if (this.cameraFp.position.y <= -25) {
        this.playerCollider.start.set(0, 0.35, 0);
        this.playerCollider.end.set(0, 1, 0);
        this.playerCollider.radius = 0.35;
        const Respawn = new THREE.Vector3(0, 0, 2);
        this.playerCollider.translate(Respawn);
        this.cameraFp.position.copy(this.playerCollider.end);
      }
    },
    animate() {
      if (this.onViewFP) {
        this.deltaTime = Math.min(0.05, this.clock.getDelta()) / this.STEPS;

        for (let i = 0; i < this.STEPS; i++) {
          this.controlsMove(this.deltaTime);
          this.updatePlayer(this.deltaTime);
          this.teleportPlayerIfOob();
        }
      } else {
        this.controls.update();
      }
      /* const d = this.clock.getDelta();
      this.mixer.update(d); */

      TWEEN.update();
      this.rayPoints();
      this.contentPoints();
      //this.contentPointsObjects();
      this.render();
      requestAnimationFrame(this.animate);
      this.stats.update();
    },
    onWindowResize() {
      // set aspect ratio to match the new browser window aspect ratio
      this.camera.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );

      this.cameraFp.aspect =
        this.container.clientWidth / this.container.clientHeight;
      this.cameraFp.updateProjectionMatrix();
      this.renderer.setSize(
        this.container.clientWidth,
        this.container.clientHeight
      );
    },
    render() {
      this.HideWait();
      this.changeFog();
      if (this.onStation) {
        this.renderer.render(this.scene, this.cameraFp);
      } else {
        this.renderer.render(this.scene, this.camera);
        //this.labelRenderer.render(this.scene, this.camera);
      }
      //this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
  created() {
    console.log(this.mode);
  },
};
const getfontsize = (id, ip) => {
  // let parseFloat=
  // parseFloat(getComputedStyle(document.documentElement)
  //   .getPropertyValue('--font-size'))
  let texto = document.getElementById(id);
  let style = document.defaultView
    .getComputedStyle(texto)
    .getPropertyValue("font-size");
  let fontSize = parseInt(style);

  if (ip === "+") {
    texto.style.fontSize = `${fontSize + 6}px `;
    console.log("este:", style);
  } else {
    texto.style.fontSize = `${fontSize - 6}px `;
  }
};
</script>
<style src="../assets/Styles/style_Mapa.css"></style>



