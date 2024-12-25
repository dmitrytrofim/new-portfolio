import { deleteAsync } from 'del';
export const deltxt = () => {
 return deleteAsync(app.path.build.js + '/*.txt');
};
