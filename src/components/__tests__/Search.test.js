import { act, fireEvent, render ,screen} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from '../mocks/Body_Content_Data.json';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

/**
 * ! Fetch function is give to us by Browser, and here are not rendering our comonents on Browser
 * ? We are rendering our body component on jsDom which is browser like, not actual browser, it doest have fetch into it
 * Todo : There for we are facking a fetch function, we are creating a dummy fetch function
 *
 * ! global.fetch : It will find the fetch function globally and replace it with given function
 * ! jest.fn() --- > It will baiscally create a function
 */

global.fetch = jest.fn(()=>{
    // fetch function returns a promise
    return Promise.resolve({
        // We convert that promise into json using .json() function which again returns a promise

        // So we are creating a function named as json which is returning another promise which resolve our mock data
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should Search Res List for burger text input",async()=>{

    await act(async()=> 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ))
    
    const cardsBeforeSearch = screen.getAllByTestId('resCard');
        
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button",{name:"Search"});

    const searchInput = screen.getByTestId('searchInput');
    
     fireEvent.change(searchInput,{target:{value:"pizza"}});

    fireEvent.click(searchBtn)

    // search should load 4 res cards
    const cardsAfterSearch = screen.getAllByTestId('resCard');

    expect(cardsAfterSearch.length).toBe(2);
    //expect(searchBtn).toBeInTheDocument()
})


it("Should filter Top Rated Restaurant",async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })

    const cardsBeforeFilter = screen.getAllByTestId('resCard');

    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"})
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(17)
})