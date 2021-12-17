export default function canIterate(value) {
  return Symbol.iterator in Object(value);
}
