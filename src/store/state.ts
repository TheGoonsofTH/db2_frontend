import { Kunde } from "@/model/schema"

export interface State {
Kunden: Kunde[] 
}


const versionString = import.meta.env.MODE === 'development' ? _APP_VERSION + '-dev' : _APP_VERSION

export const state: State = {
  Kunden:[]
}
