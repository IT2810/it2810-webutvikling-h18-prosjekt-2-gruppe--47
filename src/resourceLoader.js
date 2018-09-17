export function loadResource(resourceObject, resourceHandler){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            resourceObject.source = this.responseText;
            console.log(resourceObject);
            resourceHandler(resourceObject.source);
        }
    };
    xhttp.open("GET", resourceObject.url, true);
    xhttp.send();
}


export function loadResources(resourceArray, category, type, resourceHandler) {
    for (let i=0; i < resourceArray.length; i++){
        if( resourceArray[i].category === category){
            for (let j=0; j<4; j++){
                let resourceObject = resourceArray[i][type][j];
                if (resourceObject.source === undefined){
                    loadResource(resourceObject, resourceHandler);
                } else {
                    resourceHandler(resourceObject.source);
                }
            }
        }
    }
}