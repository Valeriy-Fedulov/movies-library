import dataStorage from './data-storage';
import refs from './refs';
import imageCardTpl from '../../templates/card-markup.hbs';
import noResultsTpl from '../../templates/no-results.hbs';

export default function renderWatchedMovies() {
  const watchedListMovies = dataStorage.getWatchedMovies();

  refs.buttonWatched.classList.toggle('btn--primary--active');
  refs.buttonQueue.classList.toggle('btn--primary--active');

  refs.galleryContainer.innerHTML = '';
  if (!watchedListMovies || !watchedListMovies.length) {
    const message = noResultsTpl({ list: 'watched' });
    // refs.messageContainer.innerHTML = message;
  } else {
    dataStorage.saveCurrentMovies(watchedListMovies);
    refs.galleryContainer.innerHTML = imageCardTpl(watchedListMovies);
  }
}