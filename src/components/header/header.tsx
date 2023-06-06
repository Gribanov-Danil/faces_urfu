import headerImg from "../../assets/img/cover1920х440.png"
import "./header.css"

export const Header = () => {
    return (
        <header className="header">
            <img src={headerImg} className="logo" alt="Картинка будет чуть позже" width="1920" height="400" />
        </header>
    )
}