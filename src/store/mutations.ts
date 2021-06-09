import { Kunde } from '@/model/schema'
import { MutationTree } from 'vuex'
import { State } from './state'


export enum Mutation {
  INCREMENT = 'INCREMENT',
  refreshKunden = 'refreshKunden',
}

export type Mutations<S = State> = {
  [Mutation.refreshKunden](state: S,payload:Kunde[]): void
}

export const mutations: MutationTree<State> & Mutations = {
  [Mutation.refreshKunden](state: State, payload: Kunde[] = []) {
    state.Kunden = payload
  },
}
