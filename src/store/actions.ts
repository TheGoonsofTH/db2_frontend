import { ActionTree, ActionContext } from 'vuex'

import { State } from './state'
import { Mutations, Mutation } from './mutations'
import { Kunde } from '@/model/schema'
const API ='http://localhost:3000'


export enum Action {
  syncKunden = 'syncKunden',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [Action.syncKunden]({ state, commit }: AugmentedActionContext): void
}

export const actions: ActionTree<State, State> & Actions = {
 async [Action.syncKunden]({ state, commit }) {
    const res = await fetch(`${API}/kunden`)
    const Kunden :Kunde[] = await res.json()
    commit(Mutation.refreshKunden,Kunden)
  },
}
