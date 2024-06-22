import { useToggle } from "./useToggle";


export function ToggleButton() {

    const [toggle, setToggle] = useToggle();
    
    return (
    <button onClick={setToggle}>
    { toggle ? 'ON' : 'OFF' }
    </button>
    );
    }