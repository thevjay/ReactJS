const { render,screen } = require("@testing-library/react")
import RestaurantCard from '../RestaurantCard';
import { withPromotedLabel } from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json'
import Promoted_Data from '../mocks/RestCardWithLabel.json';
import '@testing-library/jest-dom'


it("Should render RestaurantCard component with props Data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Domino's Pizza")

    expect(name).toBeInTheDocument();
})

it("Should render RestaurantCard component with Promoted Label",()=>{
    // Home work - test HOC : withPromotedLabel();
    const RestCardPromoted = withPromotedLabel(RestaurantCard);

    render(<RestCardPromoted resData={Promoted_Data}/>)

    const promoted = screen.getByText("Promoted")

    expect(promoted).toBeInTheDocument();
})