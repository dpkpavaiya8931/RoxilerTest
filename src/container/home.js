import { Component } from 'react';
import ToDo from '../components/todos';

class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <ToDo></ToDo>
            </>
        )
    }
}

export default Home;