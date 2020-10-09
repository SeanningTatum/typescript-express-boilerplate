import { Request, Response } from 'express';

class GetUser {
  public static perform(req: Request, res: Response): any {
    return res.json({
      username: 'testUser',
    });
  }
}

export default GetUser;
