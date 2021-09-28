export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}
export const authors = [
  {
    id: 1,
    firstName: 'Flora',
    lastName: 'Twell',
    email: 'twell@gmail.com',
    gender: 'Female',
    ipAddress: '99.180.237.44',
  },
  {
    id: 2,
    firstName: 'Jon',
    lastName: 'Terry',
    email: 'terry@gmail.com',
    gender: 'Male',
    ipAddress: '101.102.103.34',
  },
  {
    id: 3,
    firstName: 'adam',
    lastName: 'coler',
    gender: 'Male',
    ipAddress: '101.108.45.46',
  },
  {
    id: 4,
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    gender: 'Male',
    ipAddress: '101.48.26.25',
  },
];
