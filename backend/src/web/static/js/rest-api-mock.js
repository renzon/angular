var mod = angular.module('restAjax', [])

mod.factory('RestApi', function ($rootScope) {
        var createHttpMock = function (returnValue) {
            var httpMock = {
                'success': function (callback) {
                    this.successCallback = callback;
                    return this;
                },
                'error': function (callback) {
                    this.errorCallback = callback;
                    return this;
                },
                'always': function (callback) {
                    this.alwaysCallback = callback;
                    return this;
                }

            }

            function executeAsync() {
                setTimeout(function () {
                    if (httpMock.successCallback !== undefined) {
                        httpMock.successCallback(returnValue);
                    }
                    if (httpMock.errorCallback !== undefined) {
                        httpMock.errorCallback({'errors': {'domain': 'Domain should not be empty'}});
                    }
                    if (httpMock.alwaysCallback !== undefined) {
                        httpMock.alwaysCallback(returnValue);
                    }
                    $rootScope.$digest()
                }, 1000);
            }

            executeAsync();
            return httpMock;


        }
        var id = 3;


        return {
            salvarParticipante: function (url, nome) {
                id++;
                return createHttpMock({
                    'id': '' + id,
                    'nome': nome,
                    'deletarPath': '/apagar/' + id,
                    'editarPath': '/editar/'
                });

            },
            deletarParticipante: function (participante) {
                return createHttpMock();
            },
            editarParticipante: function (participante) {
                return createHttpMock();
            },
            listarParticipantes: function (url) {
                return createHttpMock([
                    {
                        'id': '1',
                        'nome': 'Fulano',
                        'deletarPath': '/apagar/',
                        'editarPath': '/editar/'
                    },
                    {
                        'id': '2',
                        'nome': 'Ciclano',
                        'deletarPath': '/apagar/',
                        'editarPath': '/editar/'
                    },
                    {
                        'id': '3',
                        'nome': 'Beltrano',
                        'deletarPath': '/apagar/',
                        'editarPath': '/editar/'
                    }
                ]);
            }

        };
    }
)