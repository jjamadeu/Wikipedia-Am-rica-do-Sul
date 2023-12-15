import React from "react";
import "./bandeiraPais.css";
import ImagemPaisARG from "../bandeiras/bandeiraARG.png";
import ImagemPaisBOL from "../bandeiras/bandeiraBOL.png";
import ImagemPaisBRA from "../bandeiras/bandeiraBRA.jpg";
import ImagemPaisCHI from "../bandeiras/bandeiraCHI.png";
import ImagemPaisCOL from "../bandeiras/bandeiraCOL.png";
import ImagemPaisECU from "../bandeiras/bandeiraECU.png";
import ImagemPaisGUY from "../bandeiras/bandeiraGUY.png";
import ImagemPaisMEX from "../bandeiras/bandeiraMEX.png";
import ImagemPaisPAR from "../bandeiras/bandeiraPAR.png";
import ImagemPaisPER from "../bandeiras/bandeiraPER.png";
import ImagemPaisSUR from "../bandeiras/bandeiraSUR.png";
import ImagemPaisURU from "../bandeiras/bandeiraURU.png";
import ImagemPaisVEN from "../bandeiras/bandeiraVEN.png";

export default function BandeiraPais(props) {

    if (props.imgPais == "ARG") {
        return (
            <img src={ImagemPaisARG} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "BOL") {
        return (
            <img src={ImagemPaisBOL} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "BRA") {
        return (
            <img src={ImagemPaisBRA} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "CHI") {
        return (
            <img src={ImagemPaisCHI} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "COL") {
        return (
            <img src={ImagemPaisCOL} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "ECU") {
        return (
            <img src={ImagemPaisECU} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "GUY") {
        return (
            <img src={ImagemPaisGUY} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "MEX") {
        return (
            <img src={ImagemPaisMEX} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "PAR") {
        return (
            <img src={ImagemPaisPAR} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "PER") {
        return (
            <img src={ImagemPaisPER} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "SUR") {
        return (
            <img src={ImagemPaisSUR} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "URU") {
        return (
            <img src={ImagemPaisURU} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
    if (props.imgPais == "VEN") {
        return (
            <img src={ImagemPaisVEN} alt="Imagem do Pais Selecionado" height="130" width="250" border="1" />
        )
    }
}