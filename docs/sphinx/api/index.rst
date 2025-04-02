
API Reference
============

GraphQL API
----------

Main Endpoints
~~~~~~~~~~~~

.. code-block:: graphql

   type Query {
     generateHTML(template: String!): HTMLResponse!
     getGameState(gameId: ID!): GameState!
     getMLPrediction(input: MLInput!): Prediction!
   }

   type Mutation {
     saveTemplate(template: String!): Boolean!
     trainModel(config: TrainingConfig!): TrainingJob!
   }

REST Endpoints
~~~~~~~~~~~~

.. http:get:: /api/v1/health

   Health check endpoint

   **Example response**:

   .. sourcecode:: http

      HTTP/1.1 200 OK
      Content-Type: application/json

      {
          "status": "healthy",
          "version": "1.0.0"
      }

Authentication
~~~~~~~~~~~~

All API endpoints require authentication via JWT tokens obtained from Keycloak.

.. code-block:: bash

   curl -H "Authorization: Bearer <token>" https://api.pjhub.com/graphql
