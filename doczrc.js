export default {
  filterComponents: files =>
    files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath))
}
