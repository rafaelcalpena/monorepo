/* For the resolvers */
import killChildrenProcessesCreator from './killChildrenProcesses'

export default (children) => {
  const killChildrenProcesses = killChildrenProcessesCreator(children)
  process.on('exit', function() {
    killChildrenProcesses();
  });
  const cleanExit = function() { process.exit() };
  process.on('SIGINT', cleanExit); // catch ctrl-c
  process.on('SIGTERM', cleanExit); // catch kill
  process.on('SIGHUP', cleanExit);
  //process.on('uncaughtException', cleanExit);
  process.on('cleanup', cleanExit);

  return killChildrenProcesses;
}
