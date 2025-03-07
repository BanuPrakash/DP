module.exports = function (babel) {
   return {
      visitor: {
        Literal(path) {
          if(path.node.value === 'Hello') {
            path.node.value = 'Hi';
          }
          return;
      },
      ImportDeclaration(path) {
        // var filepath = path.node.source.value; // '@/util';
        // if(filepath[0] !== '@') {
        //     return;
        // }
        // filepath = filepath.substring(1);
        // filepath = process.cwd() + "/lib/" + filepath;

        // path.node.source.value = filepath;
      }
    }
    };
}
