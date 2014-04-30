# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals
from google.appengine.ext import ndb
from tekton import router


class Participante(ndb.Model):
    nome = ndb.StringProperty()

    def to_dict(self):
        dct = super(Participante, self)._to_dict()
        id = self.key.id()
        dct['id'] = id
        dct['deletarPath'] = router.to_path(deletar, id)
        dct['editarPath'] = router.to_path(editar, id)
        return dct


def listar(_json):
    query = Participante.query().order(Participante.nome)
    participantes = query.fetch()
    participantes = [p.to_dict() for p in participantes]
    _json(participantes)


def salvar(_json, nome):
    participante = Participante(nome=nome)
    participante.put()
    _json(participante.to_dict())


def deletar(id):
    chave = ndb.Key(Participante, int(id))
    chave.delete()


def editar(id, nome):
    participante = Participante.get_by_id(int(id))
    participante.nome = nome
    participante.put()
