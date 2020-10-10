import { Request, Response } from 'express';

/**
 * @swagger
 *
 * /api/v1/user/getUser/{id}:
 *  post:
 *    description: Fetches user with matching id
 *    produces: application/json
 *    parameters:
 *      - name: id
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the user
 *    responses:
 *      200:
 *        description: Success
 *
 */
interface Params {
  id: string;
}

class GetUser {
  public static perform(req: Request<Params>, res: Response): any {
    return res.json({
      id: req.params.id,
    });
  }
}

export default GetUser;
