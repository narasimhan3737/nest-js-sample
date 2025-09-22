import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';

@Module({
  providers: [EpisodesService]
})
export class EpisodesModule {}
