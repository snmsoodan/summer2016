(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController",PageNewController)

    function PageNewController($location,$routeParams,PageService) {
        var vm=this;
        vm.userId=$routeParams.userId;
        vm.websiteId=$routeParams.websiteId;
        vm.createPage=createPage;

        function createPage(websiteId,name) {
            console.log("controller");
            // var result=PageService.createPage(websiteId,name,vm.userId);
            // if(result){
            //     $location.url("/user/"+vm.userId+"/website/"+websiteId+"/page");
            // }
            // else{
            //     vm.error="failed to create new page";
            // }

            PageService
                .createPage(websiteId,name,vm.userId)
                .then(function (response) {
                        $location.url("/user/"+vm.userId+"/website/"+websiteId+"/page");
                },
                function (error) {
                    vm.error="failed to create new page";
                })

        }



    }
})();