const Accesorios = [
    { id: 1, nombre: 'Funda 11 pro', precio: 3000, categoria: 'fundas', imagen: '../img/11-pro.jpg', descripcion: 'Protege tu iPhone 11 con estilo con esta funda premium diseñada específicamente para este modelo. Hecha de materiales duraderos y resistentes, ofrece una protección completa contra golpes y arañazos.'},
    { id: 2, nombre: 'Funda 12 pro max', precio: 3500, categoria: 'fundas', imagen: '../img/12-pro-max.jpeg', descripcion: 'Dale a tu iPhone 12 Pro Max una protección óptima con esta funda diseñada ergonómicamente. Fabricada con materiales de alta calidad, esta funda ofrece una combinación perfecta de estilo y durabilidad.' },
    { id: 3, nombre: 'Funda 13 pro', precio: 3800, categoria: 'fundas', imagen: '../img/13-pro.jpeg', descripcion: 'La funda perfecta para tu iPhone 13 Pro. Su diseño delgado y elegante no añade volumen adicional, pero proporciona una protección sólida contra caídas y golpes. Disponible en varios colores para adaptarse a tu estilo.' },
    { id: 4, nombre: 'Funda 14 pro', precio: 4000, categoria: 'fundas', imagen: '../img/14-pro.png' ,descripcion: 'Mantén tu iPhone 14 Pro seguro y protegido con esta funda resistente y elegante. Hecha de materiales de alta calidad, esta funda ofrece una protección confiable sin comprometer el estilo.'},
    { id: 5, nombre: 'Funda 15 pro max', precio: 4800, categoria: 'fundas', imagen: '../img/15-pro-max.avif', descripcion: 'Protege tu iPhone 15 Pro Max de los golpes y arañazos diarios con esta funda resistente. Su diseño delgado y ligero se adapta perfectamente a tu dispositivo sin agregar volumen adicional.' },
    { id: 6, nombre: 'Airpods 2da Generación', precio: 20000, categoria: 'auriculares', imagen: '../img/airp-2da-gen.jpg' ,descripcion: 'Experimenta la libertad de la música inalámbrica con los AirPods de segunda generación. Con una calidad de sonido excepcional y una conexión instantánea, estos auriculares son perfectos para tu estilo de vida activo.'},
    { id: 7, nombre: 'Airpods 3ra Generación', precio: 30000, categoria: 'auriculares', imagen: '../img/airp-3ra-gen.jpg', descripcion: 'Sumérgete en un mundo de sonido envolvente con los AirPods de tercera generación. Con cancelación activa de ruido y un ajuste cómodo, estos auriculares te permiten disfrutar de tu música favorita sin distracciones.' },
    { id: 8, nombre: 'Cargador inalámbrico Belkin 15w', precio: 18000, categoria: 'cargadores', imagen: '../img/cargador-inalambrico-belkin-boost-charge-15w-blanco.jpg',descripcion: 'Carga tu dispositivo de forma rápida y eficiente con este cargador inalámbrico de 15W de Belkin. Su diseño elegante y compacto lo convierte en el complemento perfecto para tu escritorio o mesita de noche.' },
    { id: 9, nombre: 'Cargador magsafe duo', precio: 20000, categoria: 'cargadores', imagen: '../img/cargador-magsafe-duo.jpg', descripcion: 'Carga dos dispositivos a la vez con el cargador MagSafe Duo de Apple. Con una potencia de carga rápida y una base plegable, este cargador es ideal para viajes y uso diario.' },
    { id: 10, nombre: 'Cargador Original 5w', precio: 15000, categoria: 'cargadores', imagen: '../img/cargador-original-iphone-5w-5v.jpg', descripcion: 'Mantén tu iPhone cargado y listo para usar con este cargador original de 5W de Apple. Diseñado para proporcionar una carga rápida y segura, es perfecto para uso en casa, la oficina o mientras viajas.' },
    { id: 11, nombre: 'Cargador Original 20w', precio: 20000, categoria: 'cargadores', imagen: '../img/cargador-original-iphone-20.jpg', descripcion: 'Carga tu iPhone hasta un 50% más rápido con el cargador original de 20W de Apple. Su diseño compacto y portátil lo hace perfecto para cargar tu dispositivo sobre la marcha.' },
];


export const getAccessories = new Promise((resolve) => {
    setTimeout(() => {
        resolve(Accesorios);
        console.log('enviando datos');
    }, 2000);
});

export const getAccessorie = (id) => {
    id = parseInt(id);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const accessory = Accesorios.find((accesorio) => accesorio.id === id);
            if (accessory) {
                resolve(accessory);
                console.log(`Accesorio con ID ${id} encontrado.`);
            } else {
                reject(new Error(`No se encontró ningún accesorio con ID ${id}.`));
            }
        }, 2000);
    });
};

export const getAccessoriesByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const accessoriesByCategory = Accesorios.filter(accessory => accessory.categoria === category);
            resolve(accessoriesByCategory);
            console.log(`Datos de accesorios de la categoría ${category} enviados correctamente.`);
        }, 500);
    });
};