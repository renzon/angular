var mod = angular.module('restAjax', [])

mod.factory('RestApi', function ($http) {
        function patchDeferred(defer) {
            defer.always = function (callback) {
                defer.then(callback, callback);
            }
            return defer;
        }


        return {
            salvarParticipante: function (url, nome) {
                var defer = $http.post(url, {'nome': nome})
                return patchDeferred(defer);

            },
            deletarParticipante: function (participante) {
                var defer = $http.post(participante.deletarPath)
                return patchDeferred(defer);
            },
            editarParticipante: function (participante) {
                var defer = $http.post(participante.editarPath,
                    {'nome': participante.nome});
                return patchDeferred(defer);
            },
            listarParticipantes: function (url) {
                var defer = $http.get(url)
                return patchDeferred(defer);
            }

        };
    }
)