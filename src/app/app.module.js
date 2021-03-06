"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var product_component_1 = require("./product.component");
var inventory_component_1 = require("./inventory.component");
var NotFound_component_1 = require("./NotFound.component");
var forms_1 = require("@angular/forms");
var product_form_component_1 = require("./product-form.component");
var router_1 = require("@angular/router");
var appRoutes = [
    { path: 'Product', component: product_component_1.Appproduct },
    { path: 'Inventory', component: inventory_component_1.AppInventory },
    { path: '**', component: NotFound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, product_component_1.Appproduct, inventory_component_1.AppInventory, NotFound_component_1.PageNotFoundComponent, product_form_component_1.ProductFormComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map