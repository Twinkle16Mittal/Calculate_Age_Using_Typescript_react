type personlist ={
    names:{
        first:string,
        last:string
    }[]
}
const Personlist=(props:personlist)=>
{
    return (
      <div>
          <h2>{props.names[0].first}{props.names[0].last}</h2>
          <h2>{props.names[1].first}{props.names[1].last}</h2>
          <h2>{props.names[2].first}{props.names[2].last}</h2>
      </div>
    );
}

export default Personlist;