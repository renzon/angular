var gerenciadorDeParticipante = angular.module('gerenciadorDeParticipante', ['restAjax'], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{_');
    $interpolateProvider.endSymbol('_}');
})

gerenciadorDeParticipante.directive('participantestabela', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/static/html/participantes-tabela.html',
        scope: {
            participantes: '='
        }

    }
});