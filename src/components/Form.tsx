import { useForms } from '../hooks/useForms'

export const Form = () => {

    const { form, handleChange } = useForms({
        email: 'example@domain.com',
        name: 'Mauro Salazar',
        age: 33
    })

    const {email, name, age } = form

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" 
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={ handleChange }
                        />
            </div>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" 
                        className="form-control"
                        name="Name"
                        value={name}
                        onChange={ handleChange }
                        />
            </div>
            <div className="mb-3">
                <label className="form-label">Age:</label>
                <input type="number" 
                        className="form-control"
                        name="Age"
                        value={age}
                        onChange={ handleChange }
                        />
            </div>
            <pre>{JSON.stringify(form)}</pre>
        </form>
    )
}
