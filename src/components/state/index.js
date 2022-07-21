import {createGlobalState} from 'react-hooks-global-state';

const {setGlobalState, useGlobalState} = createGlobalState({
    residential: true,
    corporate: false,
    getIntouch: false,
    sell: false,
    buy: false,
    rent: false,
    realEstate: false,
    management: false,
    aboutUs: false,
    offices: false,
    commercialSpace: false,
    industrialSpace: false,
    mobileMenu: false,
    
});

export {useGlobalState, setGlobalState};