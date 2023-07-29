import {json, Request, Response} from 'express';

import pool from '../database';

class GamesController {
public async list (req: Request, res: Response): Promise<void> {
       const games = await pool.query('SELECT * FROM games');
      res.json(games[0]);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
      const {id} = req.params;
      const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
      if(games.length > 0){
        return res.json(games[0]);
      }
      res.status(404).json({text:"The game doesn't exists"});
        // res.json({text: 'this is game' +" "+ req.params.id});
    }

  public async create(req: Request, res: Response): Promise<void> {
      await pool.query('INSERT INTO games set ?', [req.body]);
      res.json({message: 'Game Saved'});
    }

    public async update(req: Request, res: Response): Promise<void>{

        const {id} = req.params;
        await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
      
        res.json({message: 'The game was updated'});
        // res.json({text: 'updating a game' +' '+ req.params.id});
      }

    public async delete(req: Request, res: Response): Promise<void>{
      const{id} = req.params;
      await pool.query('DELETE FROM games WHERE id = ?', [id]); 
      res.json({message: 'The game was deleted'});
      // res.json({text: 'deleting a game'});
      }
}

const gamesController = new GamesController();
export default gamesController;  