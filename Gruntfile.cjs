// Legacy Gruntfile — kept only for the 'metrics' and 'version' tasks.
// The main build pipeline uses rspack (see rspack.config.js).
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  grunt.task.loadTasks('tasks');
};
