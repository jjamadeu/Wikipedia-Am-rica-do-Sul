import React, { useState } from "react";
import FormSelect from "./formSelect.jsx";
import "./estilo.css"
import BandeiraPais from "./bandeiraPais.jsx";
import Paragrafo from "./paragrafo.jsx";


export default function Wiki(props) {

    const [pais, setPais] = useState('')
    const paises = [
        { value: "", text: "Escolha um País" },
        { value: "ARG", text: "Argentina" },
        { value: "BOL", text: "Bolívia" },
        { value: "BRA", text: "Brasil" },
        { value: "CHI", text: "Chile" },
        { value: "COL", text: "Colômbia" },
        { value: "ECU", text: "Equador" },
        { value: "GUY", text: "Guiana" },
        { value: "GUF", text: "Guiana Francesa" },
        { value: "PAR", text: "Paraguai" },
        { value: "PER", text: "Peru" },
        { value: "SUR", text: "Suriname" },
        { value: "URU", text: "Uruguai" },
        { value: "VEN", text: "Venezuela" },
    ];

    return (
        <>
            <body>
                <footer>
                    <h1>Wikipedia dos Países</h1>
                </footer>

                <div id='container'>

                    <div id="escolhaPaises">

                        <FormSelect label="Escolha um País da America Do Sul!"
                            idSelect="pais"
                            opcoesSelect={paises}
                            opcaoSelecionada={pais}
                            onChangeSelect={setPais}
                        />
                    </div>

                    <div id="imagemPais">
                        <p id="bandeiraPais"><span>Bandeira do País</span></p>
                        <BandeiraPais
                            imgPais={pais}
                        />
                    </div>  
        
                </div>

                <div id="paragrafo">
                    <Paragrafo label="História do País"
                        textoPais={pais}
                    />
                </div>
            </body>
        </>
    )

}