import { movieCtrl } from '../controllers/movieCtrl';
const router = require('express').Router();

router.route('/').get(movieCtrl.getMovies);

module.exports = router;

export interface Iquery {
  movie_id: number;
  title: string;
  person: string;
  genre: string;
  runningtime: number;
}
