import React from 'react'
import { useForm } from '../../Hooks/useForm'
import { ImputMaterial, Main } from './styled'

const SignUp = () => {

    const {form,onChange,clean} = useForm({
        "name": "",
	    "email": "",
	    "cpf": "",
	    "password": ""
    })

    const cpfMask = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1");
    }

    const onSubmitForm = (event)=>{
        event.preventDefault()
    }

    return(
        <Main>
            <p>Cadastrar</p>
            <form onSubmit={onSubmitForm}>
                <ImputMaterial
                    id="outlined-basic"
                    label={'Nome'}
                    name="name"
                    type={'text'}
                    placeholder={'Digite seu nome'}
                    variant="outlined"
                    value={form.name}
                    onChange={onChange}
                />
                <ImputMaterial
                    id="outlined-basic"
                    label={'Email'}
                    name="email"
                    type={'email'}
                    placeholder={'Digite seu email'}
                    variant="outlined"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <ImputMaterial
                    id="outlined-basic"
                    label={'CPF'}
                    name="cpf"
                    type={'text'}
                    placeholder={'Digite seu CPF'}
                    variant="outlined"
                    value={form.cpf}
                    onChange={onChange}
                    required
                />
            </form>
        </Main>
    )
}

export default SignUp