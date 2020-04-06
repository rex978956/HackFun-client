export const FIELDS = 'FIELDS'

export const COURSE = 'COURSE'

export const LESSON = 'LESSON'

export const AUTHSTATE = 'AUTHSTATE'

export const PROFILE = 'PROFILE'

// export const TODOS = 'TODOS'

// export const MESSAGE = 'MESSAGE'

export default {
  UPDATE_TYPE: (state, type) => {
    state.type = type
  },
  UPDATE_DATA: (state, data) => {
    state.data = data
  }
}
