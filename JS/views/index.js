﻿TestApp.Index = function(params) {
    var viewModel = {
        dSource: new DevExpress.data.DataSource(TestApp.db.sampleData.CategoryList)
    };
    return viewModel;
};