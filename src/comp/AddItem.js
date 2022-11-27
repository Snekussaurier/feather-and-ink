import {React, useState} from 'react'
import CloseIcon from '../res/close.svg'
import { ReactSVG } from 'react-svg'

export const AddItem = (props) => {
    const [inputs, setInputs] = useState({id: crypto.randomUUID()});
    const [errors, setErrors] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if the existing input values are valid
        if (handleValidation()) {
            console.log(inputs);
            // Clear existing data
            handleClear();
            // Close dialogue
            props.onAddItem();
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleClear = () => {
        setInputs({id: crypto.randomUUID()});
        setErrors([]);
    }

    const handleValidation = () => {
        let formIsValid = true;
    
        // Name
        if (!inputs.name) {
            formIsValid = false;
            setErrors(values => ({...values, name: "Cannot be empty"}));
        }

        // Weapon group
        if (!inputs.weapon_group) {
            formIsValid = false;
            setErrors(values => ({...values, weapon_group: "Cannot be empty"}));
        }

        // Attribute group
        if (!inputs.attribut) {
            formIsValid = false;
            setErrors(values => ({...values, attribut: "Cannot be empty"}));
        }

        // Weight
        if (!inputs.weight) {
            formIsValid = false;
            setErrors(values => ({...values, weight: "Cannot be empty"}));
        }

        // Initiative
        if (!inputs.initiative) {
            formIsValid = false;
            setErrors(values => ({...values, initiative: "Cannot be empty"}));
        }

        // Attack bonus
        if (!inputs.atb) {
            formIsValid = false;
            setErrors(values => ({...values, atb: "Cannot be empty"}));
        }

        // Defense bonus
        if (!inputs.dfb) {
            formIsValid = false;
            setErrors(values => ({...values, dfb: "Cannot be empty"}));
        }

        // Damage
        if (!inputs.damage) {
            formIsValid = false;
            setErrors(values => ({...values, damage: "Cannot be empty"}));
        }
        
        return formIsValid;
    }

    return (
        <div className={props.addItemActive ? 'absolute left-0 top-0 z-[49] flex justify-center items-center w-full h-full visible' : 'absolute left-0 top-0 z-[49] justify-center items-center w-full h-full hidden'}>
            <div className='add-item-container bg-background w-full h-full z-50 flex flex-row relative'>
                <div className='h-full flex flex-col flex-grow'>
                    <div className='flex items-center border-b border-current-line h-16 pt-[30px] pb-5 px-5'>
                        <h2 className='text-lg text-foreground-highlight'>Add New</h2>
                        <select className='text-lg font-medium bg-current-line dropdown text-foreground-highlight ml-1 h-8 outline-none after:border-none'>
                            <option className='rounded'>Weapon</option>
                            <option>Armor</option>
                            <option>Potions</option>
                            <option>Food</option>
                        </select>
                    </div>
                    <div className='h-full overflow-y-auto scrollbar scrollbar-y'>
                        <form className='flex flex-col p-5 gap-2'>
                            <h2>Name</h2>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                name='name'
                                value={inputs.name || ""}
                                onChange={handleChange}
                                className="bg-background border border-current-line outline-none caret-foreground h-fit text-foreground rounded px-4 py-2 focus:border-foreground-highlight focus:bg-current-line  hover:bg-current-line transition-all w-full">
                            </input>
                            <span className='text-red'>{errors.name}</span>
                            <h2>Waffen Gruppe</h2>
                            <select
                                name='weapon_group'
                                onChange={handleChange}
                                value={inputs.weapon_group || ""}
                                className='text-lg font-medium bg-current-line dropdown text-foreground-highlight ml-1 h-8 outline-none after:border-none'>
                                <option value="" disabled>CHOOSE</option>
                                <option value={1}>Armbrust</option>
                                <option value={2}>Bogen</option>
                                <option value={3}>Klingenwaffe</option>
                                <option value={4}>Schilde</option>
                                <option value={5}>Schusswaffen</option>
                                <option value={6}>Stangenwaffe</option>
                                <option value={7}>Waffenlos</option>
                                <option value={8}>Wuchtwaffe</option>
                                <option value={9}>Wurfwaffe</option>
                            </select>
                            <span className='text-red'>{errors.weapon_group}</span>
                            <h2>Attribut</h2>
                            <select
                                name='attribut'
                                onChange={handleChange}
                                value={inputs.attribut || ""} 
                                className='text-lg font-medium bg-current-line dropdown text-foreground-highlight ml-1 h-8 outline-none after:border-none'>
                                <option value="" disabled>CHOOSE</option>
                                <option value={1}>Geschicklichkeit</option>
                                <option value={2}>Stärke</option>
                                <option value={3}>Geschicklichkeit/Stärke</option>
                            </select>
                            <span className='text-red'>{errors.attribut}</span>
                            <h2>Gewicht</h2>
                            <input 
                                type="number" 
                                placeholder="Gewicht in Kg" 
                                name='weight'
                                value={inputs.weight || ""}
                                onChange={handleChange}
                                className="bg-background border border-current-line outline-none caret-foreground h-fit text-foreground rounded px-4 py-2 focus:border-foreground-highlight focus:bg-current-line  hover:bg-current-line transition-all w-full">
                            </input>
                            <span className='text-red'>{errors.weight}</span>
                            <h2>Initiative</h2>
                            <input 
                                type="number" 
                                placeholder="Initiative" 
                                name='initiative'
                                value={inputs.initiative || ""}
                                onChange={handleChange}
                                className="bg-background border border-current-line outline-none caret-foreground h-fit text-foreground rounded px-4 py-2 focus:border-foreground-highlight focus:bg-current-line  hover:bg-current-line transition-all w-full">
                            </input>
                            <span className='text-red'>{errors.initiative}</span>
                            <h2>Angriffsbonus</h2>
                            <input 
                                type="number" 
                                placeholder="Angriffsbonus" 
                                name='atb'
                                value={inputs.atb || ""}
                                onChange={handleChange}
                                className="bg-background border border-current-line outline-none caret-foreground h-fit text-foreground rounded px-4 py-2 focus:border-foreground-highlight focus:bg-current-line  hover:bg-current-line transition-all w-full">
                            </input>
                            <span className='text-red'>{errors.atb}</span>
                            <h2>Verteidigungsbonus</h2>
                            <input 
                                type="number" 
                                placeholder="Verteidigungsbonus" 
                                name='dfb'
                                value={inputs.dfb || ""}
                                onChange={handleChange}
                                className="bg-background border border-current-line outline-none caret-foreground h-fit text-foreground rounded px-4 py-2 focus:border-foreground-highlight focus:bg-current-line  hover:bg-current-line transition-all w-full">
                            </input>
                            <span className='text-red'>{errors.dfb}</span>
                            <h2>Schaden</h2>
                            <input 
                                type="number" 
                                placeholder="Schaden" 
                                name='damage'
                                value={inputs.damage || ""}
                                onChange={handleChange}
                                className="bg-background border border-current-line outline-none caret-foreground h-fit text-foreground rounded px-4 py-2 focus:border-foreground-highlight focus:bg-current-line  hover:bg-current-line transition-all w-full">
                            </input>
                            <span className='text-red'>{errors.damage}</span>
                            <h2>Beschreibung</h2>
                            <textarea className='bg-background border border-current-line outline-none caret-foreground h-fit text-foreground rounded px-4 py-2 focus:border-foreground-highlight focus:bg-current-line  hover:bg-current-line transition-all w-full'>
                            </textarea>
                        </form>
                    </div>
                    <div className='flex items-center border-t border-current-line py-5 px-5 justify-end gap-5'>
                        <button className="bg-background text-foreground-highlight px-4 py-2 transition-all hover:bg-current-line border border-foreground-highlight" onClick={handleSubmit}>
                            Add Item
                        </button>
                        <button className="bg-background text-red px-4 py-2 transition-all hover:bg-current-line border border-red" onClick={handleClear}>
                            Clear
                        </button>
                    </div>
                </div>
                <button className='absolute right-5 top-5 z-10'>
                    <ReactSVG src={CloseIcon} className="fill-foreground h-8 w-8" onClick={props.onAddItem}/>
                </button>
            </div>
            <div className='fixed z-[48] h-full w-full left-0 bg-background-very-dark opacity-70 top-0 cursor-pointer' onClick={props.onAddItem}/>
        </div>
    ) 
}
