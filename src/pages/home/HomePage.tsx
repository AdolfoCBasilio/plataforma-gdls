//hooks
import useMediaQuery from "../../hooks/useMediaQuery";
import { useEffect, useState } from 'react';

//components
import { LayoutCardUser } from "../../components/ui/layoutCardUser";
import { LayoutWeb } from '../../components/ui/layoutWeb';
import Loader from "../../components/ui/loader/Loader";

//styles
import './_homepage.scss';

export const HomePage = () => {
    const [matches] = useMediaQuery("screen and (min-width: 769px)");
    const [render, setRender] = useState(false);

    const validateResponsive = () => matches ? <LayoutWeb /> : <LayoutCardUser />

    //El cliente pidio que se meuestre mas tiempo el loader de carga
    useEffect(() => {
        setTimeout(() => {
            setRender(true)
        }, 3000);
    }, [])

    return (
        <div className="homepage__main-content" >
            {render ? validateResponsive() : <Loader />}
        </div>
    )
}
