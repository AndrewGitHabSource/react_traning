import logo from '../logo.svg';
import { useState } from "react";
import Area from "../components/Area";
import TimeLine from "../components/TimeLine";
import Menu from "../components/Menu";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} width={120} height={120} className="App-logo" alt="logo" />
            </header>

            <div className={'container'}>
                <Menu/>

                <div className={'content'}>
                    <TimeLine/>

                    <Area name="area"/>
                </div>
            </div>
        </div>
    );
}

export default Home;