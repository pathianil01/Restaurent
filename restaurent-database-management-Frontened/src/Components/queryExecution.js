import {useLocation} from 'react-router-dom'
function QueryExecution()
{
var loc=useLocation();
console.log(loc.state)
return(

    <h6>{loc.state}</h6>
)

}
export default QueryExecution