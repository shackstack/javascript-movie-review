export default class MovieHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.setEvent();
  }

  render() {
    this.innerHTML = /*html*/ `
  <header>
    <h1>MovieList</h1>
    <movie-search></movie-search>
  </header>`;
  }

  setEvent() {
    const $homeButtom = this.querySelector("h1");
    if ($homeButtom instanceof HTMLHeadingElement)
      $homeButtom.addEventListener("click", () => {
        this.dispatchEvent(
          new CustomEvent("click-home-button", { bubbles: true })
        );
      });
  }
}

customElements.define("movie-header", MovieHeader);
