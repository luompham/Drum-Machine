class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            audioId: '',
            power: true,
            audioVolume: '',
            playMode: false,
        }

        this.playAudio = this.playAudio.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClickPower = this.handleClickPower.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleClickPlayMode = this.handleClickPlayMode.bind(this);
    }

    playAudio(event) {

        if (this.state.power) {

            const audioElement = event.target.querySelector('audio');
            audioElement.play();
            audioElement.volume = this.state.audioVolume

            console.log(this.state.audioVolume)
            this.setState({
                audioId: event.target.id
            })

            // console.log(audioElement.volume)

        } else {

            return;
        }




    }

    handleKeyDown(event) {

        let key = event.key.toUpperCase();

        const audioElement = document.getElementById(key);
        //console.log(audioElement)

        if (audioElement) {

            const audioId = document.getElementById(key).parentElement.id;

            if (this.state.power) {

                const divElement = document.getElementById(key).parentElement;


                this.setState({
                    audioId: audioId
                });

                audioElement.play();
                audioElement.volume = this.state.audioVolume


                divElement.style.backgroundColor = 'aqua';
                divElement.style.transform = 'scale(0.9)';

                document.addEventListener('keyup', this.handleKeyUp)

            } else {
                const divElement = document.getElementById(key).parentElement;
                divElement.style.transform = 'scale(0.9)';

                return;
            }


        } else {
            //  console.log('not found audio element');
            return;
        }



    }


    handleKeyUp(event) {

        const key = event.key.toUpperCase();

        const audioElement = document.getElementById(key);


        if (audioElement) {

            const divElement = document.getElementById(key).parentElement;

            divElement.style.backgroundColor = '';
            divElement.style.transform = '';

        } else {
            return;
        }



    }



    handleClickPower() {

        this.setState({
            power: !this.state.power,
            audioId: ''
        });


    }

    changeVolume(event) {


        if (this.state.power) {

            this.setState({
                audioVolume: event.target.value,
                audioId: `Volume: ${parseInt(event.target.value * 100)}`
            });



            setTimeout(() => {
                this.setState({

                    audioId: ''
                })
            }
                , 1000);

            // setTimeout(function () {
            //     this.setState({

            //         audioId: ''
            //     })
            // }.bind(this)

            //     , 1000);



        } else {

            return;

        }


    }


    handleClickPlayMode() {

        if (this.state.power) {


            this.setState({
                playMode: !this.state.playMode,

            })

            if (this.state.playMode) {

                this.setState({
                    audioId: 'Heater Kit'
                })

            } else {
                this.setState({
                    audioId: 'Smooth Piano Kit'
                })
            }

        } else {
            return;
        }

        console.log(this.state.playMode);

    }


    componentDidMount() {
        // Focus on the rendered div using the DOM focus() method
        window.addEventListener('keydown', this.handleKeyDown);
        this.setState({
            audioVolume: 0.3
        });


    }


    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {

        const HeaterMode = [['Q', 'Heater-1'], ['W', 'Heater-2'], ['E', 'Heater-3'], ['A', 'Heater-4_1'], ['S', 'Heater-6'], ['D', 'Dsc_Oh'], ['Z', 'Kick_n_Hat'], ['X', 'RP4_KICK_1'], ['C', 'Cev_H2']];

        const SmoothMode = [['Q', 'Chord_1'], ['W', 'Chord_2'], ['E', 'Chord_3'], ['A', 'Give_us_a_light'], ['S', 'Dry_Ohh'], ['D', 'Bld_H1'], ['Z', 'punchy_kick_1'], ['X', 'side_stick_1'], ['C', 'Brk_Snr']];



        const SmoothList = SmoothMode.map((item) => {
            return (
                <div key={item[1]} onClick={this.playAudio} className={`drum-pad ${this.state.power ? 'drum-pad-power-on' : 'drum-pad-power-off'}`} id={item[1]}>{item[0]}
                    <audio key={item[0]} className="clip" id={item[0]} src={`https://s3.amazonaws.com/freecodecamp/drums/${item[1]}.mp3`}></audio>
                </div>
            )
        });




        const HeaterList = HeaterMode.map((item) => {
            return (
                <div key={item[1]} onClick={this.playAudio} className={`drum-pad ${this.state.power ? 'drum-pad-power-on' : 'drum-pad-power-off'}`} id={item[1]}>{item[0]}
                    <audio key={item[0]} className="clip" id={item[0]} src={`https://s3.amazonaws.com/freecodecamp/drums/${item[1]}.mp3`}></audio>
                </div>
            )
        });





        return (
            <div className="app-wrapper" id="drum-machine">


                <div className="drum-pad-container">

                    <div className="pad-bank">{this.state.playMode ? SmoothList : HeaterList}</div>

                    <div className="container-logo-control">


                        <div className="logo-wrapper">
                            <span>FCC</span>
                            <i className="fab fa-free-code-camp"></i>
                        </div>

                        <div className="control-wrapper">

                            <div className="control_power">
                                <div>Power</div>
                                <div onClick={this.handleClickPower} style={{ 'justifyContent': this.state.power ? 'flex-end' : 'flex-start' }} className="select">
                                    <div className="select-on-off"></div>
                                </div>
                            </div>

                            <div className="control_display" id="display">
                                <p>{this.state.audioId}</p>
                            </div>

                            <div className="control_volume">
                                <input className="slider" id="volumnId" onChange={this.changeVolume} value={this.state.audioVolume} type="range" min="0" step="0.01" max="1" />
                            </div>

                            <div className="control_play-mode control_power">
                                <div>Bank</div>

                                <div onClick={this.handleClickPlayMode} style={{ 'justifyContent': this.state.playMode ? 'flex-end' : 'flex-start' }} className="select">
                                    <div className="select-on-off"></div>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>
        )
    }

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)