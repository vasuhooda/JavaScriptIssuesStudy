(function () {

    function init() {


    }

    function setupTest(initResult) {
        var err=new Error();

        return {err:err}



    }

    function test(initResult, setupTestResult) {
        var err=setupTestResult.err;

        for (var i=0; i<50000; i++){
            if (Object.prototype.toString.call(err)==='[object Error]'){}
            if ({} instanceof Error || Object.prototype.toString.call(err)==='[object Error]'){}
            if ('' instanceof Error || Object.prototype.toString.call(err)==='[object Error]'){}
        }





    }
 //  var initR=init();
  // var setupR=setupTest(initR);
 //   test(initR,setupR);


    exports.init = init;
    exports.setupTest = setupTest;
    exports.test = test;

})();
