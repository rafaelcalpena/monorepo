export default ({
  taskManager,
  name
}) => {

  taskManager.forEach((item) => {
    if (item.name === name){
      item.task.kill('SIGTERM');
    }
  })

}
