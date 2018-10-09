import { BASE_URL, TYPE_OPTIONS, RANDOM_TYPE } from './constants';

function getRandomType() {
  const randomIndex = Math.floor(Math.random() * TYPE_OPTIONS.length);
  return TYPE_OPTIONS[randomIndex].value;
}

export function getPets ({amount, type}) {
  let typeToUse = type;

  if (type === RANDOM_TYPE.value) {
    typeToUse = getRandomType()
  }
  const url = `${BASE_URL}${typeToUse}?count=${amount}`;

  return fetch(url, { mode: 'cors' })
    .then(resp => resp.json());
}
