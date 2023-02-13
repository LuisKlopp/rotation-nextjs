import connection = require('../dbConfig');
import { Request, Response } from 'express';

export const movieCtrl = {
  getMovies: async (req: Request, res: Response) => {
    connection.query('SELECT * FROM movietest.movie;', (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });
  },
};
