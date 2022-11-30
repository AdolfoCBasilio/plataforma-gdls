import { FC } from "react";
import { useNavigate } from "react-router-dom";

//styles
import "./_layoutCardUser.scss";

const imgDefault = 'https://scontent.fpaz1-1.fna.fbcdn.net/v/t1.6435-9/70650989_3120369567979900_5467780860033892352_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeExbnMLBgDuQmMzsixddv_KSmc5G4ikBLxKZzkbiKQEvMrIBhmxwrkyaoh8Vz-ji4HE9DRSRebivbbUwe44PUFS&_nc_ohc=LAI356u2KjAAX8sZnpk&_nc_ht=scontent.fpaz1-1.fna&oh=00_AfB7bQPirpqSr65v6y3LO7XibP2AxXfskehhoGWZ1S_l1g&oe=639F8F4C'

interface LayoutCardUserProps {
    imgUser?: string;
    nextPath?: string;
}

export const LayoutCardUser: FC<LayoutCardUserProps> = ({
    imgUser = imgDefault,
    nextPath = "/login"
}) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate(nextPath)
    }

    return (
        <div className="mobile__card_content">
            <div className="mobile__card-picture">
                <img
                    loading="lazy"
                    className="mobile__picture-profile"
                    src={imgUser}
                    alt="pictureAdolfo" />
            </div>
            <div className="mobile__card-text">
                <hr />
                <p>Soy <strong>Adolfo C. Basilio Geniz desarrollador FrontEnd</strong>
                    <br />con +4 años desarrollando hardware y software
                    <br />para empresas nacionales e internacionales</p>
                <button onClick={handleLogin}>Log in</button>

            </div>
        </div>
    )
}
