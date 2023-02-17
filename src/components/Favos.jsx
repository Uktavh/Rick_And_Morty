import { useSelector } from "react-redux"

const Favos = () => {

    const{favos} = useSelector(state=>state)
    return (
        <>
        {
            favos.map((char)=>{
                return(
                    <div>
                        
                    </div>
                )
            })
        }
        </>
    )
}

export default Favos