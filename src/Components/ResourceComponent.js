import React, {Component} from 'react';
import axios from 'axios';
import TextComponent from '../Presentational/TextComponent'
import Picture from '../Presentational/Picture';

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

        // Binding the _this_ scope since this function will be provided as a callback function
        this.updateState = this.updateState.bind(this);
    }

    /**
     * Helper function to update the component whenever something has changed
     */
    updateState(){
        this.setState({resources: this.state.resources});
    }

    /**
     * Simple axios loader that loads the resource asynchronous and calls the callback upon success, or logs the
     * error upon failure
     * @param resourceObject <object> The object of this resource in this.state
     * @param callback <function> The callback function that will be called upon success
     */
    loadResource(resourceObject, callback){
        axios.get(resourceObject.url)
            .then(res => {
                resourceObject.source = res.data;
                callback();
            })
            .catch( (e) => {
                console.error('Could not retrieve resource', e);
            })
    }

    /**
     * Checks if the resource is loaded, calls callback if the resource is already loaded,
     * loads the resource through loadResource if not
     * @param resourceArray <object> the _resources_ object in this.state
     * @param category <number> The category of the resource that is requested
     * @param type <string> The type of the resource that is requested
     * @param exhibition <number> The exhibition of the resource that is requested
     * @param callback <function> The function that is called when the object is loaded, or called immediately if the
     * object is already loaded
     */
    checkResourceLoaded(resourceArray, category, type, exhibition, callback){
        let resourceObject = resourceArray[category][type][exhibition];
        if (resourceObject.source === undefined){
            this.loadResource(resourceObject, callback);
        } else {
            callback();
        }
    }

    /**
     * Called if the component was updated. Checks to see if the properties were changed, to initiate loading of new
     * resources (they will not reload if the "new resources" were already loaded earlier). If the important props were
     * not changed, nothing happens.
     * @param prevProps <object> The previous properties of the component
     */
    componentDidUpdate(prevProps) {
        if(prevProps.pictureCategory !== this.props.pictureCategory || prevProps.textCategory !== this.props.textCategory || prevProps.exhibition !== this.props.exhibition) {
            // Potential new AJAX call(s) if the resource is not already loaded
            this.checkResourceLoaded(this.state.resources, this.props.pictureCategory, 'images', this.props.exhibition, this.updateState);
            this.checkResourceLoaded(this.state.resources, this.props.textCategory, 'texts', this.props.exhibition, this.updateState);
        }
    }

    /**
     * Called initially when the component is mounted the first time. Not called upon component updates.
     */
    componentDidMount(){
        // Will perform AJAX calls
        this.checkResourceLoaded(this.state.resources, this.props.pictureCategory, 'images', this.props.exhibition, this.updateState);
        this.checkResourceLoaded(this.state.resources, this.props.textCategory, 'texts', this.props.exhibition, this.updateState);
    }

    render(){
        const txtObj = this.state.resources[this.props.textCategory].texts[this.props.exhibition].source;
        const pictureSrc = this.state.resources[this.props.pictureCategory].images[this.props.exhibition].source;
        if(txtObj) {
            return [
                <Picture key="0" picturesrc={pictureSrc}/>,
                <TextComponent key="1" title={txtObj.title} author={txtObj.author} poem={txtObj.poem}/>
            ]
        } else {return null}

    }
}

export default ResourceComponent;
