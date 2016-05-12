/*  Brian Treichel & Alex Galka
    Holds the validation and extra functions
    Project Folder: AGBTFinalProject
    File Name: AGBTutil.js
    Revision History: 13-04-2016 Created
 */
function doValidate_frmAddGame(){
    var form = $("#frmAddGame");
    form.validate({
        rules:{
            txtTitle1:{
                required: true,
                rangelength: [2, 50]
            },
            txtDev1:{
                rangelength: [2, 20]
            },
            datRelease1:{
                required: true
            },
            datPurchase1:{
                required: true
            }
        },
        messages:{
            txtTitle1:{
                required: "You must provide a title",
                rangelength: "Title must be 2-50 characters"
            },
            txtDev1:{
                rangelength: "Developer name must be 2-20 characters"
            },
            datRelease1:{
                required: "You must provide a console release date"
            },
            datPurchase1:{
                required: "You must provide a console purchase date"
            }
        }
    });
    return form.valid();
}
function doValidate_frmAddConsole(){
    var form = $("#frmAddConsole");
    form.validate({
        rules:{
            txtName1:{
                required: true,
                rangelength: [2, 10]
            },
            datConsolePurchase1:{
                required: true
            },
            numControllers1:{
                required: true,
                digits: true
            }
        },
        messages:{
            txtName1:{
                required: "You must provide a name for the console",
                rangelength: "Name must be 2 to 10 characters"
            },
            datConsolePurchase1:{
                required: "You must provide a purchase date"
            },
            numControllers1:{
                required: "Must provide a number of controllers",
                digits: "Number of Controllers can only be numbers"
            }
        }
    });
    return form.valid();
}
function doValidate_frmUpdateGame(){
    var form = $("#frmUpdateGame");
    form.validate({
        rules:{
            txtTitle2:{
                required: true,
                rangelength: [2, 50]
            },
            txtDev2:{
                rangelength: [2, 20]
            },
            datRelease2:{
                required: true
            },
            datPurchase2:{
                required: true
            }
        },
        messages: {
            txtTitle2: {
                required: "You must provide a title",
                rangelength: "Title must be 2-50 characters"
            },
            txtDev2: {
                rangelength: "Developer name must be 2-20 characters"
            },
            datRelease2: {
                required: "You must provide a console release date"
            },
            datPurchase2: {
                required: "You must provide a console purchase date"
            }
        }
    });
    return form.valid();
}
function doValidate_frmUpdateConsole(){
    var form = $("#frmUpdateConsole");
    form.validate({
        rules:{
            txtName2:{
                required: true,
                rangelength: [2, 10]
            },
            datConsolePurchase2:{
                required: true
            },
            numControllers2:{
                required: true,
                digits: true
            }
        },
        messages:{
            txtName2:{
                required: "You must provide a name for the console",
                rangelength: "Name must be 2 to 10 characters"
            },
            datConsolePurchase2:{
                required: "You must provide a purchase date"
            },
            numControllers2:{
                required: "Must provide a number of controllers",
                digits: "Number of Controllers can only be numbers"
            }
        }
    });
    return form.valid();
}
