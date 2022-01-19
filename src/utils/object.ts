export const isObject = <T>(item: T): boolean => {
  if (item && typeof item === 'object' && !Array.isArray(item)) {
    return Object.prototype.toString.call(item) === '[object Object]'
  }

  return false
}

export const mergeDeep = <
  T extends Record<string, unknown>,
  S extends Record<string, unknown>[]
>(target: T, ...sources: S): T & S[number] => {
  if (!sources.length) {
    return target
  }

  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {
            [key]: {},
          })
        }

        // @ts-expect-error
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, {
          [key]: source[key],
        })
      }
    }
  }

  return mergeDeep(target, ...sources)
}
