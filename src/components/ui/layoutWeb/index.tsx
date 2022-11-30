import { FC } from "react";
import { LayoutCardUser } from "../layoutCardUser";

//styles
import "./_layoutWeb.scss";

//images
import web1 from "../../../assets/images/web1.svg";

interface LayoutWebProps {
    imgReference?: string;
}

export const LayoutWeb: FC<LayoutWebProps> = ({
    imgReference=web1
}) => {
    return (
        <div className="web__card_content">
            <div className="web__card_left">
                <div className="web__card_imageContainer">
                    <img loading="lazy" src={imgReference} alt="web1" />
                </div>
                <div>
                    <h1>Bienvenido a mi prueba </h1>
                    <hr />
                </div>
            </div>
            <div className="web__card_right">
                <div className="web__card_right_container">
                    <LayoutCardUser />
                </div>
            </div>
        </div>
    )
}
