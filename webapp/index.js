sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel"
], function(JSONModel, XMLView, ResourceModel) {
    "use restrict"

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function (){
        // Create a JSON model from an object literal
        var oProductModel = new JSONModel();
        oProductModel.loadData("./model/Products.json");
        sap.ui.getCore().setModel(oProductModel, "products");
        var oModel = new JSONModel({
                        firstName: "Hello",
                        lastName: "World",
                        enabled: true,
                        address: {
                            street: "青衣路",
                            city: "大嶼山",
                            zip: "8964",
                            country: "香港"
                        },
                        salesAmount: 12345.6789,
                        priceThreshold: 20,
                        currencyCode: "EUR"
        });

        sap.ui.getCore().setModel(oModel);

        var oResourceModel = new ResourceModel({
            bundleName: "sap.ui.demo.db.i18n.i18n",
            supportedLocales:["en","zh_TW"],
            fallbackLocale:"zh_TW"
        });

        // Assign the model to the SAPUI5 core
        sap.ui.getCore().setModel(oResourceModel,"i18n");

        // Display the XML View called "App"
        var oView = new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        });
        
        // Register the view with the message manger
        sap.ui.getCore().getMessageManager().registerObject(oView, true);

        // Insert the view into the DOM
        oView.placeAt("content");

        
    })
  
    
});