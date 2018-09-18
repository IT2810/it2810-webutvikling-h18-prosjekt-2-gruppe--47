import React, {Component} from 'react';
import axios from 'axios';

class ResourceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources:
            [
                {
                        category: 0,
                        images:
                            [
                                {
                                    url: "logo.svg",
                                    source: undefined
                                },
                                {
                                    url: "logo.svg",
                                    source: undefined
                                },
                                {
                                    url: "logo.svg",
                                    source: undefined
                                },
                                {
                                    url: "logo.svg",
                                    source: undefined
                                }
                            ],
                        texts: [
                            {
                                url: "test_tekst.txt",
                                source: undefined
                            },
                            {
                                url: "test_tekst.txt",
                                source: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id gravida sem. Quisque vitae est ornare, tempus erat nec, sagittis mi. Suspendisse ut sagittis massa. Quisque malesuada vulputate elit, sed ornare purus dapibus a. Vestibulum finibus elementum ligula, vel condimentum lorem pellentesque in. Etiam tincidunt ut nunc sit amet lobortis. Mauris commodo metus ut scelerisque consectetur. Sed mollis est sed lectus placerat, vel porttitor urna iaculis. Donec sem libero, lobortis non dolor a, vehicula volutpat nisl. Pellentesque sodales odio vehicula ex iaculis, luctus ultricies dui blandit. Fusce consectetur magna eget ipsum viverra, a aliquet lacus rhoncus. Donec feugiat maximus mauris, ut sagittis dolor laoreet vitae. Aliquam nisl diam, feugiat at hendrerit vitae, tempus quis nunc. Suspendisse placerat lacus lacus, in sagittis risus dapibus non. Curabitur purus lacus, bibendum nec fringilla a, efficitur vel augue."
                            },
                            {
                                url: "test_tekst.txt",
                                source: undefined
                            },
                            {
                                url: "test_tekst.txt",
                                source: undefined
                            }
                        ]
                    },
                {
                        category: 1,
                        images:
                            [
                                {
                                    url: "logo.svg",
                                    source: undefined
                                },
                                {
                                    url: "logo.svg",
                                    source: undefined
                                },
                                {
                                    url: "logo.svg",
                                    source: undefined
                                },
                                {
                                    url: "logo.svg",
                                    source: undefined
                                }
                            ],
                        texts: [
                            {
                                url: "test_tekst.txt",
                                source: undefined
                            },
                            {
                                url: "test_tekst.txt",
                                source: undefined
                            },
                            {
                                url: "test_tekst.txt",
                                source: undefined
                            },
                            {
                                url: "test_tekst.txt",
                                source: undefined
                            }
                        ]
                    },
                {
                        category: 2,
                        images:
                            [
                                {
                                    url: "logo.svg",
                                    source: undefined
                                },
                                {
                                    url: "logo.svg",
                                    source: undefined
                                },
                                {
                                    url: "logo.svg",
                                    source: undefined
                                },
                                {
                                    url: "logo.svg",
                                    source: undefined
                                }
                            ],
                        texts: [
                            {
                                url: "test_tekst.txt",
                                source: undefined
                            },
                            {
                                url: "test_tekst.txt",
                                source: undefined
                            },
                            {
                                url: "test_tekst.txt",
                                source: undefined
                            },
                            {
                                url: "test_tekst.txt",
                                source: undefined
                            }
                        ]
                    }
            ]
        };
    }

    loadResource(resources, resourceObject, callback){
        axios.get(resourceObject.url)
            .then(res => {
                console.log(res.data);
                resourceObject.source = res.data;
                callback();
            })
            .catch( (e) => {
                console.error('Could not retrieve resource', e);
            })
    }

    checkResourceLoaded(resourceArray, category, type, exhibition, callback){
        let resourceObject = resourceArray[category][type][exhibition];
        if (resourceObject.source === undefined){
            this.loadResource(resourceArray, resourceObject, callback);
        } else {
            callback();
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.imageCategory !== this.props.imageCategory || prevProps.textCategory !== this.props.textCategory) {

            // Potential new AJAX call(s) if the resource is not already loaded
            this.checkResourceLoaded(this.state.resources, this.props.imageCategory, 'images', this.props.exhibition, () =>{
                    this.setState({resources: this.state.resources});
                    console.log(this.state.resources);
                }
            );
            this.checkResourceLoaded(this.state.resources, this.props.textCategory, 'texts', this.props.exhibition, () =>{
                    this.setState({resources: this.state.resources});
                    console.log(this.state.resources);
                }
            );
        }
    }

    componentDidMount(){

        // Checks for resources already loaded, if not, performs Ajax call
        // TODO: Not necessary to check, as nothing is loaded upon first mounting
        this.checkResourceLoaded(this.state.resources, this.props.imageCategory, 'images', this.props.exhibition, () =>{
                this.setState({resources: this.state.resources});
                console.log(this.state.resources);
            }
        );
        this.checkResourceLoaded(this.state.resources, this.props.textCategory, 'texts', this.props.exhibition, () =>{
                this.setState({resources: this.state.resources});
                console.log(this.state.resources);
            }
        );
    }

    render(){
        return(
            <div className="resourceComponent">

                {console.log(this.state.resources)}
                Får ikke lagt til faktiske bilder enda, da bildekomponentene ikke er skrevet enda, så her kommer det en cheap placeholder:
                <br/>
                <br/>
                {console.log(`

                <PictureComponent src={this.state.resources[this.props.imageCategory].images[this.props.exhibition}> </PictureComponent>

                <TextComponent src={this.state.resources[this.props.textCategory].texts[this.props.exhibition                                                                                                           }> </TextComponent>

                `)
                }


                {console.log(this.props)}
                {console.log(this.state.resources)}

                {/* This is just a placeholder, there should be components here when finished*/}
                <div dangerouslySetInnerHTML={{__html: this.state.resources[this.props.imageCategory].images[this.props.exhibition].source}}/>



                <p dangerouslySetInnerHTML={{__html: this.state.resources[this.props.textCategory].texts[this.props.exhibition].source}}/>




            </div>
        )
    }
}

export default ResourceComponent;