import React from "react";
import Properties from "../../components/Properties";
import { useTranslation } from "react-i18next";
const MyProperties = () =>{

    const{t} = useTranslation()
    return(<>
        <Properties lineTitle={t('myProperties.sell')}/>
        <Properties lineTitle={t('myProperties.rent')}/>
    </>
        
    )
      
}
export default MyProperties;