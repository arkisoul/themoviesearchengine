import {DataSource} from 'typeorm';

import {MovieEntity} from './entities/movie.entity';

// export class DatabaseService {
//   dataSource!: DataSource;
//   constructor() {
//     this.create();
//   }

//   create() {
//     this.dataSource = new DataSource({
//       type: 'react-native',
//       database: 'marvelapp',
//       location: 'default',
//       synchronize: true,
//       logging: true,
//       entities: [MovieEntity],
//     });
//     this.init();
//   }

//   async init() {
//     try {
//       await this.dataSource.initialize();
//       console.log('Data Source has been initialized!');
//     } catch (error) {
//       console.error('Error during Data Source initialization', error);
//     }
//   }
// }

// export const databaseService = new DatabaseService();
export const createDataSource = async () => {
  const dataSource = new DataSource({
    type: 'react-native',
    database: 'marvelapp.db',
    location: 'default',
    synchronize: true,
    logging: false,
    entities: [MovieEntity],
  });
  if (dataSource.isInitialized) {
    return dataSource;
  }
  try {
    return await dataSource.initialize();
  } catch (error) {
    console.error('Error DataSource init', error);
  }
};
