import React from 'react';
import { string, bool, func } from 'prop-types';
import { Button, ButtonGroup } from '@chakra-ui/core';

const SearchItem = ({ packageAndVersion, disabled, onClick, packageName, packageVersion }) => {
  const handleClick = () => {
    onClick({ name: packageName, version: packageVersion });
  };

  return (
    <ButtonGroup spacing={4} marginRight={2} marginBottom={2}>
      <Button leftIcon={disabled ? 'check' : 'add'} size="sm" onClick={handleClick} disabled={disabled}>
        {packageAndVersion}
      </Button>
    </ButtonGroup>
  );
};

SearchItem.propTypes = {
  disabled: bool.isRequired,
  packageAndVersion: string.isRequired,
  onClick: func.isRequired,
};

const SearchItemMemoized = React.memo(SearchItem);

export default SearchItemMemoized;
