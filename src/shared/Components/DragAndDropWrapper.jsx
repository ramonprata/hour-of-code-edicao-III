import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { lanesMock } from '../mocks/lanes.mock';
import { makeStyles } from '@material-ui/styles';

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceTasks = [...sourceColumn.tasks];
    const destTasks = [...destColumn.tasks];
    const [removed] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        tasks: sourceTasks,
      },
      [destination.droppableId]: {
        ...destColumn,
        tasks: destTasks,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedTasks = [...column.tasks];
    const [removed] = copiedTasks.splice(source.index, 1);
    copiedTasks.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        tasks: copiedTasks,
      },
    });
  }
};

function DragAndDropWrapper(props) {
  const [columns, setColumns] = useState(lanesMock);
  const classes = useStyles();

  const renderDraggableContent = (task, index) => {
    return (
      <Draggable key={task.id} draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              userSelect: 'none',
              padding: 16,
              margin: '0 0 8px 0',
              minHeight: '50px',
              backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
              color: 'white',
              ...provided.draggableProps.style,
            }}
          >
            {task.description}
          </div>
        )}
      </Draggable>
    );
  };

  const renderLanes = () => {
    return Object.entries(columns).map(([columnId, column], index) => {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignTasks: 'center',
          }}
          key={columnId}
        >
          <h2>{column.name}</h2>
          <div style={{ margin: 8 }}>
            <Droppable droppableId={columnId} key={columnId}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                      padding: 4,
                      width: 250,
                      minHeight: 500,
                    }}
                  >
                    {column.tasks.map((task, index) => renderDraggableContent(task, index))}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.container}>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        {renderLanes()}
      </DragDropContext>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '100%',
  },
});

export default DragAndDropWrapper;
