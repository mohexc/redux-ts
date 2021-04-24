import React, { useState } from 'react';
import { useTypeSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypeSelector((state) => state.repositories);

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

      {loading && <p>loding...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && data.map((name: string) => <p>{name}</p>)}
    </div>
  );
};

export default RepositoriesList;
