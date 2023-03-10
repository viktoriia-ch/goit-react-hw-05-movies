import { BrowserRouter } from 'react-router-dom';
import Navbar from 'modules/Navbar/Navbar';
import Wrapper from 'modules/Wrapper/Wrapper';
import UserRoutes from 'UserRoutes';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar />
      <Wrapper>
        <UserRoutes />
      </Wrapper>
    </BrowserRouter>
  );
};
