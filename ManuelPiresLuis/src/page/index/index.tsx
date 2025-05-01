import "./index.module.css"
import Header from "../../assets/components/header/header"
import Main from "../../assets/components/main/main"
import About from "../../assets/components/about/about"
import Project from "../../assets/components/project/project"
import Contact from "../../assets/components/contact/contact"

export default function IndexPage() {
    return (
        <>
            <Header /> 
            <Main />
            <About/>
            <Project />
            <Contact />
        </>
    )
}
