import {render, screen , cleanup, fireEvent} from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import {createMemoryHistory} from 'history'
 


test('renders Navbar without crashing',async ()=>{
    const history = createMemoryHistory({ initialEntries: ['/'] });
    
    const { getByText } = render(
        <BrowserRouter history={history}>
          <Navbar />
        </BrowserRouter>
      );
    
    
    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByText('See Charts'));
    expect(history.location.pathname).toBe('/chart');
   
   
    //Default
    // expect(history.location.pathname).toBe('/');
    // // expect(screen.getByText(/welcome to course-finder/i)).toBeInTheDocument()

    // fireEvent.click(screen.getByText(/see charts/i))
    // expect(history.location.pathname).toBe('/chart');
    // expect(screen.getByText(/check the statistics here.../i)).toBeInTheDocument()

})