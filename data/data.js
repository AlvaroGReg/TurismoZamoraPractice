//MUSEOS
let museosList = [{
    id: "museozamora", name: "Museo de Zamora",
    description: "Arqueología y Bellas Artes. Historia de Zamora y su provincia, desde el Paleolítico al siglo XX,  a través de fondos arqueológicos y de Bellas Artes.",
    photo1:"../../res/museos/museodezamora.jfif",
    photo2: "../../res/museos/panoramica-zamora.jpg", web: "https://museoscastillayleon.jcyl.es/web/es/museozamora/museo-zamora.html",
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.151954374116!2d-5.749984884570698!3d41.50098177925395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e345cbca2d7%3A0x1c41f2d50e57faa0!2sMuseo%20de%20Zamora!5e0!3m2!1ses-419!2ses!4v1679559242141!5m2!1ses-419!2ses'
}, {
    id: "museoetnografico", name: "Museo Etnográfico de Zamora",
    description: "El Museo Etnográfico de Castilla y León, en Zamora, quiere contribuir a que los visitantes reflexionen acerca de aspectos que atañen al individuo, a su vida en común y a su habilidad para enfrentarse a los problemas suscitados por el entorno a través de una importantísima colección de objetos de gran valor etnográfico, tales como enseres, aperos de labranza, piezas de alfarería y cerámica popular, trajes, amuletos y un larguísimo etcétera.",
    photo1:"../../res/museos/etnografico.jpeg",
    photo2: "../../res/museos/panoramica-etnografico.jpg",
    web: "https://museo-etnografico.com/",
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.0602830296743!2d-5.752755567331265!3d41.50296843043657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e368137ff41%3A0x83c092812f766417!2sMuseo%20Etnogr%C3%A1fico%20de%20Castilla%20y%20Le%C3%B3n!5e0!3m2!1ses-419!2ses!4v1679559675297!5m2!1ses-419!2ses'
}, {
    id: "museosemanasanta", name: "Museo de la Semana Santa",
    description: "El Museo de Semana Santa, ubicado en el casco antiguo de la ciudad, alberga treinta y siete pasos que ofrecen secuencialmente el relato de la Pasión de Cristo.",
    photo1:"../../res/museos/museosemanasanta.jfif",
    photo2: "../../res/museos/panoramica-semanasanta.jpg",
    web: "https://turismo-zamora.com/museo-de-semana-santa.html",
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.0349741571576!2d-5.7513360842704895!3d41.50351689675037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e366f5b7ff1%3A0x81ce0625cdfe9d69!2sMuseo%20de%20la%20Semana%20Santa%20de%20Zamora!5e0!3m2!1ses-419!2ses!4v1679559921877!5m2!1ses-419!2ses'
}, {
    id: "museolobo", name: "Museo de Baltasar Lobo",
    description: "Situado en la antigua “Casa de los Gigantes”, así conocida por albergar en su día a las gigantillas y cabezudos de las fiestas de la ciudad, se encuentra este museo de escultura contemporánea dedicado a Baltasar Lobo Casquero, escultor zamorano nacido en el año 1910 en Cerecinos de Campos.",
    photo1:"../../res/museos/museobaltasarlobo.jpg",
    photo2: "../../res/museos/panoramica-lobo.jpg", web: "https://turismo-zamora.com/museo-baltasar-lobo.html",
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.238612921529!2d-5.756690184335778!3d41.49910369107398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e4b0f31f00b%3A0xf24f94a8100ab616!2sFundaci%C3%B3n%20Baltasar%20Lobo!5e0!3m2!1ses-419!2ses!4v1679560238325!5m2!1ses-419!2ses'
}, {
    id: "museotome", name: "Museo Diocesano Santo Tomé",
    description: "En el interior del templo, podemos contemplar obras como un retablo plateresco del siglo XVI y dos barrocos, una pila bautismal de mármol del siglo XVI, una bellísima imagen de la Virgen en mármol del siglo XII, tres interesantes lienzos de Luis Tristán y dos esculturas de la escuela de Alonso Cano.",
    photo1:"../../res/museos/santotome.jfif",
    photo2: "../../res/museos/panoramica-tome.jpg", web: "https://turismo-zamora.com/museo-diocesano.html",
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.136403258505!2d-5.7471937651123195!3d41.501318799999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e324eb95b61%3A0xe5bad01761f0823!2sIglesia%20de%20Santo%20Tom%C3%A9%20(Museo%20Diocesano)!5e0!3m2!1ses-419!2ses!4v1679560291890!5m2!1ses-419!2ses'
}, {
    id: "museociudad", name: "Centro de interpretación de Ciudades Medievales",
    description: "Un espacio para la contemplación; 'El mirador'. Es una síntesis de los dos otros espacios anteriormente presentados Una reinvención del concepto audiovisual y un lugar para estar tranquilo, para mirar, escuchar y para entender la relación medieval y actual entre río y ciudad.",
    photo1:"../../res/museos/ciudadesmedievales.jfif",
    photo2: "../../res/museos/panoramica-medieval.jpg", web: "https://turismo-zamora.com/centro-de-interpretacion-de-las-ciudades-medievales.html",
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.185322068296!2d-1.8772605681632806!3d37.24331028592134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad4fe6c5db357%3A0xc6dcaeff59edf0a5!2sMuseo%20Centro%20de%20Interpretaci%C3%B3n%20de%20la%20Ciudad%20Medieval%20de%20Bayra!5e0!3m2!1ses-419!2ses!4v1679560356275!5m2!1ses-419!2ses'
}]

//ROMÁNICO
let romanicoList = [{
    id: "catedral", name: "Catedral de Zamora",
    description: "Situada en el punto más alto de la ciudad, la Catedral de Zamora es una de las catedrales más pequeñas y más antiguas de Castilla y León, siendo declarada Monumento Nacional por la Real Orden el 5 de septiembre de 1889.",
    photo1: "../../res/romanico-capi/panoramica-catedral.jpg",
    photo2: "../../res/romanico-capi/catedral1.png",
    web: "https://www.romanicozamora.es/es/monumentos/ver/catedral-de-zamora/4",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.239167159326!2d-5.756690184570732!3d41.4990916792541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e4b037958e3%3A0xee1b39918c895eaf!2sSanta%20Iglesia%20Catedral%20del%20Salvador%20de%20Zamora!5e0!3m2!1ses-419!2ses!4v1679562752228!5m2!1ses-419!2ses"
}, {
    id: "magdalena", name: "Santa María Magdalena",
    description: "La Iglesia de Santa María Magdalena es una de las más interesantes del Románico de Zamora. Según diversas investigaciones, este templo se relaciona con los Hospitalarios, los Templarios y también debió pertenecer a la Orden de San Juan de Jerusalén hasta el siglo XIX.",
    photo1: "../../res/romanico-capi/magdalena1.png",
    photo2: "../../res/romanico-capi/panoramica-magdalena.png",
    web: "https://www.romanicozamora.es/es/monumentos/ver/santa-maria-magdalena/10",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.137273952861!2d-5.754973167331673!3d41.50129993054085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e3592bcaa05%3A0x44052284b652025e!2sIglesia%20de%20Santa%20Mar%C3%ADa%20Magdalena!5e0!3m2!1ses-419!2ses!4v1679562800703!5m2!1ses-419!2ses"
}, {
    id: "bautista", name: "San Juan Bautista",
    description: "Las pruebas más antiguas que se han encontrado desvelan que esta iglesia fue una construcción de mediados del Siglo XII, pero las obras continuaron en el siglo XIII y se prolongaron incluso hasta el siglo XIV. ",
    photo1: "../../res/romanico-capi/bautista1.png",
    photo2: "../../res/romanico-capi/panoramica-bautista.png",
    web: "https://www.romanicozamora.es/es/monumentos/ver/san-juan-bautista/17",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.043312553622!2d-5.749220484270536!3d41.503336196761424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e36a2cc3e5f%3A0xa017e7ae3cb58a2d!2sIglesia%20de%20San%20Juan%20de%20Puerta%20Nueva!5e0!3m2!1ses-419!2ses!4v1679562836203!5m2!1ses-419!2ses"
}, {
    id: "caballeros", name: "Santiago de los Caballeros",
    description: "Situada a extramuros, cerca del castillo, está muy ligada al Romancero Zamorano ya que perteneció a los capellanes del número del cabildo catedralicio y según cuenta la leyenda allí fue armado caballero el famoso héroe medieval El Cid Campeador por el Rey D. Fernando I de Castilla. A su lado se encuentra el campo de la Verdad, donde tenían lugar las justas medievales.",
    photo1: "../../res/romanico-capi/caballeros1.png",
    photo2: "../../res/romanico-capi/panoramica-caballeros.png",
    web: "https://www.romanicozamora.es/es/monumentos/ver/santiago-de-los-caballeros/8",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.213533305958!2d-5.762752567332013!3d41.49964723064396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e4cf7ee728f%3A0x956886a1a80e9a8b!2sIglesia%20de%20Santiago%20el%20Viejo%20o%20de%20los%20Caballeros!5e0!3m2!1ses-419!2ses!4v1679562880485!5m2!1ses-419!2ses"
}]

//MODERNISMO

let modernismoList = [{
    id: "prada", name: "Casa de Gregorio Prada",
    description: "(1908) - Calle Quebrantahuesos, nº 1, esquina con la Calle Renova - Arquitecto Francisco Ferriol.",
    photo1: "../../res/modernismo/prada.jpg",
    web: "https://www.arquitecturamodernista.cat/obres/es/zamora/tots/casa-gregorio-prada",
    map: ""
}, {
    id: "aguiar", name: "Casa de Cristiano Aguiar",
    description: "(1908) - Plaza del Mercado, nº 6 - Arquitecto Francisco Ferriol.",
    photo1: "../../res/modernismo/aguiar.jpg",
    web: "https://www.arquitecturamodernista.cat/obres/es/zamora/tots/casa-crisanto-aguiar",
    map: ""
}, {
    id: "faustina", name: "Casa de Faustina Leirado ",
    description: "Francesc Ferriol Carreras (1910) - Calle Balborraz, nº 3 - Arquitecto Francisco Ferriol.",
    photo1: "../../res/modernismo/faustina.jpg",
    web: "https://www.arquitecturamodernista.cat/obres/es/zamora/tots/casa-faustina-leirado",
    map: ""
}, {
    id: "matilla", name: "Casa de Valentín Matilla",
    description: "Francesc Ferriol Carreras (1911) - Calle Santa Clara, nº 3 - Arquitecto Francisco Ferriol.",
    photo1: "../../res/modernismo/matilla.jpg",
    web: "https://www.arquitecturamodernista.cat/obres/es/zamora/tots/casa-valentin-matilla",
    map: ""
}, {
    id: "gato", name: "Casa de Juan Gato",
    description: "Francesc Ferriol Carreras (1912) - Calle Ramón Álvarez, nº 1. esquina con la Calle Juan Nicasio Gallego - Arquitecto Francisco Ferriol.",
    photo1: "../../res/modernismo/gato.jpg",
    web: "https://www.arquitecturamodernista.cat/obres/es/zamora/tots/casa-juan-gato",
    map: ""
}, {
    id: "montero", name: "Casa Montero",
    description: "Francesc Ferriol Carreras (1910) - Calle Orejones,  nº 6 - Arquitecto Francisco Ferriol.",
    photo1: "../../res/modernismo/montero.jpg",
    web: "https://www.arquitecturamodernista.cat/obres/es/zamora/tots/casa-juan-gato",
    map: ""
}, {
    id: "tejedor", name: "Casa Tejedor",
    description: "Francesc Ferriol Carreras (1913) - Ronda de Feria, nº 1, esquina con la Carretera de Sanabria - Arquitecto Francisco Ferriol.",
    photo1: "../../res/modernismo/tejedor.jpg",
    web: "https://www.arquitecturamodernista.cat/obres/es/zamora/tots/casa-federico-tejedor",
    map: ""
}, {
    id: "macho", name: "Casa de Norberto Macho",
    description: "Francesc Ferriol Carreras (1915) - Plaza de Sagasta, nº 3 - Arquitecto Francisco Ferriol.",
    photo1: "../../res/modernismo/macho.jpg",
    web: "https://www.arquitecturamodernista.cat/obres/es/zamora/tots/casa-norberto-macho",
    map: ""
}]
//NOCHE

let nocheList = [{
    id: "motin", name: "El Motín de la Trucha",
    description: "Taberna y restaurante.",
    photo1: "../../res/noche/trucha1.jpg",
    photo2: "../../res/noche/trucha2.jpg",
    web: "http://www.tabernaelmotin.com/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.048882086093!2d-5.749553300000007!3d41.503215499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e360d0c69a1%3A0xd39c9229c20f8c6!2sTaberna%20el%20Mot%C3%ADn!5e0!3m2!1ses-419!2ses!4v1679648686065!5m2!1ses-419!2ses"

}, {
    id: "avalon", name: "Avalon",
    description: "Sala / Cafetería.",
    photo1: "../../res/noche/avalon1.jpg",
    photo2: "../../res/noche/avalon2.jpg",
    web: "https://www.facebook.com/people/Avalon-Caf%C3%A9/100063631147773/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.034069563907!2d-5.7445394!3d41.50353650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e3142b79175%3A0xffadfe74c939f82c!2zw4F2YWxvbiBDYWbDqQ!5e0!3m2!1ses-419!2ses!4v1679648759239!5m2!1ses-419!2ses"
}, {
    id: "lobo", name: "El Lobo",
    description: "Bar pinchos y tapas.",
    photo1: "../../res/noche/lobo1.jpg",
    photo2: "../../res/noche/lobo2.png",
    web: "https://www.tripadvisor.es/Restaurant_Review-g262064-d3371665-Reviews-Bar_El_Lobo-Zamora_Province_of_Zamora_Castile_and_Leon.html",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.875758913456!2d-5.747110273046849!3d41.506967100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e3062ee531b%3A0x6f64d22f537b6405!2sEl%20Lobo%20-%20El%20Rey%20de%20los%20Pinchitos!5e0!3m2!1ses-419!2ses!4v1679648886163!5m2!1ses-419!2ses"
}, {
    id: "jazz", name: "La Cueva del Jazz",
    description: "Pub de copas.",
    photo1: "../../res/noche/jazz1.png",
    photo2: "../../res/noche/jazz2.jpg",
    web: "https://lacuevadeljazz.com/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.038384124445!2d-5.748125873046906!3d41.50344299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e31658ab071%3A0x93bab2b69d59f49e!2sLa%20Cueva%20del%20Jazz!5e0!3m2!1ses-419!2ses!4v1679649240662!5m2!1ses-419!2ses"
}, {
    id: "abuelos", name: "Los abuelos",
    description: "Bar de raciones y tapas.",
    photo1: "../../res/noche/abuelos1.png",
    photo2: "../../res/noche/abuelos2.png",
    web: "https://www.tripadvisor.es/Restaurant_Review-g262064-d8645013-Reviews-Bar_Los_Abuelos_I-Zamora_Province_of_Zamora_Castile_and_Leon.html",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.055992986324!2d-5.750665073046916!3d41.5030614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e36a6717115%3A0x79da93a8bf94debc!2sLos%20Abuelos%20I!5e0!3m2!1ses-419!2ses!4v1679649317482!5m2!1ses-419!2ses"
}, {
    id: "bodeguilla", name: "La Bodeguilla Rock",
    description: "Pub rockero.",
    photo1: "../../res/noche/bodeguilla1.png",
    photo2: "../../res/noche/bodeguilla2.png",
    web: "https://www.instagram.com/bodeguillarock/?hl=es",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1529906.8861469452!2d-7.85563599999999!3d41.502121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e34057ba78f%3A0x4d63ccb694ae88bc!2sLa%20Bodeguilla%20Rock!5e0!3m2!1ses-419!2ses!4v1679649355725!5m2!1ses-419!2ses"
}, {
    id: "vinacoteca", name: "La Vinacoteca",
    description: "Taberna, vinos y tapas.",
    photo1: "../../res/noche/vinacoteca1.png",
    photo2: "../../res/noche/vinacoteca2.png",
    web: "http://www.lavinacoteca.com/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764861.736757629!2d-6.795068300000018!3d41.50988370000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e2532f0814f%3A0x69d1fc34349bf2b0!2sLa%20Vinacoteca.!5e0!3m2!1ses-419!2ses!4v1679649388852!5m2!1ses-419!2ses"
}, {
    id: "bambu", name: "Bambú",
    description: "Bar de tapas.",
    photo1: "../../res/noche/bambu.png",
    photo2: "../../res/noche/bambu2.png",
    web: "https://www.tripadvisor.es/Restaurant_Review-g262064-d998087-Reviews-Bambu-Zamora_Province_of_Zamora_Castile_and_Leon.html",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.8821090562838!2d-5.7449594842876275!3d41.50682949654447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e30672515bf%3A0xf08ef9e4f45645f3!2sBar%20Bamb%C3%BA!5e0!3m2!1ses-419!2ses!4v1679649421140!5m2!1ses-419!2ses"
}]
//RUTAS

let rutasList = [{
    id: "romanico", name: "Ruta del Románico(3h)",
    description: "Ruta de 3 horas recorriendo distintos monumentos de la ciduad",
    photo1: "../../res/rutas/romanico1.png",
    photo2: "../../res/rutas/romanico2.png",
    web: "https://inzatur.com/ruta-del-romanico/",
    map: ""
}, {
    id: "modernista", name: "Ruta Modernista(1.5h)",
    description: "Ruta de 1 hora y media visitando la arquitectura modernista local.",
    photo1: "../../res/rutas/modernista1.png",
    photo2: "../../res/rutas/modernista2.png",
    web: "https://inzatur.com/ruta-modernista/",
    map: ""
}, {
    id: "monumental", name: "Ruta monumental(3h)",
    description: "Esta ruta de 3h combina varios elementos importantes de la ciudad de Zamora: el Modernismo, el Románico y el río Duero.",
    photo1: "../../res/rutas/monumental1.png",
    photo2: "../../res/rutas/monumental2.png",
    web: "https://inzatur.com/ruta-monumental/",
    map: ""
}, {
    id: "duero", name: "Las noches del Duero(2h)",
    description: "Esta ruta nocturna se realiza sólo durante las noches de verano, para disfrutar de uno de los recursos más importantes de la ciudad de Zamora: el río Duero. En nuestro nuevo recorrido, realizaremos parte de la ruta a pie y la segunda mitad del recorrido se realizará en tren turístico para cruzar los puentes y disfrutar de la panorámica de la ciudad y la muralla iluminadas.",
    photo1: "../../res/rutas/nocturna1.png",
    photo2: "../../res/rutas/nocturna2.png",
    web: "https://inzatur.com/las-noches-del-duero/",
    map: ""
}, {
    id: "sabor", name: "Zamora con sabor(3h)",
    description: "En la ruta gastronómica “Zamora con Sabor” se conjuga la oferta turística y monumental del casco histórico de la ciudad con una muestra destacada de la gastronomía de Zamora.",
    photo1: "../../res/rutas/sabor1.png",
    photo2: "../../res/rutas/sabor2.png",
    web: "https://inzatur.com/zamora-con-sabor/",
    map: ""
}]

//PROVINCIA

//benavente
let benaventeList = [{
    id: "parador", name: "Parador de Benavente",
    description: "Hotel restaurante en un edificio emblemático.",
    photo1: "../../res/benavente/parador1.png",
    photo2: "../../res/benavente/parador2.png",
    web: "https://paradores.es/es/parador-de-benavente?gclid=EAIaIQobChMI_tXljrj0_QIVkMrVCh2lbwMBEAAYAiAAEgJIBvD_BwE&gclsrc=aw.ds",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.0958023089447!2d-5.683389284259728!3d41.99821946586715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd384c66ed45248f%3A0xe5699638f0d9fce6!2sParador%20de%20Benavente!5e0!3m2!1ses-419!2ses!4v1679656743970!5m2!1ses-419!2ses"
}, {
    id: "santamaria", name: "Iglesia de Santa María de Azogue",
    description: "Situada en el centro de la ciudad de Benavente, es considerada como uno de sus principales monumentos artísticos. Su construcción, iniciada hacia el 1180, época en que esta ciudad fue repoblada por Fernando II de León, es considerada como contemporánea de la iglesia de San Juan del Mercado en la misma villa.",
    photo1: "../../res/benavente/santamaria1.png",
    photo2: "../../res/benavente/santamaria2.jpg",
    web: "https://es.wikipedia.org/wiki/Iglesia_de_Santa_Mar%C3%ADa_del_Azogue_(Benavente)",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.9866333298833!2d-5.681439484259646!3d42.00056241572001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd384c668665ee85%3A0x68d435e4da88b3bc!2sIglesia%20de%20Santa%20Mar%C3%ADa%20del%20Azogue!5e0!3m2!1ses-419!2ses!4v1679656781213!5m2!1ses-419!2ses"
}, {
    id: "enmaromado", name: "Fiestas del Toro Enmaromado",
    description: "Las fiestas del “Toro Enmaromado” de Benavente están declaradas de Interés Turístico Regional. Suelen durar una semana, aunque el “día grande” de las fiestas es el Miércoles anterior a la festividad de Corpus Christi. En este día, los mozos corren agarrados a una larga maroma sujeta a las astas del toro.",
    photo1: "../../res/benavente/toroenmaromado1.png",
    photo2: "../../res/benavente/toroenmaromado2.png",
    web: "https://www.benavente.es/aytobenavente/ayuntamiento/areas-municipales/fiestas/servicios-que-incluye/fiestas-del-toro-enmaromado#:~:text=Las%20fiestas%20del%20%E2%80%9CToro%20Enmaromado,a%20las%20astas%20del%20toro.",
    map: ""
}, {
    id: "paseomota", name: "Paseo de la Mota",
    description: "Paseos de la Mota con mirador a Los Valles",
    photo1: "../../res/benavente/paseomota1.png",
    photo2: "../../res/benavente/paseomota2.jpg",
    web: "https://www.descubrebenavente.com/jardines-de-la-mota/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.0918698050173!2d-5.683074984259688!3d41.99830386586173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd384c676cc65181%3A0xa8939836655024fd!2sP.%C2%BA%20de%20la%20Mota%2C%2049600%20Benavente%2C%20Zamora!5e0!3m2!1ses!2ses!4v1679657381609!5m2!1ses!2ses"
}]

//toroList
let toroList = [{
    id: "colegiata", name: "Colegiata de Santa María la Mayor",
    description: "La Colegiata de Santa María la Mayor se encuentra ubicada en la localidad de Toro, provincia de Zamora, es un templo construido entre los siglos XII y XIII. Presenta una conjunción de estilos románico y gótico que lo hacen especialmente atractivo.",
    photo1: "../../res/toro/colegiata1.png",
    photo2: "../../res/toro/colegiata2.png",
    web: "https://www.rutasconhistoria.es/loc/colegiata-de-santa-maria-la-mayor#:~:text=La%20Colegiata%20de%20Santa%20Mar%C3%ADa,que%20lo%20hacen%20especialmente%20atractivo.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.2708995999938!2d-5.396644084270144!3d41.52007229572143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd38eb2c9f1bd865%3A0x32ae53d855bf24e7!2sColegiata%20de%20Santa%20Mar%C3%ADa%20la%20Mayor!5e0!3m2!1ses!2ses!4v1679657480600!5m2!1ses!2ses"
}, {
    id: "vintoro", name: "Festival Vintoro",
    description: "Festival de música rock/punk de la ciudad zamorana.",
    photo1: "../../res/toro/vintoro1.png",
    photo2: "../../res/toro/vintoro2.png",
    web: "https://www.instagram.com/festivalvintoro/?hl=es",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.786754294426!2d-5.3842282!3d41.5305596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3894c8b2218e95%3A0x183ef1b11f173448!2sPolideportivo%20Toro!5e0!3m2!1ses-419!2ses!4v1679657653218!5m2!1ses-419!2ses"
}, {
    id: "torre", name: "Torre del Reloj",
    description: "En la calle Odreros se encuentra la Torre del Reloj, construida en 1738 sobre la antigua Puerta del Mercado, que es el arco que da acceso a la zona turística de Toro. Con 20 metros de alto, esta esbelta torre barroca es uno de los edificios más visibles desde cualquier parte de la ciudad.",
    photo1: "../../res/toro/torrereloj1.png",
    photo2: "../../res/toro/torrereloj2.png",
    web: "https://es.wikipedia.org/wiki/Arco_del_Reloj",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.16282703027!2d-5.395255384270124!3d41.52241349557603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3894d2d86f8bb5%3A0x20ac917d0568f966!2sTorre%20del%20Reloj!5e0!3m2!1ses-419!2ses!4v1679658376081!5m2!1ses-419!2ses"
}, {
    id: "bodega", name: "Bodegas Fariña",
    description: "Bodegas Fariña se levanta en Toro, en un entorno de viñas viejas, con una construcción exterior inspirada en la arquitectura tradicional, que contrasta con la tecnificación interior de una bodega que representa en sí misma el equilibrio entre tradición y modernidad.",
    photo1: "../../res/toro/bodegas1.png",
    photo2: "../../res/toro/bodegas2.png",
    web: "https://www.bodegasfarina.com/es",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95580.1835322424!2d-5.518750683593749!3d41.528523999999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3894c28f94f8a7%3A0xbf922f8cf51303bb!2sBodegas%20Fari%C3%B1a!5e0!3m2!1ses-419!2ses!4v1679658540828!5m2!1ses-419!2ses"
}]

//ARRIBES
let arribesList = [{
    id: "parquenatural", name: "Parque Natural Arribes del Duero",
    description: "En el oeste de Zamora y Salamanca, donde el Duero se hace frontera con Portugal y se encajona formando los cañones más profundos y extensos -casi un centenar de kilómetros- de toda la Península Ibérica, se encuentra la comarca de Arribes del Duero. Un espacio natural privilegiado en el que destacan la belleza agreste de su paisaje Granítico y una rica y variada fauna y flora.",
    photo1: "../../res/arribes/parquenatural1.png",
    photo2: "../../res/arribes/parquenatural2.png",
    web: "https://patrimonionatural.org/espacios-naturales/parque-natural/parque-natural-arribes-del-duero",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.9370744281946!2d-6.8013889845887485!3d40.91712557931003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd396c601e961fc9%3A0x1f2b82fa13bbd5dd!2sParque%20Natural%20de%20Arribes%20del%20Duero!5e0!3m2!1ses-419!2ses!4v1679658822979!5m2!1ses-419!2ses"
}, {
    id: "hospedaje", name: "Hospedajes",
    description: "Casas rurales y hoteles para conocer la zona.",
    photo1: "../../res/arribes/hospedaje1.png",
    photo2: "../../res/arribes/hospedaje1.jpg",
    web: "https://www.arribes.net/hospedaje.php",
    map: ""
}, {
    id: "cultura", name: "Actividades culturales",
    description: "Museos y centros culturales que visitar en la región",
    photo1: "../../res/arribes/cultura1.png",
    photo2: "../../res/arribes/cultura2.png",
    web: "https://www.arribes.net/museos.php",
    map: ""
}, {
    id: "restaurantes", name: "Restaurantes",
    description: "Lugares donde disfrutar de la gastronomía de la zona.",
    photo1: "../../res/arribes/gastronomia1.png",
    photo2: "../../res/arribes/gastronomia2.png",
    web: "https://www.arribes.net/restaurantes.php",
    map: ""
}]

//sanabria

let sanabriaList = [{
    id: "parque", name: "Parque Natural del Lago de Sanabria",
    description: "Además de su alto valor medioambiental el Parque Natural Lago de Sanabria y Sierras Segundera y de Porto ofrece valiosos recursos históricos, artísticos y culturales.",
    photo1: "../../res/sanabria/parque1.jpg",
    photo2: "../../res/sanabria/parque2.jpg",
    web: "https://patrimonionatural.org/espacios-naturales/parque-natural/parque-natural-lago-de-sanabria-y-sierras-segundera-y-de-porto",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.7496483468412!2d-6.7355315845515165!3d42.112832279204255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3a6d0a1cd0b843%3A0xf9d1e879f61ebee2!2sParque%20natural%20del%20Lago%20de%20Sanabria%20y%20Sierras%20Segundera%20y%20de%20Porto!5e0!3m2!1ses!2ses!4v1679659833972!5m2!1ses!2ses"
}, {
    id: "puebla", name: "Puebla de Sanabria",
    description: "Puebla de Sanabria es un municipio y localidad española de la provincia de Zamora, en la comunidad autónoma de Castilla y León.​ El municipio de Puebla está situado en el noroeste de la provincia, en la comarca natural de Sanabria.",
    photo1: "../../res/sanabria/puebla1.jpg",
    photo2: "../../res/sanabria/puebla2.png",
    web: "https://www.pueblasanabria.com/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11850.382594216911!2d-6.642397962172361!3d42.051850317338655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3a162d81c387ef%3A0x8e1ec8213dbd3ca9!2s49300%20Puebla%20de%20Sanabria%2C%20Zamora!5e0!3m2!1ses!2ses!4v1679659979527!5m2!1ses!2ses"
}, {
    id: "sanmartin", name: "San Martín de Castañeda",
    description: "San Martín de Castañeda es una localidad española del municipio de Galende, en la provincia de Zamora de la comunidad autónoma de Castilla y León.",
    photo1: "../../res/sanabria/sanmartin1.jpg",
    photo2: "../../res/sanabria/sanmartin2.jpg",
    web: "https://es.wikipedia.org/wiki/San_Mart%C3%ADn_de_Casta%C3%B1eda",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5917.355517627892!2d-6.725393323090118!3d42.13578131681024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3a136cf5c2bfe5%3A0xad3ef4c97a881845!2s49361%20San%20Mart%C3%ADn%20de%20Casta%C3%B1eda%2C%20Zamora!5e0!3m2!1ses-419!2ses!4v1679660088261!5m2!1ses-419!2ses"
}, {
    id: "rutas", name: "Rutas por Sanabria",
    description: "Rutas por las que recorrer la zona de Sanabria.",
    photo1: "../../res/sanabria/rutas1.jpg",
    photo2: "../../res/sanabria/rutas2.jpg",
    web: "https://www.turismosanabria.es/senderismo.php",
    map: ""
}]

//culebra

let culebraList = [{
    id: "lobo", name: "Centro del Lobo Ibérico",
    description: "El Centro del Lobo Ibérico de CyL - Félix Rodríguez de la Fuente es un recurso educativo y de dinamización socioeconómica ligado al Plan de Conservación y Gestión del Lobo en Castilla y León. Ubicado en el noroeste de la provincia de Zamora, está situado en un Monte de Utilidad Pública de la localidad de Robledo de Sanabria (Puebla de Sanabria), con una superficie de 21 has.",
    photo1: "../../res/culebra/lobo1.png",
    photo2: "../../res/culebra/lobo2.png",
    web: "https://centrodellobo.es/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.3292336731915!2d-6.576120384555272!3d41.99320927921337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41606af9fa6fe7%3A0xc9b8907f631099cd!2sCentro%20del%20Lobo%20Ib%C3%A9rico%20F%C3%A9lix%20Rodr%C3%ADguez%20de%20la%20Fuente!5e0!3m2!1ses!2ses!4v1679852262569!5m2!1ses!2ses"
}, {
    id: "rutas", name: "Rutas a pie",
    description: "Distintas rutas en la zona de Villardeciervos para disfrutar del paisaje característico de La Culebra",
    photo1: "../../res/culebra/rutas1.png",
    photo2: "../../res/culebra/rutas2.png",
    web: "https://turismovillardeciervos.com/senderismo/",
    map: ""
}, {
    id: "alojamiento", name: "Hospedaje en la zona",
    description: "Establecimientos, hoteles y casas rurales en la Sierra de la Culebra",
    photo1: "../../res/culebra/hotel1.png",
    photo2: "../../res/culebra/hotel2.png",
    web: "https://turismovillardeciervos.com/servicios-turismo/",
    map: ""
}, {
    id: "miradores", name: "Miradores de Fauna",
    description: "Son miradores o zonas autorizadas por la Junta de Castilla y León, para poder avistar fauna desde estas zonas es necesario contar con prismáticos, telescopios o equipos similares, llevar ropa adecuada sin colores llamativos para no denotar nuestra presencia y también la nula emisión de ruidos y malas conductas que podrían asustar y alterar el orden normal de conducta de los animales, tener presente que estaremos a distancias respetables de los animales y no debemos acercarnos más, estaremos en estos puntos establecidos.",
    photo1: "../../res/culebra/mirador1.png",
    photo2: "../../res/culebra/mirador2.png",
    web: "https://turismovillardeciervos.com/miradores-de-fauna/",
    map: ""
}]


//villafafilalist

let villafafilalist = [{
    id: "lagunas", name: "Reserva Natural Lagunas de Villafáfila",
    description: "Las lagunas se sitúan en una zona de encuentro de las tierras de Campos y del Pan, correspondiente al interfluvio de los ríos Esla y Valderaduey. Este espacio se caracteriza por ser una pequeña depresión (675 m de altitud) circundada por suaves tesos, que ha dado lugar a una pequeña cuenca endorreica que es vertebrada a duras penas por el río Salado. La configuración de este territorio da lugar a la formación de balsas de agua de escasa profundidad y superficie menguante en función de la mayor o menor insolación de la época del año.",
    photo1: "../../res/villafafila/lagunas1.png",
    photo2: "../../res/villafafila/lagunas2.png",
    web: "https://www.turismocastillayleon.com/es/espaciosnaturales/reserva-natural-lagunas-villafafila",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.7392150814476!2d-5.5965501845596!3d41.855439679224006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd385654e5d44991%3A0x81a4e3253a2d1150!2sReserva%20natural%20de%20Lagunas%20de%20Villaf%C3%A1fila!5e0!3m2!1ses!2ses!4v1679853386983!5m2!1ses!2ses"
}, {
    id: "palomares", name: "Palomares",
    description: "Esos gigantes de tapial o adobe, aislados en el medio de la estepa como si fueran vigías del paso de las aves y del lento crecimiento del cereal, prestan sus oquedades o nidales, que sirven a más aves que la paloma para situar sus nidos en un lugar donde la ausencia de árboles, construcciones y accidentes del terreno, impiden en ocasiones a las aves anidar en otro lugar.",
    photo1: "../../res/villafafila/palomar1.png",
    photo2: "../../res/villafafila/palomar2.png",
    web: "https://villafafila.com/palomares/",
    map: ""
}, {
    id: "moral", name: "Iglesia de Santa María del Moral",
    description: " La iglesia Santa María titulada en épocas pasadas Santa María del Moral y sita  en la plaza que da su nombre y en la parte más alta de la villa, es la única existente en la actualidad de tantas iglesias y ermitas que tuvo Villafáfila, a esta iglesia es donde fueron a parar lo poco que se salvo del desmoronamiento paulatino de tantas parroquias. A través de los tiempos, como veremos, ha sufrido gran transformación hasta una ampliación longitudinal a principios del siglo XX.",
    photo1: "../../res/villafafila/moral1.png",
    photo2: "../../res/villafafila/moral2.png",
    web: "https://villafafila.net/iglesiasantamariadelmoral/iglesiasantamariadelmoral.htm",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997025.74616481!2d-24.895645269301664!3d34.31138275768572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3856c4ca24977f%3A0x740e94f122ce9b7f!2sParroquia%20Santa%20Mar%C3%ADa!5e0!3m2!1ses!2ses!4v1679853351213!5m2!1ses!2ses"
}, {
    id: "bodegas", name: "Bodegas Bajas y Altas",
    description: "Sitas en los cerros de la parte noroeste que flanquean el pueblo y rodeadas de tierras de labor se encuentran las bodegas de Villafáfila. Hay dos zonas encarando, a poco trecho de la villa, dos profundas cicatrices en la tierra por las que discurren los caminos el de Santovenia el paisaje nos muestra las Bodegas Bajas o las de Abajo así las denominamos para distinguirlas de la otra zona que remonta está en el camino la Barca nombrándolas como Bodegas Altas o las de Arriba, en número considerable.",
    photo1: "../../res/villafafila/bodegas1.png",
    photo2: "../../res/villafafila/bodegas2.png",
    web: "https://villafafila.net/bodega/bodega.htm",
    map: ""
}]

//platosList

let platosList = [{
    id: "arroz", name: "Arroz a la Zamorana",
    description: "Intenso donde los haya, pero muy sabroso, el arroz a la zamorana puede llevar panceta, chorizo, picadillo, salchichas frescas y taquitos de jamón, además de una punta de pimentón que suele darle aún más potencia.",
    photo1: "../../res/gastronomia/arroz1.png",
    photo2: "../../res/gastronomia/arroz2.png",
    web: "https://www.directoalpaladar.com/recetas-de-arroces/arroz-a-zamorana-mejor-version-este-potente-arroz-carnes-tradicional",
    map: ""
}, {
    id: "figon", name: "Figones",
    description: "Una elaboración que consiste en rebozar chorizo, jamón cocido y queso en una masa también conocida como pasta Orly.",
    photo1: "../../res/gastronomia/figon1.png",
    photo2: "../../res/gastronomia/figon2.png",
    web: "https://www.recetaslamasia.es/figones/",
    map: ""
}, {
    id: "palomas", name: "Palomas torcaces trufadas",
    description: "Ya está abierta la veda de la paloma torcaz y como mi lema dice, «Del monte a la mesa.». Os dejo la receta de unas palomas torcaces trufadas",
    photo1: "../../res/gastronomia/palomas1.png",
    photo2: "../../res/gastronomia/palomas2.png",
    web: "https://hosteleriaenzamora.com/palomas-torcaces-trufada/",
    map: ""
}, {
    id: "sananton", name: "San Antonada",
    description: "La preparación y el nombre del receta difiere según la zona donde se prepare, aunque la base de la elaboración de este plato es prácticamente igual hay en zonas en las quese le conoce como Olla de San Antón, mientras que en otras como Sanantonada.",
    photo1: "../../res/gastronomia/sanantonada1.png",
    photo2: "../../res/gastronomia/sanantonada2.png",
    web: "https://hosteleriaenzamora.com/sanantonada-zamorana/",
    map: ""
}]

//postresList
let postresList = [{
    id: "feos", name: "Feos Zamoranos",
    description: "Los Feos de Zamora son unas pastas que tienen su origen a finales del S. XIX en la localidad de Cerecinos de Campos, en la comarca de Tierra de Campos, en la provincia de Zamora.",
    photo1: "../../res/postres/feos1.png",
    photo2: "../../res/postres/feos2.png",
    web: "https://elcomidista.elpais.com/elcomidista/2018/05/03/articulo/1525346335_083744.html",
    map: ""
}, {
    id: "aceitadas", name: "Aceitadas",
    description: "Son unas pastas de textura un poco dura, aromatizadas con anís y que no solo están deliciosas sino que huelen a gloria, especialmente durante su horneado. Son perfectas para entonar el cuerpo después de las procesiones nocturnas, cuando se llega a casa con el frío en los huesos, para una merienda en familia o, simplemente, para disfrutar de un bocado dulce cuando el cuerpo nos lo pida.",
    photo1: "../../res/postres/aceitadas1.png",
    photo2: "../../res/postres/aceitadas2.png",
    web: "https://www.recetasderechupete.com/aceitadas-zamoranas-de-semana-santa/29409/",
    map: ""
}, {
    id: "canas", name: "Cañas Zamoranas",
    description: "Una de las recetas de postres típicos de Zamora son las Cañas zamoranas, uno de esos dulces que tienes que probar si o si en la capital zamorana. Las cañas zamoranas son un delicioso postre es muy fácil de preparar y se puede encontrar en cualquier confitería de la provincia zamorana. Estos sabrosos tubos de fino y crujiente hojaldre cubiertos de mucho azúcar y rellenos de crema pastelera.",
    photo1: "../../res/postres/canas1.png",
    photo2: "../../res/postres/canas2.png",
    web: "https://canalcocina.es/receta/canas-zamoranas",
    map: ""
}, {
    id: "rebojo", name: "Rebojo zamorano",
    description: "El curioso es un pan dulce con aspecto similar al de un bizcocho pero con un sabor muy diferente, realmente increíble, un postre medieval que debes probar en Zamora.",
    photo1: "../../res/postres/rebojo1.png",
    photo2: "../../res/postres/rebojo2.png",
    web: "https://www.petitchef.es/recetas/otro/rebojos-zamoranos-fid-1222637",
    map: ""
}]

//ARRIBESVINO

let arribesvinoList = [{
    id: "almaroja", name: "Bodega Almaroja",
    description: "El rojo simboliza vitalidad, coraje, optimismo, rabia, impaciencia, inconformismo, pasión. Estos son solo unos cuantos valores atribuidos a un color tan representativo de la condición humana.",
    photo1: "../../res/ribera/almaroja1.png",
    photo2: "../../res/ribera/almaroja2.png",
    web: "http://almaroja.es/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5177142168873!2d-6.399704184576319!3d41.319354379270486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd39589117efab41%3A0x8742aae841ec1661!2sBodega%20Almaroja!5e0!3m2!1ses!2ses!4v1679856416296!5m2!1ses!2ses"   
}, {
    id: "pastrana", name: "Bodegas Pastrana",
    description: "Bodegas Pastrana nace allí donde el Duero comenzó hace mucho tiempo a verse engalanado por el verdor de la viña. En un espacio natural, Reserva de la Biosfera, nuestros viñedos se enmarcan en el corazón de Los Arribes del Duero. Aquí descubrirás que el tiempo se ralentiza, el carácter aflora a través del terruño, las gentes, sus productos, costumbres o secretos.",
    photo1: "../../res/ribera/pastrana1.png",
    photo2: "../../res/ribera/pastrana2.png",
    web: "https://www.bodegaspastrana.es/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.589557064277!2d-6.397015584576396!3d41.31779177927059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd395890c3bdcfd7%3A0x3ab5fca679f444dd!2sBodegas%20Pastrana!5e0!3m2!1ses!2ses!4v1679861525506!5m2!1ses!2ses"
}, {
    id: "bandera", name: "Virgen de la Banderá",
    description: "La Bodega Cooperativa Virgen de la Bandera se encuentra enclavada en el corazón del parque natural Arribes del Duero, en el suroeste de la provincia de Zamora, en la localidad de Fermoselle.",
    photo1: "../../res/ribera/bandera1.png",
    photo2: "../../res/ribera/bandera2.png",
    web: "https://doarribes.es/cooperativa-virgen-de-la-bandera/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.525064629097!2d-6.3978277843309845!3d41.31919450818238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd39589735fd177b%3A0x77c935bc8409bcea!2sCooperativa%20Vin%C3%ADcola%20Virgen%20de%20la%20Bandera!5e0!3m2!1ses!2ses!4v1679861553630!5m2!1ses!2ses"
}, {
    id: "jimbro", name: "Bodegas JIMBRO",
    description: "JIMBROWORLD nace del sueño de un grupo de amigos, amantes de la naturaleza, de elaborar vinos y otros productos naturales en espacios protegidos de gran valor ecológico. El parque Natural de las Arribes del Duero es un espacio natural único, con una gran biodiversidad de flora y fauna, donde el Duero hace frontera con Portugal. Y ha sido a orillas del Rio Duero donde en el 2010 se dieron los primeros pasos del proyecto y nace JIMBROWORLD.",
    photo1: "../../res/ribera/jimbro1.png",
    photo2: "../../res/ribera/jimbro2.png",
    web: "https://www.jimbro.es/?lang=es",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1286247.2135519234!2d-7.617319124929564!3d39.58058852756885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd395954aa33cab3%3A0x153bd8cae07dc128!2sBODEGAS%20JIMBRO!5e0!3m2!1ses!2ses!4v1679861626480!5m2!1ses!2ses"
}]
//TIERRADEVINO

let tierradevinoList = [{
    id: "do", name: "Tierras del vino Denominación",
    description: "La Comarca de “Tierra del Vino” se encuentra situada en ambas márgenes del río Duero a su paso por la provincia de Zamora, y está recorrida de norte a sur por la romana Vía de la Plata. Comprende una superficie total de 1.799 Km. cuadrados distribuidos entre un total de 56  municipios, 46 en la provincia de Zamora y 10 en la provincia de Salamanca.",
    photo1: "../../res/tierrasdelvino/do1.png",
    photo2: "../../res/tierrasdelvino/do2.png",
    web: "https://www.tierradelvino.net/",
    map: ""
}, {
    id: "soto", name: "Bodegas El Soto",
    description: "Viñedo situado en la Comarca de Campeán, Tierra del Vino, en la provincia de Zamora y en uno de los valles vertientes al Río Duero, donde hemos creado un proyecto serio, estable y responsable con nuestra región y sus habitantes.",
    photo1: "../../res/tierrasdelvino/soto1.png",
    photo2: "../../res/tierrasdelvino/soto2.png",
    web: "https://bodegaselsoto.com/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.794518566989!2d-5.775800184330161!3d41.35681980585206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd39271969389a6f%3A0x376927f97862d2a5!2sBodega%20El%20Soto!5e0!3m2!1ses!2ses!4v1679862271379!5m2!1ses!2ses"
}, {
    id: "bocos", name: "Señorío de Bocos",
    description: "El vino 'Señorío de Bocos' no sólo es placer para los sentidos, sino también medicina y energía para el cuerpo y la mente.",
    photo1: "../../res/tierrasdelvino/bocos1.png",
    photo2: "../../res/tierrasdelvino/bocos2.png",
    web: "http://www.senoriodebocos.com/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.4000155530225!2d-5.590703965112304!3d41.256625500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd38d1ad6be95bcd%3A0x971802d2e31508e9!2sSe%C3%B1or%C3%ADo%20de%20Bocos%2C%20S.A.%20(Bodega%20en%20Villamor%20de%20los%20Escuderos)!5e0!3m2!1ses!2ses!4v1679862307166!5m2!1ses!2ses"
}, {
    id: "cenit", name: "Viñas del Cénit",
    description: "En la milenaria comarca de la Tierra del Vino de Zamora, enriquecida por el paso de peregrinos que caminan desde hace siglos por la Vía de la Plata, Bodegas Viñas del Cenit cobra sentido a través de algunos de los viñedos centenarios más singulares de España. Viñas del Cenit, nace en 2006 con la vocación de mantener el incalculable patrimonio vinícola de la zona y convertirlo en vinos inolvidables.",
    photo1: "../../res/tierrasdelvino/cenit1.png",
    photo2: "../../res/tierrasdelvino/cenit2.png",
    web: "https://www.bodegascenit.com/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.920094024372!2d-5.7761955843302255!3d41.354090506021045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd39272ebb6e0861%3A0x95d4d8c0cb075f75!2sBodega%20Vi%C3%B1as%20del%20C%C3%A9nit!5e0!3m2!1ses!2ses!4v1679862337701!5m2!1ses!2ses"
}]
//TOROVINO

let torovinoList = [{
    id: "denominacion", name: "Denominacion de Toro",
    description: "Los vinos de Toro cuentan con una gran tradición. Sus orígenes son anteriores al asentamiento de los romanos y cruzaron el océano de la mano de Colón.",
    photo1: "../../res/torovino/do1.png",
    photo2: "../../res/torovino/do2.png",
    web: "https://www.dotoro.com/es/vinos/",
    map: ""
}, {
    id: "cyan", name: "Bodega Cyan",
    description: "Bodega CYAN es una de las bodegas más reconocidas y admiradas, por la crítica nacional e internacional, por la calidad de sus vinos desde que se fundó en 1999. A tan solo 12 km de la localidad zamorana de Toro el paisaje adopta las formas onduladas de estas tierras con laderas de pendiente ligera y suaves colinas. ",
    photo1: "../../res/torovino/cyan.png",
    photo2: "../../res/torovino/cyan2.png",
    web: "https://bodegacyan.es/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.216216318933!2d-5.485415184328407!3d41.43452990103381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd38c22c095957f7%3A0xc624fcab7126339c!2sBodega%20Cyan!5e0!3m2!1ses!2ses!4v1679863615995!5m2!1ses!2ses"
}, {
    id: "liberalia", name: "Liberalia Enológica",
    description: "Liberalia es una Bodega Familiar situada en el ámbito de la histórica y prestigiosa Denominación de Origen Toro , provincia de Zamora (España). Comenzó su actividad de elaboración de vinos singulares y de alta calidad en el año 2000. Previamente y desde el año 1996, Juan Antonio Fernández, su propietario, fiel a su profesión de Ingeniero Agrónomo, fue adquiriendo y organizando los viñedos, cuya edad oscila entre 30 y 100 años.",
    photo1: "../../res/torovino/liberalia1.png",
    photo2: "../../res/torovino/liberalia2.png",
    web: "https://www.liberalia.es/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.708153968258!2d-5.372410384326176!3d41.53226199496378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3894c28f94f8a7%3A0x3f572778c096b957!2sBodega%20Liberalia%20Enol%C3%B3gica%20S%20L!5e0!3m2!1ses!2ses!4v1679863537002!5m2!1ses!2ses"
}, {
    id: "eliseo", name: "Campo Eliseo",
    description: "Bodegas campo eliseo, es la suma de conocimiento y pasión, de tradición y innovación. es toro y es rueda. es el lugar donde nacen grandes vinos... es autentico y refleja el carácter fuerte de esta zona. ",
    photo1: "../../res/torovino/eliseo1.png",
    photo2: "../../res/torovino/eliseo2.png",
    web: "https://www.campoeliseo.es/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.1820224744456!2d-4.912267667834767!3d41.413567236012675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd475b5916331921%3A0xfb9f1b8d82e3ecde!2sBodega%20Campo%20El%C3%ADseo!5e0!3m2!1ses!2ses!4v1679863657780!5m2!1ses!2ses"
}]
//vallesList

let vallesList = [{
    id: "denominacion", name: "Denominación de Origen",
    description: "Vino de Calidad de los Valles de Benavente, integrada por representantes de los viticultores, elaboradores y embotelladores, con el objetivo de que el nombre geográfico de Benavente sea incluido en la relación de las comarcas vitivinícolas españolas con derecho a utilizar en sus vinos la mención 'Vino de Calidad'",
    photo1: "../../res/valles/denominacion1.png",
    photo2: "../../res/valles/denominacion2.png",
    web: "http://vallesdebenavente.org/default.html",
    map: ""
}, {
    id: "otero", name: "Bodegas Otero",
    description: "Bodega familiar que ha intentado acomodarse a los cambios en el mundo del vino. Comenzamos (1906) vendiendo graneles, en los años 60 empezamos a embotellar vinos de mesa, hasta la actualidad con vinos jóvenes, crianzas y reservas, manteniendo siempre la elaboración con las uvas propias o de los mismos viticultores.",
    photo1: "../../res/valles/otero1.png",
    photo2: "../../res/valles/otero2.png",
    web: "https://www.bodegasotero.es/#",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.956450758366!2d-5.677044784315546!3d42.00121016567947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd384c68d62a09c5%3A0x341398a257bcd5!2sBodegas%20Otero!5e0!3m2!1ses!2ses!4v1679864974422!5m2!1ses!2ses"
}, {
    id: "viriatus", name: "Bodegas Viriatus",
    description: "Los vinos de Toro cuentan con una gran tradición. Sus orígenes son anteriores al asentamiento de los romanos. En la Edad Media, el vino fue considerado un bien de gran aprecio, siéndole concedido privilegios reales que permitían su comercialización en ciudades donde la venta de otros vinos estaba prohibida. Se llenaron con estos vinos bodegas reales y navíos que alcanzarían las tierras del nuevo mundo. La evolución que ha experimentado en las últimas décadas les ha llevado a ser protagonistas de la crítica de vinos tanto a nivel nacional como internacional.",
    photo1: "../../res/valles/viriatus1.png",
    photo2: "../../res/valles/viriatus2.png",
    web: "http://viriatus.es/",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.423768659602!2d-5.873199084314752!3d42.034092463616304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd39bf7b4b48b17b%3A0x4869872983136091!2sBodegas%20Viriatus!5e0!3m2!1ses!2ses!4v1679864872266!5m2!1ses!2ses"
}, {
    id: "verdes", name: "Bodegas Verdes",
    description: "Esta enclavada en la localidad de Santibáñez de Vidriales, al frente de la misma y en la gerencia se encuentran Tomás y Elvira Verdes, la bodega se encuentra en la misma entrada del pueblo, tomando como referencia Benavente, esta bodega se dedica al elaborado y embotellado de vino, tanto en jóvenes como en crianzas al disponer para ello de barricas de roble americano y frances.",
    photo1: "../../res/valles/verdes1.png",
    photo2: "../../res/valles/verdes2.png",
    web: "https://www.facebook.com/people/Bodegas-VerdesSL/100033858556952/?locale=es_ES",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.681078513949!2d-6.008587084552844!3d42.07145487920743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd39bf6798940ef7%3A0x39779a5f1d890a94!2sBodegas%20Verdes%20%2CS.L.!5e0!3m2!1ses!2ses!4v1679864845281!5m2!1ses!2ses"
}]

//CATEGORIAS
let categories = [{
    name: "museos", list: museosList
}, {
    name: "romanico", list: romanicoList
}, {
    name: "modernismo", list: modernismoList
}, {
    name: "noche", list: nocheList
}, {
    name: "rutas", list: rutasList
}, {
    name: "arribesvino", list: arribesvinoList
}, {
    name: "tierradevino", list: tierradevinoList
}, {
    name: "torovino", list: torovinoList
}, {
    name: "valles", list: vallesList
}, {
    name: "platos", list: platosList
}, {
    name: "postres", list: postresList
}, {
    name: "arribes", list: arribesList
}, {
    name: "benavente", list: benaventeList
}, {
    name: "culebra", list: culebraList
}, {
    name: "sanabria", list: sanabriaList
}, {
    name: "toro", list: toroList
}, {
    name: "villafafila", list: villafafilalist
}]