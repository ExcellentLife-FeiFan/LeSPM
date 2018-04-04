import {SAVE_ADDRESS} from './mutation-types'

export default {
  [SAVE_ADDRESS] (state, {latitude,
    longitude}) {
    state.latitude = latitude
    state.longitude = longitude
  }
}
