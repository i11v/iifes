/*
 * IIFES
 *
 * Immediately invoked "strict" function expression template.
 *
 * Copyright (c) 2013 Ilnur Khalilov
 */

"use strict";

exports.description = "Immediately invoked \"strict\" function expression template";

exports.template = function (grunt, init, done) {
  init.process({}, [
      {
        name: "name",
        message: "Script name",
        default: "main"
      },
      {
        name: "title",
        message: "Human-readable script name",
        default: "Main"
      },
      {
        name: "description",
        message: "Script description",
        default: "Main JavaScript App"
      },
      init.prompt("author_name")
    ], function (err, props) {
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });
};
