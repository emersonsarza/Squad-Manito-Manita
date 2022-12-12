import React, { FunctionComponent } from 'react';

import { Container, Name, Text, WishlistItem } from './Manito.styles';

interface ManitoProps {
  name?: string;
  wishlists?: string[];
}

const Manito: FunctionComponent<ManitoProps> = ({ name, wishlists }) => {
  return (
    <Container>
      <Text>Your Manito / Manita is</Text>
      <Name>{name}</Name>
      {wishlists?.length ? (
        <>
          <WishlistItem>W I S H L I S T</WishlistItem>
          {wishlists.map((wl, i) => (
            <WishlistItem key={i}>{wl}</WishlistItem>
          ))}
        </>
      ) : (
        <WishlistItem>No wishlist added yet.</WishlistItem>
      )}
    </Container>
  );
};

export default Manito;
