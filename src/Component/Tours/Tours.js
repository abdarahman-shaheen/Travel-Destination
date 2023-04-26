
import './Tours.css';
import Tour from './tour/tour';

function Tours(props){

return(
    <Tour dataTours={props.dataTour}/>
)

}

export default Tours;