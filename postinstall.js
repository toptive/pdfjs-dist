
 
 var replace = require("replace");

// use:

replace({
    regex: `(data.fieldType === 'Sig' && false)`,
    replacement: "(data.fieldType === 'Sig' && false)",
    paths: ['./build/pdf.combined.js', './build/pdf.combined.js.map', './build/pdf.worker.js', './build/pdf.worker.js.map', './lib/core/annotation.js'],
    recursive: true,
    silent: true,
});