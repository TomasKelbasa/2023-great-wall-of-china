import { useState, useId } from "react";


interface IInputProps {
    value: string | undefined;
    inputAction: (value: string) => void
}


export const ControlledInput2: React.FC<IInputProps> = ({value, inputAction}) => {
    const [input, setInput] = useState<string | undefined>(value);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setInput(event.target.value);
        inputAction(event.target.value);
    
    };

    const len = input?.length;

    const id = useId();
    return(
        <div>
            <label htmlFor={`${id}-txt`}>Text</label>
            <input id={`${id}-txt`} value={value} onChange={handleChange}/>
            <span>{len}</span>
        </div>
    );
};

export default ControlledInput2;