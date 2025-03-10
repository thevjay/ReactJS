import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header'
import MOCK_DATA from '../mocks/mockResMenu.json'
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA),
    })
})

it("Should Load Restaurant Menu Component",async()=>{

    await act(async()=>{
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </BrowserRouter>
             </Provider>
        )
    })

    screen.debug();
    console.log("MOCK_DATA:", MOCK_DATA);

    
    const accordionHeader = screen.getByText('Holi Specials (4)');

    fireEvent.click(accordionHeader)

    expect(screen.getAllByTestId("foodItems").length).toBe(4);

    const addBtns = screen.getAllByRole('button',{name:"Add +"})
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    expect(screen.getAllByTestId('foodItems').length).toBe(7)

    fireEvent.click(screen.getByRole('button',{name:"Clear Cart"}))

    expect(screen.getAllByTestId('foodItems').length).toBe(5)

    expect(screen.getByText('Cart is empty. Add Items to the cart')).toBeInTheDocument()


})