import { uid } from 'uid';

const initialState = {
    homes: [
        {
            id:1,
            name: 'FORFAIT LUNE DE MIEL "Rubis"',
            price:"188 000",
            // img:["https://baab.ci/wp-content/uploads/2021/06/HOTEL-ZION-ASSINIE_3_BAAB.jpg"],
            img:["https://cf.bstatic.com/images/hotel/840x460/198/198130855.jpg",'https://baab.ci/wp-content/uploads/2021/06/HOTEL-ZION-ASSINIE_3_BAAB.jpg','https://baab.ci/wp-content/uploads/2021/06/HOTEL-ZION-ASSINIE_3_BAAB.jpg',"https://coucoue-lodge.com/wp-content/uploads/2017/02/Coucoue-Lodge-chambre-lagune-vue-lagune-18.jpg"],
        },
        {   
            id:8,
            name: 'CHAMBRE CLASSIQUE pour 2 personnes',
            price:"88 000",
            img:["https://coucoue-lodge.com/wp-content/uploads/2017/02/Suite-Lodge-Coucoue-Lodge-Hotel-Assinie-12-1-1030x685.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg"],
            images:['https://baab.ci/wp-content/uploads/2021/06/HOTEL-ZION-ASSINIE_3_BAAB.jpg','https://baab.ci/wp-content/uploads/2021/06/HOTEL-ZION-ASSINIE_3_BAAB.jpg'],
        },
        {
            id:2,
            name: 'CHAMBRE CLASSIQUE pour 2 personnes',
            price:"188 000",
            img:["https://coucoue-lodge.com/wp-content/uploads/2017/02/Coucoue-Lodge-chambre-lagune-vue-lagune-18.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg"]
        },
        {
            id:3,
            name: 'SUITE FAMILIALE',
            price:"188 000",
            img:["https://coucoue-lodge.com/wp-content/uploads/2017/02/Suite-Lodge-Coucoue-Lodge-Hotel-Assinie-01-1-1030x685.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg"]
        },
        {
            id:4,
            name: 'SUITE EXECUTIVE',
            price:"188 000",
            img:["https://i0.wp.com/buzinessmaps.africa/wp-content/uploads/2021/03/Coucoue-Lodge-Hotel-Assinie-suite-vue-mer-chambre-familiale-04.jpg?fit=900%2C599&ssl=1","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg"]
        },
        {
            id:5,
            name: 'SUITE EXECUTIVE SEA VIEW',
            price:"188 000",
            img:["https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-8-752x500.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg"]
        },
        {
            id:6,
            name: 'FORFAIT LUNE DE MIEL "Emeraude"',
            price:"188 000",
            img:["https://coucoue-lodge.com/wp-content/uploads/2017/02/Coucoue-Lodge-Hotel-Assinie-suite-vue-mer-chambre-familiale-03.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg"]
        },
        {
            id:7,
            name: 'SUITE EXECUTIVE',
            price:"188 000",
            img:["https://coucoue-lodge.com/wp-content/uploads/2019/02/Suite-plage-2023-Hotel-Assinie-Coucoue-Plage-48-1030x685.webp","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg","https://www.yancady.com/wp-content/uploads/2019/09/H%C3%B4tel-Coucou%C3%A9-Lodge-Assinie-53-752x500.jpg"]
        },
    ],
    home:{},
}

export function homeReducer(state = initialState, action) {
    switch (action.type) {
        case "GET-HOMES": {
            return {
                ...state,homes : action.payload
            }
        }
        case "GET-HOME": {
            return {
                ...state,home : action.payload
            }
        }
        default: {
            return state
        }
    }
  
}