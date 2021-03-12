import uniqid from 'uniqid';

export const getRearrangedLanes = (result, lanes) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = lanes[source.droppableId];
    const destColumn = lanes[destination.droppableId];
    const sourceTasks = [...sourceColumn.tasks];
    const destTasks = [...destColumn.tasks];
    const [removed] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, removed);

    return {
      ...lanes,
      [source.droppableId]: {
        ...sourceColumn,
        tasks: sourceTasks,
      },
      [destination.droppableId]: {
        ...destColumn,
        tasks: destTasks,
      },
    };
  } else {
    const column = lanes[source.droppableId];
    const copiedTasks = [...column.tasks];
    const [removed] = copiedTasks.splice(source.index, 1);
    copiedTasks.splice(destination.index, 0, removed);
    return {
      ...lanes,
      [source.droppableId]: {
        ...column,
        tasks: copiedTasks,
      },
    };
  }
};

export const addLaneToBoard = (board, newLane) => {
  const laneId = uniqid();
  const lane = {
    id: laneId,
    laneName: newLane,
    tasks: [],
  };
  const boardWithLanes = {
    ...board,
    lanes: { ...board.lanes, [laneId]: lane },
  };
  return boardWithLanes;
};

export const addTaksToLane = (board, laneId, newTask) => {
  const lane = board.lanes[laneId];
  lane.tasks.push(newTask);
  const boardWithTasks = {
    ...board,
    lanes: {
      ...board.lanes,
      [laneId]: lane,
    },
  };
  return boardWithTasks;
};
