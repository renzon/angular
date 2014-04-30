# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals
from tekton import router
from web import rest


def index(_write_tmpl):
    dct = {'listar_participantes_url': router.to_path(rest.listar),
           'salvar_participante_url':router.to_path(rest.salvar)}
    _write_tmpl('home.html', dct)
