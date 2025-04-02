
import { gql } from '@apollo/client';

export const GET_SYSTEM_STATUS = gql`
  query GetSystemStatus {
    getSystemStatus {
      postgres {
        status
        connections
      }
      redis {
        status
        connectedClients
      }
      minio {
        status
        buckets
      }
    }
  }
`;

export const GET_HTML_TEMPLATES = gql`
  query GetHtmlTemplates {
    htmlTemplates {
      id
      name
      content
      createdAt
    }
  }
`;

export const GET_GAME_STATS = gql`
  query GetGameStats {
    gameStats {
      id
      modelVersion
      winRate
      gamesPlayed
      averageScore
    }
  }
`;
