import coreAPI from "./network"

export const postLogin = async (payload) => {
  try {
    const res = await coreAPI.post(`/auth/login`, payload)
    if (res && res.status === 200) {
      return res.data
    } else {
      return res.data
    }
  } catch (error) {
    return Promise.resolve(null)
  }
}

export const getUserList = async (filter) => {
  const filterUser = filter ? `?filter=${filter}` : ''
  try {
    const res = await coreAPI.get(`/user${filterUser}`)
    if (res && res.status === 200) {
      return res.data
    } else {
      return res.data
    }
  } catch (error) {
    return Promise.resolve(null)
  }
}

export const postCreateUser = async (payload) => {
  try {
    const res = await coreAPI.post(`/user`, payload)
    if (res && res.status === 200) {
      return res.data
    } else {
      return res.data
    }
  } catch (error) {
    return Promise.resolve(null)
  }
}

export const patchEditUser = async (id, payload) => {
  try {
    const res = await coreAPI.patch(`/user/${id}`, payload)
    if (res && res.status === 200) {
      return res.data
    } else {
      return res.data
    }
  } catch (error) {
    return Promise.resolve(null)
  }
}