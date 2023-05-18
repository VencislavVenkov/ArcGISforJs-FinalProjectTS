require ([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Search"
], (esriConfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList, BasemapToggle, BasemapGallery, Search) => {
    esriConfig.apiKey = "AAPK666aad931b85427484fe4b913bd923c5z6prjjBNp61A0lHJylRDal9Ti0FoT_ZtGURiyuZShkqj5xnsb-oj9tc8tDPYa-6V";

    const webMap = new WebMap({
        portalItem: {
            id: "1537be4b777146f48bcc415b70802ecc"
        }
    })

    const view = new MapView({
        container: "viewDiv",
        map: webMap
    }); 

    const homeBtn = new Home({
        view: view
    })

    view.ui.add(homeBtn, "top-left");

    const legend = new Legend({
        view: view
    })

    view.ui.add(legend, "bottom-left");

    const scaleBar = new ScaleBar({
        view: view,
        unit: "metric",
        style: "ruler"
    })

    view.ui.add(scaleBar, "bottom-right");

    view.ui.add("layerList-btn","top-right");

    view.ui.add("basemap-btn", "top-right");

    const layerList = new LayerList({
        view: view
    }) 

    view.ui.add(layerList,"top-right")

    const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery"
    })

    const basemapGallery = new BasemapGallery({
        view: view,
        source: {
            query: {

            }
        },
    })

    view.ui.add(basemapGallery,"top-right");

    view.ui.add(basemapToggle, "bottom-right");


    document
    .getElementById("layerList-btn")
    .addEventListener("click", function() {
        toggleButton("layerList")
    })

    document
    .getElementById("basemap-btn")
    .addEventListener("click", function() {
        toggleButton("basemapGallery");
    })

    const searchBar = new Search ({
        view: view
    })

    view.ui.add(searchBar, "top-left");

    function toggleButton(item) {
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
        const basemapGalleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
        let currentProp;


        if(item == "layerList") {
            currentProp = layerListEl.style.getPropertyValue("display");
            layerListEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            basemapGalleryEl.style.setProperty("display","none");
        } else if(item == "basemapGallery") {
            currentProp = basemapGalleryEl.style.getPropertyValue("display");
            basemapGalleryEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
            layerListEl.style.setProperty("display", "none"); 

        }

    }


})