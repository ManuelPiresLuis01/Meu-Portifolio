import Style from "./style.module.css"
import img from "../../images/ManuelPiresLuis.jpg"

export default function Header() {
    const image: string = img
    return (
        <header>
            <div className={Style.headerLogo}>
                <img src={image} alt="Manuel Pires Luis" />
            </div>
            <nav className={Style.headerNav}>
                <ul>
                    <li>Sobre</li>
                    <li>Contacto</li>
                    <li className={Style.changeLang}>
                        <select>
                            <option>pt</option>
                            <option>en</option>
                        </select>
                    </li>
                </ul>
            </nav>
        </header>
    )
}