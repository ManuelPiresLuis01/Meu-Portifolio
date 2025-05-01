import Style from "./card.module.css"

export default function Card() {
    return (
        <div className={Style.card}>
            <div className={Style.photo}></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Ver projecto</button>
        </div>
    )
}