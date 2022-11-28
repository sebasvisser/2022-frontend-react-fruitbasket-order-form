import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Voornaam" {...register("Voornaam", {})} />
            <input type="text" placeholder="Achternaam" {...register("Achternaam", {})} />
            <input type="number" placeholder="Leeftijd" {...register("Leeftijd", {})} />
            <input type="text" placeholder="Postcode" {...register("Postcode", {
                value: /[0-9]{4}[a-z-A-Z]{2}/i ,
                message: "Postcode patroon: getal-getal-getal-getal-letter-letter",
            })} />
            <select {...register("Bezorgfrequentie")}>
                <option value="iedere week">iedere week</option>
                <option value=" om de week"> om de week</option>
                <option value=" iedere maand"> iedere maand</option>
            </select>

            <input {...register("Tijdvak")} type="radio" value="overdag" />
            <input {...register("Tijdvak")} type="radio" value=" 's avonds" />
            <textarea {...register("Opmerkingen", {})} />
            <input type="checkbox" placeholder="Akkoord" {...register("Akkoord", {})} />

            <input type="submit" />
        </form>
    );
}

export default Form;