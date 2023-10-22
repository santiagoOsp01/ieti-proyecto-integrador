export const Task = (props)=>{

    const {name, checked} = props;

    const handleCheckTaskClick = () => {
        checked = !checked;
    };

    return (
        <li>
            <label htmlFor={name}>
                {name}
                <input type="checkbox" defaultChecked={checked} name={name} onClick={handleCheckTaskClick}/>
            </label>
        </li>
    );
}