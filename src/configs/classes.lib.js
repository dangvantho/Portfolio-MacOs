function classes(...names) {
  let result = names.map((item) => {
    if (typeof item === "string") {
      return item;
    }
    let key = Object.keys(item)[0];
    if (item[key]) return key;
    return "";
  });
  return result.join(" ");
}
export default classes;
