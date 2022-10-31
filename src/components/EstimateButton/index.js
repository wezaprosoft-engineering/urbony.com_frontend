import { Estimation } from "../WelcomeSection/Welcome.styles";
import { t } from "i18next";
import Estimator from '../../assets/images/estimation.svg'
import { useNavigate } from "react-router-dom";

const Estimate = () =>{
    const navigate = useNavigate()
    return(
        <Estimation onClick = {()=>navigate('/free-estimation')}>
            <img src={Estimator} alt='estimation'
                 style={{
                    height: 30,
                    marginLeft: 20,
                    marginRight: 10
                 }}/>{t('estimation.est')}
        </Estimation>
    )
}

export default Estimate;