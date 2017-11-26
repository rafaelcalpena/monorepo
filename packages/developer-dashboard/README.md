# Developer Dashboard (Pre-Alpha)

Save time by automating your daily actions into processes and tasks. Customize dashboards to suit your needs.

### Installing

`npm install @rafaelcalpena/developer-dashboard`

### Set Up

Create a `config.js` anywhere in your folders with the accepted properties:

```javascript
/*
  Please use non-es6 code in this file for now.
  Automatic transpilation will be added in a future version.
*/
exports = module.exports = {};

/*
  A Process is the smallest unit in developer-dashboard.
  It talks directly to the Operating System.
*/
const processes = [

  {
    name: 'disk-space',    

    /* the properties below are used for
       require('child_process').spawn
    */
    program: 'df',
    args: [ '-h' ],
    options: {
      stdio: 'pipe',
      cwd: '/private/var/rafaelcalpena/',
      shell: true
    }
  },

  {
    name: 'homebrew-update',    
    program: 'brew',
    args: [ 'outdated' ],
    options: {
      stdio: 'pipe',
      shell: true
    }
  },

  {
    name: 'osx-update',    
    program: 'softwareupdate',
    args: [ '-l' ],
    options: {
      stdio: 'pipe',
      shell: true
    }
  }
]


/*
  A task can spawn one or many processes when called.
*/
const tasks = [
  {
    name: "disk-space",
    processes: ["disk-space"]
  },

  {
    name: "homebrew-update",
    processes: ["homebrew-update"]
  },

  {
    name: "osx-update",
    processes: ["osx-update"]
  },

  {
    name: "update-all",
    processes: ["homebrew-update", "osx-update"]
  }
]

/* Create Categories for your tasks */
const categoriesElements = [
  {
    expanded: true,
    title: "Updates",
    id: 'updates',
    buttons: [
      {
        text: "Update Apps (OSX)",
        task: "osx-update"
      },
      {
        text: "Update Homebrew Apps",
        task: "homebrew-update"
      }
    ],
    terminals: ["osx-update", "homebrew-update"]
  }
];

exports.tasks = tasks;
exports.categoriesElements = categoriesElements;
exports.processes = processes;

```

###Running

Go to the folder that contains the `config.js` file and run `developer-dashboard` in your terminal
