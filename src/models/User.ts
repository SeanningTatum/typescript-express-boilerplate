/**
 * @swagger
 *
 * definitions:
 *   User:
 *     type: object
 *     required:
 *       - username
 *       - password
 *     properties:
 *       id:
 *         type: string
 *         format: id
 *       username:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 */
export interface UserModel {
    id: string;
    username: string;
}
