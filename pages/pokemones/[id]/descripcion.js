import {useRouter} from 'next/router'

const Desc = () => {
    const router = useRouter()
    console.log({router})
    return(
        <p>Pokemones Des</p>
    )
}

export default Desc