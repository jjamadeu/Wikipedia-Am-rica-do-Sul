import React from "react";
import "./formSelect.css";

export default function FormSelect(props) {


    let options;
    if (props.opcoesSelect) {
        options = props.opcoesSelect.map((opt) =>
        (<option value={opt.value} key={opt.value}>
            {opt.text}
        </option>));
    }

    return (
        <>
            <label ><span>{props.label}</span>
                <div>
                    <select type='text' value={props.opcaoSelecionada}
                        onChange={(e) => props.onChangeSelect(e.target.value)}
                    >

                        {options}
                    </select>
                </div>
            </label>
        </>
    )
}