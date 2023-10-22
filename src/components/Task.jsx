import { isValidElement } from "react";

export const Task = (props)=>{

    const {name, checked, onChangeCheck} = props;

    const handleChangeCheck = () => {
      onChangeCheck(name);  
    };

    return (
        <li>
            <>
                <label htmlFor={name}>
                    {name}
                    <input type="checkbox" checked={checked} onChange={handleChangeCheck}/>
                </label>
            </>
        </li>
    );
}