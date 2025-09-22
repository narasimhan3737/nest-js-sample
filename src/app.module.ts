import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { TopicsModule } from './topics/topics.module';
import { ConfigModule } from './config/config.module';
import { EpisodeController } from './episode/episode.controller';
import { EpisodesController } from './episodes/episodes.controller';
import { EpisodesModule } from './episodes/episodes.module';

@Module({
  imports: [EpisodesModule, TopicsModule, ConfigModule],
  controllers: [AppController, EpisodeController, EpisodesController],
  providers: [AppService],
})
export class AppModule {}
