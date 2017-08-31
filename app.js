const preview1 = "preview1";
const input1 = "input1";

class App {
  constructor() {
    var preview = new MarkdownPreview(preview1);
    var source = new MarkdownSource(input1);
    new MarkdownProcessor(source, preview);
  }
}

(function() {
    new App();
}());
