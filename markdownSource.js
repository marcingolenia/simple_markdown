class MarkdownSource {
  constructor(elementId) {
    this.sourceElement = document.getElementById(elementId);
    if(this.sourceElement) {
      this.sourceElement.onkeyup = this.onSourceChange.bind(this);
    } else {
      throw new Error('MarkdownSource element not found!');
    }
  }

  onSourceChange() {
    if(this.processText) {
      this.processText(this.sourceElement.value);
    }
  }
}
