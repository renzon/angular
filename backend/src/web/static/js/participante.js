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
        },
        controller: function ($scope, RestApi) {
            $scope.deletar = function (participante) {
                participante.deletando = true;
                RestApi.deletarParticipante(participante).success(function () {
                    for (var i = 0; i < $scope.participantes.length; i++) {
                        if (participante === $scope.participantes[i]) {
                            $scope.participantes.splice(i, 1);
                            break;
                        }
                    }
                }).always(function () {
                    participante.deletando = false;
                });
            }
        }

    }
});