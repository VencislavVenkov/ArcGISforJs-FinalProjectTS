require ([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend"
  ], (esriConfig, WebMap, MapView, ScaleBar, Legend) => {
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
})