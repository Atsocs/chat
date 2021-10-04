import './LeftFrame.css'
import React from "react";

class LeftFrame extends React.Component {
    render() {
        return(
            <div>
                <div className="user-profile">
                Perfil de usuário
                </div>
                <div className="search-bar">
                Barra de pesquisa
                </div>
                <div className="contacts">
                Contatos
                </div>
            </div>     
        )
    }
}

export default LeftFrame;

