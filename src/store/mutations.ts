import { Adresse, joinedKunde, Kunde ,Reservierung} from '@/model/schema'
import { MutationTree } from 'vuex'
import { State } from './state'


export enum Mutation {
  INCREMENT = 'INCREMENT',
  refreshKunden = 'refreshKunden',
  refreshReservierungen = 'refreshReservierungen',
  refreshAdressen = 'refreshAdressen'
}

export type Mutations<S = State> = {
  [Mutation.refreshKunden](state: S,payload:joinedKunde[]): void
  [Mutation.refreshReservierungen](state: S,payload:Reservierung[]): void
  [Mutation.refreshAdressen](state: S,payload:Adresse[]): void
}

export const mutations: MutationTree<State> & Mutations = {
  [Mutation.refreshKunden](state: State, payload: joinedKunde[] = []) {
    state.Kunden = payload
  },
  [Mutation.refreshAdressen](state: State, payload: Adresse[] = []) {
    state.Adressen = payload
  },
  [Mutation.refreshReservierungen](state: State, payload: Reservierung[] = []) {
    state.Reservierungen = payload
  },
}
