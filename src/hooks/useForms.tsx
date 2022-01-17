import { ChangeEvent, useState } from "react"

export const useForms = (initState: any) => {

    const [form, setForm] = useState(initState)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target

        setForm({
            ...form,
            [name]: value

        })
    }
    return {
        form,
        handleChange
    }
}