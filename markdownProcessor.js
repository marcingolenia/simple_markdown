class MarkdownProcessor {
  constructor(source, preview) {
    this.preview = preview;
    this.source = source;
    this.source.processText = this.processText.bind(this);
    this.initRegExp();
  }

  initRegExp() {
    this.h1 = "#.*";
    this.h2 = "##.*";
    this.h3 = "###.*";
    this.italic = "(_|__)(.*?)\\1";
    this.bold = "(\*\*|__)(.*?)\\1";
    this.hyperlink = "\[([^\[]+)\]\(([^\)]+)\)";
  }

  processText(textToProcess) {
    var parts = textToProcess.split(/[\n\r]/g);
    console.log(parts);
    var h1s = textToProcess.match(this.h1);
    for(var h1 of h1s) {
      console.log(h1);
      textToProcess = textToProcess.replace(h1, `<h1>${h1}</h1>`);
    }

    this.preview.applyContent(textToProcess);
  }
}
