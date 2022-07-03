import {createGlobalState} from 'react-hooks-global-state';

const {setGlobalState, useGlobalState} = createGlobalState({
    residential: true,
    corporate: false,
});

export {useGlobalState, setGlobalState};