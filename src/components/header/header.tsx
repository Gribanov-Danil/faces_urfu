import headerImg from "../../assets/img/Rectangle 1.jpg"
import "./header.css"

export const Header = () => {
    return (
        <header className="header">
            <img src={headerImg} alt="Картинка будет чуть позже" width="1920" height="400" />
        </header>
    )
}