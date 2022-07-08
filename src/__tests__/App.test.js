import {render, screen , cleanup} from '@testing-library/react'
// import Home from '../Home'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Components/Navbar';



test('testing simple heading',()=>{
    render(<App /> , {wrapper : BrowserRouter})
    const heads = screen.getByText(/Welcome to Course-Finder/i)
    expect(heads).toBeInTheDocument(); 
})

