import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_SYSTEM_STATUS } from './graphql/queries';

function Taskbar() {
  const { data, loading, error } = useQuery(GET_SYSTEM_STATUS, {
    pollInterval: 10000,
  });

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/html-generator" className="hover:text-gray-300">HTML Generator</Link>
          <Link to="/slay-the-spire" className="hover:text-gray-300">SlAI The Spire</Link>
          <Link to="/admin" className="hover:text-gray-300">Admin</Link>
        </div>

        <div className="flex space-x-4">
          {!loading && !error && (
            <>
              <span className={`px-2 py-1 rounded ${data?.getSystemStatus.postgres.status === 'up' ? 'bg-green-500' : 'bg-red-500'}`}>
                DB
              </span>
              <span className={`px-2 py-1 rounded ${data?.getSystemStatus.redis.status === 'up' ? 'bg-green-500' : 'bg-red-500'}`}>
                Cache
              </span>
              <span className={`px-2 py-1 rounded ${data?.getSystemStatus.minio.status === 'up' ? 'bg-green-500' : 'bg-red-500'}`}>
                Storage
              </span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Taskbar;