class App extends React.Component {

    constructor(props) {
        super(props)


    }

    render() {


        return (
            <div id="drum-machine">
                <div id="display">

                </div>

                <div className="drum-pad-container">

                    <div className="pad-bank">

                        <div className="drum-pad" id="Heater 1">Q
                            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Heater 2">W
                            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Heater 3">E
                            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Heater 4">A
                            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Clap">S
                            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Open-HH">D
                            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Kick-n'-Hat">Z
                            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Kick">X
                            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Closed-HH">C
                            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                        </div>

                    </div>

                    <div className="logo">

                    </div>

                    <div className="control-wrapper">

                    </div>


                </div>

            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)