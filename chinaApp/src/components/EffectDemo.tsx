import {useState, useEffect} from 'react';

interface IEffectProps {
    value: number
}


export const EffectDemo: React.FC<IEffectProps> = ({value}) => {
    const [txt, setTxt] = useState<string>("IVAN KRAUS");
    console.log("Redrew");
    /*useEffect(()=>{
        console.log("EFEKT EFEKTUJE");
    });
    useEffect(() => {
        console.log("%c EFEKT s []", "color: green; font-size: 1.2rem;")
    }, []);*/
    useEffect(() => {
        console.log("%c EFEKT s [value]", "color: blue; font-size: 1.2rem;")
    }, [value]);

    useEffect(() => {
        console.log("mount");
        return () => {console.log("odpojeno")};
    });

    useEffect(() => {

        const handleKeyDown = (e : KeyboardEvent) => {
            setTxt(x => x + e.key);
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {window.removeEventListener("keydown", handleKeyDown)};
    }, []);

    return (
        <p>{value} txt: {txt}</p>
    );
};

export default EffectDemo;