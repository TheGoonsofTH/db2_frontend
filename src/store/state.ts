import { joinedKunde} from '@/model/schema'

export interface State {
  Kunden: joinedKunde[]
  editKunde: joinedKunde | Record<string, unknown>
}

const versionString = import.meta.env.MODE === 'development' ? _APP_VERSION + '-dev' : _APP_VERSION

export const state: State = {
  Kunden: [],
  editKunde: {},
}
