import Greet from './components/hello'
import Person from './components/person'
import Personlist from './components/Personlist'
const App = () => {
    const persontype={
        first:"something",
        last:"something"
    }
    const namelist=[
        {
            first:"nothing",
            last:"nothing"
        },
        {
            first:"nothing",
            last:"nothing"
        },
        {
            first:"nothing",
            last:"nothing"
        }
    ]
  return (
    <div className="App">
      <Greet name="Twinkle" messagecount={78} isbooleantype={false}/>
      <Person name={persontype}/>
      <Personlist names ={namelist} />
    </div>
  );
}

export default App;