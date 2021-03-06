"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var Popover_1 = require("./Popover");
var PopoverContent_1 = require("./PopoverContent");
var core_1 = require("@angular/core");
__export(require("./Popover"));
__export(require("./PopoverContent"));
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        PopoverContent_1.PopoverContent,
                        Popover_1.Popover,
                    ],
                    exports: [
                        PopoverContent_1.PopoverContent,
                        Popover_1.Popover,
                    ],
                    entryComponents: [
                        PopoverContent_1.PopoverContent
                    ]
                },] },
    ];
    /** @nocollapse */
    PopoverModule.ctorParameters = function () { return []; };
    return PopoverModule;
}());
exports.PopoverModule = PopoverModule;
//# sourceMappingURL=index.js.map