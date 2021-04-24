import React, { useState } from 'react';

import { useActions } from '../hooks/useAction';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
