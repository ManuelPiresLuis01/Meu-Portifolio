import Style from "./project.module.css"
import Card from "../cardsProject/card"

export default function Project() {
    return (
        <>
            <section className={Style.projects}>
                <h1>Projectos</h1>
                <br />
                <div className={Style.Project}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </>
    )
} 