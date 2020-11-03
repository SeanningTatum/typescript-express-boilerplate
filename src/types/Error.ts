export interface GenericError {
    message: string;
    code: number;
}

export class DuplicateError extends Error {
  constructor(type: string) {
    super(`${type} is already created!`);
    this.name = 'DuplicateError';
  }
}

export class NotFoundError extends Error {
  constructor(type: string) {
    super(`${type} is not found`);
    this.name = 'NotFoundError';
  }
}

export class AlreadyLinkedError extends Error {
  constructor(name: string) {
    super(`${name} is already linked to another account`);
    this.name = 'AlreadyLinkedError';
  }
}

export class InvalidTokenError extends Error {
  constructor() {
    super('Token is invalid or does not exist');
    this.name = 'InvalidTokenError';
  }
}
