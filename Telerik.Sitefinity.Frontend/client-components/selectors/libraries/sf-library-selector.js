﻿(function ($) {
    angular.module('sfSelectors')
        .directive('sfLibrarySelector', ['serviceHelper', 'sfMediaService', function (serviceHelper, mediaService) {
            return {
                require: '^sfListSelector',
                restrict: 'A',
                link: {
                    pre: function (scope, element, attrs, ctrl) {
                        var mediaType = attrs.sfMediaType;

                        ctrl.getItems = function (skip, take) {
                            var options = {
                                parent: null,
                                sort: "Title ASC"
                            };

                            switch (mediaType) {
                                case 'image':
                                    return mediaService.images.getFolders(options);
                                default:
                                    return mediaService.images.getFolders(options);
                            }
                        };

                        ctrl.getChildren = function (parentId) {
                            var options = {
                                parent: parentId,
                                sort: "Title ASC"
                            };

                            switch (mediaType) {
                                case 'image':
                                    return mediaService.images.getFolders(options).then(function (data) { return data.Items; });
                                default:
                                    return mediaService.images.getFolders(options).then(function (data) { return data.Items; });
                            }
                        };

                        ctrl.getSpecificItems = function (ids) {
                            //return hierarchicalTaxonService.getSpecificItems(taxonomyId, ids);
                            return null;
                        };

                        ctrl.selectorType = 'LibrarySelector';
                        ctrl.dialogTemplateUrl = 'client-components/selectors/libraries/sf-library-selector.html';
                        ctrl.$scope.dialogTemplateId = 'sf-hierarchical-taxon-selector';
                        ctrl.closedDialogTemplateUrl = attrs.sfMultiselect ? 'client-components/selectors/common/sf-list-group-selection.html' :
                            'client-components/selectors/common/sf-bubbles-selection.html';

                        ctrl.$scope.hierarchical = true;
                    }
                }
            };
        }]);
})(jQuery);