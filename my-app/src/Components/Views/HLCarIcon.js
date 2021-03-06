import { MdDirectionsCar } from "react-icons/md";
import { Label } from 'semantic-ui-react'

const HLCarIcon = (props) => {
    return ( 
        <div>
        <MdDirectionsCar className="mapicon" color="red"/> 

        <Label pointing='up' color="white">{props.spot_name}</Label>
        </div>
     );
}
 
export default HLCarIcon;