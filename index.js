class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            audioId: '',
            power: true,
        }

        this.playAudio = this.playAudio.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClickPower = this.handleClickPower.bind(this);
    }

    playAudio(event) {

        if (this.state.power) {

            const audioElement = event.target.querySelector('audio');
            audioElement.play();

            this.setState({
                audioId: event.target.id
            })

        } else {

            return;
        }




    }

    handleKeyDown(event) {

        let key = event.key.toUpperCase();

        const audioElement = document.querySelectorAll(`#${key}`)[0];

        // console.log(document.getElementById(key).parentElement.id)

        const audioId = document.getElementById(key).parentElement.id

        if (audioElement) {

            //  console.log(this.state.power);
            if (this.state.power) {

                this.setState({
                    audioId: audioId
                });

                audioElement.play();

            } else {

                return;
            }


        } else {
            //  console.log('not found audio element');
            return;
        }



    }



    handleClickPower() {

        this.setState({
            power: !this.state.power,
            audioId: ''
        });

        console.log(this.state.power)

    }


    componentDidMount() {
        // Focus on the rendered div using the DOM focus() method
        window.addEventListener('keydown', this.handleKeyDown);


    }


    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {


        return (
            <div className="app-wrapper" id="drum-machine">


                <div className="drum-pad-container">

                    <div className="pad-bank">

                        <div onClick={this.playAudio} className="drum-pad" id="Heater 1">Q
                            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                        </div>

                        <div onClick={this.playAudio} className="drum-pad" id="Heater 2">W
                            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                        </div>

                        <div onClick={this.playAudio} className="drum-pad" id="Heater 3">E
                            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                        </div>

                        <div onClick={this.playAudio} className="drum-pad" id="Heater 4">A
                            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                        </div>

                        <div onClick={this.playAudio} className="drum-pad" id="Clap">S
                            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                        </div>

                        <div onClick={this.playAudio} className="drum-pad" id="Open-HH">D
                            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                        </div>

                        <div onClick={this.playAudio} className="drum-pad" id="Kick-n'-Hat">Z
                            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                        </div>

                        <div onClick={this.playAudio} className="drum-pad" id="Kick">X
                            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                        </div>

                        <div onClick={this.playAudio} className="drum-pad" id="Closed-HH">C
                            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                        </div>


                    </div>

                    <div className="logo">

                    </div>

                    <div className="control-wrapper">

                        <div className="control_power">
                            <div>Power</div>
                            <div onClick={this.handleClickPower} className="select">
                                <div style={{ 'float': this.state.power ? 'right' : 'left' }} className="select-on-off"></div>
                            </div>
                        </div>

                        <div className="control_display" id="display">{this.state.audioId}</div>

                    </div>


                </div>

            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)