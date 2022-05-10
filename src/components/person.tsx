type persontype={
    name:{
        first:string,
        last:string
    }
}

const Person=(props:persontype)=>
{
    return (
        <div>
            <h1>hdgdggdjgjhjhh {props.name.first} {props.name.last}</h1>
        </div>
    )
};
export default Person;