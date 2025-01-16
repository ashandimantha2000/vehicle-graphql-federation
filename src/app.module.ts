import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloDriver,
  ApolloDriverConfig,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
  ApolloGatewayDriver,
  ApolloGatewayDriverConfig,
} from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';

@Module({
  //Update this to GraphQLModule
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      //No server(cors should define in the main.ts)
      gateway: {
        //a new adition
        supergraphSdl: new IntrospectAndCompose({
          //serviceList => subgraphs
          subgraphs: [
            { name: 'vehicle-service', url: 'http://localhost:3000/graphql' },
            { name: 'service-record-service', url: 'http://localhost:3002/graphql' },
            // { name: 'batch-processor', url: 'http://localhost:3001/graphql' },
          ],
        }),
      },
    }),
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
