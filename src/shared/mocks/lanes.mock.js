import uniqid from 'uniqid';

const tasksMock = [
  {
    id: uniqid(),
    taskDescription:
      'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
  },
  {
    id: uniqid(),
    taskDescription:
      'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
  },
];
export const lanesMock = {
  [uniqid()]: {
    title: 'Lane One',
    tasks: tasksMock,
  },
  [uniqid()]: {
    title: 'Lane One',
    tasks: tasksMock.map((task) => ({ ...task, id: uniqid() })),
  },
};
