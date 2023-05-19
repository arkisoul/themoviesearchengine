import {createDataSource} from './config';
import {MovieEntity} from './entities/movie.entity';

// export class MovieDBService {
//   dbService: DatabaseService;
//   constructor() {
//     this.dbService = databaseService;
//     console.log(this.dbService, databaseService);
//   }

//   async insert(data: {title: string; votes: number; rating: number}) {
//     return await this.dbService.dataSource.getRepository(MovieEntity).insert({
//       title: data.title,
//       rating: data.rating,
//       votes: data.votes,
//     });
//   }

//   async findAll() {
//     return await this.dbService.dataSource.getRepository(MovieEntity).find();
//   }
// }

// export const movieDBService = new MovieDBService();

export const insert = async (data: {
  title: string;
  votes: number;
  rating: number;
}) => {
  const dataSource = await createDataSource();
  const movieRepository = await dataSource.getRepository(MovieEntity);
  return await movieRepository.insert({
    title: data.title,
    rating: data.rating,
    votes: data.votes,
  });
};

export const findAll = async () => {
  const dataSource = await createDataSource();
  return await dataSource.getRepository(MovieEntity).find();
};
