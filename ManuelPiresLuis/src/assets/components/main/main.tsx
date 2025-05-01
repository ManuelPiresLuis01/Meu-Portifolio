import Style from "./main.module.css"
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { RiWhatsappFill } from "react-icons/ri";

export default function Main() {
    return (
        <>
            <div className={Style.main}>
                <div>
                    <div className={Style.image}></div>

                </div>
                <div className={Style.about}>

                    <p className={Style.name}>Ola! sou o Francisco João Antonio</p>
                    <p className={Style.role}>Um designer Gráfico</p>
                    <div className={Style.socialmedia}>
                        <i><PiInstagramLogoFill /></i>
                        <i>< FaFacebook /></i>
                        <i><TbBrandLinkedinFilled /></i>
                        <i><RiWhatsappFill /></i>
                    </div>
                </div>
            </div>
        </>
    )
}