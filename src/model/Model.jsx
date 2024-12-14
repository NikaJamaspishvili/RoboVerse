import { useParams } from "react-router-dom";

function Model(){
  const {type} = useParams();
  return <div style={{color:'white'}}>
    {type}
  </div>
}

export default Model;