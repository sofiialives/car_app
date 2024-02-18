import React from "react";
import { ClientsWrapper, List, ListItem } from "./Clients.styled";
import { clientsData } from "../../../utils/clientsList";

const Clients = () => {
  return (
    <ClientsWrapper>
      <p className="dscr-text">Our clients</p>
      <h2 className="dscr-title">
        Our <span className="dscr-span">regular</span> customers
      </h2>
      <List>
        {clientsData.map((client, index) => (
          <ListItem key={index}>
            <img className="img" src={client.imageUrl} alt={client.name} />
            <h3 className="name">{client.name}</h3>
            <p className="descr">{client.description}</p>
          </ListItem>
        ))}
      </List>
    </ClientsWrapper>
  );
};

export default Clients;
