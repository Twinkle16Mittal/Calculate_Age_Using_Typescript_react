type GreatProps={
    name:string,
    messagecount:number
    isbooleantype:boolean
}
const Greet = (props:GreatProps)=>{
    return (
        <div>
            
            <h1>Hiiiiii</h1>
            <h2>{props.name}</h2>
            <h3>{props.messagecount}</h3>
            <div>{props.isbooleantype ? "Hello":"Bye...."}</div>
        </div>
    );
}
export default Greet;