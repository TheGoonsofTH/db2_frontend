import { joinedKunde ,Reservierung} from '@/model/schema'

export interface State {
  Kunden: joinedKunde[]
  editKunde: joinedKunde | Record<string, unknown>
  Reservierungen: Reservierung[]
}

const versionString = import.meta.env.MODE === 'development' ? _APP_VERSION + '-dev' : _APP_VERSION

export const state: State = {
  Kunden: [],
  editKunde: {},
}
