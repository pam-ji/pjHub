
import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_SYSTEM_STATUS = gql`
  query GetSystemStatus {
    getSystemStatus {
      postgres {
        status
        connections
        activeQueries
      }
      redis {
        status
        connectedClients
        usedMemory
      }
      minio {
        status
        buckets
        totalSize
      }
      traefik {
        status
        activeRoutes
        healthChecks
      }
    }
  }
`;

function AdminDashboard() {
  const { loading, error, data } = useQuery(GET_SYSTEM_STATUS, {
    pollInterval: 5000,
  });

  if (loading) return <div>Loading system status...</div>;
  if (error) return <div>Error fetching status</div>;

  return (
    <div className="admin-dashboard p-4">
      <h1 className="text-2xl mb-4">System Status Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl mb-2">PostgreSQL</h2>
          <div>{data.getSystemStatus.postgres.status}</div>
          <div>Connections: {data.getSystemStatus.postgres.connections}</div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl mb-2">Redis</h2>
          <div>{data.getSystemStatus.redis.status}</div>
          <div>Clients: {data.getSystemStatus.redis.connectedClients}</div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl mb-2">MinIO</h2>
          <div>{data.getSystemStatus.minio.status}</div>
          <div>Buckets: {data.getSystemStatus.minio.buckets}</div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl mb-2">Traefik</h2>
          <div>{data.getSystemStatus.traefik.status}</div>
          <div>Routes: {data.getSystemStatus.traefik.activeRoutes}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
