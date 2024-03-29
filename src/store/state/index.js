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
    homeBuy: true,
    homeRent: false,
    sellcard1: true,
    sellcard2:false,
    sellcard3: false,
    popularcard1: true,
    popularcard2:false,
    popularcard3: false,
    forsellcard1: true,
    forsellcard2:false,
    forsellcard3: false,
    lastsellcard1: true,
    lastsellcard2:false,
    lastsellcard3: false,
    corporatecard1: true,
    corporatecard2:false,
    corporatecard3: false,
    loggedIn: false,
    name: undefined,
    free: true,
    charge: undefined,
    loading: false,
    checked: false,
  
});

export {useGlobalState, setGlobalState};