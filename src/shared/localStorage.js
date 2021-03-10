export const set = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const get = (key, defaultData) => {
  return JSON.parse(localStorage.getItem(key)) ?? defaultData;
};
