import { fireEvent, render ,screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from '../../utils/appStore'
import UserContext from "../../utils/UserContext";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

it("Should render Header Component with a login button",()=>{
    render(
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: "Test User", setUserName: jest.fn() }}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </UserContext.Provider>
        </Provider>  
    );

    const loginButton = screen.getByRole("button",{name:"Login"});

    // const loginButton = screen.getByText('Login');

    expect(loginButton).toBeInTheDocument()
})

it("Should render Header Component with a Cart items 0",()=>{
    render(
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: "Test User", setUserName: jest.fn() }}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </UserContext.Provider>
        </Provider>  
    );

    const cartItems = screen.getByText("Cart (0)")

    // const loginButton = screen.getByText('Login');

    expect(cartItems).toBeInTheDocument()
})

it("Should render Header Component with a Cart item",()=>{
    render(
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: "Test User", setUserName: jest.fn() }}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </UserContext.Provider>
        </Provider>  
    );

    const cartItems = screen.getByText(/Cart/)

    // const loginButton = screen.getByText('Login');

    expect(cartItems).toBeInTheDocument()
})


it("Should change Login Button to Logout on onlclick",()=>{
    render(
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: "Test User", setUserName: jest.fn() }}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </UserContext.Provider>
        </Provider>  
    );

    const loginButton = screen.getByRole('button',{name:"Login"})

    fireEvent.click(loginButton);
    
    const logoutButton = screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument()
})
