import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import Style from "./contact.module.css"

export default function Contact(){
    return(
        <>
            <ul className={Style.location}>
                <li>
                    <i><FaPhone /> +244 927 - 379 - 014</i>
                </li>
                <li>
                <i>< MdEmail /> francisco@gmail.com</i>
                </li>
                <li>
                <i><IoLocation /> Angola-Luanda</i>
                </li>
            </ul>
        </>
    )
}