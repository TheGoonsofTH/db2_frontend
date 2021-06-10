import { Kunde } from '@/model/schema'

export interface State {
  Kunden: Kunde[]
  editKunde: Kunde
}

const versionString = import.meta.env.MODE === 'development' ? _APP_VERSION + '-dev' : _APP_VERSION

export const state: State = {
  Kunden: [],
  editKunde: {
    Nachname: '',
    Vorname: '',
    Alter: 0,
    Kontaktdaten_id: 0,
  },
}
