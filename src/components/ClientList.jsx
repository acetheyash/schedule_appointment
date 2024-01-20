import React, { useState } from 'react';
import ClientRow from './ClientRow';
import clientData from './ClientData';

const ClientList = () => {
  const [clients, setClients] = useState(clientData);

  const handleUpdate = (updatedClient) => {
    // Finding index of the client in the array
    const index = clients.findIndex((client) => client.id === updatedClient.id);

    // Updating client array with the edited client data
    const updatedClients = [...clients];
    updatedClients[index] = updatedClient;

    // Updating state with the edited client data
    setClients(updatedClients);
  };

  return (
    <div>
      {clients.map((client) => (
        <ClientRow key={client.id} client={client} onUpdate={handleUpdate} />
      ))}
    </div>
  );
};

export default ClientList;

