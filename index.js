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
        this.changeVolume = this.changeVolume.bind(this);
    }

    playAudio(event) {

        if (this.state.power) {

            const audioElement = event.target.querySelector('audio');
            audioElement.play();

            this.setState({
                audioId: event.target.id
            })

            console.log(audioElement.volume)

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

        // console.log(this.state.power)

    }

    changeVolume(event) {

        console.log(event.target.value)

    }


    componentDidMount() {
        // Focus on the rendered div using the DOM focus() method
        window.addEventListener('keydown', this.handleKeyDown);


    }


    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {

        const arrLetter = [['Q', 'Heater-1'], ['W', 'Heater-2'], ['E', 'Heater-3'], ['A', 'Heater-4_1'], ['S', 'Heater-6'], ['D', 'Dsc_Oh'], ['Z', 'Kick_n_Hat'], ['X', 'RP4_KICK_1'], ['C', 'Cev_H2']];

        const listItems = arrLetter.map((item) => {
            return (
                <div key={item[1]} onClick={this.playAudio} className={`drum-pad ${this.state.power ? 'drum-pad-power-on' : 'drum-pad-power-off'}`} id={item[1]}>{item[0]}
                    <audio key={item[0]} className="clip" id={item[0]} src={`https://s3.amazonaws.com/freecodecamp/drums/${item[1]}.mp3`}></audio>
                </div>
            )
        });



        return (
            <div className="app-wrapper" id="drum-machine">


                <div className="drum-pad-container">

                    <div className="pad-bank">{listItems}</div>


                    <div className="logo">

                    </div>

                    <div className="control-wrapper">

                        <div className="control_power">
                            <div>Power</div>
                            <div onClick={this.handleClickPower} style={{ 'justifyContent': this.state.power ? 'flex-end' : 'flex-start' }} className="select">
                                <div className="select-on-off"></div>
                            </div>
                        </div>

                        <div className="control_display" id="display">{this.state.audioId}</div>

                        <div className="control_volume">
                            <input onChange={this.changeVolume} type="range" min="0" step="0.01" max="1"></input>
                        </div>

                    </div>


                </div>

            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)