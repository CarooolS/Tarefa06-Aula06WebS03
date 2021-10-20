import React from 'react';

class Cabecalho extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            corFavorita: "vermelho"
        };
    }

    render(){
        return(
            <div>
                <p>A minha cor favorita é {this.state.corFavorita}</p>
            </div>
        );
    }
}

export default Cabecalho;