module.exports  =   function (babel) { 
  return {
    visitor: {
      Literal: function(path) {
          if(path.node.value !== "Hello") {
              return
          }
          path.node.value = "Hi"
      },
      ImportDeclaration: function(path) {
          var filepath = path.node.source.value;
          if(filepath[0] !== "@") {
              return;
          }
          filepath = filepath.substring(1);
          filepath = process.cwd() + "/lib" + filepath;
          path.node.source.value = filepath
      }
    }
  }
};
