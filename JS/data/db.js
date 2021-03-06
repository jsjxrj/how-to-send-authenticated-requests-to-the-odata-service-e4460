﻿(function() {
    TestApp.db = {
        sampleData: new DevExpress.data.ODataContext({
            url: "http://localhost:65443/MyDataService.svc",
            errorHandler: function (error) {
                if (error.httpStatus == 401)
                    TestApp.app.navigate('Login');
                else alert(error.message);
            },
            entities: {
                CategoryList: {
                    key: "CategoryID",
                    name: "Categories"
                }
            },
            beforeSend: function (request) {
                request.headers["Authorization"] = "Basic " + DevExpress.data.base64_encode([TestApp.app.UserName, TestApp.app.Password].join(":"))
            }        
        })
    };
})();