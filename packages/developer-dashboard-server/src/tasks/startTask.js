import run from '@rafaelcalpena/run'


/* probably shouldn't be here in this file */
/* TODO: remove store argument (implicit object passing) or use currying */

let batchQueue = [];
const batchInterval = 250; //in ms

/* TODO: Investigate why messages are being dropped in the terminal
  100ms seems to be worse than 250
 */

const dispatchToBatch = (store) => (action) => {
  batchQueue = [...batchQueue, action];

  if (batchQueue.length === 1){
    setTimeout(() => {
      console.log('dispatching batch:', batchQueue.length, 'items')
      store.dispatch({
        type: 'BATCH_ACTIONS',
        actions: batchQueue
      });
      batchQueue = [];
    }, batchInterval)
  }
}


export default ({
  taskManager,
  program,
  args,
  options,
  name,
  store
}) => {

  // first, check in task manager if already running. If so, return

  const isAlreadyRunning = taskManager.filter(item => item.name === name).length > 0;

  if (isAlreadyRunning){
    console.log(name, 'is already running; aborting spawn');
    return;
  }

  console.log('spawning/running', program, args, options)
  const task = run(program, args, options)

  /* set the listeners for incoming data and errors */
  task.stdout.setEncoding('utf8');
  task.stdout.on('data', function(data){
    (store).dispatch(
      {
        type: 'PROCESS_DATA',
        name: name,
        data: data
      }
    )
  })

  task.stderr.setEncoding('utf8');
  task.stderr.on('data', (data) => {
    (store).dispatch(
      {
        type: 'PROCESS_ERROR',
        name: name,
        data: data
      }
    )

  });

  task.on('exit', (code) => {
    console.log('task ', name, 'exited: ', code)

    /* TODO: make this fp */
    /* TODO: Improve find (currently O(n))*/
    const findProcess = (item) => item.name === name;
    taskManager.splice(taskManager.indexOf(taskManager.find(findProcess)), 1);
    (store).dispatch(
      {
        type: 'PROCESS_EXIT',
        code: code,
        name: name
      }
    );
  })

  taskManager.push({task, name});
  (store).dispatch(
    {
      type: 'PROCESS_START',
      name: name
    }
  );
  console.log(taskManager)

  return {
    name,
    task
  };
}
