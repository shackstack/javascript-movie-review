import {
  MAX_MOVIE_QUANTITY_PER_PAGE,
  TOGGLE_SKELETON,
} from "../constant/setting";
import { $ } from "../utils/Dom";
import SkeletonList from "./SkeletonList";

export default class MovieCardList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get header() {
    return this.getAttribute("header");
  }

  render() {
    this.innerHTML = /*html*/ `
        <h1>${this.header}</h1>
        <ul id="movie-list" class="item-list">
        </ul>
        <skeleton-list class="hidden"></skeleton-list> 
        `;
  }

  setMovieList(movieList: movieList) {
    const $movieList = $("#movie-list");
    if ($movieList instanceof HTMLElement)
      movieList.forEach((item: movieInfo) => {
        $movieList.insertAdjacentHTML(
          "beforeend",
          `<movie-card movieTitle='${item.title}' poster='${item.poster}' rating='${item.rating}' movieId='${item.movieId}'>
          </movie-card>`
        );
      });
  }

  toggleSkeletonList(method: toggleSkeleton) {
    const $skeletonList = $("skeleton-list");
    if ($skeletonList instanceof SkeletonList)
      method === TOGGLE_SKELETON.HIDDEN
        ? $skeletonList.classList.add("hidden")
        : $skeletonList.classList.remove("hidden");
  }
}

customElements.define("card-list", MovieCardList);