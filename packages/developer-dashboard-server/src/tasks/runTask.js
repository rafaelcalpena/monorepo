import startTask from './startTask'

const runTask = ({killChildrenProcessesInstance, children, store, config: {tasks, processes}}) => ({name}) => {
  console.log(name)
  return new Promise((resolve) => {
    resolve(true);
    if (name === "stop-ng-facility"){
        killChildrenProcessesInstance({
          children, store
        });
        return;
    }

    tasks.filter((task) => task.name === name).forEach((task) => {
      task.processes.forEach((processName) => {
          processes.filter(process => process.name === processName).forEach((process) => {
          startTask({
            taskManager: children,
            ...process,
            store
          })
        })
      })
    })

  })
}

export default runTask
