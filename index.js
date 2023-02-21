class App extends React.Component {

    constructor(props) {
        super(props)

        this.playAudio = this.playAudio.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    playAudio(event) {
        console.log(event.target.children[1]);
        // console.log(event.target.querySelector('audio'));
        const audioElement = event.target.children[1];

        audioElement.play();

    }

    handleKeyDown(event) {


        let key = event.key.toUpperCase();

        // let indexDiv = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        const objDiv = document.querySelectorAll('.drum-pad')

        for (let indexDiv = 0; indexDiv < 9; indexDiv++) {

            let innerText = objDiv[indexDiv].children[0].innerText;
            if (key === innerText) {
                console.log('true')
            } else {
                console.log('false')

            }
        }





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

                        <div onClick={this.playAudio} className="drum-pad" id="Heater 1"><span>Q</span>
                            <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Heater 2"><span>W</span>
                            <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Heater 3"><span>E</span>
                            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Heater 4"><span>A</span>
                            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Clap"><span>S</span>
                            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Open-HH"><span>D</span>
                            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Kick-n'-Hat"><span>Z</span>
                            <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Kick"><span>X</span>
                            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                        </div>

                        <div className="drum-pad" id="Closed-HH"><span>C</span>
                            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                        </div>


                    </div>

                    <div className="logo">

                    </div>

                    <div className="control-wrapper">

                        <div id="display">

                        </div>

                    </div>


                </div>

            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)