export const restaurantsData = [
    {
        id: 'frisby',
        imgLogo: 'frisby.png?alt=media&token=444cab70-1f9c-4900-b915-51411afa6c41',
        nameRestaurant: 'Frisby',
        text: `Podrás adquirir un paquete sorpresa
        con productos como Frisby Snack`,
        category: 'rapida',
        urlWhatsapp: 'https://api.whatsapp.com/send?phone=573002640177&text=Me%20gustaria%20obtener%20su%20Packy%20de%20hoy'       
    },
    {
        id: 'mundoverde',
        imgLogo: 'mundo-verde.png?alt=media&token=298df42c-3aec-4283-b879-72abfa5da4d9',
        nameRestaurant: 'Mundo Verde',
        text:  `Podrás adquirir un paquete sorpresa
        con productos como ensalada Cesar`,
        category: 'saludable',
        urlWhatsapp: 'https://api.whatsapp.com/send?phone=573002640177&text=Me%20gustaria%20obtener%20su%20Packy%20de%20hoy'                
    },
    {
        id: 'ilforno',
        imgLogo: 'ilforno.png?alt=media&token=fc07eaa4-3427-48dc-993b-86cda4014cbe',
        nameRestaurant: 'Il forno',
        text: `Podrás adquirir un paquete sorpresa
        con productos como lasagna de pollo`,
        category: 'italiana',
        urlWhatsapp: 'https://api.whatsapp.com/send?phone=573002640177&text=Me%20gustaria%20obtener%20su%20Packy%20de%20hoy'                    
    },
    {
        id: 'losportenos',
        imgLogo: 'portenos.png?alt=media&token=332ce9e7-5888-4ae5-8274-7c6f6cec7ba5',
        nameRestaurant: 'Los Porteños',
        text: `Podrás adquirir un paquete sorpresa
        con productos como Los Porteños`,
        category: 'saludable',
        urlWhatsapp: 'https://api.whatsapp.com/send?phone=573002640177&text=Me%20gustaria%20obtener%20su%20Packy%20de%20hoy'                               
    },
    {
        id: 'cosechas',
        imgLogo: 'cosechas.png?alt=media&token=e4bafa7c-cc27-442b-b6d3-d6d93a6ba5dc',
        nameRestaurant: 'Cosechas',
        text: `Podrás adquirir un paquete sorpresa
        con productos como Cosechas`,
        category: 'saludable',
        urlWhatsapp: 'https://api.whatsapp.com/send?phone=573002640177&text=Me%20gustaria%20obtener%20su%20Packy%20de%20hoy'                                
    },
    {
        id: 'srwok',
        imgLogo: 'wok.png?alt=media&token=597fd76e-0a26-4760-8535-7d0b8d44d92d',
        nameRestaurant: 'Sr. Wok',
        text: `Podrás adquirir un paquete sorpresa
        con productos como Sr. Wok`,
        category: 'oriental',
        urlWhatsapp: 'https://api.whatsapp.com/send?phone=573002640177&text=Me%20gustaria%20obtener%20su%20Packy%20de%20hoy'                                
    }
];

export const restaurantProduct = {
    frisby: {
        nameRestaurant: 'Frisby',
        price: 6000,
        imgFood: 'frisby-packy.gif?alt=media&token=e1e64379-b006-47ec-9a89-03423c207bba',
        surpriseDescription: `Podrás encontrar preparados con pollo, como hamburguesas, ensaladas y pollo asado. Haz clic en el enlace y contacta con el restaurante directamente para obtener tu Packy.`,
    },
    mundoverde: {
        nameRestaurant: 'Mundo Verde',
        price: 8000,
        imgFood: 'mundo-verde-packy.jpg?alt=media&token=93507448-e193-4405-ac85-0328ed0f3f22',
        surpriseDescription: `Podrás encontrar ensaladas, wraps y bowls saludables a un precio muy económico. Haz clic en el enlace y contacta con el restaurante directamente para obtener tu Packy.`,
    },
    ilforno: {
        nameRestaurant: 'Il forno',
        price: 10000,
        imgFood: 'ilforno-packy.gif?alt=media&token=e2bc7388-decb-49c4-8b86-c986707d006c',
        surpriseDescription: `Podrás encontrar ensaladas, pastas y pizzas. Haz clic en el enlace y contacta con el restaurante directamente para obtener tu Packy.`,
    },
    losportenos: {
        nameRestaurant: 'Los Porteños',
        price: 6000,
        imgFood: 'los-portenos-packy.gif?alt=media&token=ea4c08ca-9046-45c3-aed2-2dd9ed4aebff',
        surpriseDescription: `Las mejores medias lunas de Medellín y una deliciosa sección de panadería argentina. Haz clic en el enlace y contacta con el restaurante directamente para obtener tu Packy.`,
    },
    cosechas: {
        nameRestaurant: 'Cosechas',
        price: 3000,
        imgFood: 'cosechas-packy.gif?alt=media&token=3d323ab4-2b6e-41e7-85af-810e40e48362',
        surpriseDescription: `Todas las combinaciones de frutos posibles en un batido. Haz clic en el enlace y contacta con el restaurante directamente para obtener tu Packy.`,
    },
    srwok: {
        nameRestaurant: 'Sr. Wok',
        price: 6000,
        imgFood: 'srwork-packy.gif?alt=media&token=6be4f4a6-bd0e-46de-885e-a6fe439e61ce',
        surpriseDescription: 'Comida con inspiración oriental. Podrás elegir entre variedades de arroz, pastas, carnes y pollos. Haz clic en el enlace y contacta con el restaurante directamente para obtener tu Packy.',
    }
}

export const restaurantsList= [
    {
        id: '15254',        
        kindFood: 'Todos',
        value: '',            
    },
    {
        id: '1254',        
        kindFood: 'Saludable',
        value: 'saludable',            
    },
    {
        id: '2455ok',
        kindFood: 'Oriental',
        value: 'oriental',            
    },
    {
        id: '5458',
        kindFood: 'Italiana',
        value: 'italiana',              
    }, 
    {
        id: 'jgs54',
        kindFood: 'Rápida',
        value: 'rapida',              
    }, 
];
