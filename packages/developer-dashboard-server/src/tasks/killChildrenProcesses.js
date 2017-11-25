export default ({children, store}) => {
  return () => {
    console.log('killing', children.length, 'child processes');
    console.log(children)
    children.forEach(function(child) {
      child.task.kill('SIGTERM');
    });
    children = [];
  }
}
