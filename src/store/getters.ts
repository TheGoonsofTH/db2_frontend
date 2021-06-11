import { Adresse } from '@/model/schema'
import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  getAdressbyid(theState: State) : (id:number) => Adresse | null
}

export const getters: GetterTree<State, State> & Getters = {
  getAdressbyid: (theState: State) => (id: number): Adresse | null => {
    const book = theState.Adressen.find(item => item.id === id);
    return book || null;
  }
}
