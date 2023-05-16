import StyledSearchbar from './Searchbar.component';
import { BsSearch } from 'react-icons/bs';

export const Searchbar = ({ onSearchSubmit }) => {
  return (
    <StyledSearchbar.Header>
      <StyledSearchbar>
        <StyledSearchbar.Form onSubmit={onSearchSubmit}>
          <StyledSearchbar.Button type="submit">
            <BsSearch />
          </StyledSearchbar.Button>
          <StyledSearchbar.Input
            name="querystring"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledSearchbar.Form>
      </StyledSearchbar>
    </StyledSearchbar.Header>
  );
};
