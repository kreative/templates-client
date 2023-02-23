export interface IAccount {
  ksn: number;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneCountryCode: string;
  phoneNumber: string;
  emailVerified: boolean;
  profilePicture: string;
  walletBalance: number;
  permissions: string[];
}