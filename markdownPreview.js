class MarkdownPreview {
  constructor(elementId) {
    var frame = document.getElementById(elementId);

    if(frame) {
      this.previewContent = frame.contentWindow.document;
    } else {
      throw new Error('MarkdownPreview not found!');
    }
  }

  applyContent(content) {
    const markdown = content;
    this.previewContent.open();
    this.previewContent.write(`<html><head><link rel="stylesheet" href="styles.css"><title></title></head><body class="markdown">${markdown}</body></html>`);
    this.previewContent.close();
  }
}
