export declare interface JWTState {
  isAuthenticated?: boolean;
  isInitialised?: boolean;
  user?: User | null;
}

export declare interface User extends Document {
  firstName: string;
  lasttName: string;
  email: string;
  password: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export declare interface DecodedToken {
  [key: string]: string | number | date;
}
