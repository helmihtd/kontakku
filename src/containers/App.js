import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { kontak } from './kontak';

class App extends Component {
    constructor() {
        super()
        this.state = {
            kontak: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({ kontak: users})});
    }

    //membuat properti di dalam komponen
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        //dibawah adalah fungsi untuk menampilkan pencarian
        const { kontak, searchfield } = this.state;
        const filteredKontak = kontak.filter(kontak => {
            return kontak.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //dibawah ini fungsi untuk memberikan efek loading
        if (kontak.length === 0) {
            return <h1 className='tc'>Loading</h1>
        } else { 
            //dibawah adalah fungsi render
            return (
                <div className='tc'>
                    <h1>KontakKu</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList kontak={filteredKontak}/>
                        </ErrorBoundry>
                    </Scroll>    
                </div>
            );
        }
    }
}

export default App;