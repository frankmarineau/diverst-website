var ROICalculator=function(){var e=this;e.name=ko.observable().extend({required:!0,pattern:{params:" ",message:"Please enter your full name."}}),e.email=ko.observable().extend({required:!0,email:!0,companyEmail:!0}),e.phone=ko.observable().extend({required:!0}),e.nbEmployeesInput=ko.observable(5e3).extend({required:!0}),e.averageSalaryInput=ko.observable(5e4).extend({required:!0}),e.turnoverRate=ko.observable(20).extend({required:!0}),e.sizeOfDITeam=ko.observable(15).extend({required:!0}),e.showROI=function(){e.errors.showAllMessages(!0),0===e.errors().length&&($.smoothScroll({scrollTarget:"#roi-results"}),n())};var n=function(){$.getJSON("//ipinfo.io?token=fe594ecc38f7df",function(n){$.post("//app.diverst.com/website/leads",$.extend({},JSON.parse(ko.toJSON(e)),{visitor_info:n}))})},t=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};e.nbEmployees=ko.computed(function(){return t(e.nbEmployeesInput())},this),e.averageSalary=ko.computed(function(){return t(e.averageSalaryInput())},this),e.numericSavings={absenteeism:ko.computed(function(){return parseInt(1.31*e.averageSalaryInput()/240*1.5*e.nbEmployeesInput())},this),retention:ko.computed(function(){return parseInt(e.nbEmployeesInput()*e.averageSalaryInput()*.38*e.turnoverRate()/100*.22)},this),hrTime:ko.computed(function(){return parseInt(e.sizeOfDITeam()*e.averageSalaryInput()*1.31*.1)},this),productivityIncrease:ko.computed(function(){return parseInt(e.nbEmployeesInput()*e.averageSalaryInput()*1.31*.05)},this)},e.savings={absenteeism:ko.computed(function(){return t(e.numericSavings.absenteeism())},this),retention:ko.computed(function(){return t(e.numericSavings.retention())},this),hrTime:ko.computed(function(){return t(e.numericSavings.hrTime())},this),productivityIncrease:ko.computed(function(){return t(e.numericSavings.productivityIncrease())},this)},e.totalSavings=ko.computed(function(){var n=e.numericSavings.absenteeism()+e.numericSavings.retention()+e.numericSavings.hrTime()+e.numericSavings.productivityIncrease();return t(n)},this),e.errors=ko.validation.group(e),$(".tooltip").tooltipster()};