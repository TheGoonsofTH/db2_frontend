/* eslint-disable prefer-const */
import { ActionTree, ActionContext } from 'vuex'

import { State } from './state'
import { Mutations, Mutation } from './mutations'
import { Adresse, joinedKunde, Kunde, Reservierung } from '@/model/schema'
const API = 'http://localhost:3000'

export enum Action {
  syncKunden = 'syncKunden',
  addKunde = 'addKunde',
  updateKunde = 'updateKunde',
  deleteKunde = 'deleteKunde',
  syncReserverierungen = 'syncReserverierungen',
  updateReservierung = 'updateReservierung'
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [Action.syncKunden]({ state, commit }: AugmentedActionContext): void
  [Action.syncReserverierungen]({ state, commit }: AugmentedActionContext): void
  [Action.addKunde]({ state, commit, dispatch }: AugmentedActionContext, payload: Kunde): void
  [Action.updateKunde]({ state, commit, dispatch }: AugmentedActionContext, payload: Kunde): void
  [Action.updateReservierung]({ state, commit, dispatch }: AugmentedActionContext, payload: Reservierung): void
  [Action.deleteKunde]({ state, commit, dispatch }: AugmentedActionContext, id: number): void
}

export const actions: ActionTree<State, State> & Actions = {
  async [Action.syncKunden]({ state, commit }) {
    const res = await fetch(`${API}/kunden`)
    const Kunden: joinedKunde[] = await res.json()
    let adresse: Adresse[] = []
    Kunden.forEach((k) => {
      let adr: Adresse = {
        strasse: k.strasse,
        Hausnummer: k.Hausnummer,
        stadt: k.stadt,
        zipcode: k.zipcode,
        id:k.Adresse_id
      }
      adresse.push(adr)
    })
    commit(Mutation.refreshAdressen,adresse)
    commit(Mutation.refreshKunden, Kunden)
  },
  async [Action.syncReserverierungen]({ state, commit }) {
    const res = await fetch(`${API}/reservierungen`)
    const Reservierung: Reservierung[] = await res.json()
    commit(Mutation.refreshReservierungen, Reservierung)
  },
  async [Action.addKunde]({ state, commit, dispatch }, payload) {
    const newKunde = payload
    const options = {
      method: 'POST',
      body: JSON.stringify(newKunde),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await fetch(`${API}/kunden`, options)
    dispatch(Action.syncKunden)
  },
  async [Action.updateKunde]({ state, commit, dispatch }, payload) {
    const newKunde = payload
    const options = {
      method: 'PATCH',
      body: JSON.stringify(newKunde),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await fetch(`${API}/kunden`, options)
    dispatch(Action.syncKunden)
  },
  async [Action.updateReservierung]({ state, commit, dispatch }, payload) {
    const newItem = payload
    const options = {
      method: 'PATCH',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await fetch(`${API}/kunden`, options)
    dispatch(Action.syncReserverierungen)
  },
  async [Action.deleteKunde]({ state, commit, dispatch }, id) {
    const options = {
      method: 'DELETE',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await fetch(`${API}/kunden/${id}`, options)
    dispatch(Action.syncKunden)
  },
}
