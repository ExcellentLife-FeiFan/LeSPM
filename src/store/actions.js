import {SAVE_ADDRESS} from './mutation-types'
export default {
  async UD ({commit, state}, p) {
    alert(p.str)
    commit(SAVE_ADDRESS, {latitude: state.latitude + ' PLUSS', longitude: state.longitude + ' PLUS'})
  }
}
