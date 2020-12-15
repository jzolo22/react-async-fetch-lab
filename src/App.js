import React from 'react'

class App extends React.Component {

    state = {
        astronauts: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(r => r.json())
            .then(data => this.setState({astronauts: data.people}))
    }

    astronauts = () => {
        return this.state.astronauts.map(astro => {
        return <li>{astro.name}</li>
        })
    }

    render () {
        return (
            <div>
                <h1>Astronauts!</h1>
                <h3>Some astronaut info</h3>
                {this.astronauts()}
            </div>
        )
    }

}

export default App