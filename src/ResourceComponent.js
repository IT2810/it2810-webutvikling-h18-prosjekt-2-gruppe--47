import React, {Component} from 'react';
import axios from 'axios';
import TextComponent from './Text/TextComponent'

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
                                    url: "SVGPictures/Animals/Bat.svg",
                                    source: undefined
                                },
                                {
                                    url: "SVGPictures/Animals/Cow.svg",
                                    source: undefined
                                },
                                {
                                    url: "SVGPictures/Animals/owl.svg",
                                    source: undefined
                                },
                                {
                                    url: "SVGPictures/Animals/wolf.svg",
                                    source: undefined
                                }
                            ],
                        texts: [
                            {
                                url: "Poems/Epistles/DearFriends.json",
                                source: undefined
                            },
                            {
                                url: "Poems/Epistles/EpistlefromMrsYongetoHerHusband.json",
                                source: undefined
                            },
                            {
                                url: "Poems/Epistles/TheAlmondTree.json",
                                source: undefined
                            },
                            {
                                url: "Poems/Epistles/ToSirHenryWotton.json",
                                source: undefined
                            }
                        ]
                    },
                {
                        category: 1,
                        images:
                            [
                                {
                                    url: "SVGPictures/Cars/automobile.svg",
                                    source: undefined
                                },
                                {
                                    url: "SVGPictures/Cars/france_citroen.svg",
                                    source: undefined
                                },
                                {
                                    url: "SVGPictures/Cars/Gallardo.svg",
                                    source: undefined
                                },
                                {
                                    url: "SVGPictures/Cars/regular_car.svg",
                                    source: undefined
                                }
                            ],
                        texts: [
                            {
                                url: "Poems/Odes/Acon.json",
                                source: undefined
                            },
                            {
                                url: "Poems/Odes/Fan-PieceforHerImperialLord.json",
                                source: undefined
                            },
                            {
                                url: "Poems/Odes/London-mybeautiful.json",
                                source: undefined
                            },
                            {
                                url: "Poems/Odes/OdeinMemory.json",
                                source: undefined
                            }
                        ]
                    },
                {
                        category: 2,
                        images:
                            [
                                {
                                    url: "SVGPictures/Flowers/barden_decor.svg",
                                    source: undefined
                                },
                                {
                                    url: "SVGPictures/Flowers/botany_floral.svg",
                                    source: undefined
                                },
                                {
                                    url: "SVGPictures/Flowers/easter_tulip.svg",
                                    source: undefined
                                },
                                {
                                    url: "SVGPictures/Flowers/floral_bouquet.svg",
                                    source: undefined
                                }
                            ],
                        texts: [
                            {
                                url: "Poems/Sonnets/ATriad.json",
                                source: undefined
                            },
                            {
                                url: "Poems/Sonnets/LadyMontrevor.json",
                                source: undefined
                            },
                            {
                                url: "Poems/Sonnets/Sonnet126.json",
                                source: undefined
                            },
                            {
                                url: "Poems/Sonnets/SonnetV.json",
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
                //console.log(res.data);
                resourceObject.source = res.data;
                callback();
            })
            .catch( (e) => {
                console.error('Could not retrieve resource', e);
            })
    }

    checkResourceLoaded(resourceArray, category, type, exhibition, callback){
        let resourceObject = resourceArray[category][type][exhibition];
        //console.log(resourceObject);
        if (resourceObject.source === undefined){
            this.loadResource(resourceArray, resourceObject, callback);
        } else {
            callback();
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.imageCategory !== this.props.imageCategory || prevProps.textCategory !== this.props.textCategory || prevProps.exhibition !== this.props.exhibition) {
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
                //console.log(this.state.resources);
            }
        );
        this.checkResourceLoaded(this.state.resources, this.props.textCategory, 'texts', this.props.exhibition, () =>{
                this.setState({resources: this.state.resources});
                //console.log(this.state.resources);
            }
        );
    }

    render(){
        const txtObj = this.state.resources[this.props.textCategory].texts[this.props.exhibition].source;
        console.log(txtObj);
        console.log(txtObj);

        let txtComp;
        if(txtObj){
            txtComp = <TextComponent title={txtObj.title} author={txtObj.author} poem={txtObj.poem} />;
        }

        return(
            <div className="resourceComponent">

                {console.log(this.state.resources)}
                Får ikke lagt til faktiske bilder enda, da bildekomponentene ikke er skrevet enda, så her kommer det en cheap placeholder:
                <br/>
                <br/>
                {/*

                <PictureComponent src={this.state.resources[this.props.imageCategory].images[this.props.exhibition}> </PictureComponent>

                <TextComponent src={this.state.resources[this.props.textCategory].texts[this.props.exhibition                                                                                                           }> </TextComponent>

                */
                }


                {console.log(this.props)}
                {console.log(this.state.resources)}

                {/* This is just a placeholder, there should be components here when finished*/}
                <div dangerouslySetInnerHTML={{__html: this.state.resources[this.props.imageCategory].images[this.props.exhibition].source}}/>


                {txtComp}



            </div>
        )
    }
}

export default ResourceComponent;